"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";

// --- LÓGICA DE SUBTÍTULO ---
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

// --- MICRO-COMPONENTE: LETRA INTERACTIVA POR PROXIMIDAD ---
const InteractiveLetter = ({ char, mouseX, mouseY }: { char: string, mouseX: any, mouseY: any }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // El peso arranca en 200 (Extralight)
  const weight = useMotionValue(200); 
  // Física elástica para que la transición de grosor sea orgánica y fluida
  const springWeight = useSpring(weight, { stiffness: 400, damping: 30 }); 

  useEffect(() => {
    if (!ref.current) return;
    const updatePosition = () => {
      const rect = ref.current!.getBoundingClientRect();
      // Calculamos el centro exacto de la letra en la pantalla
      setPosition({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  useMotionValueEvent(mouseX, "change", (latestX) => {
    const latestY = mouseY.get();
    // Si el mouse sale de la zona, volvemos todas las letras a peso 200
    if (latestX === Infinity || latestY === Infinity) {
      weight.set(200);
      return;
    }
    
    // Pitágoras: Calculamos la distancia del mouse al centro de esta letra específica
    const distX = latestX - position.x;
    const distY = latestY - position.y;
    const dist = Math.sqrt(distX * distX + distY * distY);

    // 250px es el radio de "influencia" magnética del cursor
    const maxDist = 250; 
    if (dist < maxDist) {
      // Mapeamos la distancia para que el peso suba hasta 900 (Black) mientras más cerca esté
      const newWeight = 200 + (700 * (1 - dist / maxDist));
      weight.set(newWeight);
    } else {
      weight.set(200);
    }
  });

  return (
    <motion.span
      ref={ref}
      style={{ fontWeight: springWeight }}
      className="inline-block"
    >
      {char}
    </motion.span>
  );
};


// --- COMPONENTE PRINCIPAL ---
export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isAltPhrase, setIsAltPhrase] = useState(false);

  const phrase1Objects = useMemo(() => generateCharObjects(PHRASE_1), []);
  const phrase2Objects = useMemo(() => generateCharObjects(PHRASE_2), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAltPhrase((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentPhraseObjects = isAltPhrase ? phrase2Objects : phrase1Objects;

  // Variables para rastrear el puntero globalmente
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleMouseLeave = () => {
    mouseX.set(Infinity);
    mouseY.set(Infinity);
  };

  return (
    <div className="w-full bg-[#111] pt-[20px] md:pt-[40px] px-[20px] md:px-[40px] pb-[60px] md:pb-[100px]">
      
      {/* Contenedor principal que intercepta el mouse */}
      <div 
        ref={heroRef} 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
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

        {/* STICKER ARRASTRABLE (Estático al inicio, movible con drag) */}
        <motion.div
          drag
          dragConstraints={heroRef}
          dragElastic={0.2}
          initial={{ opacity: 0, rotate: -15 }}
          animate={{ opacity: 1, rotate: -15 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute z-30 cursor-grab active:cursor-grabbing"
          style={{ top: "35%", right: "15%", width: "140px" }}
        >
          <img src="/sticker.png" alt="Sticker Francisco" className="w-full h-auto drop-shadow-2xl pointer-events-none" />
        </motion.div>

        {/* 1. TEXTOS */}
        <div className="absolute right-[5%] md:right-[60px] top-[45%] -translate-y-1/2 flex flex-col items-end z-10 pointer-events-none">
          
          {/* TÍTULO MAGNÉTICO POR PROXIMIDAD */}
          <div 
            className="text-[14vw] sm:text-[60px] md:text-[90px] lg:text-[110px] text-white leading-none tracking-[-2px] mb-2 md:mb-4 whitespace-nowrap flex pointer-events-auto cursor-crosshair"
          >
            {"FRANCISCO.".split("").map((char, index) => (
              <InteractiveLetter key={index} char={char} mouseX={mouseX} mouseY={mouseY} />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-end"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-[1px] bg-white/70"></span>
              
              {/* SUBTÍTULO ANIMADO (Loop Infinito) */}
              <div className="text-white/90 text-[16px] md:text-[18px] font-light flex h-[28px] items-center">
                <AnimatePresence mode="popLayout">
                  {currentPhraseObjects.map((item) => (
                    <motion.span
                      key={item.id}
                      layoutId={item.id}
                      layout="position"
                      initial={{ opacity: 0, y: -10 }}
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
                  ))}
                </AnimatePresence>
              </div>
            </div>
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
