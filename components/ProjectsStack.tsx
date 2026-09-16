"use client";

import { motion } from "framer-motion";

const projects = [
  { id: 'supervielle', title: 'Supervielle', bg: '/SUPERVIELLE.jpg', logo: '/SUPERVIELLE-LOGO.png' },
  { id: 'eminent', title: 'Éminent', bg: '/EMINENT.jpg', logo: '/EMINENT-LOGO.png' },
  { id: 'yerba-mate', title: 'Yerba Mate Argentina', bg: '/YERBA.png', logo: '/YERBA-LOGO.png' },
  { id: 'rotoplas', title: 'Rotoplas', bg: '/ROTOPLAS.jpg', logo: '/ROTOPLAS-LOGO.png' },
  { id: 'baron-b', title: 'Baron B', bg: '/BARON.jpg', logo: '/BARON-LOGO.png' },
  { id: 'reels', title: 'REELS', bg: '/REELS.jpg', text: 'REELS', isComingSoon: true },
];

// Configuración matemática del desorden (rotación y desplazamientos X/Y para que parezca un collage)
const scatterLayout = [
  { rotate: -6, x: -40, y: 0 },
  { rotate: 4, x: 50, y: 30 },
  { rotate: -3, x: -20, y: -20 },
  { rotate: 5, x: 30, y: 10 },
  { rotate: -5, x: -30, y: 40 },
  { rotate: 2, x: 20, y: -10 },
];

export default function ProjectsStack() {
  return (
    <div 
      className="relative z-10 bg-[#111] min-h-screen pt-[120px] pb-[200px] px-[20px] md:px-[60px] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <section className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* TEXTO INTRODUCTORIO (Centrado como en tu boceto) */}
        <div className="w-full max-w-[800px] mb-20 text-white">
          <h2 className="text-[48px] md:text-[70px] font-black tracking-[-1.5px] mb-6 leading-none">Projects.</h2>
          <p className="text-[15px] leading-[1.6] font-light max-w-[450px] mb-5 text-white/80">
            A lo largo de los años colaboré en diversos proyectos como diseñador, creando piezas de comunicación a medida para cada cliente.
          </p>
          <p className="text-[15px] leading-[1.6] font-light max-w-[450px] mb-5 text-white/80">
            El objetivo siempre es el mismo: que cada propuesta represente y potencie la identidad de la marca.
          </p>
        </div>

        {/* CONTENEDOR COLLAGE (Cards desordenadas) */}
        <div className="w-full relative flex flex-wrap justify-center gap-6 md:gap-10">
          {projects.map((proj, i) => {
            const layout = scatterLayout[i];
            
            return (
              <motion.div
                key={proj.id}
                // EL EFECTO ESTAMPADO: Arranca grande y transparente, y cae con fuerza (spring) al hacer scroll
                initial={{ opacity: 0, scale: 1.3, rotate: layout.rotate - 10, x: layout.x, y: layout.y + 100 }}
                whileInView={{ opacity: 1, scale: 1, rotate: layout.rotate, x: layout.x, y: layout.y }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="relative w-full sm:w-[45%] lg:w-[38%] aspect-[4/3] rounded-[16px] overflow-hidden border-[4px] md:border-[6px] border-white/90 bg-white shadow-2xl hover:z-50"
              >
                {proj.isComingSoon ? (
                  <div className="block w-full h-full relative cursor-not-allowed">
                    <div 
                      className="absolute -inset-[2px] bg-cover bg-center brightness-[0.5] grayscale-[30%]"
                      style={{ backgroundImage: `url(${proj.bg})` }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-2">
                      <span className="text-[28px] font-black text-white/80 tracking-[2px]">{proj.text}</span>
                      <span className="text-[10px] font-bold text-white uppercase tracking-[2px] bg-black/50 backdrop-blur-sm px-4 py-1.5 rounded-full">
                        Próximamente
                      </span>
                    </div>
                  </div>
                ) : (
                  <a href={`/proyecto/${proj.id}`} className="block w-full h-full relative group cursor-pointer">
                    <div 
                      className="absolute -inset-[2px] bg-cover bg-center brightness-[0.75] transition-all duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.05] group-hover:blur-[3px] group-hover:brightness-[0.4]"
                      style={{ backgroundImage: `url(${proj.bg})` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.05]">
                      {proj.logo ? (
                        <img src={proj.logo} alt={proj.title} className="max-w-[150px] max-h-[50px] object-contain drop-shadow-[0_2px_15px_rgba(0,0,0,0.6)]" />
                      ) : (
                        <span className="text-[28px] font-black text-white tracking-[2px]">{proj.text}</span>
                      )}
                    </div>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
