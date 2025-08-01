/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  // Optimizaciones para mejor performance
  compress: true,
  poweredByHeader: false,
  // Configuración para despliegue estático si es necesario
  // output: 'export',
  // trailingSlash: true,
};

export default nextConfig;
