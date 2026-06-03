import { ButtonLink } from "@/components/ButtonLink";

type CallToActionProps = {
  title: string;
  text: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function CallToAction({
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: CallToActionProps) {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta__actions">
          <ButtonLink href={primaryHref} variant="primary">
            {primaryLabel}
          </ButtonLink>
          <ButtonLink href={secondaryHref} variant="secondary">
            {secondaryLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
