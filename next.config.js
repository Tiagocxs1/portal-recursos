/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint-disable-next-line @next/next/no-image-metadata
  images: {
    // domains: [], // add if using external images
  },
  experimental: {
    turboopack: false,
  },
};

module.exports = nextConfig;