/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: true,
  },
  output: 'standalone',
  // Disable telemetry
  telemetry: {
    enabled: false,
  },
};

export default nextConfig;
