import React, { useEffect, useRef, useState } from "react";
import { Instagram, Mail, ArrowRight, Shield, CheckCircle2 } from "lucide-react";

/**
 * Clean JS/React (no TS). Fixes prior SyntaxError by:
 * - Ensuring all JSX tags are properly closed.
 * - Removing corrupted/leftover code after BackgroundLayer.
 * - Injecting CSS from a constant to avoid template-string parsing issues in JSX.
 */

const GLOBAL_STYLES = `
  @keyframes drift { 0%{transform:translate3d(0,0,0);} 50%{transform:translate3d(-3%,2%,0);} 100%{transform:translate3d(0,0,0);} }
  @keyframes panGradient { 0%{background-position:0% 50%;} 100%{background-position:200% 50%;} }
  @keyframes waveGradient { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
  .neon-border{position:relative;}
  .neon-border:before{
    content:""; position:absolute; inset:-1px; border-radius:1.25rem; padding:1px;
    background:conic-gradient(from 0deg,#9900FF,#31d7ff,#00ffa3,#9900FF 95%);
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude; animation:none; /* rotation OFF */
  }
  .grid-overlay{background-image:linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px);background-size:64px 64px,64px 64px;mask-image:radial-gradient(circle at 50% 40%,black 20%,transparent 70%);}
  .sheen{background:linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.25) 50%,rgba(255,255,255,0) 100%);background-size:200% 100%;animation:panGradient 2.4s linear infinite;}
  .wave-text{background-image:linear-gradient(90deg,#9900FF,#31d7ff,#00ffa3,#31d7ff,#9900FF);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:waveGradient 6s ease-in-out infinite;text-shadow:0 0 24px rgba(153,0,255,.3);}
`;

// --- Futurisztikus kontakt + footer oldal ---
export default function ContactSection() {
  return (
    <div className="relative min-h-screen bg-[#111111] text-white" id="kapcsolat">
      {/* Inject global CSS */}
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />
      <BackgroundLayer />
      <main className="relative z-10">
        <HeroHeader />
        <ContactSectionContent />
      </main>
    </div>
  );
}

// --- HÁTTEREK: rács + fényglow (csillagmező eltávolítva) ---
function BackgroundLayer() {
  return (
    <>
      {/* Radial glow hátterek */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(closest-side, #9900FF, transparent)" }} />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full blur-3xl opacity-25" style={{ background: "radial-gradient(closest-side, #31d7ff, transparent)" }} />
      </div>

      {/* Finom rács overlay */}
      <div className="pointer-events-none absolute inset-0 grid-overlay" />
    </>
  );
}

function HeroHeader() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(1200px 300px at 10% 120%, #9900FF, transparent 60%)" }} />
        <div className="absolute -inset-1 rounded-3xl sheen opacity-10" />
        <div className="relative p-8 sm:p-12">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Lépj kapcsolatba egy <span className="wave-text">futurisztikus</span> fejlesztői rendszerrel
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            Írj pár sort a célodról és határidődről. 24 órán belül kapsz egy tömör, kivitelezhető javaslatot.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4"/> GDPR-barát adatkezelés</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> 100% válasz 48 órán belül</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSectionContent() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(null);

  const cardRef = useRef(null);

  // Parallaxis / 3D tilt
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotX = (0.5 - y) * 6; // -3..3 deg
      const rotY = (x - 0.5) * 8; // -4..4 deg
      el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    };
    const reset = () => (el.style.transform = "perspective(1000px) rotateX(0) rotateY(0)");
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      source: "contact-section",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Küldési hiba");
      setDone(true);
      form.reset();
    } catch (err) {
      try {
        const subject = encodeURIComponent("Új üzenet – Ai László");
        const body = encodeURIComponent(`Név: ${payload.fullName}\nE-mail: ${payload.email}\n\nÜzenet:\n${payload.message}`);
        window.location.href = `mailto:hello@ailaszlo.com?subject=${subject}&body=${body}`;
      } catch {}
      setError("Nem sikerült elküldeni. Írhatsz közvetlenül: hello@ailaszlo.com");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="pointer-events-none absolute -inset-x-10 -top-10 h-40 blur-3xl opacity-50" style={{ background: "radial-gradient(closest-side, #9900FF, transparent)" }} />

      <div ref={cardRef} className="relative rounded-3xl transition-transform duration-200">
        <div className="neon-border rounded-3xl overflow-hidden" />
        <div className="relative rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden">
          <div className="relative p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <FloatingInput id="fullName" name="fullName" label="Teljes név" placeholder="Vezetéknév Keresztnév" required />
              <FloatingInput id="email" name="email" type="email" label="E-mail cím" placeholder="nev@domain.com" required />
              <FloatingTextarea id="message" name="message" label="Üzenet" placeholder="Mondd el röviden a célod és a határidőd." required rows={6} />

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition disabled:opacity-60 disabled:cursor-not-allowed bg-white text-black hover:bg-white/90 active:scale-[.99] focus:ring-2 focus:ring-[#9900FF]/40"
                >
                  <span className="relative z-10">{loading ? "Küldés..." : "Üzenet küldése"}</span>
                  <ArrowRight className="h-5 w-5 relative z-10 text-black" />
                </button>
                <p className="text-sm text-white/60">
                  E-mail: <a className="underline underline-offset-4 hover:no-underline" href="mailto:hello@ailaszlo.com">hello@ailaszlo.com</a>
                </p>
              </div>

              <div aria-live="polite" className="min-h-[1rem] text-sm">
                {done && <span className="text-emerald-400">Köszönöm! Hamarosan jelentkezem.</span>}
                {error && <span className="text-red-400">{error}</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingInput({ id, label, name, type = "text", placeholder, required = false }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={(e) => setFocused(!!e.currentTarget.value)}
        className="peer w-full rounded-xl bg-[#0c0c0c] border border-white/10 px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#9900FF]"
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 px-1 text-white/60 transition-all bg-[#0c0c0c] ${focused ? "-top-2 translate-y-0 text-xs text-white" : ""}`}
      >
        {label}
      </label>
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-20" style={{ background: "linear-gradient(90deg, #9900FF33, transparent 40%, #31d7ff33)" }} />
    </div>
  );
}

function FloatingTextarea({ id, label, name, placeholder, rows = 6, required = false }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={(e) => setFocused(!!e.currentTarget.value)}
        className="peer w-full rounded-xl bg-[#0c0c0c] border border-white/10 px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#9900FF]"
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-3 top-4 px-1 text-white/60 transition-all bg-[#0c0c0c] ${focused ? "-top-2 text-xs text-white" : ""}`}
      >
        {label}
      </label>
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-20" style={{ background: "linear-gradient(90deg, #9900FF33, transparent 40%, #31d7ff33)" }} />
    </div>
  );
}