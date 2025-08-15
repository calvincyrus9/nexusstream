const fs = require('fs');

// Use an async IIFE (Immediately Invoked Function Expression)
// to allow for top-level await of the dynamic import.
(async () => {
  // Dynamically import the globby package which is an ES Module
  const { globby } = await import('globby');

  async function generateSitemap() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexusxtream.com';

    // Find all page files
    const pages = await globby([
      'pages/**/*.jsx', // Include all .jsx files
      '!pages/_*.jsx',   // Exclude files like _app.js and _document.js
      '!pages/api',      // Exclude the api folder
    ]);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('pages', '')
              .replace('.jsx', '')
              .replace('/index', ''); // Handle index pages properly
            const route = path === '/index' ? '' : path;
            const lastmod = new Date().toISOString();

            return `
              <url>
                <loc>${`${siteUrl}${route}`}</loc>
                <lastmod>${lastmod}</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
              </url>
            `;
          })
          .join('')}
      </urlset>
    `;

    // Write the sitemap to the public directory
    fs.writeFileSync('public/sitemap.xml', sitemap);
  }

  // Execute the function
  await generateSitemap();
})();