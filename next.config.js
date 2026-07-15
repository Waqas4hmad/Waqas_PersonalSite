
const nextConfig = {
  output: 'export', // This generates pure static files
  trailingSlash: true,
  images: { unoptimized: true } // Required for static hosting
}

module.exports = nextConfig