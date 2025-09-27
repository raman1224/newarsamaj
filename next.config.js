// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
// experimental: {
//     appDir: true,
//   },
  images: {
    domains: ['localhost'],
  },



  allowedDevOrigins: ['192.168.1.98'],
  // Your other config options
}

export default nextConfig 