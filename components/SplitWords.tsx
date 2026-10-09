import { Fragment, type ElementType } from "react";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  mutedFrom?: number;
  id?: string;
};

// Porté de React Bits « SplitText » : chaque mot monte de sa ligne, en cascade.
// Rendu côté serveur (le texte reste lisible et indexable), animé en CSS.
export function SplitWords({ text, as: Tag = "span", className, delay = 0, stagger = 70, mutedFrom, id }: Props) {
  const words = text.split(" ");
  return (
    <Tag className={`split ${className ?? ""}`} data-split="" id={id}>
      <span className="sr-only">{text}</span>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="split__w" aria-hidden="true">
            <span
              className={`split__i${mutedFrom !== undefined && i >= mutedFrom ? " muted" : ""}`}
              style={{ transitionDelay: `${delay + i * stagger}ms` }}
            >
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
