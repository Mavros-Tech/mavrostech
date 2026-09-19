import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { demoDesigns } from "../lib/demo-designs";
import SEO from "../components/SEO";

export default function Demos() {
  // Ensure the page scrolls to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <SEO
        title="Crafted Experiences — Mavros Tech"
        description="Five client-ready website experiences by Mavros for hospitality, beauty, fitness and travel brands."
        url="https://www.mavrostech.in/demos"
      />

      <section className="demos-hero border-b border-border">
        <div className="demos-shell">
          <Link to="/" className="demos-back"><ArrowLeft /> Back to home</Link>
          <div className="section-label" style={{ marginBottom: '1.5rem', fontFamily: 'var(--mono, monospace)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#3b82f6', boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}></div>
            DESIGN LIBRARY
          </div>
          <h1 className="demos-title">CRAFTED<br /><em>EXPERIENCES</em></h1>
          <p className="demos-intro">
            {String(demoDesigns.length).padStart(2, "0")} visual directions built to show what a Mavros website feels like before your project begins. Each combines strategy, imagery, typography and motion into one complete experience.
          </p>
        </div>
      </section>

      <section className="demos-list">
        <div className="demos-shell">
          {demoDesigns.map((demo, i) => (
            <Reveal as="a" href={demo.link} target="_blank" rel="noopener noreferrer" key={demo.id} delay={i * 70} className="demo-entry" style={{ display: 'block', cursor: 'pointer' }}>
              <div className="demo-entry-media">
                <img src={demo.image} alt={demo.imageAlt} loading={i === 0 ? "eager" : "lazy"} width={1200} height={760} />
                <span className="demo-entry-index">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="demo-entry-content">
                <p className="demo-entry-category">{demo.category}</p>
                <h2>{demo.name}</h2>
                <p className="demo-entry-tagline">{demo.tagline}</p>
                <p className="demo-entry-description">{demo.description}</p>
                <ul>{demo.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                <div className="demo-entry-meta">
                  <span>{demo.typography}</span>
                  <ArrowUpRight aria-hidden="true" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="demos-outro border-t border-border">
        <div className="demos-shell">
          <h2>Want one of these tuned to your brand?</h2>
          <a className="demos-outro-cta" href="mailto:official@mavrostech.in">official@mavrostech.in <ArrowUpRight /></a>
        </div>
      </section>
    </main>
  );
}
