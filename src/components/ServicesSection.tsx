import React from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "web",
    title: "Nexus Web — Weboldal 24h",
    description: "Mit kapsz: 1 oldalas vagy mini-site (3–5 szekció), mobil-first, gyors betöltés, űrlap/naptár, alap SEO, jogi oldal sablon, mérés.\nIdő: max. 24 óra.\nÁr: Listaár: 140 000 Ft → Béta ár: 59 000 Ft-tól\nGarancia: ha nem készül el időre, 100% visszatérítés + a kész anyag a tiéd.\nNem fér bele: egyedi backend, komplex webshop (külön csomag).",
    cta: "Kérem a 24h webet",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M2 20h20" />
      </svg>
    )
  },
  {
    id: "video",
    title: "Nexus Video — Mini-Ads 6–7h",
    description: "Mit kapsz: 15–60 mp social/ads videó (script + vágás + felirat + zene/licenc stock), márkához igazítva.\nIdő: max. 7 óra.\nÁr: Listaár: 79 000 Ft → Béta ár: 7 000 Ft-tól (1 formátum, 1 revízió)\nGarancia: ha nem kész, 100% vissza + fájl a tiéd.\nNem fér bele: helyszíni forgatás, színész, 3D (opcióként kérhető).",
    cta: "Kérek egy videót ma",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    )
  },
  {
    id: "marketing",
    title: "Nexus Launch — Kampány & marketing 24–48h",
    description: "Mit kapsz: ajánlat/üzenet csiszolás, 1 landing, 3-részes e-mail sor, 3–5 hirdetésvariáció, alap targeting és mérés.\nIdő: 24–48 óra.\nÁr: Listaár: 89 000 Ft → Béta ár: 29 000 Ft-tól\nGarancia: ha 7 nap alatt nincs mérhető aktivitás (kattintás/lead), díjmentes újratervezés.",
    cta: "Indítsuk el a kampányt",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <rect x="7" y="10" width="3" height="7" />
        <rect x="12" y="6" width="3" height="11" />
        <rect x="17" y="12" width="3" height="5" />
      </svg>
    )
  },
  {
    id: "app",
    title: "Nexus App — App/MVP 48h",
    description: "Mit kapsz: egyszerű web/app MVP (auth, űrlapok, lista, alap riport), no-code/low-code + AI, saját domain.\nIdő: ~48 óra.\nÁr: Listaár: 490 000 Ft → Béta ár: 149 000 Ft-tól\nMegjegyzés: nagyvállalati integrációk külön ütem/ár.",
    cta: "Érdekel az MVP 48h alatt",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    )
  }
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="min-h-screen w-full bg-[#111111] text-white py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl leading-snug md:text-4xl md:leading-snug font-semibold mb-6">
            Ahol a multik hónapokig egyeztetnek, mi holnapra leszállítjuk a működő rendszert.
          </h2>
          <p className="mt-3 text-sm/6 text-white/70 md:text-base/7 max-w-3xl mx-auto">
            Nexus AI gyárt, mi emberként felügyelünk. Nincs mellébeszélés, nincs „majd jövő hónapban": 24–48 órán belül kézzelfogható eredményt kapsz – webet, videót, kampányt vagy egy működő app-MVP-t. Határidő-garancia + 100% pénzvisszafizetés. Ha csúszunk, visszautalunk – és az elkészült anyag akkor is a tiéd.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 overflow-hidden shadow-lg">
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20 mb-6">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 leading-relaxed mb-6 whitespace-pre-line">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-[#9900FF] text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    {service.cta}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-white/70 mb-8">
            Készen állsz a következő szintre lépni?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#9900FF] text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Beszéljünk a projektedről
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}