"use client";

import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Construimos el componente con JS puro. 
  // TypeScript no puede escanear esto como un componente de React estricto.
  return React.createElement(
    ReactLenis as any, 
    { root: true }, 
    children
  );
}