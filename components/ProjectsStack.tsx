"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  { id: 'supervielle', title: 'Supervielle', bg: '/SUPERVIELLE.jpg', logo: '/SUPERVIELLE-LOGO.png' },
  { id: 'eminent', title: 'Éminent', bg: '/EMINENT.jpg', logo: '/EMINENT-LOGO.png' },
  { id: 'yerba-mate', title: 'Yerba Mate Argentina', bg: '/YERBA.png', logo: '/YERBA-LOGO.png' },
  { id: 'rotoplas', title: 'Rotoplas', bg: '/ROTOPLAS.jpg', logo: '/ROTOPLAS-LOGO.png' },
  { id: 'baron-b', title: 'Baron B', bg: '/BARON.jpg', logo: '/BARON-LOGO.png' },
];

// Coordenadas relativas al centro exacto de la pantalla derecha
const layout = [
  { offsetX: 100, offsetY: -120, rotate: 6, zIndex: 10 },
  { offsetX: -120, offsetY: -40, rotate: -8, zIndex: 20 },
  { offsetX: 110, offsetY: 20, rotate: -4, zIndex: 15 },
  { offsetX: -90, offsetY: 140, rotate: 5, zIndex: 30 },
  { offsetX: 130, offsetY: 160, rotate: -6, zIndex: 25 },
];

// Arquitectura de 3 capas para aislar Scroll, Escala y Mouse
function ImmersiveCard({ proj, index, progress, constraintsRef }: { proj: any, index: number, progress: any, constraintsRef: any }) {
  // Tiempos escalonados para que caigan una por una
  const start = index * 0.15;
  const end = start + 0.25;

  // EFECTO INMERSIVO: Vienen desde el tamaño 3 (cerca de la cámara) a 1 (posición final)
  const scale = useTransform(progress, [start, end], [3, 1]);
  
  // OPACIDAD ACELERADA: Pasan de 0 a 100% de solidez muy rápido (en 0.08 pasos) para no verse translúcidas.
  const opacity = useTransform(progress, [start, start + 0.08], [0, 1]);
  
  // CANDADO DE CLICS: La carta es intocable (none) hasta que aterriza (auto). Evita secuestros de links.
  const pointerEvents = useTransform(progress, (v) => v >= end ? "auto" : "none");

  return (
    // Capa 1: Contenedor estático flex para centrado sin afectar físicas
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      
      {/* Capa 2: Responde al Scroll de la página */}
      <motion.div
        style={{
          scale,
          opacity,
          x: layout[index].offsetX,
          y: layout[index].offsetY,
          zIndex: layout[index].zIndex, // Las capas no se mezclan
          pointerEvents // Candado activado
        }}
        className="relative"
      >
        {/* Capa 3: Responde a la mano del usuario (Drag interactivo) */}
        <motion.div
          drag
          dragConstraints={constraintsRef} // Limita el arrastre para que no se pierdan
          dragElastic={0.1}
          whileDrag={{ scale: 1.05, zIndex: 99 }}
          style={{ rotate: layout[index].rotate }}
          className="w-[240px] md:w-[320px] aspect-[4/3] rounded-[16px] overflow-hidden border-[2px] border-white/80 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing hover:!z-50"
        >
          <a href={`/proyecto/${proj.id}`} className="block w-full h-full relative group">
            <div 
              className="absolute -inset-[2px] bg-cover bg-center brightness-[0.75] transition-all duration-[800ms] group-hover:scale-[1.05] group-hover:blur-[3px] group-hover:brightness-[0.4]"
              style={{ backgroundImage: `url(${proj.bg})` }}
            />
            <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-[800ms] group-hover:scale-[1.05]">
              {proj.logo ? (
                <img src={proj.logo} alt={proj.title} className="max-w-[150px] max-h-[50px] object-contain drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)] pointer-events-none" />
              ) : (
                <span className="text-[28px] font-black text-white tracking-[2px] pointer-events-none">{proj.title}</span>
              )}
            </div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function ProjectsStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const clusterRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={sectionRef} className="relative h-[300vh] w-full z-10">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-between max-w-[1400px] mx-auto px-[20px] md:px-[80px]">
        
        {/* TEXTOS FIJOS */}
        <div className="w-full md:w-[40%] text-white z-20 -translate-y-10">
          <h2 className="text-[50px] md:text-[70px] font-black tracking-[-1.5px] mb-6 leading-none">Projects.</h2>
          <p className="text-[14px] md:text-[15px] leading-[1.6] font-light max-w-[400px] mb-5 text-white/80">
            A lo largo de los años colaboré en diversos proyectos como diseñador freelance, creando piezas de comunicación a medida para cada cliente.
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.6] font-light max-w-[400px] mb-5 text-white/80">
            El objetivo siempre es el mismo: que cada propuesta represente y potencie la identidad de la marca.
          </p>
        </div>

        {/* ZONA DE CARTAS CON LIMITADOR FÍSICO */}
        <div ref={clusterRef} className="w-full md:w-[60%] h-full relative">
          {projects.map((proj, i) => (
            <ImmersiveCard 
              key={proj.id} 
              proj={proj} 
              index={i} 
              progress={scrollYProgress} 
              constraintsRef={clusterRef}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}
