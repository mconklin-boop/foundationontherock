import type { LucideIcon } from "lucide-react";

type ImpactCardProps = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export function ImpactCard({ title, text, icon: Icon }: ImpactCardProps) {
  return (
    <article className="impact-card">
      <Icon size={30} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
