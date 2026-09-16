"use client";

import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Supervielle", img: "/supervielle.jpg", rotate: -6 },
  { id: 2, title: "Eminent", img: "/eminent.jpg", rotate: 4 },
  { id: 3, title: "Rotoplas", img: "/rotoplas.jpg", rotate: -3 },
  { id: 4, title: "Baron B", img: "/baronb.jpg", rotate: 5 },
];

export default function ProjectsStack() {
  return (
    <section className="min-h-screen py-20 px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
      
      <div className="md:w-1/3 sticky top-32">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Projects.</h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          A lo largo de los años colaboré en diversos proyectos como diseñador, creando piezas de comunicación a medida para cada cliente.
        </p>
      </div>

      <div className="md:w-2/3 grid grid-cols-2 gap-4 md:gap-6 mt-10 md:mt-0">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, scale: 1.3, y: 100 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotate: proj.rotate 
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              type: "spring", 
              bounce: 0.4, 
              duration: 0.8,
              delay: i * 0.15 
            }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] bg-gray-900"
          >
            <img src={proj.img} alt={proj.title} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
