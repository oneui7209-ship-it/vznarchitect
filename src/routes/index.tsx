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
import {
  generatePageMeta,
  generateCanonicalLink,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  jsonLdScript,
  SITE_URL,
  BUSINESS,
} from "@/lib/seo-config";

export const Route = createFileRoute("/")(
  {
    head: () => ({
      meta: generatePageMeta({
        title:
          "Best Architect in Jhajjar | VZN Architect — Luxury Architecture & Interior Design Studio",
        description:
          "VZN Architect is the leading architecture firm in Jhajjar, Haryana. We offer residential & commercial architectural design, interior design, 3D elevation, vastu planning, building approvals and construction services.",
        path: "/",
      }),
      links: generateCanonicalLink("/"),
      scripts: [
        // LocalBusiness schema — primary local SEO signal
        jsonLdScript(generateLocalBusinessSchema()),
        // BreadcrumbList for homepage
        jsonLdScript(
          generateBreadcrumbSchema([{ name: "Home", path: "/" }]),
        ),
        // Enhanced ArchitecturalService schema
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${SITE_URL}/#service`,
          name: "VZN Architect",
          alternateName: "VZN Architecture Studio",
          description:
            "Premium architecture, interior design and 3D visualization studio offering residential design, commercial design, building approvals, vastu consultation and turnkey construction in Jhajjar, Haryana.",
          founder: {
            "@type": "Person",
            name: BUSINESS.founder,
            jobTitle: "Principal Architect",
          },
          telephone: BUSINESS.telephone,
          email: BUSINESS.email,
          image: `${SITE_URL}/vzn-logo-black-bg.png`,
          url: SITE_URL,
          address: {
            "@type": "PostalAddress",
            streetAddress: BUSINESS.address.street,
            addressLocality: BUSINESS.address.locality,
            addressRegion: BUSINESS.address.regionCode,
            postalCode: BUSINESS.address.postalCode,
            addressCountry: BUSINESS.address.country,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: BUSINESS.geo.latitude,
            longitude: BUSINESS.geo.longitude,
          },
          priceRange: BUSINESS.priceRange,
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "19:00",
            },
          ],
          sameAs: BUSINESS.socialProfiles,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Architecture & Design Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Architectural Design",
                  description:
                    "Bespoke residential and commercial architecture tailored to your land and lifestyle in Jhajjar and Haryana.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Interior Design",
                  description:
                    "Curated luxury interiors with premium finishes, lighting and bespoke joinery.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "3D Visualization & Elevation Design",
                  description:
                    "Photoreal renders and walkthroughs to experience your space before it is built.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Building Approval & Sanctions",
                  description:
                    "HSIDC, DTP, HSVP, CLU and ULR sanctions handled end-to-end.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Vastu Consultation",
                  description:
                    "Traditional vastu principles integrated into modern architectural design.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Construction Services",
                  description:
                    "Turnkey residential and commercial construction with quality control.",
                },
              },
            ],
          },
          areaServed: [
            { "@type": "City", name: "Jhajjar" },
            { "@type": "City", name: "Rohtak" },
            { "@type": "City", name: "Gurugram" },
            { "@type": "State", name: "Haryana" },
            { "@type": "Place", name: "Delhi NCR" },
          ],
        }),
      ],
    }),
    component: Index,
  },
);

function Index() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const loaderActive =
        typeof window !== "undefined" && !sessionStorage.getItem("vzn_initial_loader_shown");
      const delay = loaderActive ? 2100 : 100;

      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, delay);
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
