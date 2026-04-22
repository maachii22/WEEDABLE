/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/crm',
        destination: 'https://duo-insight-desk.vercel.app/crm',
      },
      {
        source: '/crm/:path*',
        destination: 'https://duo-insight-desk.vercel.app/crm/:path*',
      },
    ];
  },
};
module.exports = nextConfig;
