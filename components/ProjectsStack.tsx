"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const projects = [
  { id: 'supervielle', title: 'Supervielle', bg: '/SUPERVIELLE.jpg', logo: '/SUPERVIELLE-LOGO.png' },
  { id: 'eminent', title: 'Éminent', bg: '/EMINENT.jpg', logo: '/EMINENT-LOGO.png' },
  { id: 'yerba-mate', title: 'Yerba Mate Argentina', bg: '/YERBA.png', logo: '/YERBA-LOGO.png' },
  { id: 'rotoplas', title: 'Rotoplas', bg: '/ROTOPLAS.jpg', logo: '/ROTOPLAS-LOGO.png' },
  { id: 'baron-b', title: 'Baron B', bg: '/BARON.jpg', logo: '/BARON-LOGO.png' },
  { id: 'reels', title: 'REELS', bg: '/REELS.jpg', text: 'REELS', isComingSoon: true },
];

export default function ProjectsStack() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const stickyTops = [
    'md:top-[100px]', 'md:top-[125px]', 'md:top-[150px]', 
    'md:top-[175px]', 'md:top-[200px]', 'md:top-[225px]'
  ];

  // Z-indexes bajos para que queden encapsulados y el Footer los pueda tapar
  const zIndexes = ['z-[1]', 'z-[2]', 'z-[3]', 'z-[4]', 'z-[5]', 'z-[6]'];

  return (
    <div 
      ref={containerRef} 
      // z-0 encapsula esta sección. Es fundamental para que no pelee con el footer.
      className="relative z-0 bg-[#e6e6e6] -mt-[60px] rounded-t-[32px] pt-[80px] px-[20px] md:px-[40px]"
    >
      {/* Volvemos al pb-[35vh] original para no generar vacíos extraños */}
      <section className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10 pb-[35vh]">
        
        <div className="w-full md:w-[45%] relative md:sticky md:top-[100px] md:pr-5">
          <h2 className="text-[48px] md:text-[60px] font-black tracking-[-1.5px] mb-6 leading-none">Projects.</h2>
          <p className="text-[14px] leading-[1.6] font-medium max-w-[340px] mb-5 text-[#333]">
            A lo largo de los años colaboré en diversos proyectos como diseñador freelance, creando piezas de comunicación a medida para cada cliente.
          </p>
          <p className="text-[14px] leading-[1.6] font-medium max-w-[340px] mb-5 text-[#333]">
            El objetivo siempre es el mismo: que cada propuesta represente y potencie la identidad de la marca.
          </p>
          <p className="text-[12px] font-semibold text-[#888] uppercase tracking-[1px]">
            click to view →
          </p>
        </div>

        <div className="w-full md:w-[50%] flex flex-col">
          {projects.map((proj, i) => {
            const range = [i * (1 / projects.length), 1];
            const scale = useTransform(scrollYProgress, range, [1, 0.95]);
            
            return (
              <motion.div
                key={proj.id}
                style={{ scale }}
                className={`
                  relative md:sticky aspect-[4/3] rounded-[16px] overflow-hidden 
                  border-[6px] border-white bg-white w-full transform-gpu origin-top
                  /* ELIMINADO el last:mb-0. Ahora la card 6 tiene margen y puede solapar a la 5 */
                  mb-[25px] md:mb-[25vh]
                  ${stickyTops[i]} ${zIndexes[i]}
                `}
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
                  <Link href={`/proyecto/${proj.id}`} className="block w-full h-full relative group cursor-pointer">
                    <div 
                      className="absolute -inset-[2px] bg-cover bg-center brightness-[0.65] transition-all duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.03] group-hover:blur-[5px] group-hover:brightness-[0.4]"
                      style={{ backgroundImage: `url(${proj.bg})` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.02]">
                      {proj.logo ? (
                        <img src={proj.logo} alt={proj.title} className="max-w-[180px] max-h-[60px] object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
                      ) : (
                        <span className="text-[28px] font-black text-white tracking-[2px]">{proj.text}</span>
                      )}
                    </div>
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
