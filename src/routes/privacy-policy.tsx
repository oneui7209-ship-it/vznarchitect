import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CursorGlow } from "@/components/CursorGlow";
import {
  generatePageMeta,
  generateCanonicalLink,
  generateBreadcrumbSchema,
  jsonLdScript,
} from "@/lib/seo-config";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: generatePageMeta({
      title: "Privacy Policy — VZN Architect | Luxury Studio in Jhajjar",
      description:
        "Learn how VZN Architect collects, uses, and protects your information when you contact us or request a consultation.",
      path: "/privacy-policy",
      noindex: true,
    }),
    links: generateCanonicalLink("/privacy-policy"),
    scripts: [
      jsonLdScript(
        generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]),
      ),
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
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
              Privacy <span className="italic text-gold-gradient">Policy</span>
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
                  At <strong className="text-foreground">VZN Architect</strong>, we respect your
                  privacy and are committed to protecting the personal data you share with us. This
                  Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website or submit consultation requests.
                </p>
              </div>

              <hr className="border-gold/10" />

              <div className="space-y-4">
                <h2 className="font-display text-xl sm:text-2xl text-foreground font-medium">
                  1. Information We Collect
                </h2>
                <p>
                  We collect information that you voluntarily provide to us when you fill out forms
                  on our website (such as our consultation request popup or contact forms). This may
                  include:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-2 text-muted-foreground">
                  <li>Your Name</li>
                  <li>Phone Number</li>
                  <li>Email Address</li>
                  <li>Project requirements, location, and budget details</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl sm:text-2xl text-foreground font-medium">
                  2. How We Use Your Information
                </h2>
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside pl-4 space-y-2 text-muted-foreground">
                  <li>
                    To schedule and prepare for architectural or interior design consultations.
                  </li>
                  <li>To communicate with you regarding your design projects and inquiries.</li>
                  <li>To verify submission data and administer our web application.</li>
                  <li>To send project updates or relevant design proposals (with your consent).</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl sm:text-2xl text-foreground font-medium">
                  3. Data Storage &amp; Security
                </h2>
                <p>
                  Your information is stored securely in our databases (hosted via Supabase). We
                  apply commercial-grade administrative, technical, and physical security measures
                  to safeguard your personal data against unauthorized access, loss, or alteration.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl sm:text-2xl text-foreground font-medium">
                  4. Cookies &amp; Analytics
                </h2>
                <p>
                  We may use cookies or similar tracking technologies to improve user experience and
                  analyze site traffic (for Google Search Console verification and analytical
                  reports). You can adjust your browser settings to reject cookies, but some parts
                  of the site may function differently as a result.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl sm:text-2xl text-foreground font-medium">
                  5. Third-Party Sharing
                </h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal data to outside
                  parties. This does not include trusted third parties who assist us in operating
                  our website or hosting our databases, so long as those parties agree to keep this
                  information confidential.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-xl sm:text-2xl text-foreground font-medium">
                  6. Contact Us
                </h2>
                <p>
                  If you have any questions or concerns regarding this Privacy Policy or your data,
                  feel free to contact us:
                </p>
                <div className="bg-surface/50 border border-gold/15 p-6 space-y-2 text-xs sm:text-sm">
                  <p>
                    <strong className="text-foreground">VZN Architect</strong>
                  </p>
                  <p>Founder &amp; Principal: Parveen (Veer)</p>
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
