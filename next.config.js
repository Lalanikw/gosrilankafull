/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    }


module.exports = nextConfig;

// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos({
    images: {
        domains: ['maps.googleapis.com'],
    },
});

