const nextConfig = {
    experimental: {
        appDir: true, // Enables App Router
    },
    reactStrictMode: true, // Enforce best practices
    images: {
        domains: [], // Add external image domains if needed
    },
    eslint: {
        ignoreDuringBuilds: true, // Prevent ESLint errors from stopping builds
    },
};

export default nextConfig;
