import fs from 'fs';
import globby from 'globby';

async function generateSitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexusxtream.com';

  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/api',
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('pages', '')
            .replace('.jsx', '')
            .replace('.js', '')
            .replace('/index', '');
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

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
