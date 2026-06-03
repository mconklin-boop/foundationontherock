import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section className={`section ${className}`}>
      <div className="container">
        {(eyebrow || title) && (
          <div className="section__header">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? <h2>{title}</h2> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
