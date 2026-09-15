"use client";

import { useEffect } from "react";
import Link from "next/link";
import InfiniteCarousel from "@/components/InfiniteCarousel";

export default function YerbaMatePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Agregá más rutas acá si querés que el carrusel tenga más variedad antes de repetirse
  const posts = [
    '/yerba/post-1.png',
    '/yerba/post-2.png',
    '/yerba/post-3.png',
    '/yerba/post-4.png',
    '/yerba/post-5.png',
    '/yerba/post-6.png',
    '/yerba/post-7.jpg',
    '/yerba/post-8.png',
  ];

  const reels = [
    '/yerba/COOKIES.jpg',
    '/yerba/MATE LATTE.jpg',
    '/yerba/LICUADO.jpg',
    '/yerba/HIELOS.jpg',
    '/yerba/MATE COCIDO HELADO.jpg',
    '/yerba/MBEJU.jpg',
    '/yerba/MATE VERMOUTH.jpg',
  ];

  return (
    <main className="min-h-screen bg-[#e6e6e6] px-[20px] md:px-[40px] pt-[20px] pb-[100px]">
      
      {/* Header del Proyecto */}
      <div className="relative w-full h-[50vh] md:h-[45vh] rounded-[32px] overflow-hidden bg-[#4a5d23] shadow-xl">
        <img 
          src="/yerba/hero-yerba.png" 
          alt="Yerba Mate Cover" 
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
            Estrategia visual para reactivar la presencia digital de la marca, generando contenido 'Always On' enfocado principalmente en Instagram.
          </p>
        </div>
        <div>
          <p className="text-[15px] leading-relaxed font-medium text-[#333]">
            Diseñamos a partir de una idea central, bajando un Key Visual de temporada a formatos dinámicos y estáticos.
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
        
        {/* Posts */}
        <section>
          <div className="mb-2 px-3">
            <h2 className="text-[40px] md:text-[50px] font-black tracking-[-1.5px] text-[#1a1a1a] leading-none">Posts.</h2>
          </div>
          <InfiniteCarousel images={posts} type="post" />
        </section>

        {/* Reels */}
        <section>
          <div className="mb-2 px-3">
            <h2 className="text-[40px] md:text-[50px] font-black tracking-[-1.5px] text-[#1a1a1a] leading-none">Reels.</h2>
          </div>
          <InfiniteCarousel images={reels} type="reel" />
        </section>

      </div>
    </main>
  );
}