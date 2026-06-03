import type { Metadata } from "next";
import { Globe2, Mail, MessagesSquare, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { ScriptureBlock } from "@/components/ScriptureBlock";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Foundation on the Rock for partnerships, donor questions, volunteer interest, prayer support, and Christian outreach collaboration in Colorado."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect with Foundation on the Rock"
        text="Reach out with questions, partnership ideas, donation inquiries, or ways to support the mission."
      />

      <Section title="Send a Message">
        <div className="contact-layout">
          <ContactForm />
          <aside className="contact-card" aria-label="Contact details">
            <h2>Contact details</h2>
            <p>
              <Phone size={18} aria-hidden="true" />
              (720) 258-6272
            </p>
            <p>
              <Mail size={18} aria-hidden="true" />
              desiree@foundationontherock.org
            </p>
            <p>
              <Globe2 size={18} aria-hidden="true" />
              foundationontherock.org
            </p>
            <p>
              <MessagesSquare size={18} aria-hidden="true" />
              Partnership and donation inquiries are welcome.
            </p>
          </aside>
        </div>
      </Section>

      <Section className="section--scripture">
        <ScriptureBlock
          verse="Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."
          reference="Proverbs 3:5-6"
          reflection="Whether you need support, prayer, or partnership, we are here to walk with you."
          variant="light"
        />
      </Section>

      <Section className="section--soft" title="Partnership and donation inquiries">
        <div className="two-column">
          <div>
            <h3>Partnership inquiry</h3>
            <p>
              Churches, nonprofits, businesses, and community leaders can reach
              out to begin a conversation about serving families together.
            </p>
          </div>
          <div>
            <h3>Donation inquiry</h3>
            <p>
              Donors and sponsors can reach out for giving questions,
              stewardship information, or future program sponsorship
              opportunities.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
