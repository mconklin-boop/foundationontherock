import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { BoardMemberCard } from "@/components/BoardMemberCard";
import { CommunityImpact } from "@/components/CommunityImpact";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story, mission, vision, faith foundation, board leadership, and community restoration heart of Foundation on the Rock."
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
    bio: "Desiree Conklin serves as President of Foundation on the Rock and is passionate about helping individuals and families find hope, healing, and stability through faith-centered support and mentorship. She helps guide community outreach, volunteer coordination, and faith-based support programs.",
    scripture: "Micah 6:8"
  },
  {
    name: "Michael Conklin",
    title: "Treasurer & Strategic Development Director",
    bio: "Michael Conklin serves as Treasurer and Strategic Development Director. He brings experience in business development, organizational structure, operational planning, and long-term program development. His focus is building sustainable systems that support housing stabilization, mentorship, workforce development, and community restoration.",
    scripture: "Proverbs 16:3"
  },
  {
    name: "Domingo Cruz",
    title: "Secretary & Community Engagement Coordinator",
    bio: "Domingo Cruz serves as Secretary and Community Engagement Coordinator. He supports outreach communication, organizational coordination, and relationship-building efforts that help individuals feel supported, valued, and connected.",
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
            Phase 2 adds more pathways for prayer, volunteering, stories, and
            community impact while keeping the site simple and easy to update.
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
