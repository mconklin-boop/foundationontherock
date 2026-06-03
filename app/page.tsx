import type { Metadata } from "next";
import Image from "next/image";
import {
  BriefcaseBusiness,
  Church,
  HandHeart,
  HeartHandshake,
  HomeIcon,
  Landmark,
  WalletCards
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CallToAction } from "@/components/CallToAction";
import { CommunityImpact } from "@/components/CommunityImpact";
import { ImpactCard } from "@/components/ImpactCard";
import { Section } from "@/components/Section";
import { DONATION_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Foundation on the Rock | Colorado Faith-Based Nonprofit",
  description:
    "Foundation on the Rock is a Colorado faith-based nonprofit providing Christian outreach, housing stabilization, transitional support, mentorship, and community restoration."
};

const programs = [
  {
    title: "Housing Stabilization",
    text: "Guidance, support, and community-based resources for individuals and families pursuing stability.",
    icon: HomeIcon
  },
  {
    title: "Community Outreach",
    text: "Compassionate outreach and local partnerships that help meet practical needs.",
    icon: Landmark
  },
  {
    title: "Mentorship & Life Coaching",
    text: "Encouragement, accountability, and guidance for those navigating transition.",
    icon: HeartHandshake
  },
  {
    title: "Workforce Development",
    text: "Job readiness, skill-building, and pathways toward sustainable employment.",
    icon: BriefcaseBusiness
  },
  {
    title: "Financial Literacy",
    text: "Budgeting confidence, practical money-management skills, and long-term stewardship.",
    icon: WalletCards
  },
  {
    title: "Faith-Based Support Services",
    text: "Prayer, encouragement, discipleship, and spiritual support rooted in biblical truth.",
    icon: Church
  }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__texture" aria-hidden="true" />
        <div className="container hero__content">
          <div className="hero__copy">
            <p className="eyebrow">Foundation on the Rock</p>
            <h1>Restoring Lives. Rebuilding Foundations. Strengthening Communities.</h1>
            <p className="hero__lead">
              Faith-based outreach, mentorship, housing stabilization, and
              community support for individuals and families rebuilding their
              future.
            </p>
            <div className="hero__actions">
              <ButtonLink href={DONATION_URL} variant="primary">
                Donate Now
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact Us
              </ButtonLink>
            </div>
          </div>
          <div className="hero__logo-showcase" aria-label="Foundation on the Rock logo">
            <Image
              src="/foundation-on-the-rock-logo.svg"
              alt="Foundation on the Rock"
              width={720}
              height={720}
              priority
            />
          </div>
        </div>
      </section>

      <Section className="section--scripture">
        <blockquote>
          &quot;Therefore everyone who hears these words of mine and puts them
          into practice is like a wise man who built his house on the
          rock.&quot;
          <cite>Matthew 7:24</cite>
        </blockquote>
      </Section>

      <Section eyebrow="Our mission" title="Helping people rebuild their future">
        <p className="section-lead">
          Foundation on the Rock exists to provide faith-based outreach,
          mentorship, housing stabilization, workforce development, financial
          literacy, transitional support, and community support for individuals
          and families rebuilding their future.
        </p>
      </Section>

      <Section eyebrow="Programs" title="Current areas of service" className="section--soft">
        <div className="card-grid card-grid--six">
          {programs.map((item) => (
            <ImpactCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Stories" title="Future moments from the work">
        {/* TODO: Replace these placeholders with real community outreach, family support, and volunteer service photos. */}
        <div className="image-placeholder-grid" aria-label="Future photo areas">
          <div className="image-placeholder">
            <span>Community outreach photo</span>
          </div>
          <div className="image-placeholder">
            <span>Family support photo</span>
          </div>
          <div className="image-placeholder">
            <span>Volunteer service photo</span>
          </div>
        </div>
      </Section>

      <CommunityImpact />

      <Section eyebrow="Trust" title="Grounded in dignity, accountability, and faith">
        <div className="split-panel">
          <div>
            <p>
              Our current foundation is built around clear communication,
              trustworthy community relationships, and practical pathways for
              prayer, volunteering, giving, mentorship, and care.
            </p>
          </div>
          <div className="icon-list" aria-label="Leadership commitments">
            <span>
              <HandHeart size={20} /> Restoration with dignity
            </span>
            <span>
              <HeartHandshake size={20} /> Community partnership
            </span>
            <span>
              <Church size={20} /> Faith-centered care
            </span>
          </div>
        </div>
      </Section>

      <CallToAction
        title="Help Us Build Stronger Foundations"
        text="Your support helps expand outreach, stabilization, mentorship, workforce development, financial literacy, and faith-based community care."
        primaryHref={DONATION_URL}
        primaryLabel="Donate Now"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
