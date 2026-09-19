import { Asterisk } from "lucide-react";

const pillars = [
  { title: "Innovation", text: "Products that simplify complexity and turn ambitious ideas into working systems." },
  { title: "Efficiency", text: "Systems that remove repetitive work and make room for meaningful decisions." },
  { title: "Future", text: "Practical AI and automation that helps people and businesses move forward." },
];

export default function ImpactGrid() {
  return (
    <section className="impact-stage">
      <div className="impact-marquee" aria-hidden="true">
        <div className="impact-marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>
              INNOVATION<i>✦</i>EFFICIENCY<i>✦</i>FUTURE<i>✦</i>
            </span>
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={`dup-${i}`} aria-hidden="true">
              INNOVATION<i>✦</i>EFFICIENCY<i>✦</i>FUTURE<i>✦</i>
            </span>
          ))}
        </div>
      </div>

      <div className="impact-header">
        <div>
          <p className="impact-label"><span className="impact-label-line" />OUR IMPACT</p>
          <h2 className="impact-heading">Technology should create lasting value.</h2>
        </div>
        <p className="impact-sub">
          Hover a pillar. We measure success by how clearly our work removes
          friction, unlocks growth and prepares organizations for what comes next.
        </p>
      </div>

      <div className="impact-panels">
        {pillars.map(({ title, text }) => (
          <article key={title} className="impact-panel" tabIndex={0}>
            <span className="impact-glow" aria-hidden="true" />
            <span className="impact-scan" aria-hidden="true" />
            <span className="impact-idx" aria-hidden="true">{title}</span>
            <span className="impact-vert" aria-hidden="true">{title}</span>
            <div className="impact-open">
              <Asterisk className="h-8 w-8" strokeWidth={1.2} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
