/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
};

const withVideos = require('next-videos')

module.exports = withVideos()
