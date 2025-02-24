/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true, // Enables App Router
    },
    reactStrictMode: true, // Ensures best React practices
    images: {
        domains: [], // Add external image domains if needed
    },
    eslint: {
        ignoreDuringBuilds: true, // Prevent ESLint errors from blocking builds
    },
};

module.exports = nextConfig;
