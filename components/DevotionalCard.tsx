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
      {/* TODO: Replace this placeholder with a devotional or ministry update image when real photos are available. */}
      <div className="devotional-card__image" aria-hidden="true" />
      <p className="eyebrow">{category}</p>
      <h3>{title}</h3>
      <strong>{scripture}</strong>
      <p>{summary}</p>
    </article>
  );
}
