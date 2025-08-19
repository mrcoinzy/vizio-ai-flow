import React from "react";
import { Instagram, Mail } from "lucide-react";

// --- TikTok ikon (egyszerű, vektoros) – natív JS ---
const TikTokIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" aria-hidden className={className}>
    <path d="M34.7 12.9c2.2 2 4.9 3.3 7.9 3.7v7.1c-2.9-.2-5.7-1.1-8.2-2.5v10.5c0 8.7-7.1 15.6-15.9 15.6S2.7 40.4 2.7 31.7 9.8 16 18.5 16c1.2 0 2.4.1 3.6.4v7.7c-1.1-.4-2.3-.6-3.6-.6-4.8 0-8.6 3.8-8.6 8.5s3.9 8.5 8.6 8.5c4.8 0 8.6-3.8 8.6-8.5V2h7.9c0 3.9.9 7.4 2.7 10.9z" fill="currentColor" />
  </svg>
);

// --- Navigációs linkek (középső footer oszlop) ---
const NAV_LINKS = [
  { label: "Kezdőlap", href: "#home" },
  { label: "Szolgáltatások", href: "#services" },
  { label: "Referenciák", href: "#references" },
  { label: "Kapcsolat", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-8">
      {/* FEJLÉC ALATTI VONALAK ELTÁVOLÍTVA – nincs hr/border */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Bal: logó + szlogen + email */}
        <div className="flex flex-col gap-3">
          <a href="#home" className="inline-flex items-center gap-3 group">
            <img 
              src="/lovable-uploads/23331ebe-3999-4522-ad66-7af6c42ff357.png" 
              alt="Ai László logó" 
              className="h-27 w-auto opacity-90 group-hover:opacity-100 transition" 
            />
            <span className="sr-only">Vissza a kezdőlapra</span>
          </a>
          {/* Kért szlogen (ponttal együtt) */}
          <p className="text-sm text-white/70">.Clearity that converts</p>
          <a href="mailto:hello@ailaszlo.com" className="inline-flex items-center gap-2 text-white/80 hover:text-white mt-1">
            <Mail className="h-5 w-5" /> hello@ailaszlo.com
          </a>
        </div>

        {/* Közép: szekciók */}
        <nav className="mx-auto -translate-x-4 sm:-translate-x-6 lg:-translate-x-8">
          <ul className="flex flex-nowrap items-center gap-x-6 text-white/80">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white transition">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Jobb: közösségi + jogi */}
        <div className="flex flex-col md:items-end gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/ailaszlo.startup/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram – @ailaszlo.startup"
              className="relative inline-flex p-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5"
            >
              <Instagram className="h-5 w-5 text-white" />
              <span className="pointer-events-none absolute -inset-2 -z-10 opacity-40 blur-xl" style={{ background: "radial-gradient(closest-side, #d62976, transparent)" }} />
            </a>
            <a
              href="https://www.tiktok.com/@ailaszlo.startup?_t=ZT-8z0eB2f2mAB&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok – @ailaszlo.startup"
              className="relative inline-flex p-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5"
            >
              <TikTokIcon className="h-5 w-5 text-white" />
              <span className="pointer-events-none absolute -inset-2 -z-10 opacity-40 blur-xl" style={{ background: "radial-gradient(closest-side, #00f2ea, transparent)" }} />
            </a>
          </div>

          <div className="flex flex-wrap md:justify-end items-center gap-x-6 gap-y-2 text-sm">
            <a href="/jogi-nyilatkozat" className="text-white/75 hover:text-white">Jogi nyilatkozat</a>
            <a href="/adatkezeles" className="text-white/75 hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* Alsó lábrész – nincs felső border/HR */}
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-white/60">
          Minden jog fenntartva © {new Date().getFullYear()} Ai László
        </div>
      </div>
    </footer>
  );
}