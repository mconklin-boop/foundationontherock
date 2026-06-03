import type { Metadata } from "next";
import { DevotionalCard } from "@/components/DevotionalCard";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Devotionals",
  description:
    "Read devotionals, community stories, testimonies, ministry updates, and faith-based restoration reflections from Foundation on the Rock."
};

const categories = [
  "Weekly Devotionals",
  "Community Stories",
  "Testimonies",
  "Ministry Updates",
  "Faith & Restoration"
];

const posts = [
  {
    title: "Built on the Rock",
    category: "Weekly Devotional",
    scripture: "Matthew 7:24",
    summary:
      "A short devotional about building life on faith, stability, obedience, and hope."
  },
  {
    title: "Hope in the Rebuilding",
    category: "Faith & Restoration",
    scripture: "Isaiah 61:3",
    summary: "Encouragement for those rebuilding after hardship."
  },
  {
    title: "Serving Our Community With Love",
    category: "Ministry Updates",
    scripture: "Galatians 6:2",
    summary:
      "A ministry update style post about carrying one another's burdens through outreach and support."
  }
];

export default function DevotionalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Devotionals"
        title="Faith, restoration, and community stories"
        text="A future home for devotionals, testimonies, ministry updates, and encouragement rooted in biblical hope."
      />

      <Section title="Categories">
        <div className="tag-list">
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </Section>

      <Section title="Featured posts" className="section--soft">
        <div className="devotional-grid">
          {posts.map((post) => (
            <DevotionalCard key={post.title} {...post} />
          ))}
        </div>
      </Section>
    </>
  );
}
