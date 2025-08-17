import React, { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Futurisztikus Referencia Szekció
 * - Tailwind CSS + Framer Motion
 * - Üveg-hatás (glassmorphism), neon keretek, parallax/tilt, végtelen logó-szalag
 * - Kategória szűrők, kereső, KPI sor, esettanulmány kártyák, ügyfél-vélemény slider
 *
 * Használat:
 * <ReferenceSectionFuturistic accent="#9900FF" />
 */

const defaultReferences = [
  {
    id: "adriatic",
    client: "The Adriatic Dream",
    title: "Luxus apartman – teljes funnel (web + foglalás + hirdetés)",
    industry: "Turizmus / Ingatlan",
    country: "HR",
    year: "2025",
    tags: ["Weboldal", "Automatizálás", "Márka"],
    metrics: {
      leads: "+342% érdeklődő",
      conv: "6,2% → 14,8%",
      roi: "ROI 5,1x",
    },
    cover: {
      headline: "Black & Gold Luxury",
      sub: "DPBSS + rejtett pszichológia",
    },
  },
  {
    id: "quickfix",
    client: "Quickfix",
    title: "Szerviz app – 0→1 MVP és bejövő lead-rendszer",
    industry: "Szolgáltatás",
    country: "HU",
    year: "2025",
    tags: ["App", "Weboldal", "Automatizálás"],
    metrics: {
      leads: "+196% qualified",
      conv: "2,9% → 9,4%",
      roi: "ROI 3,7x",
    },
    cover: {
      headline: "AI-vezérelt jegykezelés",
      sub: "Időpontfoglalás + admin panel",
    },
  },
  {
    id: "ailaszlo",
    client: "AI László",
    title: "Személyes márka – ügyfélszerző ökoszisztéma",
    industry: "Ügynökség / AI",
    country: "AT",
    year: "2025",
    tags: ["Márka", "Videó", "Weboldal", "Automatizálás"],
    metrics: {
      leads: "+77 DM/11 nap",
      conv: "IG konverzió +3,1x",
      roi: "Organic boost",
    },
    cover: {
      headline: "Fekete–fehér minimal",
      sub: "Lila highlight (#9900FF)",
    },
  },
];

const logoRow = [
  "AI László",
  "The Adriatic Dream",
  "Quickfix",
  "Supabase",
  "Lovable.dev",
  "CapCut",
  "Make.com",
  "Tempo",
];

const categories = ["Mind", "Weboldal", "App", "Automatizálás", "Videó", "Márka"];

function cn(...a) {
  return a.filter(Boolean).join(" ");
}

function useTilt() {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rX = (py - 0.5) * -8; // tilt X
    const rY = (px - 0.5) * 8; // tilt Y
    setStyle({ transform: `rotateX(${rX}deg) rotateY(${rY}deg)` });
  };
  const onLeave = () => setStyle({ transform: "rotateX(0) rotateY(0)" });
  return { ref, style, onMouseMove, onLeave };
}

function Metric({ label, value }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
        background:
          "radial-gradient(1200px 1200px at var(--mx) var(--my), var(--accent-500)/0.15 0%, transparent 45%)",
      }} />
      <div className="text-xs uppercase tracking-widest text-white/60">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-white">{value}</div>
    </div>
  );
}

function Tag({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1 rounded-full border transition-all text-sm",
        active
          ? "border-white/30 bg-white/10 text-white shadow-[0_0_20px_var(--accent-500)]"
          : "border-white/10 text-white/70 hover:border-white/20 hover:text-white"
      )}
    >
      {children}
    </button>
  );
}

function Card({ item, accent }) {
  const { ref, style, onMouseMove, onLeave } = useTilt();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        ref={ref}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
          e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
          onMouseMove(e);
        }}
        onMouseLeave={onLeave}
        style={style}
        className="group relative h-full rounded-3xl border border-white/10 bg-white/5 p-0.5 backdrop-blur-xl transition-all duration-300 hover:border-white/20"
      >
        <div className="relative rounded-[22px] h-full overflow-hidden">
          {/* Neon edge */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                `radial-gradient(800px 300px at var(--mx) var(--my), ${accent}22 0%, transparent 40%)`,
            }}
          />

          {/* Cover */}
          <div className="relative h-40">
            <div
              className="absolute inset-0"
              style={{
                background:
                  `linear-gradient(135deg, ${accent}33 0%, transparent 50%), radial-gradient(1000px_400px_at_80%_20%, ${accent}29, transparent 35%), linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0))`,
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="text-white/80 text-sm tracking-widest uppercase">{item.cover.headline}</div>
                <div className="text-white/60 text-xs mt-1">{item.cover.sub}</div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Body */}
          <div className="p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm text-white/70">{item.client}</div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest">{item.country} • {item.year}</div>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-white/60">{item.industry}</p>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <Metric label="Lead" value={item.metrics.leads} />
              <Metric label="Konverzió" value={item.metrics.conv} />
              <Metric label="Eredmény" value={item.metrics.roi} />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <button
                className="relative inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-white transition-colors"
                style={{
                  background: `linear-gradient(90deg, ${accent} 0%, ${accent}88 100%)`,
                }}
              >
                Esettanulmány megnyitása
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <a href="#" className="text-sm text-white/60 hover:text-white/90">Megosztás</a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ReferencesSection({ accent = "#9900FF", data = defaultReferences }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("Mind");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return data.filter((d) => {
      const inCat = cat === "Mind" || d.tags.includes(cat);
      const inQ = !q ||
        d.client.toLowerCase().includes(q) ||
        d.title.toLowerCase().includes(q) ||
        d.industry.toLowerCase().includes(q) ||
        d.tags.join(" ").toLowerCase().includes(q);
      return inCat && inQ;
    });
  }, [data, query, cat]);

  return (
    <section
      id="referenciak"
      className="relative w-full overflow-hidden bg-[#0B0D12] text-white"
      style={{
        // Globális CSS változók az effektekhez
        "--accent-500": accent,
      } as React.CSSProperties}
    >
      {/* Háttér: csillagmező + radiális fények */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 600px at 10% -20%, rgba(153,0,255,0.20), transparent 60%), radial-gradient(1000px 600px at 90% 0%, rgba(99,102,241,0.14), transparent 60%)",
          }}
        />
        <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Cím */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
            <span className="text-xs tracking-widest text-white/70 uppercase">Referenciák</span>
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-white">
            Eredmények, amik <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${accent}, #ffffff)` }}>beszélnek helyettem</span>
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Modern, futurisztikus megjelenés. Ügyfélszerző rendszerben gondolkodunk: web, app, automatizálás, videó és márka.
          </p>
        </motion.div>

        {/* KPI sor */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-xs text-white/60 uppercase tracking-widest">Összes projekt</div>
            <div className="mt-1 text-3xl font-semibold text-white">120+</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-xs text-white/60 uppercase tracking-widest">Átlagos átfutás</div>
            <div className="mt-1 text-3xl font-semibold text-white">9 nap</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-xs text-white/60 uppercase tracking-widest">NPS</div>
            <div className="mt-1 text-3xl font-semibold text-white">91</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-xs text-white/60 uppercase tracking-widest">Max. ROI</div>
            <div className="mt-1 text-3xl font-semibold text-white">11,3x</div>
          </div>
        </div>

        {/* Szűrők + keresés */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <Tag key={c} active={c === cat} onClick={() => setCat(c)}>
                {c}
              </Tag>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Keresés név, iparág, cím szerint…"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-10 py-2.5 text-white placeholder:text-white/40 outline-none backdrop-blur-xl focus:border-white/20"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="white" opacity=".5" />
              <path d="M20 20l-3.5-3.5" stroke="white" opacity=".5" />
            </svg>
          </div>
        </div>

        {/* Végtelen logó-szalag */}
        <div className="mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.7), transparent 20%, transparent 80%, rgba(0,0,0,0.7))" }} />
            <div className="marquee flex items-center gap-10 py-6">
              {[...logoRow, ...logoRow].map((l, i) => (
                <div key={i} className="whitespace-nowrap text-white/70 text-sm md:text-base">
                  <span className="opacity-60">▸</span> {l}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Kártyák */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <Card key={item.id} item={item} accent={accent} />
            ))}
          </AnimatePresence>
        </div>

        {/* Ügyfél-vélemény slider */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-semibold text-white">Mit mondanak az ügyfelek?</h3>
            <div className="text-xs text-white/60 uppercase tracking-widest">Hitelesség • Minőség • Sebesség</div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Lukács Nikolasz",
                role: "Vállalkozó",
                quote:
                  "Két hét alatt olyan rendszert kaptunk, amit mások 2–3 hónap alatt sem tudtak volna összerakni. A leadek minősége látványosan javult.",
              },
              {
                name: "Anna K.",
                role: "Projektmenedzser",
                quote:
                  "A dizájn modern, mégis letisztult. Az automatizálások rengeteg manuális munkát kiváltottak – imádom az átláthatóságot.",
              },
              {
                name: "Bence T.",
                role: "Marketing vezető",
                quote:
                  "Az első hét után már láttuk a számokban. A konverzió több mint duplázódott, a csapat pedig gyorsan tanulta a rendszert.",
              },
            ].map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80"
              >
                <svg className="absolute -top-3 -left-3" width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <path d="M7 11h4v8H5v-6c0-3.866 3.134-7 7-7" stroke="white" opacity=".2" />
                  <path d="M17 11h4v8h-6v-6c0-3.866 3.134-7 7-7" stroke="white" opacity=".2" />
                </svg>
                <p className="text-sm leading-relaxed">{t.quote}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-white/30 to-transparent border border-white/20" />
                  <div>
                    <div className="text-sm text-white">{t.name}</div>
                    <div className="text-xs text-white/50">{t.role}</div>
                  </div>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 md:p-10 backdrop-blur-xl">
          <div>
            <h3 className="text-2xl font-semibold text-white">Ugyanezt kéred a vállalkozásodnak?</h3>
            <p className="mt-1 text-white/70">Írj két mondatot a célodról, és 24 órán belül kapsz egy rövid, konkrét tervet.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white"
            style={{ background: `linear-gradient(90deg, ${accent}, ${accent}88)` }}
          >
            Kérem a tervet
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lokális stílusok: marquee és finom effektek */}
      <style>{`
        .marquee { display: flex; animation: marquee 24s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}