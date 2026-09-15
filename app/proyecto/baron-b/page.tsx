"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BaronBPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#e6e6e6] px-[20px] md:px-[40px] pt-[20px] pb-[100px]">
      
      {/* Header del Proyecto */}
      <div className="relative w-full h-[50vh] md:h-[45vh] rounded-[32px] overflow-hidden bg-[#1a1a1a] shadow-xl">
        {/* Usamos la imagen de la caja semi-abierta (01.jpeg) para el Hero, bien centrada */}
        <img 
          src="/baron-b/hero-baron.jpg" 
          alt="Baron B Box Concept" 
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.85]"
        />
        
        <div className="absolute top-6 left-6 z-20">
          <Link href="/" className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300 font-bold text-xl">
            ←
          </Link>
        </div>
      </div>

      {/* Grilla de Información (Textos con tono de Dirección de Arte) */}
      <div className="max-w-[1400px] mx-auto mt-10 mb-20 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-300 pb-10">
        <div>
          <p className="text-[15px] leading-relaxed font-medium text-[#333]">
            Diseño y conceptualización para PR Box dentro del segmento "Prix Cousine".
          </p>
        </div>
        <div>
          <p className="text-[15px] leading-relaxed font-medium text-[#333]">
            El desafío fue materializar la elegancia de la marca en un objeto físico. Desarrollo de mockups fotorrealistas para un kit exclusivo que combina el producto con una experiencia botánica.
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="font-extrabold text-[16px] text-black uppercase tracking-wider">
            2023
          </p>
        </div>
      </div>

      {/* SECCIÓN EDITORIAL ESTÁTICA (Sin carrusel) */}
      <div className="max-w-[1400px] mx-auto space-y-10">
        
        <div className="mb-8 px-3">
          <h2 className="text-[40px] md:text-[50px] font-black tracking-[-1.5px] text-[#1a1a1a] leading-none">
            Concept & Mockup.
          </h2>
          <p className="text-[12px] font-bold text-[#888] uppercase tracking-[1px] mt-2">
            Presentación de producto
          </p>
        </div>

        {/* Contenedor gigante para la foto del kit abierto (03.jpg) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-[24px] overflow-hidden shadow-2xl bg-white"
        >
          <img 
            src="/baron-b/01.jpeg" 
            alt="Baron B Open Box" 
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Si querés agregar una vista más detallada de la primera foto, la ponemos acá abajo más chica */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full md:w-[70%] mx-auto rounded-[24px] overflow-hidden shadow-xl bg-white mt-20"
        >
          <img 
            src="/baron-b/02.jpeg" 
            alt="Baron B Closed Box" 
            className="w-full h-auto object-contain"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full md:w-[70%] mx-auto rounded-[24px] overflow-hidden shadow-xl bg-white mt-20"
        >
          <img 
            src="/baron-b/03.jpeg" 
            alt="Baron B Closed Box" 
            className="w-full h-auto object-contain"
          />
        </motion.div>

      </div>
    </main>
  );
}