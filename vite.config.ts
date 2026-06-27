import { defineConfig as defineStandardConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// Check if running inside the Lovable sandbox environment to keep editor features active
const isLovableSandbox =
  typeof process !== "undefined" &&
  (process.env.LOVABLE_SANDBOX === "1" ||
    !!process.env.DEV_SERVER__PROJECT_PATH ||
    !!process.env.LOVABLE ||
    !!process.env.VITE_LOVABLE);

let configFn;

if (isLovableSandbox) {
  try {
    const { defineConfig: defineLovableConfig } = await import("@lovable.dev/vite-tanstack-config");
    configFn = defineLovableConfig({
      tanstackStart: {
        server: { entry: "server" },
      },
    });
  } catch (error) {
    // Fallback to standard config if import fails
  }
}

if (!configFn) {
  // Dynamically load nitro to keep imports clean
  const { nitro } = await import("nitro/vite");

  configFn = defineStandardConfig({
    css: { transformer: "lightningcss" },
    resolve: {
      alias: {
        "@": `${process.cwd()}/src`,
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      ignoreOutdatedRequests: true,
    },
    plugins: [
      tailwindcss(),
      tsconfigPaths({ projects: ["./tsconfig.json"] }),
      tanstackStart({
        importProtection: {
          behavior: "error",
          client: {
            files: ["**/server/**"],
            specifiers: ["server-only"],
          },
        },
        server: { entry: "server" },
      }),
      viteReact(),
      nitro({
        preset: "node-server",
      }),
    ],
  });
}

export default configFn;
