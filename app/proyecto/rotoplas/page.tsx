"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RotoplasPage() {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#111] px-[20px] md:px-[40px] pt-[20px] pb-[100px] text-white">

      {/* HEADER DEL PROYECTO (HERO AJUSTADO AL TAMAÑO REAL) */}
      <div className="relative w-full h-[50vh] md:h-[45vh] rounded-[32px] overflow-hidden bg-[#183c6b] shadow-xl">
        <img 
          src="/rotoplas/rotoplas-hero.jpg" 
          alt="Rotoplas Cover" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Botón Volver */}
        <div className="absolute top-6 left-6 z-20">
          <Link href="/" className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300 font-bold text-xl">
            ←
          </Link>
        </div>
      </div>

      {/* INSTANCIA 1: TEXTO DE INTRODUCCIÓN */}
      <div className="min-h-[40vh] flex flex-col items-center justify-center mt-10 mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-[700px] text-center px-4"
        >
          <p className="text-[14px] md:text-[16px] leading-relaxed font-light text-white/80 mb-4">
            Diseño de interfaz para la landing y el e-commerce de un nuevo lanzamiento.
          </p>
          <p className="text-[14px] md:text-[16px] leading-relaxed font-light text-white/80">
            Tomamos la identidad sólida de la marca y la adaptamos a un entorno digital limpio y funcional, pensado para presentar el producto y facilitar la conversión.
          </p>
          <p className="font-extrabold text-[12px] md:text-[14px] text-white mt-8 uppercase tracking-wider">
            2024
          </p>
        </motion.div>
      </div>

      {/* INSTANCIA 2 y 3: SECCIÓN WEB */}
      <div className="relative w-full pb-[20vh]">
        
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
            className="text-[10px] md:text-[13px] tracking-[3px] uppercase text-white/50 font-bold mt-3 text-center"
          >
            Landing & E-commerce
          </motion.p>
        </div>

        {/* Manto de imágenes que tapan el texto */}
        <div className="relative z-10 max-w-[1200px] mx-auto mt-[25vh]">
          {/* Para mockups verticales web, usamos 2 a 3 columnas */}
          <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {webPages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className="break-inside-avoid rounded-[16px] overflow-hidden shadow-2xl border border-white/5 bg-[#222]"
              >
                <img src={src} className="w-full h-auto" alt={`Web ${i}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* INSTANCIA 4 y 5: SECCIÓN BANNERS */}
      <div className="relative w-full pt-[10vh] pb-[10vh]">
        
        {/* Título Anclado (.Banners) */}
        <div className="sticky top-[45vh] w-full flex flex-col justify-center items-center z-0 pointer-events-none">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[40px] md:text-[80px] font-bold tracking-[0px] text-white leading-none"
          >
            .Banners
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] md:text-[13px] tracking-[3px] uppercase text-white/50 font-bold mt-3"
          >
            Formatos de Conversión
          </motion.p>
        </div>

        {/* Manto de imágenes (Banners) */}
        <div className="relative z-10 max-w-[1200px] mx-auto mt-[25vh]">
          {/* Los banners suelen ser anchos, 1 o 2 columnas es ideal */}
          <div className="columns-1 md:columns-2 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {banners.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className="break-inside-avoid rounded-[16px] overflow-hidden shadow-2xl border border-white/5 bg-[#222]"
              >
                <img src={src} className="w-full h-auto" alt={`Banner ${i}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
