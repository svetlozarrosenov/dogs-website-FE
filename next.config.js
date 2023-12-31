/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
    images: {
        domains: ['localhost', 'localhost:3001', 'localhost:3002'], // Add 'localhost' to the domains array
    },
};

module.exports = nextConfig
