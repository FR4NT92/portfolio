"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      // lerp: Define la fricción/inercia. 
      // 0.05 es ultra suave (Apple), 0.1 es un poco más rápido. 0.07 es el punto dulce.
      lerp: 0.07, 
      wheelMultiplier: 1, // Sensibilidad de la rueda del mouse
      smoothWheel: true,  // Activa la física de inercia
      touchMultiplier: 2, // Lo hace más responsivo en trackpads y celulares
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}