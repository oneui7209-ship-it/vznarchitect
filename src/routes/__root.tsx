import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useLocation,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logoUrl from "../assets/vzn-logo.png?url";
import { reportAppError } from "../lib/error-logger";
import { MobileDock } from "../components/MobileDock";
import { ConsultationPopup } from "../components/ConsultationPopup";
import {
  generateWebsiteSchema,
  generateOrganizationSchema,
  jsonLdScript,
} from "../lib/seo-config";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportAppError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "google-site-verification",
          content: "yuEWCOM2ChWlRgN4GinllTfdtN2Kv5CTGbJj3syVdCM",
        },
        { name: "theme-color", content: "#050505" },
        { title: "VZN Architect" },
        {
          name: "description",
          content: "Luxury architecture & interior design studio.",
        },
        { property: "og:site_name", content: "VZN Architect" },
        { property: "og:type", content: "website" },
        {
          property: "og:image",
          content: "https://vznarchitect.onrender.com/vzn-logo-black-bg.png",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:locale", content: "en_IN" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:image",
          content: "https://vznarchitect.onrender.com/vzn-logo-black-bg.png",
        },
        // Geo meta tags for local SEO
        { name: "geo.region", content: "IN-HR" },
        { name: "geo.placename", content: "Jhajjar" },
        { name: "geo.position", content: "28.5078024;76.7472682" },
        { name: "ICBM", content: "28.5078024, 76.7472682" },
      ],
      links: [
        { rel: "icon", href: logoUrl, type: "image/png" },
        { rel: "stylesheet", href: appCss },
        // DNS prefetch for faster font loading
        { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
        { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@300;400;500;600&family=Inter:wght@300;400;500&display=swap",
        },
      ],
      scripts: [
        // Global structured data: WebSite + Organization schemas
        jsonLdScript(generateWebsiteSchema()),
        jsonLdScript(generateOrganizationSchema()),

        // ─── Google Analytics 4 ─────────────────────────────────────
        // Uncomment and replace G-XXXXXXXXXX with your GA4 Measurement ID:
        // {
        //   src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX",
        //   async: true,
        // },
        // {
        //   children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`,
        // },

        // ─── Google Tag Manager ─────────────────────────────────────
        // Uncomment and replace GTM-XXXXXXX with your GTM Container ID:
        // {
        //   children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');`,
        // },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <MobileDock />
      {!isAdminRoute && <ConsultationPopup />}
    </QueryClientProvider>
  );
}
