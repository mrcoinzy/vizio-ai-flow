import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACCENT = "#9900FF";

const SERVICES = [
  {
    id: "webdev",
    title: "web.development",
    description:
      "Maßgeschneiderte Web-Entwicklung für dynamische Online-Shops und individuelle Webprojekte.",
    tags: ["custom", "cms", "shopify", "laravel", "onepager", "+ more"],
    cta: "dann lass von dir hören!",
  },
  {
    id: "social",
    title: "social.media",
    description:
      "Effektives Social Media Content Management für eine authentische und einflussreiche Online-Präsenz.",
    tags: ["content", "ads", "automation", "analytics"],
    cta: "dann lass von dir hören!",
  },
  {
    id: "performance",
    title: "performance",
    description: "Speed, SEO, Conversion. Audit → Plan → messbare Ergebnisse.",
    tags: ["lighthouse 95+", "core web vitals", "A/B"],
    cta: "audit anfordern",
  },
];

function SquareAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="black" opacity=".4" />
      <rect x="7.8" y="7.5" width="8.5" height="9" rx="2" fill="#fff" opacity=".12" />
      <circle cx="12" cy="12" r="2" fill="#fff" opacity=".2" />
    </svg>
  );
}

function PanelIllustration() {
  return (
    <svg width="220" height="160" viewBox="0 0 340 220" aria-hidden="true">
      <g fill="none" stroke="#fff" opacity="0.14">
        <rect x="10" y="40" width="130" height="80" rx="12" />
        <rect x="54" y="24" width="130" height="100" rx="14" />
      </g>
      <g>
        <g transform="translate(160,20)">
          <rect x="0" y="0" width="70" height="90" rx="10" fill="#1A1A1A" stroke="#000" opacity=".6" />
          <rect x="16" y="-10" width="70" height="110" rx="10" fill="#0F0F12" stroke="#000" opacity=".85" />
          <rect x="32" y="6" width="72" height="128" rx="12" fill="#121215" stroke="#000" opacity="1" />
          <rect x="26" y="18" width="44" height="8" rx="4" fill={ACCENT} />
          <rect x="40" y="60" width="8" height="8" rx="4" fill={ACCENT} />
          <rect x="52" y="32" width="46" height="8" rx="4" fill={ACCENT} />
          <g opacity=".5" stroke="#fff">
            <path d="M68 80h36" />
            <path d="M68 96h28" />
            <path d="M68 112h20" />
          </g>
        </g>
      </g>
    </svg>
  );
}

function GhostServiceCard({ service, side }) {
  const isLeft = side === "left";
  return (
    <div
      className={`pointer-events-none absolute ${isLeft ? "left-[-48px] md:left-[-72px]" : "right-[-48px] md:right-[-72px]"} top-[60%] -translate-y-1/2 z-0`}
      style={{ transformOrigin: "center" }}
    >
      <div
        className="relative rounded-[20px] overflow-hidden"
        style={{
          width: 520,
          height: 320,
          background: `linear-gradient(180deg, ${ACCENT} 0%, rgba(0,0,0,.35) 100%)`,
          boxShadow: `0 18px 60px -20px ${ACCENT}55`,
          opacity: 0.9,
        }}
      >
        <div className="w-full h-full bg-black/35" />
        <div className="absolute inset-0 p-6 text-white">
          <div className="flex items-center gap-3">
            <div className="rounded-[10px] w-8 h-8 grid place-items-center bg-black/40 border" style={{ borderColor: "#fff3" }}>
              <SquareAppIcon />
            </div>
            <h4 className="text-xl font-extrabold tracking-tight">{service.title}</h4>
          </div>
          <p className="mt-3 max-w-md text-white/85 text-sm leading-relaxed" style={{ maxHeight: 56, overflow: "hidden" }}>
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ s }) {
  return (
    <div className="relative z-10" style={{ width: 680, maxWidth: "92vw" }}>
      <div className="absolute inset-0 rounded-[24px]" style={{ boxShadow: `0 0 0 2px ${ACCENT}` }} />
      <div className="relative rounded-[24px] bg-[#0B0B0E] text-white overflow-hidden p-8 md:p-10">
        <div
          className="pointer-events-none absolute -inset-[1px] rounded-[24px]"
          style={{ background: `radial-gradient(85% 60% at 50% 0%, ${ACCENT}22, transparent 60%)`, filter: "blur(18px)" }}
        />
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-[12px] w-10 h-10 grid place-items-center" style={{ background: ACCENT }}>
                <SquareAppIcon />
              </div>
              <h3 className="text-[28px] md:text-[32px] font-extrabold tracking-tight">{s.title}</h3>
            </div>
            <p className="max-w-2xl text-white/85 leading-relaxed font-mono text-[15px]">{s.description}</p>
            <div className="mt-6 flex items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-white text-black font-semibold px-5 py-3 shadow">
                <span className="inline-grid place-items-center rounded-full w-8 h-8" style={{ background: ACCENT }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                    <path d="M4 12a8 8 0 0 1 8-8m0 0a8 8 0 0 1 8 8m-8-8v16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <span>{s.cta}</span>
              </button>
              <button className="w-10 h-10 rounded-full grid place-items-center border" style={{ borderColor: "#fff", background: "transparent" }}>
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {s.tags.map((t) => (
                <span key={t} className="px-4 py-[6px] rounded-full border text-sm" style={{ borderColor: "#fff", color: "#fff", background: "#000" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <PanelIllustration />
          </div>
        </div>
      </div>
    </div>
  );
}

function SideLineArrow({ onClick, side = "left" }) {
  const isLeft = side === "left";
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label={isLeft ? "prev" : "next"}
      className={`z-20 cursor-pointer absolute ${isLeft ? "left-6 md:left-10" : "right-6 md:right-10"} top-1/2 -translate-y-1/2 text-white/90`}
    >
      <svg viewBox="0 0 80 60" width="64" height="48" aria-hidden="true">
        {isLeft ? (
          <path d="M58 30H10M22 18l-12 12 12 12" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M22 30h48M58 18l12 12-12 12" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

export default function ServiceCarousel() {
  const [i, setI] = useState(0);
  const go = (d) => setI((p) => (p + d + SERVICES.length) % SERVICES.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const prev = (i - 1 + SERVICES.length) % SERVICES.length;
  const next = (i + 1) % SERVICES.length;

  return (
    <div className="w-full min-h-[88vh] grid place-items-center px-4" style={{ backgroundColor: "#111111" }}>
      <div className="relative w-full max-w-[1200px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`left-${SERVICES[prev].id}`}
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            animate={{ opacity: 0.95, x: 0, scale: 0.92 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.3 }}
            className="z-0"
          >
            <GhostServiceCard service={SERVICES[prev]} side="left" />
          </motion.div>

          <motion.div
            key={`right-${SERVICES[next].id}`}
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 0.95, x: 0, scale: 0.92 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.3 }}
            className="z-0"
          >
            <GhostServiceCard service={SERVICES[next]} side="right" />
          </motion.div>
        </AnimatePresence>

        <SideLineArrow side="left" onClick={() => go(-1)} />
        <SideLineArrow side="right" onClick={() => go(1)} />

        <div className="relative flex items-center justify-center z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={SERVICES[i].id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              className="mx-auto"
            >
              <ServiceCard s={SERVICES[i]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}