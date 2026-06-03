type BoardMemberCardProps = {
  name: string;
  title: string;
  bio: string;
  scripture?: string;
};

export function BoardMemberCard({
  name,
  title,
  bio,
  scripture
}: BoardMemberCardProps) {
  return (
    <article className="board-card">
      <p className="eyebrow">{title}</p>
      <h3>{name}</h3>
      <p>{bio}</p>
      {scripture ? <small>{scripture}</small> : null}
    </article>
  );
}
