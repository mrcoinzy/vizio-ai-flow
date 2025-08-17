import React from "react";
import { motion } from "framer-motion";

const REFERENCES = [
  {
    id: "gyulai",
    name: "Gyulai Krisztián",
    category: "Életmód coach",
    instagram: "https://www.instagram.com/gyulaieletmod/",
    website: "https://gyulaieletmod.hu/",
    description: "Teljes weboldal és online marketing rendszer",
    avatar: "GK"
  },
  {
    id: "bekesi",
    name: "Békési Ferenc",
    category: "Business mentor",
    instagram: "https://www.instagram.com/holnapsikere/",
    description: "Holnap Sikere márka építése",
    avatar: "BF"
  },
  {
    id: "teralend",
    name: "Teralend Finance",
    category: "Fintech",
    website: "https://teralend.finance/",
    description: "Pénzügyi platform fejlesztése",
    avatar: "TF"
  },
  {
    id: "kalmar",
    name: "Kalmár Balázs",
    category: "Digital marketer",
    instagram: "https://www.instagram.com/kalmar_balazs25/",
    tiktok: "https://www.tiktok.com/@digitalbazsi?_t=ZT-8ywo3vtomaM&_r=1",
    website: "https://balazs-ebook.ailaszlo.com/",
    description: "E-book platform és marketing kampányok",
    avatar: "KB"
  },
  {
    id: "keresztes",
    name: "Keresztes Attila",
    category: "Kreatív stúdió",
    instagram: "https://www.instagram.com/abstractmansstudio/",
    description: "Abstract Mans Studio brand építése",
    avatar: "KA"
  }
];

export default function ReferencesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
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

  return (
    <section id="referenciak" className="min-h-screen w-full bg-[#111111] text-white py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
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
            Akik már tapasztalták a Nexus AI sebességét
          </h2>
          <p className="mt-3 text-sm/6 text-white/70 md:text-base/7 max-w-3xl mx-auto">
            Néhány ügyfelünk, akiknek már átadtuk a működő rendszereket. Minden projekt 24-48 órán belül elkészült.
          </p>
        </motion.div>

        {/* References Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {REFERENCES.map((reference) => (
            <motion.div 
              key={reference.id}
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
                <div className="relative z-10 flex flex-col h-full">
                  {/* Avatar */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mb-6 text-white font-bold text-lg">
                    {reference.avatar}
                  </div>
                  
                  {/* Name & Category */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1 text-white">
                      {reference.name}
                    </h3>
                    <p className="text-[#9900FF] text-sm font-medium">
                      {reference.category}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/70 leading-relaxed mb-6 text-sm flex-grow">
                    {reference.description}
                  </p>

                  {/* Links */}
                  <div className="space-y-2">
                    {reference.website && (
                      <a 
                        href={reference.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18v-9" />
                        </svg>
                        Weboldal
                      </a>
                    )}
                    {reference.instagram && (
                      <a 
                        href={reference.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        Instagram
                      </a>
                    )}
                    {reference.tiktok && (
                      <a 
                        href={reference.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.914-1.253-2.134-1.091-3.285h-3.414v14.844c0 2.362-1.919 4.281-4.281 4.281-2.362 0-4.281-1.919-4.281-4.281 0-2.362 1.919-4.281 4.281-4.281.297 0 .587.031.866.089v-3.5c-.284-.035-.574-.053-.866-.053-4.281 0-7.75 3.469-7.75 7.75s3.469 7.75 7.75 7.75 7.75-3.469 7.75-7.75V8.804a9.65 9.65 0 005.836 1.951v-3.5a6.132 6.132 0 01-2.22-.693z"/>
                        </svg>
                        TikTok
                      </a>
                    )}
                  </div>
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
            Nagyobb szintre emelem a vállalkozásomat
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}