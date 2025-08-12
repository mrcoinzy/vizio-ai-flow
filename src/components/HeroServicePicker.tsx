import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Inline ikonok (TSX)
const IconPhone: React.FC<React.SVGProps<SVGSVGElement>> = (p) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);
const IconLaptop: React.FC<React.SVGProps<SVGSVGElement>> = (p) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M2 20h20" />
  </svg>
);
const IconChart: React.FC<React.SVGProps<SVGSVGElement>> = (p) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 3v18h18" />
    <rect x="7" y="10" width="3" height="7" />
    <rect x="12" y="6" width="3" height="11" />
    <rect x="17" y="12" width="3" height="5" />
  </svg>
);
const IconBrush: React.FC<React.SVGProps<SVGSVGElement>> = (p) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M14.5 5.5l4 4" />
    <path d="M4 20s4-1 6-3 7-7 7-7l-4-4s-5 5-7 7-3 6-3 6z" />
  </svg>
);
const IconBot: React.FC<React.SVGProps<SVGSVGElement>> = (p) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="4" y="8" width="16" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v1" />
    <circle cx="9" cy="13" r="1" />
    <circle cx="15" cy="13" r="1" />
  </svg>
);
const IconChevronDown: React.FC<React.SVGProps<SVGSVGElement>> = (p) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// Adatok
type Service = {
  id: string;
  title: string;
  tagline: string;
  body: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const SERVICES: Service[] = [
  {
    id: "branding",
    title: "Arculat & dizájn",
    tagline: "Arculat, ami első látásra meggyőz.",
    body: "Egységes vizuális rendszer: logó, tipográfia, színpaletta és sablonok – mind konzisztensen, gyorsan.",
    Icon: IconBrush,
  },
  {
    id: "analytics",
    title: "Teljesítménymérés",
    tagline: "Számokból döntés. Nem érzésből.",
    body: "Dashboardok és metrikák, amelyek valóban mozgatják az üzletet. Funnel, CAC, LTV, retention – átlátható, automatikus.",
    Icon: IconChart,
  },
  {
    id: "app",
    title: "Applikáció készítés",
    tagline: "Mobilfejlesztés, ami nem húzódik egy évig.",
    body: "A konkurencia hónapokig húzza a fejlesztést, hogy drágább legyen. Nálam a gyorsaság nem a minőség rovására megy, hanem az AI erejével gyorsítjuk a munkát. Nincs hónapokig tartó fejlesztés, nincs felesleges költség.",
    Icon: IconPhone,
  },
  {
    id: "web",
    title: "Webfejlesztés",
    tagline: "Weboldal, ami konvertál – rekordidő alatt.",
    body: "SEO-barát, villámgyors, reszponzív. Landingek, multi-page rendszerek és headless CMS – üzleti célokra optimalizálva.",
    Icon: IconLaptop,
  },
  {
    id: "automation",
    title: "AI automatizáció",
    tagline: "Embert kímél, pénzt termel, 24/7.",
    body: "Robotpilóta a háttérben: lead-kezelés, ügyfélkommunikáció, riportok és folyamatok. Kevesebb manuális munka, több profit.",
    Icon: IconBot,
  },
];

// Kiemelés részstringre
function Highlight({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(highlight.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="underline decoration-[#9900FF] decoration-2 underline-offset-4">
        {text.slice(idx, idx + highlight.length)}
      </span>
      {text.slice(idx + highlight.length)}
    </>
  );
}

export default function HeroServicePicker() {
  const [index, setIndex] = useState(2);

  // Félkör geometriája
  const visible = 5;
  const radius = 340;
  const startDeg = -70;
  const endDeg = 70;

  const positions = useMemo(() => {
    return SERVICES.map((_, i) => {
      const raw = i - index;
      const half = Math.floor(SERVICES.length / 2);
      let o = raw;
      if (o > half) o -= SERVICES.length;
      if (o < -half) o += SERVICES.length;
      return o;
    });
  }, [index]);

  const angleFor = (pos: number) => {
    const step = (endDeg - startDeg) / (visible - 1);
    const order = pos + (visible - 1) / 2; // -2..+2 -> 0..4
    return startDeg + order * step;
  };

  const polar = (deg: number) => {
    const r = (Math.PI / 180) * deg;
    return { x: radius * Math.cos(r), y: radius * Math.sin(r) };
  };

  const onDragEnd = (_: any, info: any) => {
    const dx = info?.offset?.x ?? 0;
    const threshold = 40;
    if (Math.abs(dx) < threshold) return;
    const steps = Math.min(2, Math.max(1, Math.floor(Math.abs(dx) / 140)));
    setIndex((i) => (dx < 0 ? (i + steps) % SERVICES.length : (i - steps + SERVICES.length) % SERVICES.length));
  };

  const active = SERVICES[index];
  const ActiveIcon = active.Icon;

  // Nyílbillentyű navigáció
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + SERVICES.length) % SERVICES.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % SERVICES.length);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  return (
    <div className="relative overflow-visible">
      {/* háttér-glow csak lokálisan, nem teljes képernyőn */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[radial-gradient(closest-side,#7c3aed_15%,transparent_60%)] opacity-30 blur-3xl" />
      </div>

      <div className="relative">
        <h3 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight max-w-3xl">
          Minden, amire a gyors növekedéshez
          <br />
          szükséged van egy <span className="bg-gradient-to-r from-white to-[#9900FF] bg-clip-text text-transparent">csomagban</span>.
        </h3>
        <p className="mt-4 max-w-2xl text-sm md:text-base text-white/70">
          Nem külön cégeket kell fizetned, nem kell hónapokig várnod. Minden szolgáltatás egy helyről, profi kivitelezéssel és rekordidő alatt.
        </p>

        {/* Felső infó-box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-10 inline-block rounded-2xl border border-[#B983FF]/20 bg-gradient-to-tr from-[#2A1038]/80 via-[#1A0F24]/70 to-[#130A1B]/80 p-6 md:p-7 shadow-[0_0_50px_rgba(153,0,255,0.35)] backdrop-blur"
          >
            <p className="text-lg md:text-xl font-medium">
              <Highlight text={active.tagline} highlight={active.id === "app" ? "húzódik" : ""} />
            </p>
            <p className="mt-3 max-w-3xl text-sm md:text-[15px] leading-relaxed text-white/80">{active.body}</p>
          </motion.div>
        </AnimatePresence>

        {/* Íves, húzható választó */}
        <div className="relative mt-14 h-[460px] select-none">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 h-[420px] w-[880px] rounded-[999px] border-t border-white/10" />
          </div>

          <motion.div className="absolute inset-0" drag="x" dragConstraints={{ left: -240, right: 240 }} onDragEnd={onDragEnd}>
            {SERVICES.map((s, i) => {
              const pos = positions[i];
              if (Math.abs(pos) > 2) return null;
              const angle = angleFor(pos);
              const { x, y } = polar(angle);
              const isActive = i === index;
              const SIcon = s.Icon;

              return (
                <motion.button
                  key={s.id}
                  onClick={() => setIndex(i)}
                  aria-label={`${s.title} kiválasztása`}
                  className="absolute left-1/2 bottom-24 -translate-x-1/2 outline-none"
                  style={{ transform: `translateX(calc(-50% + ${x}px)) translateY(${-y}px)` }}
                  whileHover={{ scale: isActive ? 1.04 : 1.08 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="relative grid place-items-center">
                    {/* külső glow gyűrű */}
                    <div className={`${isActive ? "h-32 w-32" : "h-20 w-20"} rounded-full opacity-70 bg-[radial-gradient(circle,rgba(153,0,255,0.55),transparent_60%)] absolute inset-0 -z-10 blur-xl`} />
                    {/* belső korong */}
                    <div className={`${isActive ? "h-24 w-24" : "h-16 w-16"} rounded-full border ${isActive ? "border-[#B983FF]/50 shadow-[0_0_40px_rgba(153,0,255,0.45)]" : "border-white/15"} bg-[#0E0E14]/80 backdrop-blur grid place-items-center`}>
                      <SIcon className={isActive ? "h-8 w-8" : "h-5 w-5"} />
                    </div>
                  </div>
                  <div className="mt-3 text-center text-xs md:text-sm text-white/70 whitespace-nowrap">{s.title}</div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Középső jelölő */}
          <div className="pointer-events-none absolute inset-x-0 bottom-24 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <IconChevronDown className="h-6 w-6 text-[#B983FF] animate-bounce" />
              <div className="relative grid place-items-center">
                <div className="h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(153,0,255,0.5),transparent_60%)] absolute -z-10 blur-xl" />
                <div className="h-20 w-20 rounded-full border border-[#B983FF]/50 bg-[#170C22]/80 shadow-[0_0_50px_rgba(153,0,255,0.45)] grid place-items-center">
                  <ActiveIcon className="h-8 w-8" />
                </div>
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-wider text-white/60">{active.title}</div>
            </div>
          </div>
        </div>

        <div className="sr-only" aria-live="polite">{active.title} kiválasztva</div>
      </div>
    </div>
  );
}
