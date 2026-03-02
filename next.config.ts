import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  distDir: 'build',
  reactCompiler: true,
  output: 'export', // Enable static export
  trailingSlash: true,
};

export default nextConfig;
