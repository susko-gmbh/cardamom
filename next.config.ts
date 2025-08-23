import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  compress: true,
  async redirects() {
    return [
      {
        source: '/hohe-bleichen.html',
        destination: '/hohe-bleichen',
        permanent: true,
      },
      {
        source: '/westfield.html',
        destination: '/westfield',
        permanent: true,
      },
      {
        source: '/kontakt.html',
        destination: '/kontakt',
        permanent: true,
      },
      {
        source: '/about-us.html',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/catering.html',
        destination: '/catering',
        permanent: true,
      },
      {
        source: '/events.html',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/hohe-bleichen-menu.html',
        destination: '/hohe-bleichen-menu',
        permanent: true,
      },
      {
        source: '/westfield-menu.html',
        destination: '/westfield-menu',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/impressum.html',
        destination: '/impressum',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
