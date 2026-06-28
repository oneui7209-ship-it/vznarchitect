#!/usr/bin/env node

/**
 * generate-sitemap.mjs
 *
 * Scans src/routes/ for route files, detects noindex pages,
 * and writes an updated public/sitemap.xml.
 *
 * Usage:  node scripts/generate-sitemap.mjs
 *
 * Hook into your CI/CD pipeline or run before deploys to keep
 * the sitemap in sync with routes.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, basename } from "node:path";

const SITE_URL = "https://vznarchitect.onrender.com";
const ROUTES_DIR = join(process.cwd(), "src", "routes");
const OUTPUT = join(process.cwd(), "public", "sitemap.xml");

// Priority mapping for known pages
const PRIORITY_MAP = {
  "/": { priority: "1.0", changefreq: "weekly" },
  "/about": { priority: "0.8", changefreq: "monthly" },
  "/services": { priority: "0.9", changefreq: "monthly" },
  "/projects": { priority: "0.8", changefreq: "weekly" },
  "/process": { priority: "0.7", changefreq: "monthly" },
  "/contact": { priority: "0.8", changefreq: "monthly" },
};

const DEFAULT_PRIORITY = { priority: "0.5", changefreq: "monthly" };

async function main() {
  const today = new Date().toISOString().slice(0, 10);
  const files = await readdir(ROUTES_DIR);
  const urls = [];

  for (const file of files) {
    // Only process .tsx route files
    if (!file.endsWith(".tsx")) continue;

    // Skip internal/layout files
    if (file.startsWith("__")) continue;

    // Read file content to check for noindex
    const content = await readFile(join(ROUTES_DIR, file), "utf-8");
    const isNoindex = content.includes('"noindex') || content.includes("'noindex");

    if (isNoindex) {
      console.log(`  ⊘ Skipping (noindex): ${file}`);
      continue;
    }

    // Derive path from filename
    const name = basename(file, ".tsx");
    const path = name === "index" ? "/" : `/${name}`;

    const { priority, changefreq } = PRIORITY_MAP[path] ?? DEFAULT_PRIORITY;

    urls.push({ path, priority, changefreq });
    console.log(`  ✓ Including: ${path} (priority: ${priority})`);
  }

  // Sort: homepage first, then alphabetical
  urls.sort((a, b) => {
    if (a.path === "/") return -1;
    if (b.path === "/") return 1;
    return a.path.localeCompare(b.path);
  });

  // Build XML
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
  ];

  for (const url of urls) {
    const loc = `${SITE_URL}${url.path === "/" ? "/" : url.path}`;
    xml.push("  <url>");
    xml.push(`    <loc>${loc}</loc>`);
    xml.push(`    <lastmod>${today}</lastmod>`);
    xml.push(`    <changefreq>${url.changefreq}</changefreq>`);
    xml.push(`    <priority>${url.priority}</priority>`);

    // Add image sitemap for key pages
    if (url.path === "/") {
      xml.push("    <image:image>");
      xml.push(`      <image:loc>${SITE_URL}/vzn-logo-black-bg.png</image:loc>`);
      xml.push("      <image:title>VZN Architect Logo</image:title>");
      xml.push(
        "      <image:caption>VZN Architect — Luxury Architecture and Interior Design Studio in Jhajjar, Haryana</image:caption>",
      );
      xml.push("    </image:image>");
    }

    xml.push("  </url>");
  }

  xml.push("</urlset>");
  xml.push("");

  await writeFile(OUTPUT, xml.join("\n"), "utf-8");
  console.log(`\n✅ Sitemap written to ${OUTPUT} with ${urls.length} URLs.`);
}

main().catch((err) => {
  console.error("❌ Sitemap generation failed:", err);
  process.exit(1);
});
