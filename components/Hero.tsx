"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="/VID-HERO.mp4" type="video/mp4" />
      </video>

      {/* 1. TEXTOS */}
      <div className="absolute right-[5%] md:right-[60px] top-[45%] -translate-y-1/2 flex flex-col items-end z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-[60px] md:text-[90px] lg:text-[110px] font-black text-white leading-none tracking-[-2px] mb-4"
        >
          FRANCISCO.
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-end"
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-[1px] bg-white/70"></span>
            <p className="text-white/90 text-[16px] md:text-[18px] font-light">
              Diseño & Comunicación Visual
            </p>
          </div>
          <p className="text-white/60 text-[12px] md:text-[13px] font-medium tracking-[1.5px] uppercase mt-1">
            Freelance
          </p>
        </motion.div>
      </div>

      {/* 2. BOTÓN (Actualizado a URL web de Gmail) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-[5%] md:bottom-[75px] right-[5%] md:right-[75px] z-20"
      >
        <a 
          /* Enlace directo a la interfaz de redacción de Gmail */
          href="https://mail.google.com/mail/?view=cm&fs=1&to=frantruppa@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 transition-all duration-[500ms] ease-[cubic-bezier(0.32,0.72,0,1)] hover:gap-0 cursor-pointer"
        >
          
          {/* Parte 1: Burbuja del Ícono */}
          <div className="w-[50px] h-[50px] rounded-full border border-white/30 bg-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-[500ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:rounded-r-none group-hover:border-r-transparent group-hover:bg-white/15">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>

          {/* Parte 2: Burbuja de Texto */}
          <div className="h-[50px] px-6 rounded-full border border-white/30 bg-white/5 backdrop-blur-md flex items-center transition-all duration-[500ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:rounded-l-none group-hover:border-l-transparent group-hover:bg-white/15">
            <span className="text-white text-[11px] font-medium tracking-[2px] uppercase">
              Contacto
            </span>
          </div>
          
        </a>
      </motion.div>

    </div>
  );
}
