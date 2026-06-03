import type { Metadata } from "next";
import { CalendarHeart, HeartHandshake } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { DonationTierCard } from "@/components/DonationTierCard";
import { PageHero } from "@/components/PageHero";
import { ScriptureBlock } from "@/components/ScriptureBlock";
import { Section } from "@/components/Section";
import { DONATION_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Donate to Foundation on the Rock to support Christian outreach, housing stabilization, transitional support services, faith-based mentorship, and community restoration in Colorado."
};

const tiers = [
  {
    amount: "$25",
    title: "Community Support",
    text: "Helps provide practical encouragement, prayer care, and neighbor-focused outreach support."
  },
  {
    amount: "$50",
    title: "Outreach Assistance",
    text: "Supports compassionate community outreach through local connection, resource navigation, and care."
  },
  {
    amount: "$100",
    title: "Family Stabilization",
    text: "Helps families pursue stability through guidance, mentorship, and community-based support."
  },
  {
    amount: "$250",
    title: "Housing Support",
    text: "Strengthens housing stabilization, transitional support, and restoration-focused assistance."
  }
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Support Restoration and Community Impact"
        text="Your generosity helps strengthen outreach, housing stabilization, mentorship, workforce development, financial literacy, and faith-based community care for individuals and families rebuilding their future."
      />

      <Section title="Choose a giving level">
        <div className="donation-grid" id="give">
          {tiers.map((tier) => (
            <DonationTierCard key={tier.amount} {...tier} />
          ))}
        </div>
      </Section>

      <Section className="section--scripture">
        <ScriptureBlock
          verse="Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
          reference="2 Corinthians 9:7"
          reflection="Generosity helps create pathways of hope and restoration."
          variant="gold"
        />
      </Section>

      <Section title="Monthly giving and sponsorship" className="section--soft">
        <div className="two-column">
          <article className="donation-card">
            <CalendarHeart size={28} aria-hidden="true" />
            <h3>Monthly Giving</h3>
            <p>
              Monthly giving provides steady support that helps us plan
              responsibly, respond with consistency, and expand care as our
              programs grow.
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
              Sponsorship helps provide focused encouragement, resource
              guidance, and practical support for families pursuing stability
              and restoration.
            </p>
            {/* TODO: Replace this placeholder with the approved sponsorship URL. */}
            <ButtonLink href={DONATION_URL} variant="primary">
              Donate Now
            </ButtonLink>
          </article>
        </div>
      </Section>

      <Section title="Faithful stewardship">
        <p className="section-lead">
          Every gift helps strengthen outreach, mentorship, stabilization, and
          restoration work. We are committed to stewarding support with care,
          accountability, and clear communication.
        </p>
        {/* TODO: Connect donation buttons to the approved giving platform and add approved nonprofit compliance, tax-deductibility, EIN, and charitable solicitation language before launch. */}
      </Section>
    </>
  );
}
