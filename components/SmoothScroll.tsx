"use client";

import { ReactLenis } from '@studio-freight/react-lenis';

// 1. Desvinculamos los tipos estrictos de la librería renombrándola como "any"
const Lenis = ReactLenis as any;

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    // 2. Usamos nuestra versión libre de tipos
    <Lenis root>
      {children}
    </Lenis>
  );
}