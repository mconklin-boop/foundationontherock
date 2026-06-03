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
              <ButtonLink href="/donate" variant="primary">
                Donate Now
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact Us
              </ButtonLink>
            </div>
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

      <Section eyebrow="Programs" title="Phase 1 areas of service" className="section--soft">
        <div className="card-grid card-grid--six">
          {programs.map((item) => (
            <ImpactCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <CommunityImpact />

      <Section eyebrow="Trust" title="Grounded in dignity, accountability, and faith">
        <div className="split-panel">
          <div>
            <p>
              Phase 1 is intentionally simple: clear communication, trustworthy
              community relationships, and a strong foundation for future
              donations, volunteer applications, prayer requests, and devotionals.
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
        primaryHref="/donate"
        primaryLabel="Donate Now"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
