/* =====================================================
   TEAM SHOWCASE — core members + interns coverflow
   Pure black & white. No UI library or icon package needed.
   ===================================================== */

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Github, Linkedin, Mail, X } from "lucide-react";
import { useScrollLock } from "../hooks/useScrollLock";
import "./team-showcase.css";

/* ---------- EDIT THIS DATA ---------- */

const team = [
  {
    name: "Manjith Singh",
    role: "CEO",
    bio: "Leading with a vision to build meaningful technology that solves real-world problems.",
    modalBio: "Leading with a vision to build meaningful technology that solves real-world problems. With a strong focus on innovation, product development, and business growth, the role involves bringing technology, design, and strategy together to turn ideas into scalable digital solutions.",
    skills: ["Leadership & Vision", "Product & Business Strategy", "UI/UX Design"],
    modalSkills: [
      "Leadership & Vision", "Product & Business Strategy", "UI/UX Design", 
      "Frontend Development", "AI & Technology", "Finance & Business Operations", 
      "Marketing & Growth", "Team Management", "Innovation & Entrepreneurship"
    ],
    photo: "/assets/Manjith.jpeg",
    email: "smanjith3@gmail.com",
    linkedin: "https://www.linkedin.com/in/manjith-singh-822469309/",
    github: "https://github.com/Manjith24BTRE",
    detail: "From shaping products and user experiences to driving business strategy, managing teams, and building strong market presence, the focus remains on creating long-term value and continuously pushing Mavros toward its next stage of growth.",
    quote: "Intelligence should feel invisible until the moment it saves you hours.",
  },
  {
    name: "Rudrik Hemanshu Joshi",
    smallName: true,
    role: "CTO",
    bio: "Leading technology initiatives and transforming innovative ideas into meaningful digital solutions has always been a passion of mine.",
    modalBio: "Leading technology initiatives and transforming innovative ideas into meaningful digital solutions has always been a passion of mine. I enjoy working at the intersection of technology, creativity, and problem-solving, where I can contribute to building products that create real-world impact. With a strong interest in Artificial Intelligence, Data Analytics, and software development, I continuously explore new technologies and approaches to improve both products and user experiences.",
    skills: ["AI & ML", "Data Analytics", "Full-Stack Development"],
    modalSkills: [
      "AI & ML", "Data Analytics", "Full-Stack Development",
      "Software Architecture", "Product Development", "Cloud & SaaS", "Technical Strategy"
    ],
    photo: "/assets/Rudrik.jpeg",
    email: "rudrik28novjoshi@gmail.com",
    linkedin: "https://www.linkedin.com/in/rudrik-hemanshu-joshi-0a592b261/",
    github: "https://github.com/Rudrik124",
    detail: "I thrive in collaborative environments, enjoy mentoring and working with teams, and believe that great products are built through continuous learning, innovation, and attention to detail. My goal is to keep growing as a technology professional while contributing to solutions that are intelligent, scalable, and designed to make a difference.",
    quote: "Passionate about AI, data, and building impactful technology.",
  },
  {
    name: "Udaya K",
    role: "COO",
    bio: "I’m a technology-focused professional with a strong interest in Front-end Development",
    modalBio: "I’m a technology-focused professional with a strong interest in Front-end Development, Database Management, Software Testing, QA, Research, and Operations Management. I enjoy developing applications, managing data, testing products, and finding practical solutions to improve systems.",
    skills: ["Database Management", "Front-End Development", "Software Testing"],
    modalSkills: [
      "Database Management", "Front-End Development", "Software Testing",
      "Quality Assurance (QA)", "Operations Management", "Research & Development"
    ],
    photo: "/assets/Uday.jpeg",
    email: "udayakatika@gmail.com",
    linkedin: "https://www.linkedin.com/in/udaya-k-158524309/",
    github: "https://github.com/Udaya168",
    detail: "My approach combines development, quality, problem-solving, and continuous learning to build reliable and efficient digital solutions.",
    quote: "Build it. Test it. Improve it. Make it better.",
  },
  {
    name: "Saswatee Swain",
    smallName: true,
    role: "CIO",
    bio: "I’m driven by technology, strategic thinking, and problem-solving to create meaningful real-world solutions.",
    modalBio: "I’m driven by technology, strategic thinking, and problem-solving to create meaningful real-world solutions. I enjoy turning ideas into practical outcomes through innovation, research, and structured execution.",
    skills: ["Frontend Developer", "UI/UX Designer", "Quality Assurance & Testing"],
    modalSkills: [
      "Frontend Developer", "UI/UX Designer", "Quality Assurance & Testing",
      "Research & Analysis", "Artificial Intelligence"
    ],
    photo: "/assets/Sas.jpeg",
    email: "saswateeswain2006@gmail.com",
    linkedin: "https://www.linkedin.com/in/saswatee-swain-302322377?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/Saswatee-2006",
    detail: "My focus lies in building efficient solutions, understanding complex problems, and contributing across technology, operations, and strategy.",
    quote: "Turning ideas into solutions, and solutions into impact.",
  },
  {
    name: "Sukhitha R Mopaghar",
    smallName: true,
    role: "Executive Director",
    bio: "Driving innovation and growth through technology, leadership, and continuous learning. Passionate about transforming ideas into practical digital solutions, exploring emerging technologies, and bringing together creativity, strategy, and problem-solving to create meaningful real-world impact,",
    modalBio: "I’m driven by technology, strategic thinking, and problem-solving to create meaningful real-world solutions. I enjoy turning ideas into practical outcomes through innovation, research, and structured execution.",
    skills: ["Frontend Developer", "UI/UX Designer", "Digital Marketing"],
    modalSkills: [
      "Frontend Developer", "UI/UX Designer", "Quality Assurance & Testing","Digital Marketing",
      "Research & Analysis", "Artificial Intelligence"
    ],
    photo: "/assets/Sukhitha.jpeg",
    email: "sukhitharmopagar@gmail.com",
    linkedin: "https://www.linkedin.com/in/sukhitha-r-mopagar-ab0b8b382/",
    github: "https://github.com/Sukhitha-RM",
    detail: "I enjoy working at the intersection of technology, innovation, and problem-solving, with a strong belief that great ideas become successful through collaboration, creativity, and continuous learning.",
    quote: "Making things possible.",
  },
];

const interns = [
  { 
    name: "Jayashree\u00A0N", 
    photo: "/assets/Jayashreee.jpeg",
    track: "Sales &\u00A0Technical Associate", 
    email: "jayashreen023@gmail.com",
    linkedin: "https://www.linkedin.com/in/jayashree-nithyanand-2969a13a5?utm_source=share_via&utm_content=profile&utm_medium=member_android", 
    github: "https://github.com/Jayashree N",
    bio: "Connecting technology, business, and digital growth by understanding client requirements and translating them into practical solutions.",
    modalBio: "Connecting technology, business, and digital growth by understanding client requirements and translating them into practical solutions. As a Sales & Technical Associate at MAVROS, I contribute across client communication, solution consulting, business development, and technical coordination.",
    detail: "With an interest in software development, AI, digital marketing, and emerging technologies, I combine technical understanding with communication and business skills to support product growth and deliver value to clients.",
    quote: "Understand the need. Build the solution. Create the impact.",
    skills: ["SALES & BUSINESS DEVELOPMENT", "CLIENT COMMUNICATION & NEGOTIATION", "TECHNICAL SOLUTION CONSULTING"],
    modalSkills: [
      "SALES & BUSINESS DEVELOPMENT",
      "CLIENT COMMUNICATION & NEGOTIATION",
      "TECHNICAL SOLUTION CONSULTING",
      "SEO & GEO",
      "AI & MACHINE LEARNING",
      "PYTHON • JAVASCRIPT • HTML • CSS",
      "GIS & GEOSPATIAL TECHNOLOGY",
      "UI/UX & PRODUCT DEVELOPMENT",
      "DIGITAL MARKETING & STRATEGY"
    ]
  },
  { 
    name: "Meghana T", 
    photo: "/assets/Meghana.jpeg",
    track: "PRODUCT & GROWTH SPECIALIST", 
    email: "meghareddy0106@gmail.com",
    linkedin: "https://www.linkedin.com/in/meghana-t-9592483a7?utm_source=share_via&utm_content=profile&utm_medium=member_android", 
    github: "https://github.com/Meghana-0106",
    bio: "Building products that solve real problems and creating growth strategies that turn ideas into measurable impact.",
    modalBio: "Building products that solve real problems and creating growth strategies that turn ideas into measurable impact. The role focuses on understanding users, identifying opportunities, shaping product direction, and connecting product decisions with business goals.",
    detail: "From researching user needs and defining product experiences to developing growth strategies, analyzing performance, and improving customer journeys, the focus remains on creating products that people find valuable and businesses can scale.",
    quote: "Build what people need.\nGrow what people value.",
    skills: ["PRODUCT STRATEGY", "GROWTH STRATEGY", "USER RESEARCH"],
    modalSkills: [
      "PRODUCT STRATEGY",
      "GROWTH STRATEGY",
      "USER RESEARCH",
      "PRODUCT DEVELOPMENT",
      "MARKET ANALYSIS",
      "DATA & ANALYTICS",
      "GO-TO-MARKET"
    ]
  },
  { 
    name: "Rishi Jotangia", 
    photo: "/assets/Rishii.jpeg",
    track: "CYBERSECURITY ANALYST & TECHNOLOGY PROFESSIONAL", 
    email: "jotangia.rishi317@gmail.com",
    linkedin: "https://www.linkedin.com/in/rishi-jotangia-9a5327369?utm_source=share_via&utm_content=profile&utm_medium=member_android", 
    github: "https://github.com/Rishi-Manish-Jotangia",
    bio: "Building secure, practical technology solutions and exploring how cybersecurity, AI, and software can solve real-world problems.",
    modalBio: "Building secure, practical technology solutions and exploring how cybersecurity, AI, and software can solve real-world problems. As a Cybersecurity Analyst, my focus is on understanding security challenges, identifying risks, and developing solutions that help protect digital systems and users.",
    detail: "Beyond cybersecurity, I’m interested in technology, project management, software development, AI, and entrepreneurship. I enjoy taking ideas from concept to execution, working on real-world projects, and continuously developing my technical and business skills.\n\nMy approach is simple: stay curious, keep building, and turn technical knowledge into practical impact.",
    quote: "Secure what matters.\nBuild what’s next.",
    skills: ["CYBERSECURITY", "THREAT ANALYSIS", "RISK MANAGEMENT"],
    modalSkills: [
      "CYBERSECURITY",
      "THREAT ANALYSIS",
      "RISK MANAGEMENT",
      "NETWORK SECURITY",
      "AI & TECHNOLOGY",
      "SOFTWARE DEVELOPMENT",
      "PROJECT MANAGEMENT",
      "CLOUD COMPUTING"
    ]
  },
  { 
    name: "Ruchitha Biswal S", 
    photo: "/assets/Ruchii.jpeg",
    track: "BRAND & VISUAL DESIGNER", 
    email: "ruchibiswal2006@gmail.com",
    linkedin: "https://www.linkedin.com/in/ruchitha-biswal-s-83547a35b", 
    github: "https://github.com/Ruchitha-2006",
    bio: "Building brands that communicate clearly, look distinctive, and create meaningful connections with people.",
    modalBio: "Building brands that communicate clearly, look distinctive, and create meaningful connections with people. The role focuses on shaping brand identities, developing visual systems, and turning ideas into consistent and memorable visual experiences.",
    detail: "From defining brand direction and creating visual identities to designing digital content, marketing materials, and brand experiences, the focus remains on creating visuals that are purposeful, recognizable, and aligned with the brand’s goals.",
    quote: "Design with purpose.\nBuild brands people remember.",
    skills: ["BRAND STRATEGY", "VISUAL IDENTITY", "GRAPHIC DESIGN"],
    modalSkills: [
      "BRAND STRATEGY",
      "VISUAL IDENTITY",
      "GRAPHIC DESIGN",
      "CREATIVE DIRECTION",
      "UI/UX DESIGN",
      "MARKETING DESIGN",
      "VISUAL COMMUNICATION"
    ]
  },
  { 
    name: "Prathima HM", 
    photo: "/assets/Prathima.jpeg",
    track: "Performance Marketer", 
    email: "prathimahm48@gmail.com",
    linkedin: "https://www.linkedin.com/in/prathima-hm-2763143a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
    github: "https://github.com/Prathima32",
    bio: "As a Performance Marketer, I focus on driving measurable growth through data-driven campaigns, audience targeting, and strategic paid marketing.",
    modalBio: "As a Performance Marketer, I focus on driving measurable growth through data-driven campaigns, audience targeting, and strategic paid marketing.",
    detail: "From optimizing campaigns and analyzing performance to improving conversions and customer acquisition, the goal is to turn marketing efforts into measurable business results.",
    quote: "Reach the right people.\nDrive real results.",
    skills: ["PAID MEDIA", "CAMPAIGN STRATEGY", "ANALYTICS"],
    modalSkills: [
      "PAID MEDIA",
      "CAMPAIGN STRATEGY",
      "ANALYTICS",
      "CONVERSION OPTIMIZATION"
    ]
  },
];

/* ---------- inline icons (no icon library) ---------- */
// Removed in favor of lucide-react
// Removed in favor of lucide-react

/* ---------- carousel logic ---------- */

function initials(name) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
}

function relativePosition(index, active, length) {
  let pos = index - active;
  if (pos > length / 2) pos -= length;
  if (pos < -length / 2) pos += length;
  return Math.max(-2, Math.min(2, pos));
}

function useShowcase(length) {
  const [active, setActive] = useState(0);
  const dragStart = useRef(null);
  const previous = useCallback(
    () => setActive((v) => (v - 1 + length) % length), [length]);
  const next = useCallback(() => setActive((v) => (v + 1) % length), [length]);

  return {
    active, setActive, previous, next,
    onPointerDown: (e) => {
      dragStart.current = e.clientX;
      if (e.target.setPointerCapture) {
        e.target.setPointerCapture(e.pointerId);
      }
    },
    onPointerUp: (e) => {
      if (dragStart.current === null) return;
      const d = e.clientX - dragStart.current;
      dragStart.current = null;
      if (e.target.releasePointerCapture) {
        e.target.releasePointerCapture(e.pointerId);
      }
      if (Math.abs(d) < 45) return;
      if (d < 0) next(); else previous();
    },
  };
}

function Controls({ active, length, previous, next, setActive, label }) {
  return (
    <div className="showcase-controls" aria-label={`${label} controls`}>
      <button type="button" className="showcase-arrow" onClick={previous} aria-label={`Previous ${label}`}><ArrowLeft /></button>
      <div className="showcase-dots">
        {Array.from({ length }, (_, i) => (
          <button
            key={i}
            type="button"
            className={i === active ? "is-active" : ""}
            aria-label={`Show ${label} ${i + 1}`}
            aria-current={i === active ? "true" : undefined}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
      <button type="button" className="showcase-arrow" onClick={next} aria-label={`Next ${label}`}><ArrowRight /></button>
    </div>
  );
}

function MemberModal({ member, onClose }) {
  useScrollLock(!!member);

  useEffect(() => {
    if (!member) return;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div className="member-modal" role="dialog" aria-modal="true" aria-label={`About ${member.name}`} onClick={onClose}>
      <div className="member-modal-card" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="member-modal-close" onClick={onClose} aria-label="Close">
          <X />
        </button>
        <div className="member-modal-portrait">
          {member.photo ? (
            <img src={member.photo} alt={`Portrait of ${member.name}`} />
          ) : (
            <div className="team-placeholder"><span>{initials(member.name)}</span></div>
          )}
          <span className="team-noise" />
          <span className="team-scan" />
        </div>
        <div className="member-modal-copy">
          <p className="team-role">{member.role}</p>
          <h3 className={member.smallName ? "team-name-small" : ""}>{member.name}</h3>
          <p className="team-bio">{member.modalBio || member.bio}</p>
          {member.detail && <p className="member-modal-detail">{member.detail}</p>}
          {member.quote && <blockquote className="member-modal-quote">“{member.quote}”</blockquote>}
          <ul>{(member.modalSkills || member.skills).map((skill) => <li key={skill}>{skill}</li>)}</ul>
          <div className="team-links">
            <a href={`mailto:${member.email || "official@mavrostech.in"}`} data-network="mail" data-label="Email" aria-label={`Email ${member.name}`}><Mail /></a>
            {member.linkedin && <a href={member.linkedin} target="_blank" rel="noreferrer" data-network="linkedin" data-label="LinkedIn" aria-label={`${member.name} on LinkedIn`}><Linkedin /></a>}
            {member.github && <a href={member.github} target="_blank" rel="noreferrer" data-network="github" data-label="GitHub" aria-label={`${member.name} on GitHub`}><Github /></a>}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- core members coverflow ---------- */

function CoreShowcase() {
  const carousel = useShowcase(team.length);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div
        className="team-stage"
        aria-roledescription="carousel"
        aria-label="Core team"
        onPointerDown={carousel.onPointerDown}
        onPointerUp={carousel.onPointerUp}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") carousel.previous();
          if (e.key === "ArrowRight") carousel.next();
          if (e.key === "Enter") setSelected(team[carousel.active] ?? null);
        }}
        tabIndex={0}
      >
        <div className="team-stage-glow" />
        {team.map((m, i) => {
          const pos = relativePosition(i, carousel.active, team.length);
          const isActive = i === carousel.active;
          return (
            <article
              key={m.name}
              className="team-slide"
              data-position={pos}
              aria-hidden={!isActive}
              onClick={() => (isActive ? setSelected(m) : carousel.setActive(i))}
            >
              <div className="team-portrait">
                {m.photo ? (
                  <img src={m.photo} alt={`Portrait of ${m.name}`} loading="lazy" />
                ) : (
                  <div className="team-placeholder"><span>{initials(m.name)}</span></div>
                )}
                <span className="team-noise" />
                <span className="team-scan" />
              </div>
              <div className="team-copy">
                <p className="team-role">{m.role}</p>
                <h3 className={m.smallName ? "team-name-small" : ""}>{m.name}</h3>
                <p className="team-bio">{m.bio}</p>
                <ul>{m.skills.map((s) => <li key={s}>{s}</li>)}</ul>
                <div className="team-links">
                  {m.email && <a href={`mailto:${m.email}`} onClick={(e) => e.stopPropagation()} data-network="mail" data-label="Email" aria-label={`Email ${m.name}`}><Mail /></a>}
                  {m.linkedin && <a href={m.linkedin} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" data-network="linkedin" data-label="LinkedIn" aria-label={`${m.name} on LinkedIn`}><Linkedin /></a>}
                  {m.github && <a href={m.github} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" data-network="github" data-label="GitHub" aria-label={`${m.name} on GitHub`}><Github /></a>}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <Controls {...carousel} length={team.length} label="team member" />
      <MemberModal member={selected} onClose={() => setSelected(null)} />
    </>
  );
}

/* ---------- interns coverflow ---------- */

function InternShowcase() {
  const carousel = useShowcase(interns.length);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div
        className="intern-stage"
        aria-roledescription="carousel"
        aria-label="Interns"
        onPointerDown={carousel.onPointerDown}
        onPointerUp={carousel.onPointerUp}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") carousel.previous();
          if (e.key === "ArrowRight") carousel.next();
          if (e.key === "Enter") setSelected(interns[carousel.active] ?? null);
        }}
        tabIndex={0}
      >
        {interns.map((intern, i) => {
          const pos = relativePosition(i, carousel.active, interns.length);
          const isActive = i === carousel.active;
          return (
            <article
              key={intern.name}
              className="intern-slide"
              data-position={pos}
              aria-hidden={!isActive}
              onClick={() => (isActive ? setSelected({ role: intern.track, bio: `${intern.name} is a member of the Innovation Team in the ${intern.track} track.`, skills: [intern.track], ...intern }) : carousel.setActive(i))}
            >
              <div className="intern-portrait">
                {intern.photo ? (
                  <img src={intern.photo} alt={`Portrait of ${intern.name}`} loading="lazy" />
                ) : (
                  <span>{initials(intern.name)}</span>
                )}
              </div>
              <div>
                <p>{intern.track}</p>
                <h4>{intern.name}</h4>
              </div>
              <div className="intern-links">
                <a href={`mailto:${intern.email || "official@mavrostech.in"}`} onClick={(e) => e.stopPropagation()} data-network="mail" data-label="Email" aria-label={`Email ${intern.name}`}><Mail /></a>
                {intern.linkedin && <a href={intern.linkedin} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" data-network="linkedin" data-label="LinkedIn" aria-label={`${intern.name} on LinkedIn`}><Linkedin /></a>}
                {intern.github && <a href={intern.github} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" data-network="github" data-label="GitHub" aria-label={`${intern.name} on GitHub`}><Github /></a>}
              </div>
            </article>
          );
        })}
      </div>
      <Controls {...carousel} length={interns.length} label="intern" />
      <MemberModal member={selected} onClose={() => setSelected(null)} />
    </>
  );
}

/* ---------- section ---------- */

export default function TeamShowcase() {
  return (
    <section id="team" className="team-showcase">
      <div className="team-heading">
        <div>
          <p className="team-kicker">THE COLLECTIVE</p>
          <h2>Core members</h2>
        </div>
        <p className="team-instruction">Swipe or drag to explore</p>
      </div>
      <CoreShowcase />

      <div id="interns" className="intern-showcase">
        <div className="intern-heading">
          <div>
            <p className="team-kicker">EMERGING TALENT</p>
            <h3>The Innovation Team</h3>
          </div>
          <p>Separate crew. Same standard.</p>
        </div>
        <InternShowcase />
      </div>
    </section>
  );
}
