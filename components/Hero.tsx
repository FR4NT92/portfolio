"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const bgY = useTransform(smoothProgress, [0, 1], ["0px", "60px"]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
  
  const topY = useTransform(smoothProgress, [0, 1], ["0px", "-40px"]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.66], [1, 0]);
  
  const bottomY = useTransform(smoothProgress, [0, 1], ["0px", "-20px"]);

  return (
    <div ref={containerRef} className="relative h-[120vh] z-10 bg-[#e6e6e6]">
      <div className="sticky top-[15px] mx-[15px] md:mx-[15px] h-[calc(100vh-30px)] rounded-[16px] overflow-hidden bg-[#1a1a1a] flex flex-col justify-between p-7 md:p-10 text-white shadow-2xl">
        
        <motion.div 
          className="absolute -inset-[5%] z-0"
          style={{ y: bgY, scale: bgScale }}
        >
          {/* El video de textura que le da el toque premium */}
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
            <source src="/VID-HERO.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
        </motion.div>

        <div className="relative z-10 flex flex-col h-full justify-between">
          
          <motion.div 
            className="self-end text-right"
            style={{ y: topY, opacity: contentOpacity }}
          >
            <h1 className="text-[clamp(45px,7vw,85px)] font-black tracking-[-2px] leading-none">
              FRANCISCO.
            </h1>
            <p className="text-lg mt-3 font-normal">Diseño Visual & Dirección de Arte</p>
            <p className="font-bold mt-1 text-[#aaa]">Freelance</p>
          </motion.div>

          <motion.div 
            className="self-end"
            style={{ y: bottomY, opacity: contentOpacity }}
          >
            {/* 
              LA MAGIA DEL BOTÓN: 
              Reducimos duration a 300ms y aplicamos el cubic-bezier de rebote (easeOutBack) 
            */}
            <a href="mailto:frantruppa@gmail.com" className="group flex items-center gap-3 no-underline text-white cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:gap-0">
              
              <div className="h-[48px] w-[48px] rounded-full border border-white/40 flex items-center justify-center text-[18px] transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:bg-white group-hover:text-[#1a1a1a] group-hover:border-white group-hover:rounded-r-none group-hover:border-r-transparent group-hover:w-[54px] group-hover:pl-1">
                ✉
              </div>
              
              <div className="h-[48px] px-7 rounded-[30px] border border-white/40 flex items-center justify-center text-[15px] font-semibold transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:bg-white group-hover:text-[#1a1a1a] group-hover:border-white group-hover:rounded-l-none group-hover:border-l-transparent group-hover:pl-4">
                contacto
              </div>
              
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
}