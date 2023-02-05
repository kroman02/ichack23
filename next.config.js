/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/signup",
        destination: "/signup/1",
        permanent: true,
      },
    ];
  },
  skipMiddlewareUrlNormalize: false,
}

module.exports = nextConfig;
