import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Loader } from "@/components/Loader";
import { CursorGlow } from "@/components/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VZN Architect — Luxury Architecture & Interior Design Studio in Jhajjar" },
      {
        name: "description",
        content:
          "VZN Architect is a premium architecture, interior and 3D visualization studio in Jhajjar, Haryana. Residential, commercial, building approvals, vastu and construction services.",
      },
      { property: "og:title", content: "VZN Architect — Your Vision. Our Architecture." },
      {
        property: "og:description",
        content:
          "Premium architectural, interior and visualization services for residential and commercial projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ArchitecturalService",
          name: "VZN Architect",
          founder: "Parveen (Veer)",
          telephone: "+91-8950078109",
          email: "veersingh11919@gmail.com",
          image: "/__l5e/vzn-logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mahaveer Market, Near Cooperative Bank, Opp. Mini Sachivalaya, Dadri Toye",
            addressLocality: "Jhajjar",
            addressRegion: "HR",
            addressCountry: "IN",
          },
          sameAs: ["https://instagram.com/vznarchitect"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 2100); // Wait for Loader animation (1.8s + 0.3s buffer) to complete
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Loader />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Projects limit={3} showAllButton={true} />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
