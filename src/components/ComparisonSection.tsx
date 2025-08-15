import React from "react";
import { motion } from "framer-motion";

export default function ComparisonSection() {
  // Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const containerStagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  return (
    <div className="min-h-screen w-full bg-[hsl(var(--background))] relative overflow-hidden text-white">

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Lead block */}
        <motion.section
          className="max-w-3xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerStagger}
        >
          <motion.h1 className="text-2xl leading-snug md:text-4xl md:leading-snug font-semibold" variants={fadeUp}>
            Ezért buknak el más ügynökségeknél és
            <br className="hidden sm:block" />
            ezért termel nálam a <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #ffffff 0%, #ffffff 45%, #9900FF 55%, #9900FF 100%)" }}>vállalkozásod</span> már
            <br className="hidden sm:block" />
            jövő héten.
          </motion.h1>
          <motion.p
            className="mt-3 text-sm/6 text-white md:text-base/7"
            style={{ textShadow: "0 0 16px #ffffff, 0 0 6px #ffffff, 0 0 1px #ffffff" }}
            variants={fadeUp}
            custom={1}
          >
            Mások hónapokat húznak, hogy minden egyes elemet külön-külön kiszámolhassanak.
            <br className="hidden md:block" />
            Én napok alatt leszállítom a teljes rendszert – egy áron, kompromisszum nélkül.
          </motion.p>
        </motion.section>

        {/* Title */}
        <motion.h2
          className="mt-14 md:mt-20 text-center text-xl md:text-2xl font-semibold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          AI László vs Más ügynökségek
        </motion.h2>

        {/* Cards */}
        <motion.section
          className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerStagger}
        >
          {/* Left card */}
          <Card
            title="Más ügynökségek"
            items={["Weboldal – 1 hónap", "Applikáció – 1 év", "Videó – 2 hét", "Teljes rendszer – hónapok"]}
            total="Összesen: 5.000.000 – 30.000.000 FT"
            variant="dim"
            index={0}
          />

          {/* Middle (highlight) */}
          <Card
            title={
              <div className="flex items-center justify-center gap-2">
                <LogoALaszlo />
                <span>Nálam</span>
              </div>
            }
            items={["Weboldal – 3 óra", "Applikáció – 1 teljes nap", "Videó – 4 óra", "Teljes rendszer – pár nap"]}
            total="Összesen: 149.000 FT"
            variant="highlight"
            index={1}
          />

          {/* Right card */}
          <Card
            title="Szabadúszók"
            items={["Weboldal – 20 nap", "Applikáció – 6 hónap", "Videó – 2 nap", "Teljes rendszer – 1,5 hónap"]}
            total="Összesen: 300.000 – 1.500.000 FT"
            variant="dim"
            index={2}
          />
        </motion.section>

        {/* Footnote */}
        <motion.p
          className="mt-10 md:mt-12 text-center text-xs md:text-sm text-white/60"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Az időd pénz. Minden nap, amikor nincs kész a weboldalad, applikációd vagy értékesítési
          <span className="hidden sm:inline"> </span>
          rendszered, pénzt veszítesz. A legtöbb ügynökségnél ez hónapokig tart – nálam ez pár nap.
          <br className="hidden sm:block" />
          Nálam viszont ez a cél, hogy ne hónapok, hanem heteken belül termeljen, amit építünk!
        </motion.p>
      </main>
    </div>
  );
}

function Card({
  title,
  items,
  total,
  variant = "dim",
  index = 0,
}: {
  title: React.ReactNode;
  items: string[];
  total: string;
  variant?: "dim" | "highlight";
  index?: number;
}) {
  const isHighlight = variant === "highlight";
  return (
    <motion.div
      className={
        "relative rounded-2xl p-6 md:p-8 border backdrop-blur will-change-transform " +
        (isHighlight
          ? "bg-gradient-to-b from-[#8A2BE2]/40 via-[#8A2BE2]/20 to-transparent border-[#8A2BE2]/40 shadow-[0_0_0_1px_rgba(138,43,226,0.3),0_40px_100px_-20px_rgba(138,43,226,0.45)]"
          : "bg-white/5 border-white/10")
      }
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: 0.15 + index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.995 }}
    >
      {/* Glow ring for highlight */}
      {isHighlight && <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-[#8A2BE2]/50" />}

      <div className="text-center text-base md:text-lg font-semibold">{title}</div>
      <ul className="mt-4 space-y-2.5 text-sm md:text-base text-white/90">
        {items.map((it, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-2"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 + index * 0.1 + i * 0.05, duration: 0.4 }}
          >
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/40" />
            <span>{it}</span>
          </motion.li>
        ))}
      </ul>

      <motion.div
        className="mt-6 pt-5 border-t border-white/10 text-center text-xs md:text-sm text-white/70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 + index * 0.1, duration: 0.5 }}
      >
        {total}
      </motion.div>
    </motion.div>
  );
}

function LogoALaszlo() {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-4 w-4">
        <path d="M16 3l12 26h-5.4l-2.3-5.2H11.7L9.4 29H4L16 3zm0 8.7l-3.5 7.7h7.1L16 11.7z" fill="currentColor" />
      </svg>
    </span>
  );
}
