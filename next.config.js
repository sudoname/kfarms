/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.kfarms.ng', 'cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
