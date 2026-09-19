import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function StartProjectSection() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const rows = [
    { Icon: Mail, label: "EMAIL", value: "official@mavrostech.in", href: "mailto:official@mavrostech.in" },
    { Icon: Phone, label: "PHONE", value: "+91 63614 92452", href: "tel:+916361492452" },
    { Icon: MessageCircle, label: "RESPONSE TIME", value: "Within one working day" },
  ];

  return (
    <section className="relative overflow-hidden border-t border-white/5 py-24 lg:py-32 bg-[#050505] text-white">
      <div className="ct-aurora" aria-hidden="true" />
      <div className="ct-beam" aria-hidden="true" />
      <div className="ct-beam ct-beam-b" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div ref={ref} className={`ct-panel reveal ${shown ? "is-visible" : ""} relative overflow-hidden border border-white/10 p-8 md:p-14`}>
          <div className="ct-shine" aria-hidden="true" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
            <div>
              <p className="eyebrow mb-6">START A PROJECT <span /> MAVROS TECH</p>
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] md:text-7xl text-white">
                Let's build something <span className="text-spectrum">worth remembering.</span>
              </h2>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/70 md:text-lg">
                Tell us the idea, the problem or the rough sketch on a napkin. We'll come back with a clear path, a timeline and a team that ships.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-4 font-medium text-black transition hover:opacity-90" href="mailto:official@mavrostech.in?subject=Project%20enquiry">Start a project <ArrowUpRight className="size-4" /></a>
                <a className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-4 font-medium text-white transition hover:bg-white/5" href="https://wa.me/916361492452" target="_blank" rel="noreferrer"><MessageCircle className="size-4" /> Chat on WhatsApp</a>
              </div>
            </div>
            <ul className="grid gap-px border border-white/10 bg-white/10">
              {rows.map(({ Icon, label, value, href }) => (
                <li key={label} className="ct-row flex items-center gap-4 bg-[#0a0a0a] px-6 py-6">
                  <Icon className="size-5 shrink-0 text-white/80" />
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-white/50">{label}</p>
                    {href ? <a href={href} className="block truncate text-base hover:opacity-70 text-white">{value}</a> : <p className="truncate text-base text-white">{value}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
