/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'st3.depositphotos.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
