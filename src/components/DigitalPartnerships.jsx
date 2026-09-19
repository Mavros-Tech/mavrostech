import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Globe2,
  Megaphone,
  MoveUpRight,
} from "lucide-react";
import "./digital-partnerships.css";

import { collaborators as partnerships } from "../lib/partnerships";

function Reveal({
  children,
  delay = 0,
}) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`dp-reveal${visible ? " is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function DigitalPartnerships() {
  const [active, setActive] = useState(0);
  const partnership = partnerships[active];

  if (!partnership) return null;

  return (
    <section
      id="digital-partnerships"
      className="dp-section"
      aria-labelledby="digital-partnerships-title"
    >
      <div className="dp-grid" aria-hidden="true" />

      <div className="dp-signal" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>

      <div className="dp-shell">
        <div className="dp-heading">
          <div>
            <p className="dp-kicker">
              <span aria-hidden="true" />
              Digital partnerships
            </p>

            <h2 id="digital-partnerships-title">
              Built for brands.
              <br />
              <em>Grown together.</em>
            </h2>
          </div>

          <div className="collab-intro-block">
            <p className="collab-intro">
              We design and build their websites, then help market the products
              behind them.
            </p>
            <Link to="/partnerships" className="collab-page-link">
              Explore partnerships <ArrowUpRight />
            </Link>
          </div>
        </div>

        <Reveal delay={150}>
          <div className="dp-workbench">
            <nav className="dp-index" aria-label="Select client project">
              <p>Selected work</p>

              {partnerships.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  className={index === active ? "is-active" : ""}
                  onClick={() => setActive(index)}
                  aria-pressed={index === active}
                  aria-label={`Show ${item.name} project`}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.name}</strong>
                  <MoveUpRight aria-hidden="true" />
                </button>
              ))}
            </nav>

            <article
              key={partnership.name}
              className="dp-project"
              aria-live="polite"
            >
              <div className="dp-browser">
                <div className="dp-browser-bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <span>mavros / selected-work</span>
                </div>

                {partnership.preview ? (
                  <img
                    src={partnership.preview}
                    alt={`${partnership.name} website created by Mavros Tech`}
                  />
                ) : partnership.logo ? (
                  <div className="collab-project-logo">
                    <img src={partnership.logo} alt={`${partnership.name} logo`} />
                  </div>
                ) : (
                  <div className="dp-project-art" aria-hidden="true">
                    <span>{partnership.category}</span>
                    <strong>{partnership.name}</strong>

                    <div className="dp-rings">
                      <i />
                      <i />
                      <i />
                    </div>

                    <Globe2 />
                  </div>
                )}
              </div>

              <div className="dp-project-copy">
                <div className="dp-project-title">
                  <p>{partnership.category}</p>
                  <h3>{partnership.name}</h3>
                </div>

                <p className="dp-statement">{partnership.statement}</p>

                <ul aria-label="Services delivered">
                  {partnership.services.map((service, index) => (
                    <li key={service}>
                      {index === 0 ? (
                        <Globe2 aria-hidden="true" />
                      ) : (
                        <Megaphone aria-hidden="true" />
                      )}
                      {service}
                    </li>
                  ))}
                </ul>

                {partnership.website && (
                  <a
                    href={partnership.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View website
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
