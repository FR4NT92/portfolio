"use client";

import { useEffect } from "react";
import Link from "next/link";
import InfiniteCarousel from "@/components/InfiniteCarousel";

export default function ProjectPage() {
  // Rutas reales de tus imágenes en la carpeta public
  const emailImages = [
    '/supervielle/email-1.jpg',
    '/supervielle/email-2.jpg',
    '/supervielle/email-3.jpg',
    '/supervielle/email-4.jpg',
    '/supervielle/email-5.jpg',
    '/supervielle/email-6.jpg',
    '/supervielle/email-7.jpg'
  ];

  const mediaImages = [
    '/supervielle/paid-1.jpg',
    '/supervielle/paid-2.jpg',
    '/supervielle/paid-3.jpg',
    '/supervielle/paid-4.jpg',
    '/supervielle/paid-5.jpg',
    '/supervielle/paid-6.jpg',
    '/supervielle/paid-7.jpg',
    '/supervielle/paid-8.jpg',
  ];

  const webImages = [
    '/supervielle/banner-1.jpg',
    '/supervielle/banner-2.jpg',
    '/supervielle/banner-3.jpg',
    '/supervielle/banner-4.jpg',
    '/supervielle/banner-5.jpg',
    '/supervielle/banner-6.jpg',
  ];
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen bg-[#e6e6e6] px-[20px] md:px-[40px] pt-[20px] pb-[100px]">
      
      {/* Header del Proyecto */}
      <div className="relative w-full h-[50vh] md:h-[45vh] rounded-[32px] overflow-hidden bg-[#1a1a1a] shadow-xl">
        {/* Acordate de guardar esta imagen en 1920x800px para que quede perfecta */}
        <img 
          src="/hero-supervielle.jpg" 
          alt="Supervielle Cover" 
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.8]"
        />
        
        {/* Botón Volver */}
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
            Pensé y diseñé piezas de comunicación para múltiples segmentos y canales del banco, tanto internos como externos.
          </p>
        </div>
        <div>
          <p className="text-[15px] leading-relaxed font-medium text-[#333]">
            El desafío fue mantener la identidad corporativa, pero adaptando el tono visual para transmitir el mensaje correcto a cada público específico.
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="font-extrabold text-[16px] text-black uppercase tracking-wider">
            2023-ACT.
          </p>
        </div>
      </div>

      {/* SECCIONES DEL CARRUSEL */}
      <div className="max-w-[1400px] mx-auto space-y-24 overflow-hidden">
        
        {/* E-mails */}
        <section>
          <h2 className="text-[40px] md:text-[50px] font-black tracking-[-1.5px] text-[#1a1a1a] mb-2 px-3">E-mails.</h2>
          <InfiniteCarousel images={emailImages} type="email" />
        </section>

        {/* Paid Media */}
        <section>
          <div className="px-3 mb-2">
            <h2 className="text-[40px] md:text-[50px] font-black tracking-[-1.5px] text-[#1a1a1a] leading-none">Paid media.</h2>
            <p className="text-[12px] font-bold text-[#888] uppercase tracking-[1px] mt-2">Diseño + Adaptación</p>
          </div>
          <InfiniteCarousel images={mediaImages} type="media" />
        </section>

        {/* Web */}
        <section>
          <div className="px-3 mb-2">
            <h2 className="text-[40px] md:text-[50px] font-black tracking-[-1.5px] text-[#1a1a1a] leading-none">Web.</h2>
            <p className="text-[12px] font-bold text-[#888] uppercase tracking-[1px] mt-2">Banners</p>
          </div>
          <InfiniteCarousel images={webImages} type="web" />
        </section>

      </div>
    </main>
  );
}