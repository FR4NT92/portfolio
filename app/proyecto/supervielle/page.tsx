"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <main className="bg-[#111] min-h-screen text-white font-sans selection:bg-white selection:text-black">
      
      {/* BOTÓN VOLVER */}
      <div className="fixed top-6 left-6 z-50">
        <Link href="/" className="flex items-center justify-center w-12 h-12 bg-black/50 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300 font-bold text-xl">
          ←
        </Link>
      </div>

      {/* HEADER FIJO (La franja superior de tu boceto) */}
      <header className="fixed top-0 left-0 w-full h-[30vh] z-40 bg-[#111] flex flex-col justify-end px-[20px] md:px-[80px] pb-6 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-40">
           {/* La imagen de portada ambienta el header */}
           <img src="/hero-supervielle.jpg" className="w-full h-full object-cover object-center" alt="Header" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex justify-between items-end max-w-[1400px] mx-auto w-full">
           <h1 className="text-[40px] md:text-[70px] font-black tracking-[-2px] leading-none uppercase">Supervielle</h1>
           <p className="font-extrabold text-[14px] md:text-[18px] tracking-[2px] uppercase text-white/80">2023-ACT.</p>
        </div>
      </header>

      {/* ESPACIADOR (Para que el contenido no quede oculto bajo el header fijo) */}
      <div className="h-[30vh] w-full"></div>

      {/* ÁREA DE CONTENIDO (ZONA DE SCROLL) */}
      <div className="relative z-20 w-full">
        
        {/* INSTANCIA 1: TEXTO DE INTRODUCCIÓN */}
        <div className="min-h-[70vh] flex items-center justify-center px-[20px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-[750px] text-center"
          >
            <p className="text-[16px] md:text-[22px] leading-relaxed font-light text-white/80 mb-6">
              Pensé y diseñé piezas de comunicación para múltiples segmentos y canales del banco, tanto internos como externos.
            </p>
            <p className="text-[16px] md:text-[22px] leading-relaxed font-light text-white/80">
              El desafío fue mantener la identidad corporativa, pero adaptando el tono visual para transmitir el mensaje correcto a cada público específico.
            </p>
          </motion.div>
        </div>

        {/* INSTANCIAS 2 y 3: SECCIÓN E-MAILS */}
        <div className="relative w-full pt-[20vh] pb-[30vh]">
          
          {/* El Título Anclado (Instancia 2) */}
          <div className="sticky top-[45vh] w-full flex justify-center items-center z-0 pointer-events-none">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-[60px] md:text-[140px] font-black tracking-[-4px] text-white"
            >
              .E-mails
            </motion.h2>
          </div>

          {/* El Manto de Imágenes (Instancia 3) */}
          <div className="relative z-10 max-w-[1200px] mx-auto px-[20px] mt-[40vh]">
            <div className="columns-2 md:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
              {emailImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: (i % 3) * 0.15, ease: [0.23, 1, 0.32, 1] }}
                  className="break-inside-avoid rounded-[16px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 bg-[#222]"
                >
                  <img src={src} className="w-full h-auto hover:scale-105 transition-transform duration-500" alt={`Email ${i}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* INSTANCIA 4: SECCIÓN PAID MEDIA */}
        <div className="relative w-full pt-[20vh] pb-[30vh]">
          
          {/* El Título Anclado */}
          <div className="sticky top-[45vh] w-full flex flex-col justify-center items-center z-0 pointer-events-none">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-[50px] md:text-[120px] font-black tracking-[-3px] text-white leading-none"
            >
              .Paid Media
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[12px] md:text-[16px] tracking-[4px] uppercase text-white/50 font-bold mt-4"
            >
              Diseño + Adaptación
            </motion.p>
          </div>

          {/* El Manto de Imágenes */}
          <div className="relative z-10 max-w-[1400px] mx-auto px-[20px] mt-[40vh]">
            <div className="columns-2 md:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {mediaImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: (i % 4) * 0.15, ease: [0.23, 1, 0.32, 1] }}
                  className="break-inside-avoid rounded-[16px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 bg-[#222]"
                >
                  <img src={src} className="w-full h-auto hover:scale-105 transition-transform duration-500" alt={`Paid Media ${i}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* SECCIÓN WEB */}
        <div className="relative w-full pt-[20vh] pb-[30vh]">
          <div className="sticky top-[45vh] w-full flex flex-col justify-center items-center z-0 pointer-events-none">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-[60px] md:text-[140px] font-black tracking-[-4px] text-white leading-none"
            >
              .Web
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[12px] md:text-[16px] tracking-[4px] uppercase text-white/50 font-bold mt-4"
            >
              Banners
            </motion.p>
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto px-[20px] mt-[40vh]">
            <div className="columns-1 md:columns-2 gap-4 md:gap-8 space-y-4 md:space-y-8">
              {webImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: (i % 2) * 0.15, ease: [0.23, 1, 0.32, 1] }}
                  className="break-inside-avoid rounded-[16px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 bg-[#222]"
                >
                  <img src={src} className="w-full h-auto hover:scale-105 transition-transform duration-500" alt={`Web ${i}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
