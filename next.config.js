// next.config.js
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "m.media-amazon.com",
      "ik.imagekit.io",
      "miro.medium.com",
      "i.ytimg.com",
      "store.storeimages.cdn-apple.com",
      "www.apple.com",
      "http2.mlstatic.com",
      "upload.wikimedia.org",
      "cdn.icon-icons.com"
    ],
  },
};

module.exports = withContentlayer(nextConfig);
