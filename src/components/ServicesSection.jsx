import { useRef } from "react";
import { ArrowUpRight, Bot, Braces, Cloud, Layers3, Smartphone, Sparkles } from "lucide-react";

const services = [
  { icon: Bot, title: "AI & Autonomous Agents", text: "RAG systems, intelligent agents and focused LLM workflows that turn business knowledge into action." },
  { icon: Braces, title: "Custom SaaS & Software", text: "Enterprise web apps, SaaS platforms, CRM and ERP systems engineered for long-term scale." },
  { icon: Smartphone, title: "Mobile App Development", text: "Native and cross-platform products across Flutter, React Native, Android and iOS." },
  { icon: Sparkles, title: "Enterprise Automation", text: "Intelligent workflows that reduce repetitive work and unlock faster execution." },
  { icon: Cloud, title: "Cloud & DevOps", text: "Secure infrastructure, container platforms and delivery pipelines designed for reliability." },
  { icon: Layers3, title: "UI/UX & Product Design", text: "Research-led interfaces, prototypes and design systems that make complex products feel natural." },
];

function ServiceCard({ icon: Icon, title, text }) {
  const ref = useRef(null);

  const move = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.setProperty("--rx", `${(0.5 - y) * 9}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 11}deg`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <article
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      className="service-item group relative border-b border-[#3f3f46] py-9 md:px-7"
      tabIndex={0}
    >
      <span className="svc-dots" aria-hidden="true" />
      <span className="svc-spot" aria-hidden="true" />
      <span className="svc-warp" aria-hidden="true" />
      <span className="svc-crosshair" aria-hidden="true"><i /><i /></span>
      <span className="svc-scan" aria-hidden="true" />
      <span className="svc-trace svc-trace-t" aria-hidden="true" />
      <span className="svc-trace svc-trace-r" aria-hidden="true" />
      <span className="svc-trace svc-trace-b" aria-hidden="true" />
      <span className="svc-trace svc-trace-l" aria-hidden="true" />
      <span className="svc-corner svc-corner-a" aria-hidden="true" />
      <span className="svc-corner svc-corner-b" aria-hidden="true" />
      <div className="svc-inner">
        <div className="relative flex items-start">
          <span className="svc-icon">
            <Icon className="w-5 h-5" />
            <i className="svc-ring" aria-hidden="true" />
          </span>
        </div>
        <h3 className="svc-title relative mt-14 text-2xl font-medium md:text-[1.7rem] text-white" data-text={title}>
          <span>{title}</span>
        </h3>
        <p className="relative mt-4 leading-6 text-[#a1a1aa] transition-colors duration-300 group-hover:text-[#e4e4e7]">
          {text}
        </p>
        <span className="svc-arrow"><ArrowUpRight className="w-4 h-4" /></span>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 pt-10 pb-12 lg:px-8 lg:pt-12 lg:pb-16">
      <div className="section-label" style={{ fontFamily: "var(--mono)", fontSize: "13px", color: "var(--muted)", display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", textTransform: "uppercase" }}>SERVICES</div>
      <div className="grid gap-10 border-b border-[#3f3f46] pb-14 md:grid-cols-2 md:items-end">
        <h2 className="text-4xl font-semibold leading-tight md:text-6xl text-white">
          From first idea to<br />production intelligence.
        </h2>
        <p className="max-w-xl text-base leading-7 text-[#a1a1aa] md:justify-self-end">
          Complete digital transformation, from AI strategy and product design to deployment and long-term scaling.
        </p>
      </div>
      <div className="svc-grid grid md:grid-cols-2 lg:grid-cols-3 mt-14">
        {services.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
    </section>
  );
}
