import React, { useEffect, useRef, useState } from 'react';

const concepts = [
  'AI', 'PRODUCTS', 'SOFTWARE', 'DESIGN', 'RESEARCH', 'EXPERIENCES'
];

export default function EcosystemSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="idea-to-impact" 
      className="eco-section"
      ref={sectionRef}
    >
      <div className={`eco-container ${isVisible ? 'eco-animate-in' : ''}`}>
        
        {/* Left Side: Typography */}
        <div className="eco-left">
          <h2 className="eco-headline">
            <span className="eco-headline-white">FROM IDEA</span>
            <br />
            <span className="eco-headline-gradient">TO IMPACT.</span>
          </h2>
          <p className="eco-description">
            We turn ambitious ideas into intelligent products, digital experiences, and scalable technology.
          </p>
        </div>

        {/* Right Side: Ecosystem Visual */}
        <div className="eco-right">
          <div className="eco-visual">
            <div className="eco-center-logo">
              <img src="/assets/logo.svg" alt="MAVROS" width="120" height="40" className="eco-logo-img" />
            </div>
            
            <div className="eco-nodes-grid">
              {concepts.map((concept, index) => (
                <div key={concept} className={`eco-node eco-node-${index}`}>
                  <span className="eco-node-text">{concept}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

