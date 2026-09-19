import React, { useEffect, useRef, useState } from "react";

export default function Process() {
  const sectionRef = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stages = [
    ['01','Discover','Understand the problem, define the goals and identify where technology can create meaningful impact.'],
    ['02','Design','Shape the experience, system architecture and product strategy around real user needs.'],
    ['03','Develop','Build the AI-powered application or digital platform with quality engineered into every layer.'],
    ['04','Launch & Scale','Deploy, optimize and evolve the product as your audience and ambitions grow.']
  ];

  return (
    <section id="process" className="border-y border-white/15 bg-[#050505]">
      <div 
        ref={sectionRef} 
        className={`mx-auto max-w-7xl px-5 pt-10 pb-12 lg:px-8 lg:pt-12 lg:pb-16 reveal ${shown ? 'is-visible' : ''}`}
      >
        <p className="mb-7 flex items-center gap-3 text-[11px] font-semibold tracking-[0.24em] text-white uppercase font-mono">
          <span className="h-px w-7 bg-white/50" />HOW MAVROS WORKS
        </p>
        <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl text-white">
          Four clear stages. One extraordinary product.
        </h2>
        <div className="mt-16">
          {stages.map(([n,t,d], i) => (
            <article 
              key={n} 
              className={`process-row group grid gap-4 border-t border-white/15 py-8 md:grid-cols-[100px_1fr_1fr] md:items-center reveal ${shown ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-sm text-white font-mono">{n}</span>
              <h3 className="text-3xl font-medium md:text-4xl text-white">{t}</h3>
              <p className="max-w-lg text-white/60">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
