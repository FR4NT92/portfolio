import Hero from "@/components/Hero";
import ProjectsStack from "@/components/ProjectsStack";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative bg-black w-full overflow-hidden">
        
        {/* 1. HERO: Se queda pegado al fondo (sticky) en la capa 0. 
            Espera a que la siguiente sección le pase por encima. */}
        <div className="sticky top-0 h-screen w-full z-0">
          <Hero />
        </div>

        {/* 2. PROYECTOS: Desliza por encima del Hero (capa 10). 
            Tiene su propio fondo para tapar visualmente al Hero. */}
        <div className="relative z-10 bg-[#e6e6e6] rounded-t-[32px] w-full shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
          <ProjectsStack />
        </div>

        {/* 3. CAROUSEL: Desliza por encima de Proyectos (capa 20). */}
        <div className="relative z-20 bg-white w-full">
          <Carousel />
        </div>

        {/* 4. FOOTER: Sube y tapa todo al final (capa 30). */}
        <div className="relative z-30 bg-[#1a1a1a] rounded-t-[32px] w-full shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
          <Footer />
        </div>

      </main>
    </SmoothScroll>
  );
}
