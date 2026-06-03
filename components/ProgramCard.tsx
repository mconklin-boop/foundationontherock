import type { LucideIcon } from "lucide-react";

type ProgramCardProps = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export function ProgramCard({ title, text, icon: Icon }: ProgramCardProps) {
  return (
    <article className="program-card">
      <div className="program-card__icon">
        <Icon size={26} aria-hidden="true" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
