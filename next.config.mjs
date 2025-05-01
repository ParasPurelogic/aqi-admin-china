/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_DOMAIN : "",
    images: {
        unoptimized: true,
    },
    experimental: {
        serverActions: {
            bodySizeLimit: "10mb"
        }
    }
    // logging: {
    //     fetches: {
    //         fullUrl: false,
    //     },
    // },
};

export default nextConfig;
