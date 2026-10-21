"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";

// Función auxiliar para asignar IDs únicos a las letras (permite el efecto anagrama)
const generateCharObjects = (str: string) => {
  const counts: Record<string, number> = {};
  return str.split("").map((char, i) => {
    if (char === " ") return { id: `space-${i}`, char };
    const lower = char.toLowerCase();
    counts[lower] = (counts[lower] || 0) + 1;
    return { id: `${lower}-${counts[lower]}`, char };
  });
};

const PHRASE_1 = "Diseño & Comunicación Visual";
const PHRASE_2 = "or any design sh*t";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Estados para controlar la animación del subtítulo
  const [phase, setPhase] = useState<0 | 1 | 2>(0); // 0: Tipeando, 1: Pausa, 2: Transformado
  const [visibleChars, setVisibleChars] = useState(0);

  // Generamos los objetos con IDs para el motor de Framer Motion
  const phrase1Objects = useMemo(() => generateCharObjects(PHRASE_1), []);
  const phrase2Objects = useMemo(() => generateCharObjects(PHRASE_2), []);

  useEffect(() => {
    if (phase === 0) {
      // Efecto Typewriter: revelamos letras cada 60ms
      const interval = setInterval(() => {
        setVisibleChars((prev) => {
          if (prev >= phrase1Objects.length - 1) {
            clearInterval(interval);
            // Cuando termina de escribir, espera 2.5 segundos y cambia a la frase 2
            setTimeout(() => setPhase(2), 2500);
            return prev + 1;
          }
          return prev + 1;
        });
      }, 60);
      return () => clearInterval(interval);
    }
  }, [phase, phrase1Objects.length]);

  const currentPhraseObjects = phase === 2 ? phrase2Objects : phrase1Objects;

  return (
    <div className="w-full bg-[#111] pt-[20px] md:pt-[40px] px-[20px] md:px-[40px] pb-[60px] md:pb-[100px]">
      
      <div 
        ref={heroRef} 
        className="relative w-full h-[85vh] md:h-[90vh] rounded-[32px] overflow-hidden bg-black shadow-2xl"
      >
        
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

        {/* STICKER ARRASTRABLE */}
        <motion.div
          drag
          dragConstraints={heroRef}
          dragElastic={0.2}
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: -15 }}
          transition={{ duration: 1, delay: 1, type: "spring", bounce: 0.5 }}
          className="absolute z-30 cursor-grab active:cursor-grabbing"
          style={{ top: "35%", right: "15%", width: "140px" }}
        >
          <img src="/sticker.png" alt="Sticker Francisco" className="w-full h-auto drop-shadow-2xl pointer-events-none" />
        </motion.div>

        {/* 1. TEXTOS */}
        <div className="absolute right-[5%] md:right-[60px] top-[45%] -translate-y-1/2 flex flex-col items-end z-10 pointer-events-none">
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
              
              {/* SUBTÍTULO ANIMADO (Typewriter + Morphing) */}
              <div className="text-white/90 text-[16px] md:text-[18px] font-light flex h-[28px] items-center">
                <AnimatePresence mode="popLayout">
                  {currentPhraseObjects.map((item, index) => {
                    // Controlamos la visibilidad para el efecto máquina de escribir en la fase 0
                    if (phase === 0 && index >= visibleChars) return null;

                    return (
                      <motion.span
                        key={item.id}
                        layoutId={item.id}
                        layout="position"
                        initial={{ opacity: 0, y: phase === 0 ? 0 : -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 150, 
                          damping: 20, 
                          mass: 1 
                        }}
                        className={item.char === " " ? "w-1" : "inline-block"}
                        style={{ whiteSpace: "pre" }}
                      >
                        {item.char}
                      </motion.span>
                    );
                  })}
                </AnimatePresence>
              </div>

            </div>
            <p className="text-white/60 text-[12px] md:text-[13px] font-medium tracking-[1.5px] uppercase mt-1">
              Freelance
            </p>
          </motion.div>
        </div>

        {/* 2. BOTÓN LIQUID GLASS ESTILO APPLE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-[8%] md:bottom-[60px] right-[5%] md:right-[60px] z-20"
        >
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=frantruppa@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:gap-0 cursor-pointer pointer-events-auto"
          >
            
            <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-100 bg-white/5 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),_0_8px_24px_rgba(0,0,0,0.15)] pointer-events-none"></div>

            <div className="relative w-[54px] h-[54px] flex items-center justify-center z-10">
              <div className="absolute inset-0 rounded-full transition-opacity duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-0 bg-white/5 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),_0_8px_24px_rgba(0,0,0,0.15)]"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 text-white transition-transform duration-[600ms] group-hover:scale-110">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>

            <div className="relative h-[54px] px-7 flex items-center z-10">
              <div className="absolute inset-0 rounded-full transition-opacity duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-0 bg-white/5 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),_0_8px_24px_rgba(0,0,0,0.15)]"></div>
              <span className="relative z-10 text-white text-[12px] font-semibold tracking-[2px] uppercase">
                Contacto
              </span>
            </div>
            
          </a>
        </motion.div>

      </div>
    </div>
  );
}
