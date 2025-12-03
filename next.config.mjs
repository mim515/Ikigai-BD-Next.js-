const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ikigaibd.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
