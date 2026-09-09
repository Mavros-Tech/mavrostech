import React from 'react';

export default function Collaborators() {
  return (
    <section id="collaborators" className="collab-section">
      <div className="collab-wrapper">
        
        <div className="collab-header">
          <div className="collab-eyebrow">
            <span className="collab-dot"></span> MAVROS TECH | AI PRODUCTS &amp; WEBSITES
          </div>
          <h2 className="collab-title">OUR COLLABORATORS</h2>
          <p className="collab-subtitle">
            We collaborate with forward-thinking partners and organizations<br />
            to create impactful solutions.
          </p>
          <div className="collab-horizontal-divider"></div>
        </div>

        <div className="collab-card">
          <div className="collab-brand">
            <img 
              src="/assets/clip-n-copy-final.svg" 
              alt="Clip N Copy" 
              width="350"
              height="180"
              loading="lazy"
              className="collab-logo-img"
            />
          </div>

          <div className="collab-vertical-divider"></div>

          <div className="collab-brand">
            <img 
              src="/assets/minora-final.svg" 
              alt="Minora" 
              width="350"
              height="180"
              loading="lazy"
              className="collab-logo-img"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
