// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn-icggj.nitrocdn.com',
      'techtro-wp.qzency.com',
      'amanda.webdesignvrvr.com', // ✅ added this
    ],
  },
};

module.exports = nextConfig;



