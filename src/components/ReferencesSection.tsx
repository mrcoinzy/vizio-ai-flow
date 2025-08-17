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
    cover: { headline: "Black & Gold Luxury", sub: "DPBSS + rejtett pszichológia" },
  },
  {
    id: "quickfix",
    client: "Quickfix",
    title: "Szerviz app – 0→1 MVP és bejövő lead-rendszer",
    industry: "Szolgáltatás",
    country: "HU",
    year: "2025",
    tags: ["App", "Weboldal", "Automatizálás"],
    metrics: { leads: "+196% qualified", conv: "2,9% → 9,4%", roi: "ROI 3,7x" },
    cover: { headline: "AI-vezérelt jegykezelés", sub: "Időpontfoglalás + admin panel" },
  },
  // === Ügyfelek (felhasználó által megadva) ===
  {
    id: "gyulai-krisztian",
    client: "Gyulai Krisztián",
    title: "Életmód márka – web + IG ökoszisztéma",
    industry: "Egészség / Életmód",
    country: "HU",
    year: "2025",
    tags: ["Márka", "Weboldal", "Videó"],
    metrics: { leads: "+54% érdeklődő", conv: "1,4% → 3,1%", roi: "ROI 2,4x" },
    cover: { headline: "Gyulai Életmód", sub: "Tudatos élet – hitelesen" },
    links: [
      { label: "Instagram", url: "https://www.instagram.com/gyulaieletmod/" },
      { label: "Weboldal", url: "https://gyulaieletmod.hu/" },
    ],
  },
  {
    id: "bekesi-ferenc",
    client: "Békési Ferenc (Holnap Sikere)",
    title: "Motivációs márka – IG csatorna optimalizálás",
    industry: "Oktatás / Motiváció",
    country: "HU",
    year: "2025",
    tags: ["Márka", "Videó", "Weboldal"],
    metrics: { leads: "+72% qualified", conv: "1,1% → 2,6%", roi: "ROI 1,9x" },
    cover: { headline: "Holnap Sikere", sub: "Tartalom → közösség" },
    links: [
      { label: "Instagram", url: "https://www.instagram.com/holnapsikere/" },
    ],
  },
  {
    id: "teralend-finance",
    client: "Teralend Finance",
    title: "Pénzügyi szolgáltató – web és konverziós alapok",
    industry: "Pénzügy / Fintech",
    country: "HU",
    year: "2025",
    tags: ["Weboldal", "Márka"],
    metrics: { leads: "+33% érdeklődő", conv: "2,2% → 3,4%", roi: "ROI 2,7x" },
    cover: { headline: "Teralend", sub: "Átlátható pénzügyek" },
    links: [
      { label: "Weboldal", url: "https://teralend.finance/" },
    ],
  },
  {
    id: "kalmar-balazs",
    client: "Kalmár Balázs",
    title: "Digitális termék funnel – kampány és márka",
    industry: "E-kereskedelem / Oktatás",
    country: "HU",
    year: "2025",
    tags: ["Weboldal", "Márka", "Videó"],
    metrics: { leads: "+128% érdeklődő", conv: "1,8% → 5,2%", roi: "ROI 4,1x" },
    cover: { headline: "DigitalBazsi", sub: "E-book tölcsér" },
    links: [
      { label: "Instagram", url: "https://www.instagram.com/kalmar_balazs25/" },
      { label: "TikTok", url: "https://www.tiktok.com/@digitalbazsi?_t=ZT-8ywo3vtomaM&_r=1" },
      { label: "Weboldal", url: "https://balazs-ebook.ailaszlo.com/" },
    ],
  },
  {
    id: "keresztes-attila",
    client: "Keresztes Attila",
    title: "Kreatív stúdió – IG arculat és rendszer",
    industry: "Kreatív / Stúdió",
    country: "HU",
    year: "2025",
    tags: ["Márka", "Videó", "Weboldal"],
    metrics: { leads: "+41% érdeklődő", conv: "0,9% → 2,3%", roi: "ROI 1,7x" },
    cover: { headline: "Abstractmans Studio", sub: "Portfólió és tartalom" },
    links: [
      { label: "Instagram", url: "https://www.instagram.com/abstractmansstudio/" },
    ],
  },
];

const logoRow = [
  "AI László",
  "The Adriatic Dream",
  "Quickfix",
  "Gyulai Életmód",
  "Holnap Sikere",
  "Teralend Finance",
  "Kalmár Balázs",
  "Abstractmans Studio",
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
    <div className="group relative rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
        background:
          "radial-gradient(800px 800px at var(--mx) var(--my), var(--accent-500)/0.12 0%, transparent 40%)",
      }} />
      <div className="text-[8px] uppercase tracking-widest text-white/50 leading-none">{label}</div>
      <div className="mt-0.5 text-xs md:text-sm font-medium text-white leading-tight">{value}</div>
    </div>
  );
}

function Tag({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn("px-3 py-1 rounded-full border border-black/10 bg-white text-black hover:bg-white/90 transition-all text-sm")}
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
            <div className="absolute inset-0 load-in-bg"
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

            {Array.isArray(item.links) && item.links.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.links.map((lnk, idx) => (
                  <a
                    key={idx}
                    href={lnk.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 hover:text-white hover:border-white/20"
                  >
                    {lnk.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="opacity-80">
                      <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ))}
              </div>
            )}

            <div className="mt-5 flex items-center justify-between">
              <button
                className="relative inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium bg-white text-black transition-colors"
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

interface FormData {
  name: string;
  email: string;
  website: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  website?: string;
}

export default function ReferenceSectionFuturistic({ accent = "#9900FF", data = defaultReferences }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("Mind");
  // Lead form state
  const [form, setForm] = useState<FormData>({ name: "", email: "", website: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Kötelező";
    if (!validateEmail(form.email)) errs.email = "Érvénytelen e‑mail";
    if (!form.website.trim()) errs.website = "Kötelező";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
    }
  };

  // DEV sanity checks ("test cases")
  if (typeof process !== "undefined" && process.env && process.env.NODE_ENV !== "production") {
    console.assert(Array.isArray(data), "ReferenceSectionFuturistic: 'data' prop must be an array");
    console.assert(typeof accent === "string" && accent.startsWith("#"), "ReferenceSectionFuturistic: 'accent' should be a hex color string");
    console.assert(Array.isArray(logoRow) && logoRow.every((s) => typeof s === "string"), "logoRow must be an array of strings");
    // shape tests for data items
    data.forEach((d, i) => {
      const path = `data[${i}]`;
      console.assert(!!d.id && !!d.client && !!d.title, `${path}: missing id/client/title`);
      console.assert(!!d.cover && !!d.cover.headline && !!d.cover.sub, `${path}: missing cover/headline/sub`);
      console.assert(!!d.metrics && typeof d.metrics === 'object', `${path}: missing metrics`);
      console.assert(['leads','conv','roi'].every(k => k in d.metrics), `${path}: metrics must include leads/conv/roi`);
      console.assert(Array.isArray(d.tags), `${path}: tags must be an array`);
    });
  }

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
    <motion.section
      data-testid="reference-section"
      className="relative w-full overflow-hidden bg-[#0B0D12] text-white"
      style={{ '--accent-500': accent } as React.CSSProperties}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Háttér: csillagmező + radiális fények */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 load-in-bg"
          style={{
            background: `radial-gradient(1400px 800px at 50% -5%, rgba(153,0,255,0.85), transparent 65%),
               radial-gradient(1200px 700px at 50% -5%, rgba(153,0,255,0.50), transparent 75%),
               radial-gradient(700px 500px at 50% -2%, rgba(255,255,255,0.18), transparent 60%)`,
          }}
        />
        <svg className="absolute inset-0 h-full w-full load-in-bg" style={{opacity:0.015}}>
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.6" fill="white" fillOpacity="0.15" />
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
            Eredmények, amik <span className="wave-text">beszélnek helyettem</span>
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">Formát adunk a növekedésnek: a vásárlói út teljes, automatizált ívén.</p>
        </motion.div>

        {/* KPI sor */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 kpi-row">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="text-xs text-white/60 uppercase tracking-widest">Összes projekt</div>
            <div className="mt-1 text-3xl font-semibold text-white">11</div>
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
              data-testid="search-input"
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

        {/* CTA - versenytárselemzés űrlap */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 md:p-10 backdrop-blur-xl">
          <div>
            <h3 className="text-2xl font-semibold text-white">Versenytárselemzés 1 órán belül — ingyen</h3>
            <p className="mt-2 text-white/70">Töltsd ki most, és 60 percen belül elküldjük a <span className="text-white">személyre szabott versenytárselemzést</span>. <span className="text-white">Ingyenes</span> — máshol akár ~30 000 Ft, már ezzel spórolsz.</p>
            <p className="mt-2 text-xs text-white/50">100% kötelezettségmentes. Csak pontos elérhetőséget adj meg, hogy tényleg megérkezzen.</p>
          </div>

          <motion.form data-testid="lead-form" onSubmit={handleSubmit} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
            <div>
              <label className="text-xs text-white/60" htmlFor="lead-name">Név</label>
              <input
                id="lead-name"
                data-testid="input-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Teljes név"
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
              />
              {errors.name && <div className="mt-1 text-[11px] text-red-300">{errors.name}</div>}
            </div>
            <div>
              <label className="text-xs text-white/60" htmlFor="lead-email">E‑mail</label>
              <input
                id="lead-email"
                data-testid="input-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="pl. te@ceged.hu"
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
              />
              {errors.email && <div className="mt-1 text-[11px] text-red-300">{errors.email}</div>}
            </div>
            <div>
              <label className="text-xs text-white/60" htmlFor="lead-website">Weboldal</label>
              <input
                id="lead-website"
                data-testid="input-website"
                type="url"
                required
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                placeholder="https://ceged.hu"
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
              />
              {errors.website && <div className="mt-1 text-[11px] text-red-300">{errors.website}</div>}
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium bg-white text-black hover:bg-white/90"
            >
              Küldés
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {sent && (
              <p className="text-sm text-green-300">Köszönjük! <span className="text-white">1 órán belül</span> küldjük a versenytárselemzést a megadott e‑mail címre.</p>
            )}
          </motion.form>
        </div>
      </div>

      {/* Lokális stílusok: marquee és finom effektek */}
      <style>{`
        .marquee { display: flex; animation: marquee 24s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* Wave gradient only on 'beszélnek helyettem' */
        .wave-text{
          background: linear-gradient(90deg, rgba(255,255,255,0.35), #ffffff, rgba(255,255,255,0.35));
          background-size: 200% 100%;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: waveWhite 5s ease-in-out infinite;
          text-shadow: 0 0 12px rgba(255,255,255,0.25);
        }
        @keyframes waveWhite {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Page-load fades */
        .load-in { opacity: 0; transform: translateY(10px); animation: loadFade 700ms cubic-bezier(.22,.61,.36,1) forwards; }
        .load-in-bg { opacity: 0; animation: bgIn 900ms ease-out forwards; }
        @keyframes loadFade { to { opacity: 1; transform: translateY(0); } }
        @keyframes bgIn { to { opacity: 1; } }

        /* KPI stagger */
        .kpi-row > div { opacity: 0; transform: translateY(10px); animation: loadFade 700ms cubic-bezier(.22,.61,.36,1) forwards; }
        .kpi-row > div:nth-child(1) { animation-delay: .05s }
        .kpi-row > div:nth-child(2) { animation-delay: .15s }
        .kpi-row > div:nth-child(3) { animation-delay: .25s }
        .kpi-row > div:nth-child(4) { animation-delay: .35s }
      `}</style>
    </motion.section>
  );
}