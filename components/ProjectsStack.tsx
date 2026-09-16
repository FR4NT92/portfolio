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

export default function ProjectsStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Capturamos el progreso del scroll en este bloque de 400vh (te da 4 pantallas de "pista" para bajar tranquilo)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Transformamos el scroll hacia abajo (0 a 1) en un movimiento hacia la izquierda (0% a -75%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={sectionRef} className="relative h-[400vh] w-full z-10">
      
      {/* Contenedor Fijo: Todo lo que está acá adentro se queda clavado en la pantalla */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row items-center max-w-[1400px] mx-auto px-[20px] md:px-[60px]">
        
        {/* COLUMNA IZQUIERDA: Textos fijos */}
        <div className="w-full md:w-[35%] text-white z-20 shrink-0 md:pr-10">
          <h2 className="text-[50px] md:text-[70px] font-black tracking-[-1.5px] mb-6 leading-none">Projects.</h2>
          <p className="text-[14px] md:text-[15px] leading-[1.6] font-light max-w-[400px] mb-5 text-white/80">
            A lo largo de los años colaboré en diversos proyectos como diseñador freelance, creando piezas de comunicación a medida para cada cliente.
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.6] font-light max-w-[400px] mb-5 text-white/80">
            El objetivo siempre es el mismo: que cada propuesta represente y potencie la identidad de la marca.
          </p>
          {/* Indicador visual de scroll */}
          <div className="mt-8 flex items-center gap-4 text-white/50 text-[11px] uppercase tracking-[2px] font-semibold">
            <span className="w-8 h-[1px] bg-white/30"></span>
            Scroll para explorar
          </div>
        </div>

        {/* COLUMNA DERECHA: El carril horizontal (Track) */}
        <div className="w-full md:w-[65%] h-full flex items-center justify-start overflow-visible pl-10 md:pl-20">
          
          {/* La pista móvil que se desliza con tu rueda del mouse */}
          <motion.div style={{ x }} className="flex gap-10 md:gap-16 items-center w-max">
            {projects.map((proj, i) => {
              
              // Pequeño detalle de diseño: intercalamos la altura de las cartas para darle ritmo visual
              const isEven = i % 2 === 0;
              
              return (
                <div 
                  key={proj.id} 
                  className={`w-[280px] md:w-[400px] aspect-[4/3] relative shrink-0 transition-transform duration-700 ease-out hover:-translate-y-4 ${isEven ? 'translate-y-6' : '-translate-y-6'}`}
                >
                  <a href={`/proyecto/${proj.id}`} className="block w-full h-full relative group rounded-[16px] overflow-hidden border-[2px] border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                    
                    <div 
                      className="absolute inset-0 bg-cover bg-center brightness-[0.7] transition-all duration-[800ms] group-hover:scale-[1.08] group-hover:brightness-[0.4]"
                      style={{ backgroundImage: `url(${proj.bg})` }}
                    />
                    
                    {/* Cristal de Apple sobre la imagen para unificar el estilo con el Hero */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                    <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-[800ms] group-hover:scale-[1.05]">
                      {proj.logo ? (
                        <img src={proj.logo} alt={proj.title} className="max-w-[180px] max-h-[60px] object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]" />
                      ) : (
                        <span className="text-[28px] font-black text-white tracking-[2px]">{proj.title}</span>
                      )}
                    </div>
                  </a>
                </div>
              );
            })}
          </motion.div>

        </div>
        
      </div>
    </div>
  );
}
