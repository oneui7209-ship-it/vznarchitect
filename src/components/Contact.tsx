import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-40 bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-gold">Get in Touch</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl">
            Let's design something <span className="italic text-gold-gradient">exceptional</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <InfoRow icon={Phone} label="Phone" value="+91 89500 78109" href="tel:8950078109" />
              <InfoRow
                icon={Mail}
                label="Email"
                value="veersingh11919@gmail.com"
                href="mailto:veersingh11919@gmail.com"
              />
              <InfoRow
                icon={Instagram}
                label="Instagram"
                value="@vznarchitect"
                href="https://instagram.com/vznarchitect"
              />
              <InfoRow
                icon={MapPin}
                label="Studio Address"
                value="Mahaveer Market, Near Cooperative Bank, Opp. Mini Sachivalaya, Dadri Toye, Jhajjar (HR.)"
                href="https://www.google.com/maps/place/VZN+Architect/@28.5078024,76.7472682,17z/data=!3m1!4b1!4m6!3m5!1s0x390d6d326f31573f:0x8cabe8ea949021f6!8m2!3d28.5078024!4d76.7472682!16s%2Fg%2F11nqf481vd?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
              />
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="tel:8950078109"
                className="group inline-flex items-center gap-3 bg-gold-gradient px-8 py-4 text-sm uppercase tracking-[0.2em] text-gold-foreground hover:gold-glow transition-all duration-500"
              >
                Call Studio
              </a>
              <a
                href="https://www.google.com/maps/place/VZN+Architect/@28.5078024,76.7472682,17z/data=!3m1!4b1!4m6!3m5!1s0x390d6d326f31573f:0x8cabe8ea949021f6!8m2!3d28.5078024!4d76.7472682!16s%2Fg%2F11nqf481vd?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-gold/40 px-8 py-4 text-sm uppercase tracking-[0.2em] text-foreground hover:border-gold hover:text-gold transition-all duration-500"
              >
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="flex items-center justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[380px] aspect-square overflow-hidden border border-gold/20 shadow-2xl group bg-surface">
              <iframe
                title="VZN Architect location map"
                src="https://www.google.com/maps?q=28.5078024,76.7472682&t=&z=17&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none border border-gold/10 group-hover:border-gold/30 transition-colors" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrap: React.ElementType = href ? "a" : "div";
  return (
    <Wrap
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group flex items-start gap-5 p-5 border border-gold/15 hover:border-gold/50 hover:bg-background transition-all duration-500"
    >
      <div className="shrink-0 w-11 h-11 grid place-items-center border border-gold/40 text-gold group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
        <Icon size={18} strokeWidth={1.4} />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-1">{label}</div>
        <div className="text-sm text-foreground leading-relaxed break-words">{value}</div>
      </div>
    </Wrap>
  );
}
