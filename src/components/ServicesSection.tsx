import React from "react";
import { motion } from "framer-motion";
const SERVICES = [{
  id: "web",
  title: "Nexus Web",
  subtitle: "Weboldal 24h alatt",
  description: "1 oldalas vagy mini-site (3–5 szekció), mobil-first, gyors betöltés, űrlap/naptár, alap SEO, jogi oldal sablon, mérés.",
  time: "max. 24 óra",
  price: "59 000 Ft-tól",
  originalPrice: "140 000 Ft",
  guarantee: "100% visszatérítés + kész anyag a tiéd",
  notIncluded: "egyedi backend, komplex webshop",
  cta: "Kérem a 24h webet",
  icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M2 20h20" />
      </svg>
}, {
  id: "video",
  title: "Nexus Video",
  subtitle: "Mini-Ads 6–7h alatt",
  description: "15–60 mp social/ads videó (script + vágás + felirat + zene/licenc stock), márkához igazítva.",
  time: "max. 7 óra",
  price: "7 000 Ft-tól",
  originalPrice: "79 000 Ft",
  guarantee: "100% vissza + fájl a tiéd",
  notIncluded: "helyszíni forgatás, színész, 3D",
  cta: "Kérek egy videót ma",
  icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
}, {
  id: "marketing",
  title: "Nexus Launch",
  subtitle: "Kampány & marketing 24–48h",
  description: "Ajánlat/üzenet csiszolás, 1 landing, 3-részes e-mail sor, 3–5 hirdetésvariáció, alap targeting és mérés.",
  time: "24–48 óra",
  price: "29 000 Ft-tól",
  originalPrice: "89 000 Ft",
  guarantee: "7 nap alatt nincs aktivitás = díjmentes újratervezés",
  notIncluded: "",
  cta: "Indítsuk el a kampányt",
  icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <rect x="7" y="10" width="3" height="7" />
        <rect x="12" y="6" width="3" height="11" />
        <rect x="17" y="12" width="3" height="5" />
      </svg>
}, {
  id: "app",
  title: "Nexus App",
  subtitle: "Hamarosan",
  description: "Egyszerű web/app MVP (auth, űrlapok, lista, alap riport), no-code/low-code + AI, saját domain.",
  time: "~48 óra",
  price: "149 000 Ft-tól",
  originalPrice: "490 000 Ft",
  guarantee: "Határidő-garancia",
  notIncluded: "nagyvállalati integrációk",
  cta: "Hamarosan elérhető",
  icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
}];
export default function ServicesSection() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return <section className="min-h-screen w-full bg-[#111111] text-white py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }} className="text-center mb-16">
          <h2 className="text-2xl leading-snug md:text-4xl md:leading-snug font-semibold mb-6">
            Ahol a multik hónapokig egyeztetnek, mi holnapra leszállítjuk a működő rendszert.
          </h2>
          <p className="mt-3 text-sm/6 text-white/70 md:text-base/7 max-w-3xl mx-auto">Nexus AI gyárt, mi emberként felügyelünk. Nincs mellébeszélés, nincs „majd jövő hónapban": 24–48 órán belül kézzelfogható eredményt kapsz webet, videót, kampányt.</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-50px"
      }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => <motion.div key={service.id} variants={itemVariants} whileHover={{
          y: -10,
          scale: 1.02,
          transition: {
            duration: 0.2
          }
        }} className="group relative">
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 overflow-hidden shadow-lg">
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20 mb-6 w-fit">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1 text-white">
                      {service.title}
                    </h3>
                    <p className="text-[#9900FF] text-sm font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/70 leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  {/* Info Grid */}
                  <div className="space-y-3 mb-6 flex-grow">
                    {/* Time */}
                    <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-white/5">
                      <span className="text-white/60 text-xs">Idő:</span>
                      <span className="text-white font-medium text-sm">{service.time}</span>
                    </div>
                    
                    {/* Price */}
                    <div className="flex justify-between items-center py-2 px-3 rounded-lg bg-white/5">
                      <span className="text-white/60 text-xs">Béta ár:</span>
                      <div className="text-right">
                        <span className="text-[#9900FF] font-bold text-sm">{service.price}</span>
                        <div className="text-white/40 text-xs line-through">{service.originalPrice}</div>
                      </div>
                    </div>

                    {/* Guarantee */}
                    <div className="py-2 px-3 rounded-lg bg-green-500/10 border border-green-500/20">
                      <span className="text-green-400 text-xs font-medium">Garancia: {service.guarantee}</span>
                    </div>

                    {/* Not Included */}
                    {service.notIncluded && <div className="py-2 px-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                        <span className="text-orange-400 text-xs">Nem tartalmazza: {service.notIncluded}</span>
                      </div>}
                  </div>

                  {/* CTA Button */}
                  <motion.button whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} className="w-full px-6 py-3 bg-[#9900FF] text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 mt-auto">
                    {service.cta}
                  </motion.button>
                </div>
              </div>
            </motion.div>)}
        </motion.div>

        {/* Call to Action */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3
      }} className="text-center mt-16">
          <p className="text-lg text-white/70 mb-8">Határidő-garancia + 100% pénzvisszafizetés. Ha csúszunk, visszautalunk és az elkészült anyag akkor is a tiéd.</p>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="px-8 py-4 bg-[#9900FF] text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Beszéljünk a projektedről
          </motion.button>
        </motion.div>
      </div>
    </section>;
}