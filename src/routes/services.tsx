import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Building2,
  Sofa,
  Box,
  ClipboardCheck,
  FileCheck2,
  Ruler,
  Sparkles,
  HardHat,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CursorGlow } from "@/components/CursorGlow";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — VZN Architect | Premium Architecture & Interiors" },
      {
        name: "description",
        content:
          "VZN Architect offers luxury architectural design, home interiors, photoreal 3D rendering, vastu planning, and building approvals in Jhajjar and Haryana.",
      },
    ],
  }),
  component: ServicesPage,
});

const servicesDetail = [
  {
    icon: Building2,
    title: "Architectural Design",
    n: "01",
    desc: "Bespoke residential & commercial architecture tailored to your land and lifestyle.",
    details: "We design structures that harmonize luxury and efficiency. From residential villas to corporate towers, we create masterplans, elevation files, and working drawings that stand out.",
    points: ["Modern, Classical & Fusion facades", "Full structural loading designs", "Plumbing & Electrical layout plans", "Site zoning & boundary outlines"],
  },
  {
    icon: Sofa,
    title: "Interior Design",
    n: "02",
    desc: "Curated interiors with premium finishes, lighting and bespoke joinery.",
    details: "Your interior should reflect your personal narrative. We plan custom lighting, premium wall panels, modular kitchens, ceiling elevations, and specify textures that breathe elegance.",
    points: ["Living room & Bedroom design layouts", "Custom furniture detailing & selections", "Lighting plans & custom automation advice", "Premium wall, paint & tile specifications"],
  },
  {
    icon: Box,
    title: "3D Visualization",
    n: "03",
    desc: "Photoreal renders & walkthroughs to experience your space before it's built.",
    details: "Walk through your prospective project using high-definition 3D visualization. Make informed adjustments to materials, paint, and sizes before launching brickwork on site.",
    points: ["Photorealistic exterior elevations", "High-definition interior rendering", "Cinematic walkthrough animations", "Day/Night lighting simulations"],
  },
  {
    icon: ClipboardCheck,
    title: "Project Consultation",
    n: "04",
    desc: "Expert guidance across feasibility, budgeting and design strategy.",
    details: "Get guidance before investing resources. We analyze your plot sizes, zoning laws, material budgets, and construction milestones to avoid project delays.",
    points: ["Cost estimations & cost control plans", "Zoning regulation compliance review", "Material sourcing & quality guidelines", "Site safety & timeline forecasting"],
  },
  {
    icon: FileCheck2,
    title: "Building Approval",
    n: "05",
    desc: "HSIDC, DTP, HSVP & ULR sanctions handled end-to-end.",
    details: "Navigating regulatory protocols is complex. We draft municipal-compliant layouts and coordinate approvals for HSIDC, DTP, HSVP, CLU, and ULR authorities.",
    points: ["Municipal drawing submissions", "Zoning and Floor Area Ratio compliance", "CLU (Change of Land Use) applications", "Occupancy certificate filing support"],
  },
  {
    icon: Ruler,
    title: "Layout Planning",
    n: "06",
    desc: "Optimized 2D & 3D layouts that balance vastu, flow and function.",
    details: "Maximize floor efficiency. We design space blueprints that balance space optimization, human ergonomics, Vastu Shastra compliance, and visual flow.",
    points: ["2D floor layouts & furniture maps", "3D floor plans for space clarity", "Optimized room-to-room flow design", "Vastu-based entry & kitchen alignments"],
  },
  {
    icon: Sparkles,
    title: "Vastu Consultation",
    n: "07",
    desc: "Traditional vastu principles integrated into modern design.",
    details: "Promote health, prosperity, and peace. We weave traditional Vedic Vastu Shastra rules into contemporary layouts without compromising modern spatial aesthetics.",
    points: ["Directional layouts for entries & kitchens", "Energy flow analysis for rooms", "Remedial Vastu advice for existing plots", "Auspicious measurements mapping"],
  },
  {
    icon: HardHat,
    title: "Construction Services",
    n: "08",
    desc: "Turnkey residential & commercial construction with quality control.",
    details: "Bring concepts to life with zero stress. We provide end-to-end turnkey construction solutions using high-grade materials, trained engineers, and precise scheduling.",
    points: ["A-Grade material supply & control", "On-site engineer-led supervision", "Milestone-based progress reporting", "Turnkey key handover on completion"],
  },
];

const faqs = [
  {
    q: "How do you charge for architectural design services?",
    a: "We charge based on project scope, floor area, or as a lump sum fee. For smaller consultation drawings or approval maps, we charge fixed flat rates. Get in touch with our studio to get a personalized quote for your plot.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Initial conceptual layouts and 3D elevations take 2-3 weeks. Complete building working drawings take another 2-4 weeks depending on changes. Municipal approvals depend on local government boards, but we submit applications within days of client approval.",
  },
  {
    q: "Do you provide construction and materials together?",
    a: "Yes! Our Construction Services are completely turnkey. We manage material procurement, foundation work, finishing work, plumbing, and electrification under our personal team supervision.",
  },
];

function ServicesPage() {
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
                  "radial-gradient(circle at 80% 30%, rgba(212,175,55,0.15) 0%, transparent 60%)",
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
                  Our Portfolio of Services
                </span>
                <div className="h-px w-10 bg-gold" />
              </div>
              <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-7xl leading-tight">
                Our <span className="italic text-gold-gradient">Expertise</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                From residential blueprints and luxury interiors to regulatory sanctions, we coordinate execution across Jhajjar, Rohtak, Gurugram, and NCR.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Detailed Services list */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="space-y-16 lg:space-y-24">
              {servicesDetail.map((s, idx) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-gold/15 last:border-0 last:pb-0`}
                >
                  {/* Left Header */}
                  <div className="lg:col-span-4 flex items-start gap-4">
                    <span className="font-display text-4xl text-gold-gradient font-light leading-none">
                      {s.n}
                    </span>
                    <div>
                      <div className="w-12 h-12 border border-gold/30 rounded-sm grid place-items-center mb-4 text-gold bg-surface">
                        <s.icon size={22} strokeWidth={1.2} />
                      </div>
                      <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-3 leading-tight">
                        {s.title}
                      </h2>
                      <p className="text-xs text-muted-foreground tracking-wide uppercase">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {/* Middle Description */}
                  <div className="lg:col-span-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                    <p className="mb-4">{s.details}</p>
                  </div>

                  {/* Right Bullet Points */}
                  <div className="lg:col-span-3 bg-surface border border-gold/15 p-6 rounded-sm">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-4">
                      Key Deliverables
                    </div>
                    <ul className="space-y-3">
                      {s.points.map((p, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-foreground">
                          <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={13} />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services FAQ */}
        <section className="py-20 bg-surface border-y border-gold/15">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-10 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.35em] text-gold">
                  Services FAQ
                </span>
                <div className="h-px w-10 bg-gold" />
              </div>
              <h2 className="font-display font-light text-3xl sm:text-4xl">
                Consultation & <span className="italic text-gold-gradient">Pricing</span>
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((f, idx) => (
                <div
                  key={idx}
                  className="border border-gold/15 bg-background p-6 rounded-sm hover:border-gold/35 transition-colors"
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
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <h2 className="font-display font-light text-3xl sm:text-4xl mb-6">
              Get an accurate estimate for your <span className="italic text-gold-gradient">plot</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              Tell us your plot size, zoning details, and whether you need interiors or turnkey building works.
            </p>
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-consultation-popup"));
              }}
              className="inline-flex items-center gap-3 bg-gold-gradient px-8 py-4 text-xs uppercase tracking-[0.2em] text-gold-foreground font-medium hover:gold-glow transition-all duration-500 cursor-pointer"
            >
              Request Price Quote
              <ArrowRight size={14} />
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
