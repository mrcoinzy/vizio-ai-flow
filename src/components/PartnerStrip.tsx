import React from "react";
import { motion } from "framer-motion";

const PARTNERS = [
  "Partner 1",
  "Partner 2", 
  "Partner 3",
  "Partner 4",
  "Partner 5",
  "Partner 6"
];

export default function PartnerStrip() {
  return (
    <div className="w-full bg-black py-12 relative overflow-hidden">
      <div className="relative">
        {/* Animated partner strip */}
        <motion.div
          className="flex items-center gap-12 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        >
          {/* Duplicate partners for seamless loop */}
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-white/60 text-lg font-medium tracking-wide"
            >
              {partner}
            </div>
          ))}
        </motion.div>
        
        {/* Gradient overlays for fade effect */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </div>
  );
}