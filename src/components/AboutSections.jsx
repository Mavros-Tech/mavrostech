/* =====================================================
   ABOUT PAGE — everything except the team carousels
   Sections: Hero / Stats / Our Story / What Guides Us /
             Our Capabilities / Work With Us (closing)
   Pure black & white. No UI library, no icon package.
   ===================================================== */

import React, { useEffect, useRef, useState } from "react";
import "./about-sections.css";

/* ---------- scroll reveal (shared by every section) ---------- */
function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const C = Tag;
  return (
    <C ref={ref} style={{ transitionDelay: `${delay}ms` }}
       className={`ab-reveal ${shown ? "is-visible" : ""} ${className}`}>
      {children}
    </C>
  );
}

/* ---------- content (edit freely) ---------- */
const STATS = [
  { n: "ONE", l: "TIGHT-KNIT TEAM" },
  { n: "07",  l: "CORE CAPABILITIES" },
  { n: "01",  l: "STANDARD OF QUALITY" },
  { n: "24h", l: "TYPICAL REPLY TIME" },
];

const PRINCIPLES = [
  { t: "Clarity first",        d: "We turn complex ideas into focused product decisions before a single line of code." },
  { t: "Human utility",        d: "Every system begins with the people who will actually use it, day after day." },
  { t: "Intelligence applied", d: "AI is a practical tool for real outcomes, never decoration on a slide." },
  { t: "Built to endure",      d: "Quality, security and scale are designed in from the very first sprint." },
];

const CAPABILITIES = [
  "AI strategy", "Product design", "Web platforms", "Mobile apps",
  "Automation", "Cloud systems", "Rapid prototypes", "Long-term scaling",
];

/* ---------- page ---------- */
export default function AboutSections({ children }) {
  return (
    <main className="ab">

      {/* ============ HERO ============ */}
      <section className="ab-hero">
        <div className="ab-grid" aria-hidden="true" />
        <div className="ab-stars" aria-hidden="true" />
        <div className="ab-wrap ab-hero-inner">
          <div className="ab-rise">
            <p className="ab-label">ABOUT MAVROS</p>
            <h1 className="ab-h1">
              Built for the ideas<br />that <span className="ab-em">move us forward.</span>
            </h1>
            <div className="ab-hero-grid">
              <p className="ab-lead">
                A technology studio from Bengaluru, building at the intersection of
                intelligence, design and business.
              </p>
              <p className="ab-muted">
                Mavros Tech turns ambitious ideas into dependable digital products.
                We bring product thinking, engineering and AI together so every
                solution is useful today and ready for what comes next.
              </p>
            </div>
          </div>
        </div>
        <svg className="ab-arrowdown" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="1.6" aria-hidden="true">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </section>

      {/* ============ STATS ============ */}
      <section className="ab-stats-sec">
        <div className="ab-wrap ab-stats">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 80} className="ab-stat">
              <p className="ab-stat-n">{s.n}</p>
              <p className="ab-stat-l">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ OUR STORY ============ */}
      <section className="ab-wrap ab-story">
        <Reveal>
          <p className="ab-label">OUR STORY</p>
          <p className="ab-mono">ONE VISION / ENDLESS POSSIBILITIES</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="ab-h2">
            We believe intelligence is most powerful when it feels simple.
          </h2>
          <div className="ab-story-cols">
            <p>We started Mavros around a clear principle: advanced technology should
              solve real problems rather than create more complexity. That means
              understanding the challenge before writing code.</p>
            <p>Today, our work spans AI applications, autonomous agents, custom
              software, mobile experiences, automation, cloud systems and product
              design—all connected by one standard of thoughtful execution.</p>
          </div>
        </Reveal>
      </section>

      {/* ============ WHAT GUIDES US ============ */}
      <section className="ab-guides">
        <div className="ab-wrap">
          <Reveal><p className="ab-label">WHAT GUIDES US</p></Reveal>
          <div className="ab-guide-grid">
            {PRINCIPLES.map((p, i) => (
              <Reveal as="article" key={p.t} delay={i * 90} className="ab-guide">
                <span className="ab-guide-mark" aria-hidden="true" />
                <h3 className="ab-guide-t">{p.t}</h3>
                <p className="ab-muted">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {children}

      {/* ============ OUR CAPABILITIES ============ */}
      <section className="ab-wrap ab-caps-sec">
        <Reveal><p className="ab-label">OUR CAPABILITIES</p></Reveal>
        <div className="ab-caps">
          <Reveal><h2 className="ab-h2">One team, across the entire product journey.</h2></Reveal>
          <div className="ab-cap-grid">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c} delay={i * 60} className="ab-cap">
                <span className="ab-cap-n">0{i + 1}</span>{c}
                <svg className="ab-cap-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="1.6" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
