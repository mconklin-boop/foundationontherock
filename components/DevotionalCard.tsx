type DevotionalCardProps = {
  title: string;
  category: string;
  scripture: string;
  summary: string;
};

export function DevotionalCard({
  title,
  category,
  scripture,
  summary
}: DevotionalCardProps) {
  return (
    <article className="devotional-card">
      <p className="eyebrow">{category}</p>
      <h3>{title}</h3>
      <strong>{scripture}</strong>
      <p>{summary}</p>
    </article>
  );
}
