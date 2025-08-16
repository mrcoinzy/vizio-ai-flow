import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ScrollNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling down past 100px
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling up or at top
      else if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/20 border-b border-white/10"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-5">
              <div className="relative flex items-center">
                <img 
                  src="/lovable-uploads/23331ebe-3999-4522-ad66-7af6c42ff357.png" 
                  alt="László logó" 
                  className="h-12 select-none" 
                  draggable={false} 
                />
              </div>
              <nav className="hidden items-center gap-6 text-sm md:flex">
                <a className="text-white/80 transition-colors hover:text-white" href="#">Főoldal</a>
                <a className="text-white/80 transition-colors hover:text-white" href="#">Szolgáltatásaim</a>
                <a className="text-white/80 transition-colors hover:text-white" href="#">Referenciáim</a>
                <a className="text-white/80 transition-colors hover:text-white" href="#kapcsolat">Kapcsolat</a>
              </nav>
            </div>
            <Button asChild variant="hero" size="sm" className="px-5 py-3 rounded-full">
              <a href="#kapcsolat" className="group inline-flex items-center gap-2">
                <span>Felveszem most a kapcsolatot!</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </Button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}