import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  distDir: 'build',
  reactCompiler: true,
  output: 'export', // Enable static export
};

export default nextConfig;
