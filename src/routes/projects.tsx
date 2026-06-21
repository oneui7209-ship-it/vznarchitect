import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CursorGlow } from "@/components/CursorGlow";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Selected Works — VZN Architect | Premium Design Portfolio" },
      {
        name: "description",
        content:
          "Browse VZN Architect's selected luxury works. Modern residential spaces, state-of-the-art office designs, commercial projects, and vastu-compliant layout planning.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
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
                  Our Masterpieces
                </span>
                <div className="h-px w-10 bg-gold" />
              </div>
              <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-7xl leading-tight">
                Selected <span className="italic text-gold-gradient">Works</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                A gallery of luxury villas, turnkey residences, corporate showrooms, and premium photorealistic visualizations conceptualized in our studio.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Showcase Grid (Full Portfolio with categories, no limit, no show-all button) */}
        <Projects />

        {/* CTA Section */}
        <section className="py-20 bg-surface border-t border-gold/15 relative overflow-hidden">
          <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <h2 className="font-display font-light text-3xl sm:text-4xl mb-6">
              Have a custom project <span className="italic text-gold-gradient">concept</span>?
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              We translate conceptual visions into structural realities. Connect with our engineering and interior team for a structural consultation.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 bg-gold-gradient px-8 py-4 text-xs uppercase tracking-[0.2em] text-gold-foreground font-medium hover:gold-glow transition-all duration-500"
            >
              Start Your Project
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
