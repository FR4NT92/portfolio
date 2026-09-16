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

// Mapeo exacto de la ubicación de cada card simulando tu boceto
const layout = [
  { finalX: 80, finalY: -130, rotate: 6, zIndex: 10 },    // Supervielle (Arriba Der)
  { finalX: -140, finalY: -20, rotate: -8, zIndex: 20 },  // Eminent (Medio Izq)
  { finalX: 90, finalY: 10, rotate: -4, zIndex: 15 },     // Yerba (Medio Der)
  { finalX: -80, finalY: 140, rotate: 5, zIndex: 30 },    // Rotoplas (Abajo Izq)
  { finalX: 120, finalY: 160, rotate: -6, zIndex: 25 },   // Baron B (Abajo Der)
];

// Sub-componente para vincular independientemente cada card al scroll
function ScrollLinkedCard({ proj, index, progress }: { proj: any, index: number, progress: any }) {
  // Define cuándo empieza y termina de caer cada card (efecto cascada)
  const start = index * 0.12;
  const end = start + 0.25;

  // Sincronización milimétrica con el scroll: Caen desde 1000px arriba
  const y = useTransform(progress, [start, end], [-1000, layout[index].finalY]);
  const scale = useTransform(progress, [start, end], [1.4, 1]); // Se achican al "estamparse"
  const opacity = useTransform(progress, [start, start + 0.1], [0, 1]);

  return (
    <motion.div
      style={{
        y, scale, opacity,
        x: layout[index].finalX,
        rotate: layout[index].rotate,
        zIndex: layout[index].zIndex
      }}
      className="absolute w-[240px] md:w-[320px] aspect-[4/3] rounded-[16px] overflow-hidden border-[4px] md:border-[6px] border-white/90 bg-white shadow-2xl hover:!z-50 transition-shadow"
    >
      <a href={`/proyecto/${proj.id}`} className="block w-full h-full relative group cursor-pointer">
        <div 
          className="absolute -inset-[2px] bg-cover bg-center brightness-[0.75] transition-all duration-[800ms] group-hover:scale-[1.05] group-hover:blur-[3px] group-hover:brightness-[0.4]"
          style={{ backgroundImage: `url(${proj.bg})` }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-[800ms] group-hover:scale-[1.05]">
          {proj.logo ? (
            <img src={proj.logo} alt={proj.title} className="max-w-[150px] max-h-[50px] object-contain drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)]" />
          ) : (
            <span className="text-[28px] font-black text-white tracking-[2px]">{proj.title}</span>
          )}
        </div>
      </a>
    </motion.div>
  );
}

export default function ProjectsStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Capturamos el progreso del scroll de todo este contenedor inmenso
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  return (
    // Altura de 300vh para dar "pista" al scroll y permitir que las animaciones ocurran
    <div 
      ref={sectionRef} 
      className="relative h-[300vh] bg-[#111] w-full bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Contenedor pegajoso (sticky) que sostiene la vista mientras bajás */}
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-between max-w-[1400px] mx-auto px-[20px] md:px-[80px]">
        
        {/* COLUMNA IZQUIERDA: Textos originales en su lugar */}
        <div className="w-full md:w-[40%] mt-20 md:mt-0 text-white z-10">
          <h2 className="text-[50px] md:text-[70px] font-black tracking-[-1.5px] mb-6 leading-none">Projects.</h2>
          <p className="text-[14px] md:text-[15px] leading-[1.6] font-light max-w-[400px] mb-5 text-white/80">
            A lo largo de los años colaboré en diversos proyectos como diseñador freelance, creando piezas de comunicación a medida para cada cliente.
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.6] font-light max-w-[400px] mb-5 text-white/80">
            El objetivo siempre es el mismo: que cada propuesta represente y potencie la identidad de la marca.
          </p>
        </div>

        {/* COLUMNA DERECHA: El clúster donde colisionan las cards */}
        <div className="w-full md:w-[60%] h-[60vh] md:h-full relative flex items-center justify-center">
          {projects.map((proj, i) => (
            <ScrollLinkedCard 
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
