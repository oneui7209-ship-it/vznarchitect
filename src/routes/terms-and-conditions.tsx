import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CursorGlow } from "@/components/CursorGlow";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — VZN Architect | Luxury Studio in Jhajjar" },
      {
        name: "description",
        content:
          "Understand the terms of service, intellectual property guidelines, and services agreement when working with VZN Architect.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="pt-[120px] bg-background text-foreground min-h-screen">
        {/* Banner Section */}
        <section className="relative py-16 md:py-24 overflow-hidden border-b border-gold/15 bg-surface">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(197,160,89,0.05),rgba(0,0,0,0))]" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-gold">Legal</span>
            </div>
            <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-foreground">
              Terms &amp; <span className="italic text-gold-gradient">Conditions</span>
            </h1>
            <p className="mt-4 text-xs sm:text-sm text-muted-foreground">
              Last Updated: June 27, 2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass p-8 sm:p-12 md:p-16 space-y-10 text-muted-foreground text-sm sm:text-base leading-relaxed border border-gold/10"
            >
              <div className="space-y-4">
                <p>
                  Welcome to <strong className="text-foreground">VZN Architect</strong>. These Terms
                  &amp; Conditions govern your use of our website and our professional services. By
                  accessing our site, requesting quotes, or submitting consultation requests, you
                  agree to comply with and be bound by these terms.
                </p>
              </div>

              <hr className="border-gold/10" />

              <div className="space-y-4">
                <h2 className="font-display text-xl sm:text-2xl text-foreground font-medium">
                  1. Scope of Services
                </h2>
                <p>
                  VZN Architect provides premium architectural design, interior design, 3D
                  visualization, building sanctions/approvals, vastu planning, and construction
                  consultancy.
                </p>
                <p>
                  Any project quotes, estimations, or conceptual outlines shared via the website are
                  indicative and subject to site visits, detailed surveys, soil tests, and a
                  finalized formal agreement signed by both parties.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl sm:text-2xl text-foreground font-medium">
                  2. Intellectual Property Rights
                </h2>
                <p>
                  Unless otherwise specified, all blueprints, custom floor plans, 3D renderings,
                  site illustrations, images, text, and logos displayed on this website or delivered
                  to you during initial consultations are the sole intellectual property of{" "}
                  <strong className="text-foreground">VZN Architect</strong>.
                </p>
                <p>
                  You may not copy, reproduce, distribute, or use any of our proprietary layouts or
                  visuals for commercial purposes without explicit, written authorization from us.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl sm:text-2xl text-foreground font-medium">
                  3. User Submissions
                </h2>
                <p>
                  When you submit a form or request a consultation, you agree to provide true,
                  accurate, and current contact details. Submitting false, spam, or misleading
                  contact information may result in your request being ignored and access to our
                  online tools being restricted.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl sm:text-2xl text-foreground font-medium">
                  4. Disclaimer of Liability
                </h2>
                <p>
                  While we strive to ensure that all information on this website (such as project
                  details and design showcases) is accurate, we make no guarantees about its
                  absolute completeness or currency. Architectural projects depend on local building
                  regulations, site coordinates, and safety constraints. We accept no liability for
                  any action taken based on general guidelines found on this site.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl sm:text-2xl text-foreground font-medium">
                  5. Governing Law
                </h2>
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with
                  the laws of India. Any legal disputes or claims arising out of the use of our
                  services or website shall be subject to the exclusive jurisdiction of the courts
                  in Jhajjar, Haryana.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl sm:text-2xl text-foreground font-medium">
                  6. Contact
                </h2>
                <p>
                  For any questions regarding these terms, please contact our administrative desk:
                </p>
                <div className="bg-surface/50 border border-gold/15 p-6 space-y-2 text-xs sm:text-sm">
                  <p>
                    <strong className="text-foreground">VZN Architect</strong>
                  </p>
                  <p>Principal: Parveen (Veer)</p>
                  <p>
                    Address: Mahaveer Market, Near Cooperative Bank, Opp. Mini Sachivalaya, Dadri
                    Toye, Jhajjar, HR.
                  </p>
                  <p>Phone: +91 89500 78109</p>
                  <p>Email: veersingh11919@gmail.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
