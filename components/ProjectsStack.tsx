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

// Coordenadas finales exactas (Eje X, Eje Y, Rotación y Capa) para armar tu maqueta
const layout = [
  { finalX: 100, finalY: -140, rotate: 6, zIndex: 10 },    // 1. Supervielle (Arriba Der)
  { finalX: -140, finalY: -30, rotate: -8, zIndex: 20 },   // 2. Eminent (Medio Izq)
  { finalX: 110, finalY: 10, rotate: -4, zIndex: 15 },     // 3. Yerba (Medio Der)
  { finalX: -90, finalY: 150, rotate: 5, zIndex: 30 },     // 4. Rotoplas (Abajo Izq)
  { finalX: 130, finalY: 170, rotate: -6, zIndex: 25 },    // 5. Baron B (Abajo Der)
];

export default function ProjectsStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Capturamos el scroll de TODO este bloque inmenso de 300vh
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  return (
    // Contenedor "pista" de scroll (300vh te da 3 pantallas de recorrido para que las cartas caigan cómodas)
    <div ref={sectionRef} className="relative h-[300vh] w-full z-10">
      
      {/* 
        CONTENEDOR FIJO (Sticky): Esto se queda clavado en la pantalla.
        El overflow-hidden acá es MAGIA PURA: corta las cartas invisibles a -1500px para que NO invadan el Hero.
      */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-between max-w-[1400px] mx-auto px-[20px] md:px-[80px]">
        
        {/* COLUMNA IZQUIERDA: Textos originales, anclados y elevados un poco (-translate-y-10) */}
        <div className="w-full md:w-[40%] text-white z-20 -translate-y-10">
          <h2 className="text-[50px] md:text-[70px] font-black tracking-[-1.5px] mb-6 leading-none">Projects.</h2>
          <p className="text-[14px] md:text-[15px] leading-[1.6] font-light max-w-[400px] mb-5 text-white/80">
            A lo largo de los años colaboré en diversos proyectos como diseñador freelance, creando piezas de comunicación a medida para cada cliente.
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.6] font-light max-w-[400px] mb-5 text-white/80">
            El objetivo siempre es el mismo: que cada propuesta represente y potencie la identidad de la marca.
          </p>
        </div>

        {/* COLUMNA DERECHA: El espacio de colisión de las cards */}
        <div className="w-full md:w-[60%] h-full relative flex items-center justify-center pointer-events-none">
          {projects.map((proj, i) => {
            // MATEMÁTICA DEL SCROLL (Cascada)
            // Cada carta arranca un 15% más tarde que la anterior
            const start = i * 0.15;
            const end = start + 0.25;

            // Caen desde Y: -1500px (escondidas arriba del borde) hasta su posición final.
            const y = useTransform(scrollYProgress, [start, end], [-1500, layout[i].finalY]);
            // Arrancan grandes (scale: 1.5) y se achican al "estamparse" (scale: 1)
            const scale = useTransform(scrollYProgress, [start, end], [1.5, 1]); 

            return (
              <motion.div
                key={proj.id}
                style={{ 
                  y, 
                  scale, 
                  x: layout[i].finalX, 
                  rotate: layout[i].rotate, 
                  zIndex: layout[i].zIndex 
                }}
                className="absolute w-[240px] md:w-[320px] aspect-[4/3] rounded-[16px] overflow-hidden border-[4px] md:border-[6px] border-white/90 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.6)] pointer-events-auto transition-shadow hover:!z-50"
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
          })}
        </div>
        
      </div>
    </div>
  );
}
