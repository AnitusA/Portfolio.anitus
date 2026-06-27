/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      loader: 'imgix',
      path: 'public/assets/portfolio.gif',
      unoptimized: true,
    },
  },
}

module.exports = nextConfig;
