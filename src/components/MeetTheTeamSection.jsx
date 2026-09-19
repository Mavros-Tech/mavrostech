import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./meet-team.css";

export default function MeetTeam() {
  const sectionRef = useRef(null);

  // Entrance: fires once when the section scrolls into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && el.classList.add("mt-visible"),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="meet-team">

      <div className="mt-inner">
        <div className="mt-copy">
          <h2 className="mt-title">
            <span className="mt-line">Meet the minds</span>
            <span className="mt-line">behind the systems.</span>
          </h2>
        </div>

        {/* navigates to the About page */}
        <Link to="/about" className="mt-button">
          <span className="mt-button-shine" aria-hidden="true" />
          Meet the team
          <svg
            className="mt-arrow"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
