"use client";

import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      {/* Al decirle "as any", obligamos a TypeScript a ignorar la versión */}
      {children as any}
    </ReactLenis>
  );
}