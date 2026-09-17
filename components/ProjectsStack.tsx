"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  { id: 'supervielle', title: 'Supervielle', bg: '/SUPERVIELLE.jpg', logo: '/SUPERVIELLE-LOGO.png' },
  { id: 'eminent', title: 'Éminent', bg: '/EMINENT.jpg', logo: '/EMINENT-LOGO.png' },
  { id: 'yerba-mate', title: 'Yerba Mate Argentina', bg: '/YERBA.png', logo: '/YERBA-LOGO.png' },
  { id: 'rotoplas', title: 'Rotoplas', bg: '/ROTOPLAS.jpg', logo: '/ROTOPLAS-LOGO.png' },
  { id: 'baron-b', title: 'Baron B', bg: '/BARON.jpg', logo: '/BARON-LOGO.png' },
  { id: 'reels', title: 'REELS', bg: '/REELS.png', text: 'REELS', isComingSoon: true },
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

  return (
    <div 
      ref={containerRef} 
      className="relative z-10 bg-[#111] -mt-[60px] rounded-t-[32px] pt-[80px] px-[20px] md:px-[40px] text-white"
    >
      <section className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10 pb-[35vh]">
        
        <div className="w-full md:w-[45%] relative md:sticky md:top-[100px] md:pr-5">
          <h2 className="text-[48px] md:text-[60px] font-bold tracking-[-1.5px] mb-6 leading-none">Projects.</h2>
          <p className="text-[14px] leading-[1.6] font-medium max-w-[340px] mb-5 text-white/80">
            A lo largo de los años colaboré en diversos proyectos como diseñador, creando piezas de comunicación a medida para cada cliente.
          </p>
          <p className="text-[14px] leading-[1.6] font-medium max-w-[340px] mb-5 text-white/80">
            El objetivo siempre es el mismo: que cada propuesta represente y potencie la identidad de la marca.
          </p>
          <p className="text-[12px] font-semibold text-white/40 uppercase tracking-[1px]">
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
                  border-[2px] border-white/20 bg-black w-full transform-gpu origin-top
                  mb-[25px] md:mb-[25vh] last:mb-0 shadow-[0_20px_50px_rgba(0,0,0,0.8)]
                  ${stickyTops[i]} z-[${i + 1}]
                `}
              >
                {proj.isComingSoon ? (
                  <div className="block w-full h-full relative cursor-not-allowed">
                    <div 
                      className="absolute -inset-[2px] bg-cover bg-center brightness-[0.4] grayscale-[50%]"
                      style={{ backgroundImage: `url(${proj.bg})` }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-2">
                      <span className="text-[28px] font-black text-white/60 tracking-[2px]">{proj.text}</span>
                      <span className="text-[10px] font-bold text-white uppercase tracking-[2px] bg-black/60 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full">
                        Próximamente
                      </span>
                    </div>
                  </div>
                ) : (
                  <a href={`/proyecto/${proj.id}`} className="block w-full h-full relative group cursor-pointer">
                    <div 
                      className="absolute -inset-[2px] bg-cover bg-center brightness-[0.7] transition-all duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.03] group-hover:blur-[3px] group-hover:brightness-[0.4]"
                      style={{ backgroundImage: `url(${proj.bg})` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.02]">
                      {proj.logo ? (
                        <img src={proj.logo} alt={proj.title} className="max-w-[180px] max-h-[60px] object-contain drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]" />
                      ) : (
                        <span className="text-[28px] font-black text-white tracking-[2px] drop-shadow-lg">{proj.text}</span>
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
