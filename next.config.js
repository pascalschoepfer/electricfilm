/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    minimumCacheTTL: 31536000,
  }
}

module.exports = {
  async headers() {
    return [
      {
        source: "/fonts/T1Korium-2Kg.woff2",
      },
    ];
  },
};
