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
  const start = index * 0.15;
  const end = start + 0.25;

  // Aumentamos la separación a 70px porque las cartas ahora son más grandes
  const finalX = index * 70;
  
  // Vienen desde más cerca (600px en lugar de 1000px) para que el movimiento no sea tan brusco
  const x = useTransform(progress, [start, end], [600, finalX]);
  
  // Entrada limpia: Pasan de invisibles a totalmente sólidas sin depender de máscaras CSS
  const opacity = useTransform(progress, [start, start + 0.1], [0, 1]);

  return (
    <motion.div
      style={{ x, opacity, zIndex: index }}
      // Cartas más grandes: pasan de 380px a 460px de ancho en escritorio
      className="absolute left-0 md:left-[5%] top-1/2 -translate-y-1/2 w-[300px] md:w-[460px] aspect-[4/3] rounded-[16px]"
    >
      {/* Sombra suavizada (-15px, opacidad 0.5) y bordes más finos */}
      <div className="w-full h-full relative group cursor-pointer transition-transform duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-6 hover:-translate-x-3 hover:rotate-[-2deg] hover:!z-50 rounded-[16px] overflow-hidden border-[2px] border-white/10 bg-black shadow-[-15px_0_30px_rgba(0,0,0,0.5)]">
        <a href={`/proyecto/${proj.id}`} className="block w-full h-full">
          
          <div 
            className="absolute -inset-[2px] bg-cover bg-center brightness-[0.7] transition-all duration-[800ms] group-hover:scale-[1.05] group-hover:brightness-[0.5]"
            style={{ backgroundImage: `url(${proj.bg})` }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60"></div>

          <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-[800ms] group-hover:scale-[1.05]">
            {proj.logo ? (
              <img src={proj.logo} alt={proj.title} className="max-w-[180px] max-h-[60px] object-contain drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]" />
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
        
        <div className="w-full md:w-[35%] text-white z-20 shrink-0 md:pr-10 relative">
          <h2 className="text-[50px] md:text-[70px] font-black tracking-[-1.5px] mb-6 leading-none">Projects.</h2>
          <p className="text-[14px] md:text-[15px] leading-[1.6] font-light max-w-[400px] mb-5 text-white/80">
            A lo largo de los años colaboré en diversos proyectos como diseñador, creando piezas de comunicación a medida para cada cliente.
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.6] font-light max-w-[400px] mb-5 text-white/80">
            El objetivo siempre es el mismo: que cada propuesta represente y potencie la identidad de la marca.
          </p>
        </div>

        {/* Eliminada la máscara WebkitMaskImage que generaba el corte */}
        <div className="w-full md:w-[65%] h-[50vh] md:h-full relative overflow-hidden">
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
