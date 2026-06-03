import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { BoardMemberCard } from "@/components/BoardMemberCard";
import { CommunityImpact } from "@/components/CommunityImpact";
import { PageHero } from "@/components/PageHero";
import { ScriptureBlock } from "@/components/ScriptureBlock";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Foundation on the Rock, a Colorado faith-based nonprofit focused on Christian outreach, housing stabilization, faith-based mentorship, and community restoration."
};

const values = [
  "Faith",
  "Compassion",
  "Stewardship",
  "Dignity",
  "Accountability",
  "Community"
];

const boardMembers = [
  {
    name: "Desiree Conklin",
    title: "President & Community Outreach Director",
    bio: "Desiree Conklin serves as President and helps guide community outreach, volunteer coordination, and faith-based support. She is passionate about helping individuals and families find hope, healing, and stability through compassionate mentorship.",
    scripture: "Micah 6:8"
  },
  {
    name: "Michael Conklin",
    title: "Treasurer & Strategic Development Director",
    bio: "Michael Conklin serves as Treasurer and Strategic Development Director, bringing experience in business development, operational planning, and long-term program growth. His focus is building sustainable systems that support stabilization, mentorship, workforce development, and restoration.",
    scripture: "Proverbs 16:3"
  },
  {
    name: "Domingo Cruz",
    title: "Secretary & Community Engagement Coordinator",
    bio: "Domingo Cruz serves as Secretary and Community Engagement Coordinator. He supports outreach communication, organizational coordination, and relationship-building that helps people feel valued, supported, and connected.",
    scripture: "Galatians 6:2"
  }
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
            As our programs grow, we are building more pathways for prayer,
            volunteering, stories, and community impact while keeping our work
            clear, steady, and easy to support.
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
        </div>
      </Section>

      <Section className="section--scripture">
        <ScriptureBlock
          verse="He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God."
          reference="Micah 6:8"
          reflection="Our work is rooted in humility, mercy, and faithful service."
          variant="light"
        />
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

      <CommunityImpact />

      <Section title="Board / Leadership" className="section--soft">
        <div className="board-grid">
          {boardMembers.map((member) => (
            <BoardMemberCard key={member.name} {...member} />
          ))}
        </div>
      </Section>
    </>
  );
}
