import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Globe2, Megaphone, MousePointer2 } from "lucide-react";
import { Reveal } from "../components/Reveal";
import SEO from "../components/SEO";
import { collaborators } from "../lib/partnerships";

function SectionLabel({ children }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem',
      color: '#ffffff',
      font: '700 0.75rem var(--font-mono, monospace)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      marginBottom: '1.2rem'
    }}>
      <div style={{ width: '40px', height: '1.5px', backgroundColor: '#ffffff' }} />
      {children}
    </div>
  );
}

export default function Partnerships() {
  return (
    <>
      <SEO 
        title="Digital Partnerships — Mavros Tech" 
        description="Mavros digital partnerships combine client websites, product storytelling and marketing systems built for business growth."
        url="https://www.mavrostech.in/partnerships"
      />
      
      {/* ---------- HERO ---------- */}
      <section className="partnerships-hero border-b border-border">
        <div className="partnerships-grid-bg" aria-hidden="true" />
        <div className="partnerships-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="partnerships-shell">
          <Link to="/" className="partnerships-back"><ArrowLeft /> Back to home</Link>
          <Reveal>
            <SectionLabel>DIGITAL PARTNERSHIPS</SectionLabel>
            <h1 className="partnerships-title">DIGITAL<br /><em>PARTNERSHIPS</em></h1>
          </Reveal>
          <Reveal delay={90}>
            <div className="partnerships-brief">
              <p>
                Digital partnerships are the client relationships where Mavros designs the website, builds the digital experience and supports the product through marketing systems that keep attention moving.
              </p>
              <div>
                <span><Globe2 /> Websites that explain and convert</span>
                <span><Megaphone /> Campaign systems for product demand</span>
                <span><MousePointer2 /> Clear journeys from visitor to enquiry</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CLIENT LIST (alternating, free-flowing, no boxes) ---------- */}
      <section className="partnerships-list">
        <div className="partnerships-shell">
          {collaborators.map((client, index) => {
            const reversed = index % 2 === 1;
            return (
              <Reveal as="article" key={client.name} delay={index * 80} className={`partnership-card${reversed ? " is-reversed" : ""}`}>
                <div className="partnership-copy">
                  <p className="partnership-eyebrow">{client.category}</p>
                  <h2>{client.name}</h2>
                  <p className="partnership-about">{client.about}</p>
                  <div className="partnership-split-details">
                    <div>
                      <span>Website about</span>
                      <p>{client.challenge}</p>
                    </div>
                    <div>
                      <span>Marketing outcome</span>
                      <p>{client.outcome}</p>
                    </div>
                  </div>
                  <ul aria-label={`${client.name} services`}>
                    {client.services.map((service) => <li key={service}>{service}</li>)}
                  </ul>
                  {client.website && (
                    <a href={client.website} target="_blank" rel="noreferrer">Visit website <ArrowUpRight /></a>
                  )}
                </div>

                <div className="partnership-logo-stage" aria-label={`${client.name} logo placeholder`}>
                  {!client.logo && <div className="partnership-logo-grid" aria-hidden="true" />}
                  {client.logo ? (
                    <img className="partnership-logo-img" src={client.logo} alt={`${client.name} logo`} />
                  ) : (
                    <strong>{client.initials}</strong>
                  )}
                  {!client.logo && <span>{client.name}</span>}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- OUTRO ---------- */}
      <section className="partnerships-outro border-t border-border">
        <div className="partnerships-shell">
          <h2>Ready to build a partnership around your brand?</h2>
          <a href="mailto:official@mavrostech.in">official@mavrostech.in <ArrowUpRight /></a>
        </div>
      </section>
    </>
  );
}
