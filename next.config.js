/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    images: {
        unoptimized: true,
    },
};

const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = nextConfig;
