import type { Metadata } from "next";
import { PrayerRequestForm } from "@/components/PrayerRequestForm";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Prayer Requests",
  description:
    "Submit a prayer request to Foundation on the Rock, a Colorado faith-based nonprofit offering compassionate Christian outreach, prayer support, and community care."
};

export default function PrayerRequestsPage() {
  return (
    <>
      <PageHero
        eyebrow="Prayer requests"
        title="Submit a Prayer Request"
        text="You are not alone. Our team receives prayer requests with compassion, confidentiality, and faith-filled care."
      />

      <Section title="How can we pray with you?">
        <div className="contact-layout">
          <PrayerRequestForm />
          <aside className="contact-card">
            <h2>Prayer care</h2>
            <p>
              Prayer requests are treated with dignity and care. If you mark a
              request private, it should be handled only by the appropriate
              prayer support team once a secure backend is added.
            </p>
          </aside>
        </div>
      </Section>

      <Section className="section--scripture">
        <blockquote>
          &quot;Do not be anxious about anything, but in every situation, by
          prayer and petition, with thanksgiving, present your requests to
          God.&quot;
          <cite>Philippians 4:6</cite>
        </blockquote>
      </Section>
    </>
  );
}
