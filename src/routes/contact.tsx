import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CursorGlow } from "@/components/CursorGlow";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — VZN Architect | Luxury Studio in Jhajjar" },
      {
        name: "description",
        content:
          "Contact VZN Architect in Jhajjar. Book a consultation, request price quotes, get maps directions, or submit an online residential inquiry.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="pt-[120px] bg-background text-foreground min-h-screen">
        {/* Banner Section */}
        <section className="relative py-20 md:py-28 overflow-hidden border-b border-gold/15 bg-surface">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.15) 0%, transparent 60%)",
              }}
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-10 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.35em] text-gold">
                  Get in Touch
                </span>
                <div className="h-px w-10 bg-gold" />
              </div>
              <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-7xl leading-tight">
                Connect with the <span className="italic text-gold-gradient">Studio</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                Stop by our Jhajjar studio to review physical portfolios, materials, and layouts.
                Feel free to call or WhatsApp us for instant quotes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact info and Map Grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-stretch">
              {/* Left Column: Coordinates */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <h2 className="font-display font-light text-3xl text-foreground">
                    Studio <span className="italic text-gold-gradient">Coordinates</span>
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our team provides end-to-end support for custom residential plots, layouts,
                    vastu checks, and commercial permits. Use the links below to reach us directly.
                  </p>

                  <div className="space-y-4 pt-2">
                    <InfoRow
                      icon={Phone}
                      label="Call Studio"
                      value="+91 89500 78109"
                      href="tel:8950078109"
                    />
                    <InfoRow
                      icon={Mail}
                      label="Email Address"
                      value="veersingh11919@gmail.com"
                      href="mailto:veersingh11919@gmail.com"
                    />
                    <InfoRow
                      icon={Instagram}
                      label="Follow Instagram"
                      value="@vznarchitect"
                      href="https://instagram.com/vznarchitect"
                    />
                    <InfoRow
                      icon={MapPin}
                      label="Studio Location"
                      value="Mahaveer Market, Near Cooperative Bank, Opp. Mini Sachivalaya, Dadri Toye, Jhajjar (HR.)"
                      href="https://www.google.com/maps/place/VZN+Architect/@28.5078024,76.7472682,17z/data=!3m1!4b1!4m6!3m5!1s0x390d6d326f31573f:0x8cabe8ea949021f6!8m2!3d28.5078024!4d76.7472682!16s%2Fg%2F11nqf481vd?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="tel:8950078109"
                    className="group inline-flex items-center gap-3 bg-gold-gradient px-8 py-4 text-xs uppercase tracking-[0.2em] text-gold-foreground font-medium hover:gold-glow transition-all duration-500"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://www.google.com/maps/place/VZN+Architect/@28.5078024,76.7472682,17z/data=!3m1!4b1!4m6!3m5!1s0x390d6d326f31573f:0x8cabe8ea949021f6!8m2!3d28.5078024!4d76.7472682!16s%2Fg%2F11nqf481vd?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-gold/40 px-8 py-4 text-xs uppercase tracking-[0.2em] text-foreground font-medium hover:border-gold hover:text-gold transition-all duration-500"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Right Column: Embedded Interactive Map (Square shape & decreased size) */}
              <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[380px] aspect-square">
                  {/* Gold corner accents */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-gold/50" />
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-gold/50" />

                  {/* Map Container */}
                  <div className="w-full h-full border border-gold/15 overflow-hidden shadow-2xl relative group bg-surface">
                    <iframe
                      title="VZN Architect location map"
                      src="https://www.google.com/maps?q=28.5078024,76.7472682&t=&z=17&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    {/* Inner overlay border */}
                    <div className="absolute inset-0 pointer-events-none border border-gold/10 group-hover:border-gold/30 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
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
      className="group flex items-start gap-4 p-4 border border-gold/15 hover:border-gold/50 hover:bg-background transition-all duration-500"
    >
      <div className="shrink-0 w-10 h-10 grid place-items-center border border-gold/40 text-gold group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
        <Icon size={16} strokeWidth={1.4} />
      </div>
      <div className="min-w-0">
        <div className="text-[9px] uppercase tracking-[0.25em] text-gold mb-1">{label}</div>
        <div className="text-xs text-foreground leading-relaxed break-words">{value}</div>
      </div>
    </Wrap>
  );
}
