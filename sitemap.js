// Import the file system module from Node.js
const fs = require('fs');
// Import the globby library to find files matching a pattern
const globby = require('globby');

// Function to generate the sitemap
async function generateSitemap() {
  // Get the base URL from environment variables or default to nexusxtream.com
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexusxtream.com';

  // Find all .jsx files in the pages directory, excluding certain ones
  const pages = await globby([
    'pages/**/*.jsx', // Include all .jsx files
    '!pages/_*.jsx',   // Exclude files like _app.js and _document.js
    '!pages/api',      // Exclude the api folder
  ]);

  // Generate the sitemap XML string
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          // Clean up the page path to create a URL route
          const path = page
            .replace('pages', '')
            .replace('.jsx', '')
            .replace('/index', ''); // Handle index pages
          const route = path === '/index' ? '' : path;
          // Get the current date for the lastmod tag
          const lastmod = new Date().toISOString();

          // Return a <url> block for each page
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

  // Write the generated sitemap to the public directory
  fs.writeFileSync('public/sitemap.xml', sitemap);
}

// Call the function to generate the sitemap
generateSitemap();