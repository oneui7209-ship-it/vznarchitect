import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Compass, ShieldCheck, Users, Layers, Award, Clock, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CursorGlow } from "@/components/CursorGlow";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — VZN Architect | Premium Studio in Jhajjar" },
      {
        name: "description",
        content:
          "Discover VZN Architect, Jhajjar's leading luxury architecture & interior design studio. Founded by Parveen (Veer), we create spaces that inspire.",
      },
    ],
  }),
  component: AboutPage,
});

const philosophies = [
  {
    icon: Compass,
    title: "Client-Centric Design",
    desc: "Every design is curated around your unique lifestyle, tastes, and the local climate. We translate ideas into functional art.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    desc: "From blueprint detailing to site inspections, we enforce strict quality standards so your project is structurally and visually perfect.",
  },
  {
    icon: Users,
    title: "Seamless Collaborations",
    desc: "We maintain transparency, providing detailed status reports and interactive reviews so you are always in the loop.",
  },
  {
    icon: Layers,
    title: "Comprehensive Scope",
    desc: "From initial conceptual planning, 3D visualization, building sanctions, to turnkey execution, we cover all bases.",
  },
];

const faqs = [
  {
    q: "Who is the principal designer behind VZN Architect?",
    a: "VZN Architect was founded and is led by Parveen (Veer), a principal architect with extensive experience in luxury residential, commercial, interior design, and vastu compliance in Haryana and Delhi NCR.",
  },
  {
    q: "Where is the studio located?",
    a: "Our studio is located in Mahaveer Market, Near Cooperative Bank, Opposite Mini Sachivalaya, Dadri Toye, Jhajjar, Haryana. We serve clients across Jhajjar, Rohtak, Gurugram, and the wider Delhi NCR area.",
  },
  {
    q: "What is your architectural philosophy?",
    a: "We believe in combining classical proportions with contemporary functionality. Vastu shastra compatibility is seamlessly woven into modern structures to ensure harmonious energy flow.",
  },
  {
    q: "Can I get a consultation online?",
    a: "Yes, while we love welcoming clients to our studio, we offer virtual video design consultations to review site files, sketches, and requirements.",
  },
];

function AboutPage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="pt-24 bg-background text-foreground min-h-screen">
        {/* Banner Section */}
        <section className="relative py-20 md:py-28 overflow-hidden border-b border-gold/15 bg-surface">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.15) 0%, transparent 60%)",
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
                  Our Legacy
                </span>
                <div className="h-px w-10 bg-gold" />
              </div>
              <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-7xl leading-tight">
                About the <span className="italic text-gold-gradient">Studio</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                Transforming spaces with precision, passion, and elite architectural execution. Driven by luxury standards and client satisfaction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Profile Details */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              {/* Image Column */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/5] overflow-hidden border border-gold/20 shadow-2xl relative group">
                  <img
                    src={aboutImg}
                    alt="VZN Architect Office"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                </div>
                {/* Accent frames */}
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-gold/50" />
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-gold/50" />
                
                {/* Overlay Badge */}
                <div className="absolute -bottom-6 left-6 glass px-6 py-4 rounded-sm max-w-[240px]">
                  <div className="text-gold font-display text-3xl leading-none">8+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1.5">
                    Years of Luxury Design
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-10 bg-gold" />
                  <span className="text-[11px] uppercase tracking-[0.35em] text-gold">
                    Meet the Founder
                  </span>
                </div>
                <h2 className="font-display font-light text-3xl sm:text-4xl text-foreground mb-6">
                  Parveen (Veer) <br />
                  <span className="italic text-gold-gradient">Principal Architect</span>
                </h2>
                <div className="space-y-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <p>
                    VZN Architect was founded under the vision of Parveen (Veer) with a simple mandate: to make world-class architectural designs accessible to luxury-minded homeowners and businesses in Haryana and Delhi NCR.
                  </p>
                  <p>
                    With deep expertise in modern layouts, photorealistic 3D rendering, vastu layouts, and structural blueprints, Veer coordinates design processes seamlessly. We approach each space, no matter the size, as a unique canvas to blend aesthetic luxury and utility.
                  </p>
                  <p>
                    Under his leadership, our Jhajjar studio has grown into a trusted destination for building plans, interior consulting, regulatory approvals (HSVP, HSIDC, DTP, CLU), and turnkey building execution.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-6 border-t border-gold/15 pt-8">
                  <div className="flex items-center gap-3">
                    <Award className="text-gold" size={20} />
                    <span className="text-xs uppercase tracking-[0.15em] text-foreground">
                      Bespoke Masterplans
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-gold" size={20} />
                    <span className="text-xs uppercase tracking-[0.15em] text-foreground">
                      On-Time Execution
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Cards Grid */}
        <section className="py-20 bg-surface border-y border-gold/15">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-10 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.35em] text-gold">
                  Core Philosophy
                </span>
                <div className="h-px w-10 bg-gold" />
              </div>
              <h2 className="font-display font-light text-3xl sm:text-4xl">
                The principles that <span className="italic text-gold-gradient">guide</span> us
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {philosophies.map((p, idx) => (
                <div
                  key={p.title}
                  className="bg-background border border-gold/15 p-6 rounded-sm group hover:border-gold/50 transition-all duration-500"
                >
                  <div className="w-12 h-12 border border-gold/30 rounded-sm grid place-items-center mb-6 text-gold group-hover:bg-gold group-hover:text-gold-foreground transition-all duration-500">
                    <p.icon size={22} strokeWidth={1.2} />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-3">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-10 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.35em] text-gold">
                  Common Inquiries
                </span>
                <div className="h-px w-10 bg-gold" />
              </div>
              <h2 className="font-display font-light text-3xl sm:text-4xl">
                Frequently Asked <span className="italic text-gold-gradient">Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((f, idx) => (
                <div
                  key={idx}
                  className="border border-gold/15 bg-surface p-6 rounded-sm hover:border-gold/35 transition-colors"
                >
                  <h3 className="font-display text-lg text-foreground mb-3 flex items-start gap-3">
                    <span className="text-gold">Q.</span>
                    {f.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-6 border-l border-gold/30">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background relative overflow-hidden border-t border-gold/15">
          <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <h2 className="font-display font-light text-3xl sm:text-4xl mb-6">
              Ready to construct your <span className="italic text-gold-gradient">dream</span> design?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              Book a consultation in our Jhajjar studio or set up a phone review to kickstart your blueprints.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 bg-gold-gradient px-8 py-4 text-xs uppercase tracking-[0.2em] text-gold-foreground font-medium hover:gold-glow transition-all duration-500"
            >
              Get Consultation
              <ArrowRight size={14} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
