"use client";

import { useEffect } from "react";
import Link from "next/link";
import InfiniteCarousel from "@/components/InfiniteCarousel";

export default function RotoplasPage() {
  // Forzamos el inicio arriba de todo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Rutas de tus imágenes en public/rotoplas
  const webPages = [
    '/rotoplas/web-1.jpg',
    '/rotoplas/web-2.jpg',
    '/rotoplas/web-3.jpg',
    '/rotoplas/web-4.jpg',
    '/rotoplas/web-5.jpg',
  ];

  const banners = [
    '/rotoplas/banner-1.jpg',
    '/rotoplas/banner-2.jpg',
    '/rotoplas/banner-3.jpg',
  ];

  return (
    <main className="min-h-screen bg-[#e6e6e6] px-[20px] md:px-[40px] pt-[20px] pb-[100px]">
      
      {/* Header del Proyecto */}
      <div className="relative w-full h-[50vh] md:h-[45vh] rounded-[32px] overflow-hidden bg-[#246294] shadow-xl">
        <img 
          src="/rotoplas/rotoplas-hero.jpg" 
          alt="Rotoplas Cover" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        <div className="absolute top-6 left-6 z-20">
          <Link href="/" className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300 font-bold text-xl">
            ←
          </Link>
        </div>
      </div>

      {/* Grilla de Información */}
      <div className="max-w-[1400px] mx-auto mt-10 mb-20 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-300 pb-10">
        <div>
          <p className="text-[15px] leading-relaxed font-medium text-[#333]">
            Diseño de interfaz para la landing y el e-commerce de un nuevo lanzamiento.
          </p>
        </div>
        <div>
          <p className="text-[15px] leading-relaxed font-medium text-[#333]">
            Tomamos la identidad sólida de la marca y la adaptamos a un entorno digital limpio y funcional, pensado para presentar el producto y facilitar la conversión.
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="font-extrabold text-[16px] text-black uppercase tracking-wider">
            2024
          </p>
        </div>
      </div>

      {/* SECCIONES (CARRUSELES) */}
      <div className="max-w-[1400px] mx-auto space-y-24 overflow-hidden">
        
        {/* Web (Mockups altos) */}
        <section>
          <div className="mb-2 px-3">
            <h2 className="text-[40px] md:text-[50px] font-black tracking-[-1.5px] text-[#1a1a1a] leading-none">Web.</h2>
          </div>
          <InfiniteCarousel images={webPages} type="web-vertical" />
        </section>

        {/* Banners */}
        <section>
          <div className="mb-2 px-3">
            <h2 className="text-[14px] font-extrabold text-[#1a1a1a] uppercase tracking-[1px] leading-none">Banners</h2>
          </div>
          <InfiniteCarousel images={banners} type="web" />
        </section>

      </div>
    </main>
  );
}