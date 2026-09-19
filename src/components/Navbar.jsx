import { useState } from "react";
import { Link } from "react-router-dom"; // swap for your router's Link
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useScrollLock } from "../hooks/useScrollLock";

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Team", to: "/about#team" },
  { label: "Services", to: "/#services" },
  { label: "Work", to: "/#work" },
];

function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Mavros Tech home">
      <img src="/assets/logo.svg" alt="Mavros Logo" className="brand-logo" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
      <span className="brand-word">MAVROS</span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useScrollLock(open);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Brand />

        {/* desktop */}
        <nav className="navbar-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.to} className="nav-link">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta">
            Let&apos;s talk <ArrowUpRight className="nav-cta-arrow" aria-hidden="true" />
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          className="nav-burger"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="nav-mobile" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.to}
              className="nav-mobile-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav-cta nav-mobile-cta" onClick={() => setOpen(false)}>
            Let&apos;s talk <ArrowUpRight className="nav-cta-arrow" aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}
