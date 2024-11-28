/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        "tryhackme-badges.s3.amazonaws.com", // Add the required hostname
        "credly.com",                        // Add other domains as needed
      ],
    },
  };
  
  export default nextConfig;
  