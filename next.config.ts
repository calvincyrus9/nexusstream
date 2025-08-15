// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect HTTP to HTTPS and www to non-www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.nexusxtream.com' }],
        destination: 'https://nexusxtream.com/:path*',
        permanent: true, // 301 redirect
      },
      {
        source: '/renew',
        has: [
          { type: 'query', key: 'duration' },
          { type: 'query', key: 'devices' }
        ],
        destination: '/renew',
        permanent: true,
      }
    ];
  },
};

module.exports = nextConfig;
