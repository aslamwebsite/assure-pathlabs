/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    distDir:'build',
    devIndicators: {
      buildActivity: false,
    },
    images: {
      domains: ['example.com'],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "example.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
    eslint: {
      ignoreDuringBuilds: true,
    }
  };
  
  module.exports = nextConfig;