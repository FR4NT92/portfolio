"use client";

import { useEffect } from "react";
import Link from "next/link";
import InfiniteCarousel from "@/components/InfiniteCarousel";


export default function EminentPage() {
  const emailImages = [
    "/eminent/email-01.jpg",
    "/eminent/email-02.jpg",
    "/eminent/email-03.jpg",
    "/eminent/email-04.jpg",
  ];

  const displayImages = [
    "/eminent/display-1.jpg",
    "/eminent/display-2.jpg",
    "/eminent/display-3.jpg",
    "/eminent/04.jpg",
    "/eminent/01.jpg",
    "/eminent/02.jpg",
    "/eminent/03.jpg",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#e6e6e6] px-[20px] md:px-[40px] pt-[20px] pb-[100px]">
      
      {/* Header del Proyecto */}
      <div className="relative w-full h-[50vh] md:h-[45vh] rounded-[32px] overflow-hidden bg-[#183c6b] shadow-xl">
        {/* Exportá el header completo de Eminent en 1920x800px */}
        <img 
          src="/eminent/eminent-hero.jpg" 
          alt="Éminent Cover" 
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
            Desarrollo de piezas para acompañar una campaña exclusiva, apuntada al segmento premium del banco.
          </p>
        </div>
        <div>
          <p className="text-[15px] leading-relaxed font-medium text-[#333]">
            Trabajamos sobre un Key Visual específico para la acción, cuidando siempre los lineamientos generales de la marca.
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="font-extrabold text-[16px] text-black uppercase tracking-wider">
            2026
          </p>
        </div>
      </div>

      {/* SECCIONES */}
      <div className="max-w-[1400px] mx-auto space-y-24 overflow-hidden">
        
        {/* E-mails */}
        <section>
          <div className="px-3 mb-2">
            <h2 className="text-[40px] md:text-[50px] font-black tracking-[-1.5px] text-[#1a1a1a] leading-none">E-mails.</h2>
            <p className="text-[12px] font-bold text-[#888] uppercase tracking-[1px] mt-2">Diseño + Maquetación en .HTML</p>
          </div>
          <InfiniteCarousel images={emailImages} type="email" />
        </section>

        {/* Display (Reusamos el layout "web" horizontal del carrusel) */}
        <section>
          <div className="px-3 mb-2">
            <h2 className="text-[40px] md:text-[50px] font-black tracking-[-1.5px] text-[#1a1a1a] leading-none">Display.</h2>
            <p className="text-[12px] font-bold text-[#888] uppercase tracking-[1px] mt-2">Cartelería LED</p>
          </div>
          <InfiniteCarousel images={displayImages} type="web" />
        </section>

        {/* Web (Grilla Estática tipo Masonry) */}
        <section>
          <div className="px-3 mb-10">
            <h2 className="text-[40px] md:text-[50px] font-black tracking-[-1.5px] text-[#1a1a1a] leading-none">Web.</h2>
            <p className="text-[12px] font-bold text-[#888] uppercase tracking-[1px] mt-2">Landing + App</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-3">
            {/* Columna Izquierda: Landing (Alta) */}
            <div className="md:col-span-4 rounded-[16px] overflow-hidden shadow-xl bg-white transition-transform duration-500 hover:scale-[1.02]">
              <img src="/eminent/landing.jpg" alt="Landing Page" className="w-full h-full object-cover" />
            </div>
            
            {/* Columna Derecha: App (Compuesta) */}
            <div className="md:col-span-8 flex flex-col gap-6">
              {/* Banner ancho arriba */}
              <div className="h-[250px] md:h-[350px] rounded-[16px] overflow-hidden shadow-xl bg-white transition-transform duration-500 hover:scale-[1.02]">
                <img src="/eminent/PREV_BANNER-WEB.PNG" alt="App Banner" className="w-full h-full object-cover object-left" />
              </div>
              
              {/* Dos cards abajo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                <div className="h-[250px] md:h-auto rounded-[16px] overflow-hidden shadow-xl bg-white transition-transform duration-500 hover:scale-[1.02]">
                  <img src="/eminent/PREV_BANNER-MOBILE.jpg" alt="App Card 1" className="w-full h-full object-cover" />
                </div>
                <div className="h-[250px] md:h-auto rounded-[16px] overflow-hidden shadow-xl bg-white transition-transform duration-500 hover:scale-[1.02]">
                  <img src="/eminent/PREV_BENEFICIOS_SIZEOK.PNG" alt="App Card 2" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}