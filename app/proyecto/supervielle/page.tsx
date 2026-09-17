"use client";

import { useEffect } from "react";
import Link from "next/link";
import InfiniteCarousel from "@/components/InfiniteCarousel";

export default function ProjectPage() {
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
    // Fondo levemente gris (#F7F7F7) para dar textura de papel premium, no blanco puro.
    <main className="min-h-screen bg-[#F7F7F7] text-[#111] selection:bg-black selection:text-white pb-32">
      
      {/* NAVEGACIÓN FLOTANTE */}
      <nav className="fixed top-6 left-6 md:top-10 md:left-10 z-50">
        <Link href="/" className="group flex items-center justify-center w-14 h-14 bg-white/80 backdrop-blur-xl border border-black/10 rounded-full text-black shadow-lg hover:bg-black hover:text-white transition-all duration-500">
          <span className="font-medium text-xl group-hover:-translate-x-1 transition-transform">←</span>
        </Link>
      </nav>

      {/* HEADER EDITORIAL SUIZO */}
      <header className="pt-[15vh] px-[20px] md:px-[60px] max-w-[1600px] mx-auto">
        <div className="flex flex-col mb-10">
          {/* Tipografía masiva para anclar la marca */}
          <h1 className="text-[12vw] md:text-[140px] font-black tracking-tighter leading-[0.85] uppercase">
            Supervielle
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mt-12 md:mt-6 border-t border-black/20 pt-6">
            <p className="text-[13px] md:text-[15px] font-bold uppercase tracking-[2px] mb-4 md:mb-0">
              Sector: Banca & Finanzas
            </p>
            <p className="text-[13px] md:text-[15px] font-bold uppercase tracking-[2px] text-black/50">
              2023 — Presente
            </p>
          </div>
        </div>
      </header>

      {/* IMAGEN HERO (Contenida con bordes para elegancia) */}
      <div className="px-[20px] md:px-[60px] max-w-[1600px] mx-auto mb-24 md:mb-40">
        <div className="w-full h-[50vh] md:h-[70vh] rounded-[24px] overflow-hidden bg-black shadow-2xl relative">
          <img 
            src="/hero-supervielle.jpg" 
            alt="Supervielle Cover" 
            className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.85] hover:scale-105 transition-transform duration-[1.5s] ease-out"
          />
        </div>
      </div>

      {/* CONTEXTO (Grid Asimétrico con Sticky) */}
      <div className="px-[20px] md:px-[60px] max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 md:gap-32 mb-32 md:mb-48">
        <div className="w-full md:w-[30%]">
          <h3 className="text-[12px] font-bold uppercase tracking-[2px] text-black/50 mb-4 sticky top-32">
            El Desafío
          </h3>
        </div>
        <div className="w-full md:w-[70%]">
          <p className="text-[24px] md:text-[36px] font-medium leading-[1.3] tracking-tight text-[#111] mb-8">
            Pensé y diseñé piezas de comunicación corporativa para múltiples segmentos y canales del banco, tanto internos como externos.
          </p>
          <p className="text-[18px] leading-relaxed text-[#555] max-w-[600px]">
            El objetivo principal radicó en mantener la identidad corporativa intacta, asegurando diseños responsivos y arquitecturas de información claras. Adaptamos el tono visual y las directrices de marca para transmitir el mensaje correcto a cada público específico en campañas de performance y retención.
          </p>
        </div>
      </div>

      {/* GALERÍA DE PROYECTOS */}
      <div className="space-y-32 md:space-y-48">
        
        {/* 01. EMAILS (Carrusel ideal para piezas verticales/largas) */}
        <section className="px-[20px] md:px-[60px] max-w-[1600px] mx-auto">
          <div className="mb-10 flex items-baseline gap-4 border-b border-black/10 pb-6">
            <h2 className="text-[40px] md:text-[60px] font-black tracking-[-1.5px] leading-none">01. E-mails</h2>
            <span className="text-[14px] uppercase tracking-[1.5px] font-bold text-black/40">HTML / Visual</span>
          </div>
          <InfiniteCarousel images={emailImages} type="email" />
        </section>

        {/* 02. PAID MEDIA (Bento Grid Suizo para romper la monotonía del carrusel) */}
        <section className="px-[20px] md:px-[60px] max-w-[1600px] mx-auto">
          <div className="mb-10 flex items-baseline gap-4 border-b border-black/10 pb-6">
            <h2 className="text-[40px] md:text-[60px] font-black tracking-[-1.5px] leading-none">02. Paid Media</h2>
            <span className="text-[14px] uppercase tracking-[1.5px] font-bold text-black/40">Performance</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-8 h-[400px] md:h-[600px] rounded-[24px] overflow-hidden bg-gray-200">
              <img src={mediaImages[0]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Paid Media Hero" />
            </div>
            <div className="md:col-span-4 flex flex-col gap-4 md:gap-6">
              <div className="h-[200px] md:h-[288px] rounded-[24px] overflow-hidden bg-gray-200">
                <img src={mediaImages[1]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Paid Media Secundario" />
              </div>
              <div className="h-[200px] md:h-[288px] rounded-[24px] overflow-hidden bg-gray-200">
                <img src={mediaImages[2]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Paid Media Terciario" />
              </div>
            </div>
          </div>
        </section>

        {/* 03. WEB (Retomamos el carrusel para los banners) */}
        <section className="px-[20px] md:px-[60px] max-w-[1600px] mx-auto">
          <div className="mb-10 flex items-baseline gap-4 border-b border-black/10 pb-6">
            <h2 className="text-[40px] md:text-[60px] font-black tracking-[-1.5px] leading-none">03. Web</h2>
            <span className="text-[14px] uppercase tracking-[1.5px] font-bold text-black/40">Banners</span>
          </div>
          <InfiniteCarousel images={webImages} type="web" />
        </section>

      </div>
    </main>
  );
}
