import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy placeholder for Foundation on the Rock."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        text="This placeholder page will be updated with approved legal language before launch."
      />
      <Section title="Privacy notice">
        <div className="prose">
          <p>
            TODO: Add reviewed privacy language covering form submissions,
            prayer requests, volunteer applications, donor communication, data
            storage, and contact preferences.
          </p>
        </div>
      </Section>
    </>
  );
}
