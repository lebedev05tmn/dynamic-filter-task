/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    removeConsole: !!process.env.NODE_ENV,
  },
  compress: true,
  env: {
    API_URL: process.env.API_URL,
    FILTERS_API_CONFIG: process.env.FILTERS_API_CONFIG,
    FLATS_API_CONFIG: process.env.FLATS_API_CONFIG,
  },
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8083",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "backend.isb.aerokod.ru",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pb12955.profitbase.ru",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
