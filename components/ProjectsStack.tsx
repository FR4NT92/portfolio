"use client";

import { motion } from "framer-motion";

const projects = [
  { id: 'supervielle', title: 'Supervielle', bg: '/SUPERVIELLE.jpg', logo: '/SUPERVIELLE-LOGO.png' },
  { id: 'eminent', title: 'Éminent', bg: '/EMINENT.jpg', logo: '/EMINENT-LOGO.png' },
  { id: 'yerba-mate', title: 'Yerba Mate Argentina', bg: '/YERBA.png', logo: '/YERBA-LOGO.png' },
  { id: 'rotoplas', title: 'Rotoplas', bg: '/ROTOPLAS.jpg', logo: '/ROTOPLAS-LOGO.png' },
  { id: 'baron-b', title: 'Baron B', bg: '/BARON.jpg', logo: '/BARON-LOGO.png' },
];

export default function ProjectsStack() {
  return (
    <div className="relative w-full z-10 bg-transparent pt-[10vh] pb-[30vh]">
      
      {/* Contenedor principal */}
      <div className="max-w-[1400px] mx-auto px-[20px] md:px-[60px] flex flex-col md:flex-row items-start relative">
        
        {/* COLUMNA IZQUIERDA: Textos Anclados */}
        {/* Usamos sticky nativo para que acompañe el recorrido de las cartas */}
        <div className="w-full md:w-[40%] sticky top-[20vh] z-10 md:pr-10 mb-20 md:mb-0">
          <h2 className="text-[50px] md:text-[70px] font-black tracking-[-1.5px] mb-6 text-white leading-none">Projects.</h2>
          <p className="text-[14px] md:text-[15px] leading-[1.6] font-light max-w-[400px] mb-5 text-white/80">
            A lo largo de los años colaboré en diversos proyectos como diseñador, creando piezas de comunicación a medida para cada cliente.
          </p>
          <p className="text-[14px] md:text-[15px] leading-[1.6] font-light max-w-[400px] mb-5 text-white/80">
            El objetivo siempre es el mismo: que cada propuesta represente y potencie la identidad de la marca.
          </p>
          
          <div className="mt-8 flex items-center gap-4 text-white/50 text-[11px] uppercase tracking-[2px] font-semibold">
            <span className="w-8 h-[1px] bg-white/30"></span>
            Scroll para explorar
          </div>
        </div>

        {/* COLUMNA DERECHA: Vertical Sticky Stack */}
        <div className="w-full md:w-[60%] flex flex-col relative">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              // Efecto de aparición simple desde abajo al entrar en pantalla por primera vez
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              
              // LA MAGIA: sticky + top calculado
              // Cada carta se frena un poco más abajo que la anterior (i * 30px) para crear el "mazo" visual
              className="sticky w-full aspect-[4/3] rounded-[24px] overflow-hidden border-[1px] border-white/20 bg-black shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
              style={{ 
                top: `calc(15vh + ${i * 40}px)`, 
                marginTop: i === 0 ? '0' : '30vh', // Espacio para scrollear entre carta y carta
                zIndex: i + 1 // Asegura que la nueva siempre tape a la vieja
              }}
            >
              <a href={`/proyecto/${proj.id}`} className="block w-full h-full relative group cursor-pointer">
                
                <div 
                  className="absolute inset-0 bg-cover bg-center brightness-[0.8] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.05] group-hover:brightness-[0.4]"
                  style={{ backgroundImage: `url(${proj.bg})` }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70"></div>

                <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.08]">
                  {proj.logo ? (
                    <img src={proj.logo} alt={proj.title} className="max-w-[200px] max-h-[70px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]" />
                  ) : (
                    <span className="text-[32px] md:text-[40px] font-black text-white tracking-[2px] drop-shadow-2xl">{proj.title}</span>
                  )}
                </div>

              </a>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
