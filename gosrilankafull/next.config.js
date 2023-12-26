// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains:['maps.googleapis.com']
//     }
// }

// module.exports = nextConfig;

// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos({
    images: {
        domains: ['maps.googleapis.com'],
    },
});

