import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.yijiarui.cn',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'admin.yijiarui.cn',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'test.zreport.cn',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'test.zreport.cn',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
