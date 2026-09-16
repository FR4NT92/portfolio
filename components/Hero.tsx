"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-center items-end px-[20px] md:px-[60px]">
      
      {/* BACKGROUND VIDEO (Asegurate de que la ruta del src sea la de tu video actual) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
      >
        <source src="/VID-HERO.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY OSCURO PARA LEGIBILIDAD */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0" />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 flex flex-col items-end text-right mt-[10vh]">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-[50px] md:text-[80px] lg:text-[100px] font-black text-white leading-none tracking-[-2px] mb-2"
        >
          FRANCISCO.
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-col items-end border-r-2 border-white/30 pr-4"
        >
          <p className="text-white/90 text-[16px] md:text-[18px] font-light tracking-wide">
            Diseño & Comunicación Visual
          </p>
          <p className="text-white/70 text-[14px] md:text-[16px] font-medium tracking-[1px] uppercase mt-1">
            Freelance
          </p>
        </motion.div>

        {/* BOTÓN LIQUID GLASS ESTILO APPLE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-12"
        >
          <a
            href="mailto:frantruppa@gmail.com"
            className="group relative flex items-center gap-4 px-3 py-3 pr-8 rounded-full overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:scale-[1.02] active:scale-95"
          >
            {/* Capa 1: Fondo de cristal líquido con desenfoque */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full transition-all duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:bg-white/15 group-hover:border-white/30" />
            
            {/* Capa 2: Reflejo de luz dinámico que atraviesa el botón */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute top-0 left-[-150%] w-[150%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] transition-all duration-[1s] ease-in-out group-hover:left-[150%]" />
            </div>

            {/* Capa 3: Círculo contenedor del ícono */}
            <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              {/* Ícono de sobre (SVG nativo para evitar fallos de dependencias) */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-white transition-transform duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>

            {/* Capa 4: Texto fluido */}
            <span className="relative z-10 text-white font-medium text-[12px] tracking-[2px] uppercase transition-all duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:tracking-[4px] group-hover:text-white/90">
              contacto
            </span>
          </a>
        </motion.div>

      </div>
    </div>
  );
}
