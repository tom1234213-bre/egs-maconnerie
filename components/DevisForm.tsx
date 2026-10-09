"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useId, useRef, useState } from "react";

type Props = {
  services: { slug: string; title: string }[];
  communes: string[];
  email: string;
  phone: string;
};

const delays = ["Dès que possible", "Dans les 3 mois", "Dans 3 à 6 mois", "Je me renseigne"];
const STEPS = ["Le projet", "Les détails", "Vos coordonnées"];

export function DevisForm({ services, communes, email, phone }: Props) {
  const params = useSearchParams();
  const initial = services.find((s) => s.slug === params.get("projet"))?.title ?? "";
  const [step, setStep] = useState(0);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "mail">("idle");
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const uid = useId();

  const [data, setData] = useState({
    projet: initial,
    commune: "",
    delai: "",
    description: "",
    nom: "",
    telephone: "",
    email: "",
    rappel: "Peu importe",
    consent: false,
    site: "",
  });
  const set = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value }));

  const go = (n: number) => {
    setError("");
    setStep(n);
    requestAnimationFrame(() => headingRef.current?.focus());
  };

  const validate = () => {
    const form = formRef.current;
    if (!form) return false;
    const fields = form.querySelectorAll<HTMLInputElement>(`[data-step="${step}"] :is(input, select, textarea)`);
    for (const f of fields) {
      if (!f.checkValidity()) {
        f.reportValidity();
        return false;
      }
    }
    if (step === 0 && !data.projet) {
      setError("Choisissez le type de travaux.");
      return false;
    }
    return true;
  };

  const mailtoHref = () => {
    const body = [
      `Projet : ${data.projet}`,
      `Commune : ${data.commune}`,
      `Échéance : ${data.delai}`,
      "",
      data.description,
      "",
      `${data.nom}`,
      `Tél. : ${data.telephone}`,
      `E-mail : ${data.email}`,
      `Rappel : ${data.rappel}`,
    ].join("\n");
    return `mailto:${email}?subject=${encodeURIComponent(`Demande de devis : ${data.projet}`)}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      if (validate()) go(step + 1);
      return;
    }
    if (!validate()) return;
    setState("sending");
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setState("sent");
        return;
      }
      const json = await res.json().catch(() => ({}));
      if (json.fallback) {
        window.location.href = mailtoHref();
        setState("mail");
        return;
      }
      throw new Error(json.error ?? "Erreur");
    } catch {
      setState("idle");
      setError(`L'envoi n'a pas abouti. Réessayez, ou appelez-nous au ${phone}.`);
    }
  };

  if (state === "sent" || state === "mail") {
    return (
      <div className="devis__form devis__done" role="status">
        <svg viewBox="0 0 30 24" aria-hidden="true" className="devis__done-mark">
          <rect x="0" y="17.6" width="14" height="6.4" rx="0.6" />
          <rect x="16" y="17.6" width="14" height="6.4" rx="0.6" />
          <rect x="8" y="8.8" width="14" height="6.4" rx="0.6" />
          <rect x="11" y="0" width="8" height="6.4" rx="0.6" />
        </svg>
        <h2 className="h3">{state === "sent" ? "Demande bien reçue." : "Votre messagerie s'ouvre."}</h2>
        <p>
          {state === "sent"
            ? "Merci. On vous rappelle très vite pour convenir d'une visite sur place."
            : `Votre demande est prête dans un nouvel e-mail : il ne reste qu'à l'envoyer. Si rien ne s'ouvre, écrivez-nous à ${email} ou appelez le ${phone}.`}
        </p>
        <Link href="/realisations" className="link">
          En attendant, voir nos réalisations <span aria-hidden="true">→</span>
        </Link>
      </div>
    );
  }

  return (
    <form ref={formRef} className="devis__form" onSubmit={onSubmit} noValidate={false} aria-describedby={`${uid}-prog`}>
      <div className="devis__progress" id={`${uid}-prog`}>
        <span className="sr-only">
          Étape {step + 1} sur 3 : {STEPS[step]}
        </span>
        {STEPS.map((s, i) => (
          <span key={s} className={`devis__pstep${i <= step ? " is-on" : ""}`} aria-hidden="true">
            <span className="devis__pbar" />
            <span className="devis__plabel">
              {i + 1}. {s}
            </span>
          </span>
        ))}
      </div>

      <h2 className="devis__step-title" ref={headingRef} tabIndex={-1}>
        {["Quel type de travaux ?", "Où et quand ?", "Comment vous joindre ?"][step]}
      </h2>

      <fieldset data-step="0" hidden={step !== 0} className="devis__fs">
        <legend className="sr-only">Type de travaux</legend>
        <div className="choice-grid">
          {[...services.map((s) => s.title), "Autre projet"].map((t) => (
            <label key={t} className="choice">
              <input type="radio" name="projet" value={t} checked={data.projet === t} onChange={set("projet")} />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset data-step="1" hidden={step !== 1} className="devis__fs">
        <legend className="sr-only">Détails du projet</legend>
        <div className="field-row">
          <div className="field">
            <label htmlFor={`${uid}-commune`}>Commune du chantier</label>
            <input
              id={`${uid}-commune`}
              list={`${uid}-communes`}
              value={data.commune}
              onChange={set("commune")}
              required={step === 1}
              autoComplete="address-level2"
              placeholder="Aix-en-Provence"
            />
            <datalist id={`${uid}-communes`}>
              {communes.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </div>
          <div className="field">
            <label htmlFor={`${uid}-delai`}>Échéance souhaitée</label>
            <select id={`${uid}-delai`} value={data.delai} onChange={set("delai")} required={step === 1}>
              <option value="" disabled>
                Choisir
              </option>
              {delays.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor={`${uid}-desc`}>
            Votre projet en quelques mots <span className="field__opt">(facultatif)</span>
          </label>
          <textarea
            id={`${uid}-desc`}
            rows={5}
            value={data.description}
            onChange={set("description")}
            maxLength={2000}
            placeholder="Dimensions, matériaux, état actuel, photos à nous envoyer…"
          />
        </div>
      </fieldset>

      <fieldset data-step="2" hidden={step !== 2} className="devis__fs">
        <legend className="sr-only">Vos coordonnées</legend>
        <div className="field">
          <label htmlFor={`${uid}-nom`}>Nom et prénom</label>
          <input id={`${uid}-nom`} value={data.nom} onChange={set("nom")} required={step === 2} autoComplete="name" />
        </div>
        <div className="field-row">
          <div className="field">
            <label htmlFor={`${uid}-tel`}>Téléphone</label>
            <input
              id={`${uid}-tel`}
              type="tel"
              value={data.telephone}
              onChange={set("telephone")}
              required={step === 2}
              autoComplete="tel"
              inputMode="tel"
              pattern="[0-9 +().-]{10,}"
            />
          </div>
          <div className="field">
            <label htmlFor={`${uid}-mail`}>
              E-mail <span className="field__opt">(facultatif)</span>
            </label>
            <input id={`${uid}-mail`} type="email" value={data.email} onChange={set("email")} autoComplete="email" />
          </div>
        </div>
        <div className="field">
          <span className="field__label" id={`${uid}-rappel`}>
            Quand vous rappeler ?
          </span>
          <div className="pills" role="radiogroup" aria-labelledby={`${uid}-rappel`}>
            {["Le matin", "L'après-midi", "En soirée", "Peu importe"].map((r) => (
              <label key={r} className="pill">
                <input type="radio" name="rappel" value={r} checked={data.rappel === r} onChange={set("rappel")} />
                <span>{r}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="hp" aria-hidden="true">
          <label>
            Site web
            <input tabIndex={-1} autoComplete="off" value={data.site} onChange={set("site")} />
          </label>
        </div>
        <label className="consent">
          <input type="checkbox" checked={data.consent} onChange={set("consent")} required={step === 2} />
          <span>
            J&apos;accepte que mes informations servent à me recontacter au sujet de ma demande.{" "}
            <Link href="/confidentialite">En savoir plus</Link>
          </span>
        </label>
      </fieldset>

      {error ? (
        <p className="devis__error" role="alert">
          {error}
        </p>
      ) : null}

      <div className="devis__nav">
        {step > 0 ? (
          <button type="button" className="btn btn--ghost" onClick={() => go(step - 1)}>
            Retour
          </button>
        ) : (
          <span />
        )}
        <button type="submit" className="btn" disabled={state === "sending"}>
          {step < 2 ? "Continuer" : state === "sending" ? "Envoi…" : "Envoyer ma demande"}
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </form>
  );
}
