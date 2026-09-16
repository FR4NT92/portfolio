"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  { id: 'supervielle', title: 'Supervielle', bg: '/SUPERVIELLE.jpg', logo: '/SUPERVIELLE-LOGO.png', finalX: 100, finalY: -140, rotate: 6, zIndex: 10 },
  { id: 'eminent', title: 'Éminent', bg: '/EMINENT.jpg', logo: '/EMINENT-LOGO.png', finalX: -140, finalY: -30, rotate: -8, zIndex: 20 },
  { id: 'yerba-mate', title: 'Yerba Mate Argentina', bg: '/YERBA.png', logo: '/YERBA-LOGO.png', finalX: 110, finalY: 10, rotate: -4, zIndex: 15 },
  { id: 'rotoplas', title: 'Rotoplas', bg: '/ROTOPLAS.jpg', logo: '/ROTOPLAS-LOGO.png', finalX: -90, finalY: 150, rotate: 5, zIndex: 30 },
  { id: 'baron-b', title: 'Baron B', bg: '/BARON.jpg', logo: '/BARON-LOGO.png', finalX: 130, finalY: 170, rotate: -6, zIndex: 25 },
];

// Sub-componente para manejar el efecto 3D y el Drag de cada carta independiente
function ImmersiveCard({ proj, index, progress, constraintsRef }: { proj: any, index: number, progress: any, constraintsRef: any }) {
  // Cascada de tiempos: cada carta aparece un momento después que la anterior
  const start = index * 0.15;
  const end = start + 0.25;

  // EL EFECTO CÁMARA INMERSIVA
  // Scale: arranca en tamaño 4 (gigante, como si estuviera pegada a tu cara) y se achica a 1.
  const scale = useTransform(progress, [start, end], [4, 1]);
  // Opacity: arranca invisible y aparece suavemente.
  const opacity = useTransform(progress, [start, start + 0.1], [0, 1]);
  // Blur: arranca totalmente fuera de foco y se nítida al llegar a su posición.
  const filter = useTransform(progress, [start, end], ["blur(20px)", "blur(0px)"]);

  return (
    <motion.div
      style={{ scale, opacity, filter, zIndex: proj.zIndex }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      {/* CAPA INTERACTIVA (DRAG) */}
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        whileDrag={{ scale: 1.05, zIndex: 99 }}
        initial={{ x: proj.finalX, y: proj.finalY, rotate: proj.rotate }}
        // Reborde achicado a border-[2px] / md:border-[3px] para más sutileza
        className="absolute pointer-events-auto w-[240px] md:w-[320px] aspect-[4/3] rounded-[16px] overflow-hidden border-[2px] md:border-[3px] border-white/90 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing hover:!z-50 transition-shadow"
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
  );
}

export default function ProjectsStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const clusterRef = useRef<HTMLDivElement>(null); // Referencia para que las cartas no se escapen de la pantalla al arrastrarlas
  
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

        {/* ZONA DE CARTAS (CLUSTER) */}
        <div ref={clusterRef} className="w-full md:w-[60%] h-full relative flex items-center justify-center">
          {projects.map((proj, i) => (
            <ImmersiveCard 
              key={proj.id} 
              proj={proj} 
              index={i} 
              progress={scrollYProgress} 
              constraintsRef={clusterRef}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}
