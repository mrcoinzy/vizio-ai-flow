import React from "react";

// Közös háttér a hero és a következő szekció számára
// A design rendszer tokenjeit használja (hsl var(--brand), stb.)
export default function SharedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-visible">
      {/* Bal felső nagy lila glow */}
      <div className="absolute -left-40 -top-40 h-[720px] w-[720px] rounded-full opacity-60 blur-[140px] bg-[hsl(var(--brand))]" />

      {/* Jobb oldali lila glow */}
      <div className="absolute -right-40 top-24 h-[680px] w-[680px] rounded-full opacity-70 blur-[140px] bg-[hsl(var(--brand))]" />

      {/* Finom grid az egész oldalra */}
      <div className="grid-overlay absolute inset-0 opacity-[0.12]" />

      {/* Balról érkező koncentrikus ívek – nagyobb méretben, hogy átlógjon a következő szekcióba is */}
      <div className="ring-gradient" style={{ bottom: "-220px", left: "-360px" }} />
    </div>
  );
}
