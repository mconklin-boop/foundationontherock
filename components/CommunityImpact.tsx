import { HandHeart } from "lucide-react";

const metrics = [
  { label: "Families Supported", value: "25+" },
  { label: "Mentorship Sessions", value: "40+" },
  { label: "Outreach Events", value: "12+" },
  { label: "Prayer Requests Received", value: "75+" },
  { label: "Volunteer Hours", value: "300+" }
];

export function CommunityImpact() {
  return (
    <section className="section impact-section">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">Community impact</p>
          <h2>Growing impact, one restored foundation at a time</h2>
        </div>
        <div className="impact-metrics">
          {metrics.map((metric) => (
            <article className="impact-metric" key={metric.label}>
              <HandHeart size={22} aria-hidden="true" />
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
