"use client";

import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    // lerp: 0.15 le quita la "pesadez" y lo hace hiper responsivo al dedo/mouse
    <ReactLenis root options={{ lerp: 0.15, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}