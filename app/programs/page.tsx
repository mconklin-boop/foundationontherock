import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  Church,
  HeartHandshake,
  HomeIcon,
  Landmark,
  WalletCards
} from "lucide-react";
import { CallToAction } from "@/components/CallToAction";
import { PageHero } from "@/components/PageHero";
import { ProgramCard } from "@/components/ProgramCard";
import { Section } from "@/components/Section";
import { DONATION_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Foundation on the Rock programs for housing stabilization, transitional support services, faith-based mentorship, workforce development, financial literacy, and Christian outreach."
};

const programs = [
  {
    title: "Housing Stabilization",
    text: "Helping individuals and families pursue stability through guidance, support, and community-based resources.",
    icon: HomeIcon
  },
  {
    title: "Community Outreach",
    text: "Meeting practical needs through compassionate outreach, local partnerships, and faith-centered service.",
    icon: Landmark
  },
  {
    title: "Mentorship & Life Coaching",
    text: "Providing encouragement, accountability, and guidance for those navigating transition or rebuilding after hardship.",
    icon: HeartHandshake
  },
  {
    title: "Workforce Development",
    text: "Supporting job readiness, skill-building, and pathways toward sustainable employment.",
    icon: BriefcaseBusiness
  },
  {
    title: "Financial Literacy",
    text: "Helping individuals build practical money-management skills, budgeting confidence, and long-term stewardship.",
    icon: WalletCards
  },
  {
    title: "Faith-Based Support Services",
    text: "Offering prayer, encouragement, discipleship, and spiritual support rooted in biblical truth.",
    icon: Church
  }
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Practical support for lasting restoration"
        text="Our current program areas are designed to grow over time as funding, volunteers, and community partnerships expand."
      />

      <Section title="Program Areas">
        <div className="program-list">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </Section>

      <CallToAction
        title="Partner with us as these programs grow."
        text="Your support can help Foundation on the Rock expand practical care, mentorship, stabilization, and faith-based encouragement."
        primaryHref={DONATION_URL}
        primaryLabel="Donate Now"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
