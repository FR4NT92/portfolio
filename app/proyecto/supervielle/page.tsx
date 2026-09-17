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
    '/supervielle/paid-10.jpg',
    '/supervielle/paid-7.jpg',
    '/supervielle/paid-8.jpg',
    '/supervielle/paid-9.jpg',
    '/supervielle/paid-7.jpg',
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
    // Respetando el fondo oscuro de tu Mesa de Trabajo 2
    <main className="min-h-screen bg-[#111] px-[20px] md:px-[40px] pt-[20px] pb-[100px] text-white">

      {/* HEADER DEL PROYECTO (TU HERO ORIGINAL INTACTO) */}
      <div className="relative w-full h-[50vh] md:h-[50vh] rounded-[32px] overflow-hidden bg-[#1a1a1a] shadow-xl">
        <img 
          src="/hero-supervielle.jpg" 
          alt="Supervielle Cover" 
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.5]"
        />

        {/* Botón Volver */}
        <div className="absolute top-6 left-6 z-20">
          <Link href="/" className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300 font-bold text-xl">
            ←
          </Link>
        </div>
      </div>

      {/* INSTANCIA 1: TEXTO DE INTRODUCCIÓN (TAMAÑOS REDUCIDOS) */}
      <div className="min-h-[40vh] flex flex-col items-center justify-center mt-10 mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-[700px] text-center px-4"
        >
          <p className="text-[14px] md:text-[16px] leading-relaxed font-light text-white/80 mb-4">
            Pensé y diseñé piezas de comunicación para múltiples segmentos y canales del banco, tanto internos como externos.
          </p>
          <p className="text-[14px] md:text-[16px] leading-relaxed font-light text-white/80">
            El desafío fue mantener la identidad corporativa, pero adaptando el tono visual para transmitir el mensaje correcto a cada público específico.
          </p>
          <p className="font-extrabold text-[12px] md:text-[14px] text-white mt-8 uppercase tracking-wider">
            2023-ACT.
          </p>
        </motion.div>
      </div>

      {/* INSTANCIA 2 y 3: SECCIÓN E-MAILS */}
      <div className="relative w-full pb-[20vh]">
        
        {/* Título Anclado (.E-mails) */}
        <div className="sticky top-[45vh] w-full flex justify-center items-center z-0 pointer-events-none">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[40px] md:text-[80px] font-bold tracking-[0px] text-white"
          >
            .E-mails
          </motion.h2>
        </div>

        {/* Manto de imágenes que tapan el texto */}
        <div className="relative z-10 max-w-[1200px] mx-auto mt-[25vh]">
          <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {emailImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="break-inside-avoid rounded-[16px] overflow-hidden shadow-2xl border border-white/5 bg-[#222]"
              >
                <img src={src} className="w-full h-auto" alt={`Email ${i}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* INSTANCIA 4: SECCIÓN PAID MEDIA */}
      <div className="relative w-full pt-[10vh] pb-[20vh]">
        
        {/* Título Anclado (.Paid Media) */}
        <div className="sticky top-[45vh] w-full flex flex-col justify-center items-center z-0 pointer-events-none">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[40px] md:text-[80px] font-bold tracking-[0px] text-white leading-none"
          >
            .Paid Media
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] md:text-[13px] tracking-[3px] uppercase text-white/50 font-bold mt-3"
          >
            Diseño + Adaptación
          </motion.p>
        </div>

        {/* Manto de imágenes */}
        <div className="relative z-10 max-w-[1200px] mx-auto mt-[25vh]">
          <div className="columns-2 md:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {mediaImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
                className="break-inside-avoid rounded-[16px] overflow-hidden shadow-2xl border border-white/5 bg-[#222]"
              >
                <img src={src} className="w-full h-auto" alt={`Paid Media ${i}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SECCIÓN WEB */}
      <div className="relative w-full pt-[10vh] pb-[10vh]">
        
        {/* Título Anclado (.Web) */}
        <div className="sticky top-[45vh] w-full flex flex-col justify-center items-center z-0 pointer-events-none">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[40px] md:text-[80px] font-bold tracking-[0px] text-white leading-none"
          >
            .Web
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] md:text-[13px] tracking-[3px] uppercase text-white/50 font-bold mt-3"
          >
            Banners
          </motion.p>
        </div>

        {/* Manto de imágenes */}
        <div className="relative z-10 max-w-[1200px] mx-auto mt-[25vh]">
          <div className="columns-1 md:columns-2 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {webImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className="break-inside-avoid rounded-[16px] overflow-hidden shadow-2xl border border-white/5 bg-[#222]"
              >
                <img src={src} className="w-full h-auto" alt={`Web ${i}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
