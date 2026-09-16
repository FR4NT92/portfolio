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

// Coordenadas relativas al centro del clúster (offsetX, offsetY)
const layout = [
  { offsetX: 80, offsetY: -120, rotate: 6, zIndex: 10 },
  { offsetX: -120, offsetY: -40, rotate: -8, zIndex: 20 },
  { offsetX: 100, offsetY: 20, rotate: -4, zIndex: 15 },
  { offsetX: -80, offsetY: 130, rotate: 5, zIndex: 30 },
  { offsetX: 120, offsetY: 150, rotate: -6, zIndex: 25 },
];

// Sub-componente arquitectónico: separa el Scroll del Drag para no romper las físicas
function ImmersiveCard({ proj, index, progress }: { proj: any, index: number, progress: any }) {
  // Tiempos de entrada: escalonados
  const start = index * 0.15;
  const end = start + 0.25;

  // EFECTO CÁMARA (Z-Axis Push)
  // Viene desde scale 2.5 (cerca de tu cara) a 1 (posición final)
  const scale = useTransform(progress, [start, end], [2.5, 1]);
  
  // La clave de la limpieza: la carta SOLO empieza a verse cuando ya está por aterrizar (start + 0.1).
  // Esto evita que las cajas invisibles gigantes borren las cartas que ya están en la mesa.
  const opacity = useTransform(progress, [start + 0.1, end], [0, 1]);

  return (
    // Capa 1: Punto de origen exacto en el centro del espacio derecho
    <div className="absolute top-1/2 left-1/2 pointer-events-none z-[${layout[index].zIndex}]">
      
      {/* Capa 2: Maneja EXCLUSIVAMENTE el Scroll y posicionamiento estático */}
      <motion.div
        style={{
          scale,
          opacity,
          x: layout[index].offsetX,
          y: layout[index].offsetY,
        }}
        // -translate para centrar el eje de la carta
        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        {/* Capa 3: Maneja EXCLUSIVAMENTE el Drag y la Rotación */}
        <motion.div
          drag
          // El "corralito": límites magnéticos en píxeles para que no salgan disparadas
          dragConstraints={{ top: -150, bottom: 150, left: -150, right: 150 }}
          dragElastic={0.1}
          whileDrag={{ scale: 1.05, zIndex: 99 }}
          style={{ rotate: layout[index].rotate }}
          // Reborde sutil: border-[2px] border-white/80
          className="pointer-events-auto w-[240px] md:w-[320px] aspect-[4/3] rounded-[16px] overflow-hidden border-[2px] md:border-[3px] border-white/80 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing hover:!z-50"
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

        {/* CLÚSTER DERECHO */}
        <div className="w-full md:w-[60%] h-full relative">
          {projects.map((proj, i) => (
            <ImmersiveCard 
              key={proj.id} 
              proj={proj} 
              index={i} 
              progress={scrollYProgress} 
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}
