// scripts/sitemap.js
import fs from "fs";
import { globby } from "globby";

(async () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nexusxtream.com";

  // Find all page.js files inside src/app (like your first code)
  const pages = await globby([
    "src/app/**/page.js", // Target all page files
    "!src/app/api/**",    // Exclude API routes
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      // Convert file path to route URL
      const route = page
        .replace("src/app", "")        // Remove base directory
        .replace("/page.js", "")       // Remove filename
        .replace(/\/\([^)]+\)/g, "")  // Remove Next.js route groups
        || "/";                        // Root page fallback

      const lastmod = new Date().toISOString();

      return `
    <url>
      <loc>${siteUrl}${route}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>
    `;
    })
    .join("")}
</urlset>
`;

  // Write to public folder
  fs.writeFileSync("public/sitemap.xml", sitemap);
  console.log("✅ Sitemap generated successfully at public/sitemap.xml");
})();