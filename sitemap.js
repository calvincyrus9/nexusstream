import fs from "fs";
import { globby } from "globby";

(async () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nexusxtream.com";

  const pages = await globby([
    "src/app/**/page.js",
    "!src/app/api/**",
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      const route = page
        .replace("src/app", "")
        .replace("/page.js", "")
        .replace(/\/\([^)]+\)/g, "")
        || "/";

      const lastmod = new Date().toISOString();

      // Set priority and changefreq based on route
      let priority = "0.7";
      let changefreq = "monthly";

      if (route === "/") {
        priority = "1.0";
        changefreq = "daily";
      } else if (["/trial", "/renew"].includes(route)) {
        priority = "0.9";
        changefreq = "daily";
      } else if (route === "/tutorials") {
        priority = "0.8";
        changefreq = "weekly";
      }

      return `
  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
      `;
    })
    .join("")}
</urlset>
`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
  console.log("✅ Sitemap generated successfully at public/sitemap.xml");
})();