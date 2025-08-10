import React from "react";

export default function GlobalBlurLayer() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute w-[70vw] h-[70vw] -left-20 -top-20 rounded-full bg-[hsl(var(--brand))] opacity-30 blur-[140px]" />
      <div className="absolute w-[60vw] h-[60vw] right-[-15vw] top-[40vh] rounded-full bg-[hsl(var(--foreground))] opacity-10 blur-[160px]" />
    </div>
  );
}
