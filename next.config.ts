/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect www to non-www with HTTPS
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.nexusxtream.com' }],
        destination: 'https://nexusxtream.com/:path*',
        permanent: true,
      }
    ];
  },
};

module.exports = nextConfig;
