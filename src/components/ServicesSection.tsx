import React from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "web",
    title: "Webfejlesztés",
    description: "Modern, SEO-optimalizált weboldalak, amelyek konvertálnak és gyorsak.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M2 20h20" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "software",
    title: "Szoftverfejlesztés",
    description: "Testreszabott szoftverek és alkalmazások üzleti folyamatok automatizálására.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Teljes körű digitális marketing stratégia és kampánykezelés.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <rect x="7" y="10" width="3" height="7" />
        <rect x="12" y="6" width="3" height="11" />
        <rect x="17" y="12" width="3" height="5" />
      </svg>
    ),
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "video",
    title: "Videó készítés",
    description: "Professzionális videók márkaépítéshez és marketing célokra.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    color: "from-red-500 to-pink-500"
  },
  {
    id: "app",
    title: "Applikáció készítés",
    description: "Mobile és web alkalmazások fejlesztése modern technológiákkal.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    color: "from-orange-500 to-amber-500"
  },
  {
    id: "social",
    title: "Közösségi média kezelése",
    description: "Teljes körű social media menedzsment és tartalomgyártás.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    color: "from-violet-500 to-purple-500"
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
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Szolgáltatásaim
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Komplex digitális megoldások, amelyek valóban működnek és eredményt hoznak az üzletednek
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
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 group-hover:text-white/90 transition-colors leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                     style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor' }} />
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
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Beszéljünk a projektedről
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}