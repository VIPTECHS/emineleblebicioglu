/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['images.unsplash.com', 'images.pexels.com'],
  },
};

export default nextConfig;
