// next.config.js
const { withContentlayer } = require("next-contentlayer");
const withNextIntl = require('next-intl/plugin')('i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "http2.mlstatic.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "cdn.icon-icons.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com"
      }
    ],
  },
};

module.exports = withContentlayer(withNextIntl(nextConfig));
