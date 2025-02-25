/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true, // Enables App Router
    },
    reactStrictMode: true, // Enforces best React practices
    images: {
        domains: [], // Add external image domains if needed
    },
    eslint: {
        ignoreDuringBuilds: true, // Prevents ESLint errors from blocking builds
    },
};

module.exports = nextConfig;
