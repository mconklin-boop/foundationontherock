import type { Metadata } from "next";
import {
  CalendarHeart,
  HandHeart,
  HeartHandshake,
  HomeIcon,
  MessageCircleHeart,
  NotebookPen
} from "lucide-react";
import { ImpactCard } from "@/components/ImpactCard";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { VolunteerApplicationForm } from "@/components/VolunteerApplicationForm";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Serve with Foundation on the Rock through Christian outreach, mentorship, prayer, administration, events, and housing assistance support."
};

const categories = [
  {
    title: "Community Outreach",
    text: "Serve neighbors through practical support, local connection, and compassionate presence.",
    icon: HandHeart
  },
  {
    title: "Mentorship",
    text: "Encourage individuals and families with guidance, accountability, and hope.",
    icon: HeartHandshake
  },
  {
    title: "Prayer Team",
    text: "Stand with people through prayer, encouragement, and faith-filled care.",
    icon: MessageCircleHeart
  },
  {
    title: "Administrative Support",
    text: "Help keep programs organized, responsive, and easy for families to access.",
    icon: NotebookPen
  },
  {
    title: "Event Volunteers",
    text: "Support outreach events, community gatherings, and future ministry initiatives.",
    icon: CalendarHeart
  },
  {
    title: "Housing Assistance Support",
    text: "Help future housing stabilization efforts through coordination and practical support.",
    icon: HomeIcon
  }
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title="Serve With Foundation on the Rock"
        text="Join the mission of restoring lives, rebuilding foundations, and strengthening communities through practical service and faith-centered care."
      />

      <Section title="Ways to serve" className="section--soft">
        <div className="card-grid card-grid--six">
          {categories.map((category) => (
            <ImpactCard key={category.title} {...category} />
          ))}
        </div>
      </Section>

      <Section title="Volunteer interest form">
        <VolunteerApplicationForm />
      </Section>
    </>
  );
}
