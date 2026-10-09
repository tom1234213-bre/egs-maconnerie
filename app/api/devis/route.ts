// Réception des demandes de devis.
// Avec RESEND_API_KEY, DEVIS_TO et DEVIS_FROM définis sur Vercel, la demande part
// par e-mail. Sinon, le formulaire bascule sur la messagerie du visiteur.

const clean = (v: unknown, max = 300) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Requête invalide" }, { status: 400 });
  }

  // Champ piège : rempli uniquement par les robots.
  if (clean(body.site)) return Response.json({ ok: true });

  const d = {
    projet: clean(body.projet, 80),
    commune: clean(body.commune, 80),
    delai: clean(body.delai, 40),
    description: clean(body.description, 2000),
    nom: clean(body.nom, 120),
    telephone: clean(body.telephone, 30),
    email: clean(body.email, 160),
    rappel: clean(body.rappel, 30),
  };
  if (!d.projet || !d.nom || !/[0-9]{2}.*[0-9]{2}.*[0-9]{2}/.test(d.telephone) || body.consent !== true) {
    return Response.json({ error: "Champs manquants" }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.DEVIS_TO;
  const from = process.env.DEVIS_FROM;
  if (!key || !to || !from) return Response.json({ fallback: true }, { status: 503 });

  const rows = Object.entries(d)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#6e675d">${k}</td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      reply_to: d.email || undefined,
      subject: `Demande de devis : ${d.projet} à ${d.commune || "commune non précisée"}`,
      html: `<h2 style="font-family:sans-serif">Nouvelle demande de devis</h2><table style="font-family:sans-serif;font-size:14px">${rows}</table>`,
    }),
  });
  if (!res.ok) return Response.json({ fallback: true }, { status: 503 });
  return Response.json({ ok: true });
}
