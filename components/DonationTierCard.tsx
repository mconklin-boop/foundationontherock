import { ButtonLink } from "@/components/ButtonLink";
import { DONATION_URL } from "@/lib/site";

type DonationTierCardProps = {
  amount: string;
  title: string;
  text: string;
};

export function DonationTierCard({ amount, title, text }: DonationTierCardProps) {
  return (
    <article className="donation-tier-card">
      <p className="donation-tier-card__amount">{amount}</p>
      <h3>{title}</h3>
      <p>{text}</p>
      {/* TODO: Replace this placeholder with the approved donation platform URL. */}
      <ButtonLink href={DONATION_URL} variant="primary">
        Donate Now
      </ButtonLink>
    </article>
  );
}
