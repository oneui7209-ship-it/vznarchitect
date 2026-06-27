import { Instagram, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import logo from "@/assets/vzn-logo.png";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-gold/15 overflow-hidden pb-28 sm:pb-32 lg:pb-0">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid gap-10 grid-cols-2 lg:grid-cols-12">
          {/* Brand - Span full 2 columns on mobile, 4 columns on desktop */}
          <div className="col-span-2 lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="VZN Architect" className="w-12 h-12 sm:w-14 sm:h-14" />
              <div>
                <div className="font-display text-xl sm:text-2xl text-gold-gradient">VZN</div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Architect
                </div>
              </div>
            </div>
            <p className="font-display italic text-lg sm:text-xl text-foreground mb-4">
              Your Vision. Our Architecture.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              A luxury architecture studio crafting timeless residential, commercial and interior
              spaces from Jhajjar, Haryana.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { I: Instagram, href: "https://instagram.com/vznarchitect", l: "Instagram" },
                { I: Mail, href: "mailto:veersingh11919@gmail.com", l: "Email" },
                { I: Phone, href: "tel:8950078109", l: "Phone" },
              ].map(({ I, href, l }) => (
                <a
                  key={l}
                  href={href}
                  aria-label={l}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 grid place-items-center border border-gold/30 text-gold hover:bg-gold hover:text-gold-foreground transition-colors"
                >
                  <I size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services - Span 1 column on mobile, 3 columns on desktop */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-gold mb-4 sm:mb-5">
              Services
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              {[
                "Architectural Design",
                "Interior Design",
                "3D Visualization",
                "Building Approval",
                "Vastu Consultation",
                "Construction",
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="hover:text-gold transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Span 1 column on mobile, 2 columns on desktop */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-gold mb-4 sm:mb-5">
              Explore
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              {[
                ["About", "/about"],
                ["Projects", "/projects"],
                ["Process", "/process"],
                ["Contact", "/contact"],
              ].map(([t, h]) => (
                <li key={t}>
                  <Link to={h} className="hover:text-gold transition-colors">
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Span full 2 columns on mobile, 3 columns on desktop */}
          <div className="col-span-2 lg:col-span-3">
            <h4 className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-gold mb-4 sm:mb-5">
              Contact
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone size={13} className="text-gold mt-1 shrink-0" />
                <a href="tel:8950078109" className="hover:text-gold">
                  +91 89500 78109
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={13} className="text-gold mt-1 shrink-0" />
                <a href="mailto:veersingh11919@gmail.com" className="hover:text-gold break-all">
                  veersingh11919@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={13} className="text-gold mt-1 shrink-0" />
                <span className="leading-relaxed">
                  Mahaveer Market, Near Cooperative Bank, Opp. Mini Sachivalaya, Dadri Toye, Jhajjar
                  (HR.)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Designed Copyright & Developer Section */}
        <div className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-gold/15 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-[11px] sm:text-xs text-muted-foreground text-center md:text-left">
          <div className="leading-relaxed">
            <div>
              © 2026 <span className="text-gold font-display font-medium">VZN Architect</span>.{" "}
              <br className="md:hidden" /> All Rights Reserved.
            </div>
            <div className="mt-2 flex items-center justify-center md:justify-start gap-4">
              <Link to="/privacy-policy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gold/20">|</span>
              <Link to="/terms-and-conditions" className="hover:text-gold transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="md:text-right leading-relaxed">
            Designed & Developed by{" "}
            <a
              href="mailto:partikyadav140@gmail.com"
              className="text-gold hover:text-gold-soft transition-colors font-medium underline decoration-gold/30 underline-offset-4"
            >
              Pratikk Yadav
            </a>
            <span className="hidden md:inline"> · </span>
            <br className="md:hidden" />
            <span className="text-[10px] opacity-75">partikyadav140@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Hide standard Back to Top on mobile so it does not interfere with MobileDock */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="hidden lg:grid fixed bottom-6 right-6 z-40 w-12 h-12 place-items-center bg-background border border-gold text-gold hover:bg-gold hover:text-gold-foreground transition-all duration-500 hover:gold-glow cursor-pointer"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
