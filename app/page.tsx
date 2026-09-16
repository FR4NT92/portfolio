import Hero from "@/components/Hero";
import ProjectsStack from "@/components/ProjectsStack";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      {/* EL FONDO GLOBAL: Gobierna toda la web y evita recuadros cortados */}
      <main 
        className="w-full min-h-screen bg-[#111] overflow-hidden bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <Hero />
        <ProjectsStack />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
