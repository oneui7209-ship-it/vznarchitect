/**
 * Centralized SEO configuration for VZN Architect.
 *
 * All page-level meta helpers, JSON-LD schema generators, and business data
 * live here so every route file draws from a single source of truth.
 */

// ─── Constants ──────────────────────────────────────────────────────────────

export const SITE_URL = "https://vznarchitect.onrender.com";
export const SITE_NAME = "VZN Architect";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/vzn-logo-black-bg.png`;

export const BUSINESS = {
  name: "VZN Architect",
  legalName: "VZN Architect",
  founder: "Parveen (Veer)",
  telephone: "+91-8950078109",
  email: "veersingh11919@gmail.com",
  url: SITE_URL,
  address: {
    street: "Mahaveer Market, Near Cooperative Bank, Opp. Mini Sachivalaya, Dadri Toye",
    locality: "Jhajjar",
    region: "Haryana",
    regionCode: "HR",
    postalCode: "124103",
    country: "IN",
  },
  geo: {
    latitude: 28.5078024,
    longitude: 76.7472682,
  },
  openingHours: [
    "Mo-Sa 09:00-19:00",
  ],
  socialProfiles: [
    "https://instagram.com/vznarchitect",
  ],
  googleMapsUrl:
    "https://www.google.com/maps/place/VZN+Architect/@28.5078024,76.7472682,17z/data=!3m1!4b1!4m6!3m5!1s0x390d6d326f31573f:0x8cabe8ea949021f6!8m2!3d28.5078024!4d76.7472682!16s%2Fg%2F11nqf481vd",
  priceRange: "₹₹",
} as const;

// ─── Meta Tag Helpers ───────────────────────────────────────────────────────

interface PageMetaOptions {
  /** The full <title> tag text. */
  title: string;
  /** The meta description (≤ 160 chars). */
  description: string;
  /** URL path, e.g. "/about". */
  path: string;
  /** Override OG image URL. Defaults to logo. */
  ogImage?: string;
  /** If the page should not be indexed. */
  noindex?: boolean;
}

/**
 * Returns a complete meta array for a route's `head()`.
 * Includes title, description, canonical, Open Graph, Twitter Card.
 */
export function generatePageMeta({
  title,
  description,
  path,
  ogImage,
  noindex,
}: PageMetaOptions) {
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  const meta: Record<string, string>[] = [
    { title },
    { name: "description", content: description },
    { name: "application-name", content: SITE_NAME },
    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:locale", content: "en_IN" },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];

  if (noindex) {
    meta.push({ name: "robots", content: "noindex, follow" });
  }

  return meta;
}

/**
 * Returns a canonical link for the route's `head()`.
 */
export function generateCanonicalLink(path: string) {
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;
  return [{ rel: "canonical", href: canonicalUrl }];
}

// ─── JSON-LD Schema Generators ──────────────────────────────────────────────

/**
 * Wraps a schema object in a `<script type="application/ld+json">` descriptor
 * compatible with TanStack Router's head() scripts array.
 */
export function jsonLdScript(schema: Record<string, unknown>) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(schema),
  };
}

/** WebSite schema with SearchAction (site-wide, goes in root). */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: "VZN Architect — Luxury Architecture & Interior Design Studio",
    url: SITE_URL,
    description:
      "VZN Architect is a premium architecture, interior design and 3D visualization studio in Jhajjar, Haryana, India.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Organization schema (site-wide, goes in root). */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    logo: DEFAULT_OG_IMAGE,
    image: DEFAULT_OG_IMAGE,
    founder: {
      "@type": "Person",
      name: BUSINESS.founder,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    sameAs: BUSINESS.socialProfiles,
  };
}

/** LocalBusiness schema — used on homepage and contact. */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    image: DEFAULT_OG_IMAGE,
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    founder: {
      "@type": "Person",
      name: BUSINESS.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: BUSINESS.socialProfiles,
    hasMap: BUSINESS.googleMapsUrl,
    areaServed: [
      { "@type": "City", name: "Jhajjar" },
      { "@type": "City", name: "Rohtak" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "State", name: "Haryana" },
      { "@type": "Place", name: "Delhi NCR" },
    ],
  };
}

/** BreadcrumbList schema. */
export function generateBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/** FAQPage schema from an array of { q, a } objects. */
export function generateFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/** Service schema for an individual service. */
export function generateServiceSchema(service: {
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      url: BUSINESS.url,
      telephone: BUSINESS.telephone,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.locality,
        addressRegion: BUSINESS.address.region,
        addressCountry: BUSINESS.address.country,
      },
    },
    areaServed: [
      { "@type": "City", name: "Jhajjar" },
      { "@type": "City", name: "Rohtak" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "State", name: "Haryana" },
    ],
  };
}

/** HowTo schema for a multi-step process. */
export function generateHowToSchema(opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((step, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
