import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms placeholder for Foundation on the Rock."
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms"
        text="This placeholder page will be updated with approved legal language before launch."
      />
      <Section title="Website terms">
        <div className="prose">
          <p>
            TODO: Add reviewed terms for website use, content, external links,
            disclaimers, communications, and nonprofit program information.
          </p>
        </div>
      </Section>
    </>
  );
}
