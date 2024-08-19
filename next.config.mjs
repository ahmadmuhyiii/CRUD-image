/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: "https",
            hostname: "2nypubhterxgy7id.public.blob.vercel-storage.com"
            },
        ],
    },

};

export default nextConfig;
