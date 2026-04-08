/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.kfarms.ng'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
