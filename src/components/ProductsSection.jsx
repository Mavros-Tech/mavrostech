import { Link } from "react-router-dom";
import { ArrowUpRight, Clapperboard, LayoutTemplate, Play } from "lucide-react";
import { demoDesigns } from "../lib/demo-designs";

export const flagshipProduct = {
  kind: "Flagship product",
  name: "Veytrix.AI",
  description:
    "An all-in-one AI video editing and generation studio that transforms text, images and ideas into professional video.",
  status: "Coming soon",
  tags: ["AI video editing", "Text to video", "Generative media"],
  icon: Clapperboard,
};

export function ProductsSection() {
  const count = String(demoDesigns.length).padStart(2, "0");

  return (
    <section id="work" className="products-section border-y border-border">
      <div className="products-noise" aria-hidden="true" />
      <div className="products-shell">
        <div className="products-heading">
          <div>
            <div className="section-label" style={{ marginBottom: '1.5rem', fontFamily: 'var(--mono, monospace)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#3b82f6', boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}></div>
              MAVROS PRODUCTS
            </div>
            <h2>Ideas made <em>tangible.</em></h2>
          </div>
          <span className="products-heading-line" aria-hidden="true" />
          <p>One original AI product, plus a design library of {count} demo websites built to show clients what their next site could become.</p>
        </div>

        <div className="products-editorial-grid">
          <article className="product-flagship" tabIndex={0}>
            <div className="flagship-grid" aria-hidden="true" />
            <div className="flagship-orbits" aria-hidden="true"><i /><i /><i /></div>
            <div className="flagship-topline">
              <span><i /> {flagshipProduct.status}</span>
              <span>OUR PRODUCT</span>
            </div>
            <div className="flagship-play" aria-hidden="true"><Play fill="currentColor" /></div>
            <div className="flagship-copy">
              <p>{flagshipProduct.kind}</p>
              <h3>VEYTRIX<em>.AI</em></h3>
              <p className="flagship-description">{flagshipProduct.description}</p>
              <ul>{flagshipProduct.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </div>
            <div className="flagship-marquee" aria-hidden="true"><span>GENERATE — EDIT — CREATE — GENERATE — EDIT — CREATE —</span></div>
          </article>

          <Link to="/demos" className="demo-portal" aria-label={`View all ${count} demo website designs`}>
            <span className="demo-scan" aria-hidden="true" />
            <span className="demo-portal-count" aria-hidden="true">{count}</span>
            <span className="demo-portal-top">
              <span>Design library</span>
              <LayoutTemplate />
            </span>
            <span className="demo-geometry" aria-hidden="true"><i /><i /><i /></span>
            <span className="demo-portal-copy">
              <h3>CRAFTED<br />EXPERIENCES</h3>
              <span className="demo-portal-text">{count} client-ready website directions for hospitality, beauty, fitness and travel brands.</span>
              <ul className="demo-portal-list">
                {demoDesigns.map((demo) => <li key={demo.id}>{demo.name}</li>)}
              </ul>
              <span className="demo-portal-cta">View the designs <ArrowUpRight /></span>
            </span>
          </Link>
        </div>

        <div className="products-footnote">
          <span>ORIGINAL PRODUCT / DESIGN LIBRARY</span>
          <span>BUILT IN BENGALURU</span>
        </div>
      </div>
    </section>
  );
}
