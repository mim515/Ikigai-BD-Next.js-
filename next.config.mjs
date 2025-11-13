/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Or whatever settings you had
  
  // This is the important part
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

// Use this line at the very end
export default nextConfig;