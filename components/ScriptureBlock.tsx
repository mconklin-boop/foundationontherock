type ScriptureBlockProps = {
  verse: string;
  reference: string;
  reflection?: string;
  variant?: "light" | "navy" | "gold" | "soft";
};

export function ScriptureBlock({
  verse,
  reference,
  reflection,
  variant = "light"
}: ScriptureBlockProps) {
  return (
    <figure className={`scripture-block scripture-block--${variant}`}>
      <blockquote>
        <p>&quot;{verse}&quot;</p>
        <cite>{reference}</cite>
      </blockquote>
      {reflection ? <figcaption>{reflection}</figcaption> : null}
    </figure>
  );
}
