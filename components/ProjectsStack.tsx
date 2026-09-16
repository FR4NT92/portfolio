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

function StackCard({ proj, index, progress }: { proj: any, index: number, progress: any }) {
  // Matemática escalonada: Cada carta arranca su viaje un poco después de la anterior
  const start = index * 0.15;
  const end = start + 0.25;

  // La posición final crea el efecto "mazo". Cada carta frena 50px a la derecha de la anterior.
  const finalX = index * 60;
  
  // Vienen desde 1000px (fuera de la pantalla a la derecha) hasta su posición en el acordeón
  const x = useTransform(progress, [start, end], [1000, finalX]);

  return (
    // Capa de Scroll: Maneja la entrada desde la derecha usando Framer Motion
    <motion.div
      style={{ x, zIndex: index }}
      className="absolute left-0 md:left-[10%] top-1/2 -translate-y-1/2 w-[260px] md:w-[380px] aspect-[4/3] rounded-[16px]"
    >
      {/* Capa Interactiva: Maneja el hover para que el usuario pueda "espiar" las cartas de abajo */}
      <div className="w-full h-full relative group cursor-pointer transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-8 hover:-translate-x-4 hover:rotate-[-3deg] hover:!z-50 rounded-[16px] overflow-hidden border-[2px] border-white/20 bg-black shadow-[-30px_0_60px_rgba(0,0,0,0.8)]">
        <a href={`/proyecto/${proj.id}`} className="block w-full h-full">
          
          <div 
            className="absolute -inset-[2px] bg-cover bg-center brightness-[0.7] transition-all duration-[800ms] group-hover:scale-[1.08] group-hover:brightness-[0.5]"
            style={{ backgroundImage: `url(${proj.bg})` }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

          <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-[800ms] group-hover:scale-[1.05]">
            {proj.logo ? (
              <img src={proj.logo} alt={proj.title} className="max-w-[160px] max-h-[50px] object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]" />
            ) : (
              <span className="text-[28px] font-black text-white tracking-[2px]">{proj.title}</span>
            )}
          </div>

        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectsStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={sectionRef} className="relative h-[400vh] w-full z-10">
      
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center max-w-[1400px] mx-auto px-[20px] md:px-[60px]">
        
        {/* COLUMNA IZQUIERDA: Textos fijados de forma segura */}
        <div className="w-full md:w-[35%] text-white z-20 shrink-0 md:pr-10 relative">
          <h2 className="text-[50px] md:text-[70px] font-black tracking-[-1.5px] mb-6 leading-none">Projects.</h2>
          <p className="text-[14px] md:text-[15px] leading-[1.6] font-light max-w-[400px] mb-5 text-white/80">
            A lo largo de los años colaboré en diversos proyectos como diseñador freelance, creando piezas de comunicación a medida para cada cliente.
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.6] font-light max-w-[400px] mb-5 text-white/80">
            El objetivo siempre es el mismo: que cada propuesta represente y potencie la identidad de la marca.
          </p>
        </div>

        {/* COLUMNA DERECHA: El Acordeón Horizontal */}
        {/* El WebkitMaskImage crea un desvanecimiento suave a la izquierda para que las cartas no tengan un corte duro */}
        <div 
          className="w-full md:w-[65%] h-[50vh] md:h-full relative overflow-hidden"
          style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 100%)", maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 100%)" }}
        >
          {projects.map((proj, i) => (
            <StackCard 
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
