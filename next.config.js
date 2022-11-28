/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  experimental: { 
    appDir: true,
    fontLoaders: [{ loader: "@next/font/google", options: { subsets: ["latin"] } }],
   },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
