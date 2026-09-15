"use client";

// Eliminamos la importación de la librería problemática. 
// Solo renderizamos a los componentes hijos intactos.
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}