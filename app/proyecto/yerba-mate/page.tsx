"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function YerbaMatePage() {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#111] px-[20px] md:px-[40px] pt-[20px] pb-[100px] text-white">

      {/* HEADER DEL PROYECTO (HERO AJUSTADO AL TAMAÑO REAL) */}
      <div className="relative w-full rounded-[32px] overflow-hidden shadow-xl bg-transparent">
        <img 
          src="/yerba/hero-yerba.png" 
          alt="Yerba Mate Cover" 
          className="w-full h-auto block"
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
            Estrategia visual para reactivar la presencia digital de la marca, generando contenido 'Always On' enfocado principalmente en Instagram.
          </p>
          <p className="text-[14px] md:text-[16px] leading-relaxed font-light text-white/80">
            Diseñamos a partir de una idea central, bajando un Key Visual de temporada a formatos dinámicos y estáticos.
          </p>
          <p className="font-extrabold text-[12px] md:text-[14px] text-white mt-8 uppercase tracking-wider">
            2024
          </p>
        </motion.div>
      </div>

      {/* INSTANCIA 2 y 3: SECCIÓN POSTS */}
      <div className="relative w-full pb-[20vh]">
        
        {/* Título Anclado (.Posts) */}
        <div className="sticky top-[45vh] w-full flex flex-col justify-center items-center z-0 pointer-events-none">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[40px] md:text-[80px] font-bold tracking-[0px] text-white leading-none"
          >
            .Posts
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] md:text-[13px] tracking-[3px] uppercase text-white/50 font-bold mt-3 text-center"
          >
            Contenido Always On
          </motion.p>
        </div>

        {/* Manto de imágenes que tapan el texto */}
        <div className="relative z-10 max-w-[1200px] mx-auto mt-[25vh]">
          {/* Para posts cuadrados/4:5 usamos 4 columnas en desktop */}
          <div className="columns-2 md:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {posts.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
                className="break-inside-avoid rounded-[16px] overflow-hidden shadow-2xl border border-white/5 bg-[#222]"
              >
                <img src={src} className="w-full h-auto" alt={`Post ${i}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* INSTANCIA 4: SECCIÓN REELS */}
      <div className="relative w-full pt-[10vh] pb-[10vh]">
        
        {/* Título Anclado (.Reels) */}
        <div className="sticky top-[45vh] w-full flex flex-col justify-center items-center z-0 pointer-events-none">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[40px] md:text-[80px] font-bold tracking-[0px] text-white leading-none"
          >
            .Reels
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] md:text-[13px] tracking-[3px] uppercase text-white/50 font-bold mt-3"
          >
            Formatos Dinámicos
          </motion.p>
        </div>

        {/* Manto de imágenes (Reels) */}
        <div className="relative z-10 max-w-[1200px] mx-auto mt-[25vh]">
          {/* Usamos 3 o 4 columnas dependiendo de la proporción, dejamos 4 para mantener consistencia con los posts */}
          <div className="columns-2 md:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {reels.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
                className="break-inside-avoid rounded-[16px] overflow-hidden shadow-2xl border border-white/5 bg-[#222]"
              >
                <img src={src} className="w-full h-auto" alt={`Reel ${i}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
