import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918950078109?text=Hi%20VZN%20Architect%2C%20I%20would%20like%20a%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="hidden lg:block fixed bottom-6 left-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping" />
      <span className="relative grid w-14 h-14 place-items-center rounded-full bg-gold-gradient text-gold-foreground gold-glow transition-transform duration-300 group-hover:scale-110">
        <MessageCircle size={22} />
      </span>
    </a>
  );
}
