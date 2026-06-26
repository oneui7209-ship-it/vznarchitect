import { Home, Briefcase, Layout, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { FaWhatsapp } from "react-icons/fa";

export function MobileDock() {
  return (
    <>
      <div className="fixed bottom-0 inset-x-2 h-[72px] bg-background z-[79] lg:hidden pointer-events-none rounded-t-full" />
      <div className="fixed bottom-4 inset-x-2 z-[80] lg:hidden flex h-14 items-center justify-between rounded-full border border-gold/25 bg-background px-3 py-1.5 shadow-gold-lg">
      <Link
        to="/"
        className="flex min-h-[44px] flex-col items-center justify-center gap-0.5 text-muted-foreground hover:text-gold transition-colors"
        activeProps={{ className: "text-gold!" }}
        activeOptions={{ exact: true }}
      >
        <Home className="h-6 w-6" />
        <span className="text-[9px] uppercase tracking-wider font-medium">Home</span>
      </Link>
 
      <Link
        to="/projects"
        className="flex min-h-[44px] flex-col items-center justify-center gap-0.5 text-muted-foreground hover:text-gold transition-colors"
        activeProps={{ className: "text-gold!" }}
      >
        <Briefcase className="h-6 w-6" />
        <span className="text-[9px] uppercase tracking-wider font-medium">Works</span>
      </Link>
 
      {/* WhatsApp highlighted button */}
      <a
        href="https://wa.me/918950078109?text=Hi%20VZN%20Architect%2C%20I%20would%20like%20a%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="relative -top-5 flex flex-col items-center justify-center w-12.5 h-12.5 rounded-full bg-gold-gradient text-gold-foreground gold-glow hover:scale-105 transition-transform"
        aria-label="WhatsApp Chat"
      >
        <FaWhatsapp className="h-6.5 w-6.5" />
      </a>

      <Link
        to="/services"
        className="flex min-h-[44px] flex-col items-center justify-center gap-0.5 text-muted-foreground hover:text-gold transition-colors"
        activeProps={{ className: "text-gold!" }}
      >
        <Layout className="h-6 w-6" />
        <span className="text-[9px] uppercase tracking-wider font-medium">Services</span>
      </Link>

      <Link
        to="/contact"
        className="flex min-h-[44px] flex-col items-center justify-center gap-0.5 text-muted-foreground hover:text-gold transition-colors"
        activeProps={{ className: "text-gold!" }}
      >
        <Phone className="h-6 w-6" />
        <span className="text-[9px] uppercase tracking-wider font-medium">Contact</span>
      </Link>
    </div>
    </>
  );
}
