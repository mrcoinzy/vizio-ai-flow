import React from "react";
import { Instagram, Music } from "lucide-react";

export default function Footer() {
  const sections = [
    { name: "Főoldal", href: "#" },
    { name: "Szolgáltatásaim", href: "#szolgaltatasok" },
    { name: "Referenciáim", href: "#referenciak" },
    { name: "Kapcsolat", href: "#kapcsolat" }
  ];

  return (
    <footer className="text-white py-12 px-4" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo section */}
          <div className="flex justify-center md:justify-start">
            <img 
              src="/lovable-uploads/23331ebe-3999-4522-ad66-7af6c42ff357.png" 
              alt="AI László logó" 
              className="h-20 select-none" 
              draggable={false} 
            />
          </div>

          {/* Navigation sections */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-white font-semibold text-lg">Menü</h3>
            <nav className="flex flex-col items-center space-y-3">
              {sections.map((section) => (
                <a
                  key={section.name}
                  href={section.href}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {section.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social media and legal */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg text-center md:text-right">Közösségi média</h3>
              <div className="flex gap-4 justify-center md:justify-end">
                <a
                  href="https://www.instagram.com/ailaszlo.startup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full hover:bg-[#9900FF] transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.tiktok.com/@ailaszlo.startup?_t=ZT-8z0eB2f2mAB&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full hover:bg-[#9900FF] transition-all duration-300 group"
                >
                  <Music className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div className="space-y-3 text-center md:text-right">
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-white/70 hover:text-white transition-colors text-sm"
                >
                  Jogi nyilatkozat
                </a>
                <a
                  href="#"
                  className="block text-white/70 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            Minden jog fenntartva AI László
          </p>
        </div>
      </div>
    </footer>
  );
}