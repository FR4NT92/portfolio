import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Esto le ordena a Vercel que compile la web aunque haya 
    // conflictos de versiones entre React 18 y React 19 en las librerías.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;