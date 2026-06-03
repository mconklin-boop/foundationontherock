import type { Metadata } from "next";
import { CalendarHeart, HeartHandshake } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { DonationTierCard } from "@/components/DonationTierCard";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { DONATION_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support restoration and community impact through Foundation on the Rock."
};

const tiers = [
  {
    amount: "$25",
    title: "Community Support",
    text: "Helps provide basic outreach support and encouragement."
  },
  {
    amount: "$50",
    title: "Outreach Assistance",
    text: "Supports practical care through community-based outreach."
  },
  {
    amount: "$100",
    title: "Family Stabilization",
    text: "Helps families access guidance, support, and stabilizing resources."
  },
  {
    amount: "$250",
    title: "Housing Support",
    text: "Contributes to future housing stabilization and transitional support."
  }
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Support Restoration and Community Impact"
        text="Your generosity helps support outreach, housing stabilization, mentorship, workforce development, financial literacy, and faith-based community care."
      />

      <Section title="Choose a giving level">
        <div className="donation-grid" id="give">
          {tiers.map((tier) => (
            <DonationTierCard key={tier.amount} {...tier} />
          ))}
        </div>
      </Section>

      <Section className="section--scripture">
        <blockquote>
          &quot;Each of you should give what you have decided in your heart to
          give...&quot;
          <cite>2 Corinthians 9:7</cite>
        </blockquote>
      </Section>

      <Section title="Monthly giving and sponsorship" className="section--soft">
        <div className="two-column">
          <article className="donation-card">
            <CalendarHeart size={28} aria-hidden="true" />
            <h3>Monthly Giving</h3>
            <p>
              Monthly giving provides steady support that helps us plan
              responsibly and serve consistently as Phase 1 programs grow.
            </p>
            {/* TODO: Replace this placeholder with the approved monthly giving URL. */}
            <ButtonLink href={DONATION_URL} variant="primary">
              Donate Now
            </ButtonLink>
          </article>
          <article className="donation-card">
            <HeartHandshake size={28} aria-hidden="true" />
            <h3>Sponsor a Family</h3>
            <p>
              Sponsor a Family support will help provide focused care for
              individuals and families pursuing stability and restoration.
            </p>
            {/* TODO: Replace this placeholder with the approved sponsorship URL. */}
            <ButtonLink href={DONATION_URL} variant="primary">
              Donate Now
            </ButtonLink>
          </article>
        </div>
      </Section>

      <Section title="Phase 1 giving note">
        <p className="section-lead">
          Donation buttons are placeholders for now. Payment processing can be
          connected when the approved giving platform and nonprofit compliance
          language are ready.
        </p>
        {/* TODO: Add approved nonprofit compliance, tax-deductibility, EIN, and charitable solicitation language here before launch. */}
      </Section>
    </>
  );
}
