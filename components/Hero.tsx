"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={constraintsRef} className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      
      <div className="z-10 text-center">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter">FRANCISCO.</h1>
        <p className="text-lg md:text-xl font-light mt-4">Diseño en Comunicación Visual Freelance</p>
        <div className="mt-8 flex justify-center">
           <button className="px-6 py-2 border border-white/50 rounded-full text-sm hover:bg-white hover:text-black transition-colors flex items-center gap-2">
             <span>✉</span> contacto
           </button>
        </div>
      </div>

      <motion.div
        className="absolute top-1/4 right-1/4 md:right-1/3 z-50 cursor-grab active:cursor-grabbing"
        drag
        dragConstraints={constraintsRef}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="/230.png" alt="Sticker Francisco" className="w-32 md:w-48 drop-shadow-2xl pointer-events-none" />
      </motion.div>
    </section>
  );
}
