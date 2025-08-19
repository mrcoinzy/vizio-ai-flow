import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="kapcsolat" className="py-20 px-4" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            Kapcsolat felvétel
          </h2>
          <p className="text-white/85 text-lg leading-relaxed">
            Készen állsz a következő szintre lépni? Vedd fel velem a kapcsolatot!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bal oldali szöveg */}
          <div className="space-y-6">
            <h3 className="text-white text-2xl font-bold">
              Indítsuk el közösen a projekted!
            </h3>
            <div className="space-y-4 text-white/85">
              <p className="leading-relaxed">
                24-48 órán belül kézzelfogható eredményt kapsz. Nincs mellébeszélés, 
                nincs „majd jövő hónapban" - konkrét megoldásokat szállítunk gyorsan és hatékonyan.
              </p>
              <p className="leading-relaxed">
                Egyedi webfejlesztés, social media management vagy szoftverautomatizálás - 
                válassz a szolgáltatásaim közül és tapasztald meg a különbséget.
              </p>
            </div>
            
            <div className="pt-6">
              <div className="flex items-center gap-3 text-white/80 mb-4">
                <Mail className="w-5 h-5 text-[#9900FF]" />
                <span>Közvetlen elérhetőség:</span>
              </div>
              <a 
                href="mailto:hello@ailaszlo.com" 
                className="text-[#9900FF] hover:text-[#8800DD] transition-colors font-medium text-lg"
              >
                hello@ailaszlo.com
              </a>
            </div>
          </div>

          {/* Jobb oldali űrlap */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white text-sm font-medium">
                Teljes név
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Add meg a teljes neved"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-[#9900FF] focus:ring-[#9900FF]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-sm font-medium">
                Email cím
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-[#9900FF] focus:ring-[#9900FF]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white text-sm font-medium">
                Üzenet
              </Label>
              <Textarea
                id="message"
                placeholder="Írd le, miben segíthetek..."
                rows={6}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-[#9900FF] focus:ring-[#9900FF] resize-none"
              />
            </div>

            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full bg-[#9900FF] hover:bg-[#8800DD] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#9900FF]/25"
              >
                <Send className="w-5 h-5 mr-2" />
                Üzenet küldése
              </Button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
}