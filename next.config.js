/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/barkery-2',
  assetPrefix: '/barkery-2/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
