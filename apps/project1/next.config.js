/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "a.storyblok.com",
      },
      {
        hostname: "swiperjs.com",
      },
    ],
  },
};

export default nextConfig;
