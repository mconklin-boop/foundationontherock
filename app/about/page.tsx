import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story, mission, vision, faith foundation, and leadership heart of Foundation on the Rock."
};

const values = [
  "Faith",
  "Compassion",
  "Stewardship",
  "Dignity",
  "Accountability",
  "Community"
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Restoration begins with a steady foundation"
        text="Foundation on the Rock exists to help people rebuild with dignity, accountability, faith, stability, and community support."
      />

      <Section title="Our Story">
        <div className="prose">
          <p>
            Foundation on the Rock was formed with a heart for people walking
            through difficult transitions. We believe restoration is possible
            when practical support is paired with faith, consistency, and a
            caring community.
          </p>
          <p>
            Phase 1 focuses on building a clear public presence, trusted
            relationships, and program pathways that can grow as partnerships
            and resources expand.
          </p>
        </div>
      </Section>

      <Section title="Our Mission" className="section--soft">
        <p className="section-lead">
          Foundation on the Rock exists to provide faith-based outreach,
          mentorship, housing stabilization, workforce development, financial
          literacy, transitional support, and community support for individuals
          and families rebuilding their future.
        </p>
      </Section>

      <Section title="Our Vision">
        <p className="section-lead">
          We envision strengthened families, restored hope, and communities
          where people have access to encouragement, practical tools, and
          supportive relationships as they rebuild.
        </p>
      </Section>

      <Section title="Faith Foundation" className="section--soft">
        <div className="prose">
          <p>
            Our work is rooted in biblical compassion and the belief that every
            person carries God-given dignity. We aim to serve with humility,
            wisdom, accountability, and love.
          </p>
          <blockquote>
            &quot;God is our refuge and strength, an ever-present help in
            trouble.&quot;
            <cite>Psalm 46:1</cite>
          </blockquote>
        </div>
      </Section>

      <Section title="Our Values">
        <div className="value-grid">
          {values.map((value) => (
            <div className="value-card" key={value}>
              <CheckCircle2 size={22} aria-hidden="true" />
              <h3>{value}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Board / Leadership" className="section--soft">
        <div className="split-panel">
          <p>
            Foundation on the Rock is guided by leadership committed to
            responsible stewardship, clear communication, and community impact.
            Additional board and leadership information can be expanded as the
            organization grows.
          </p>
          <div className="leader-card">
            <p>Phase 1 leadership preview</p>
            <h3>Service, stewardship, and accountability</h3>
          </div>
        </div>
      </Section>
    </>
  );
}
