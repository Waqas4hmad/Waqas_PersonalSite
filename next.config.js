/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // Generate static files in /out
  images: { unoptimized: true }, // Required for static hosting
  trailingSlash: true,        // Fix routing on static hosts

  // 👇 ONLY for project repos (NOT username.github.io):
  basePath: '/Waqas_PersonalSite',
  assetPrefix: '/Waqas_PersonalSite/',
};

module.exports = nextConfig;