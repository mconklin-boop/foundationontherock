import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Donation Disclaimer",
  description: "Donation disclaimer placeholder for Foundation on the Rock."
};

export default function DonationDisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Donations"
        title="Donation Disclaimer"
        text="This placeholder page will be updated with approved nonprofit and donation language before launch."
      />
      <Section title="Giving disclaimer">
        <div className="prose">
          <p>
            TODO: Add approved nonprofit status, EIN, tax-deductibility,
            charitable solicitation, refund, restricted gift, and donor
            acknowledgement language.
          </p>
        </div>
      </Section>
    </>
  );
}
