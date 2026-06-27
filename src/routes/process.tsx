import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CursorGlow } from "@/components/CursorGlow";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — VZN Architect | Step-by-Step Design Workflow" },
      {
        name: "description",
        content:
          "Learn about VZN Architect's structured design-to-build workflow: consultation, planning, layout design, 3D renders, building approvals, and execution.",
      },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  {
    n: "01",
    title: "Consultation & Briefing",
    duration: "Week 1",
    desc: "Understand your vision, site coordinates, budget constraints, and aesthetic aspirations.",
    details:
      "During the initial phase, we host a review at our Jhajjar studio or virtual meeting. We assess your plot boundaries, study orientation parameters, and coordinate an initial project wishlist detailing rooms, levels, and style choices.",
    bullets: [
      "Site context & orientation reviews",
      "Client preference gathering",
      "Zoning and budget alignment",
      "Workflow schedule confirmation",
    ],
  },
  {
    n: "02",
    title: "Feasibility & Vastu Planning",
    duration: "Weeks 1-2",
    desc: "Zoning review, structural feasibility checks, and initial Vastu compliance mapping.",
    details:
      "We evaluate municipal regulations (FAR, setbacks) and map room directions in accordance with Vastu principles. This ensures the foundational planning layout is positive, functional, and lawful.",
    bullets: [
      "FAR (Floor Area Ratio) evaluations",
      "Vastu orientation mapping",
      "Initial zoning & municipal checks",
      "Space requirement calculations",
    ],
  },
  {
    n: "03",
    title: "Schematic Layout & Design",
    duration: "Weeks 2-4",
    desc: "Developing 2D layout drafts, dimensional plans, and starting material conceptualization.",
    details:
      "Our team constructs initial 2D blueprints displaying wall positions, windows, entries, and modular furniture placements. We adjust these drafts alongside your feedback until the layouts feel natural and optimized.",
    bullets: [
      "2D floor layouts & dimensions",
      "Furniture layout maps",
      "Window and door placements",
      "Initial structural coordinates",
    ],
  },
  {
    n: "04",
    title: "3D Rendering & Visualization",
    duration: "Weeks 4-6",
    desc: "Creating cinematic walkthrough videos and photorealistic 3D external and internal elevations.",
    details:
      "We transform 2D drawings into premium, lifelike 3D models. You see the exact paint colors, glass placements, texture layouts, lighting placements, and landscape design before allocating capital on materials.",
    bullets: [
      "3D exterior facades & elevations",
      "3D interior rendering files",
      "Cinematic walkthrough walkthroughs",
      "Material mockups & selections",
    ],
  },
  {
    n: "05",
    title: "Working Blueprints & Approvals",
    duration: "Weeks 6-8",
    desc: "Preparing construction drawings and filing for building approval sanctions.",
    details:
      "We draft plumbing, electrical, and structural engineering layout files. Simultaneously, we coordinate paperwork and map compliant blueprints for HSVP, HSIDC, DTP, CLU, or local Jhajjar municipal boards.",
    bullets: [
      "Detailed structural drawings",
      "Electrical & plumbing blueprints",
      "Municipal map filing documentation",
      "Coordination with building inspectors",
    ],
  },
  {
    n: "06",
    title: "Execution & Site Turnkey Handover",
    duration: "Construction Phase",
    desc: "Turnkey construction coordination, site inspection visits, and final quality sign-off.",
    details:
      "If you choose VZN turnkey services, we execute the structure under trained engineering staff. If you hire an independent builder, we conduct regular site inspections to ensure concrete, materials, and layouts match our design coordinates.",
    bullets: [
      "Turnkey construction coordination",
      "Regular site supervisor checks",
      "Material check & load testing verification",
      "Final finishing review & key delivery",
    ],
  },
];

function ProcessPage() {
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
                  "radial-gradient(circle at 10% 80%, rgba(212,175,55,0.15) 0%, transparent 60%)",
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
                  Our Methodology
                </span>
                <div className="h-px w-10 bg-gold" />
              </div>
              <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-7xl leading-tight">
                Our <span className="italic text-gold-gradient">Process</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                A structured, transparent workflow designed to guide you from initial design concept
                to turnkey physical handover, avoiding layout errors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline details */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="space-y-16">
              {steps.map((s, idx) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-gold/15 last:border-0 last:pb-0"
                >
                  {/* Step identification */}
                  <div className="lg:col-span-4 flex items-start gap-4">
                    <span className="font-display text-4xl text-gold-gradient font-light leading-none">
                      {s.n}
                    </span>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 border border-gold/30 text-gold text-[9px] uppercase tracking-wider mb-3">
                        {s.duration}
                      </span>
                      <h2 className="font-display text-xl sm:text-2xl text-foreground leading-tight">
                        {s.title}
                      </h2>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                    <p className="mb-4 text-foreground font-medium">{s.desc}</p>
                    <p>{s.details}</p>
                  </div>

                  {/* Focus targets */}
                  <div className="lg:col-span-3 bg-surface border border-gold/15 p-6 rounded-sm">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-4">
                      Key Highlights
                    </div>
                    <ul className="space-y-3">
                      {s.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs text-foreground">
                          <Check className="text-gold shrink-0 mt-0.5" size={13} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-surface border-t border-gold/15">
          <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <h2 className="font-display font-light text-3xl sm:text-4xl mb-6">
              Ready to begin your <span className="italic text-gold-gradient">design</span> journey?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              We begin every project with a details consultation. Fill out our simple contact form
              or call us to reserve a review.
            </p>
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-consultation-popup"));
              }}
              className="inline-flex items-center gap-3 bg-gold-gradient px-8 py-4 text-xs uppercase tracking-[0.2em] text-gold-foreground font-medium hover:gold-glow transition-all duration-500 cursor-pointer"
            >
              Book Consultation
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
