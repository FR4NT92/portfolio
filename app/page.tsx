import Hero from "@/components/Hero";
import ProjectsStack from "@/components/ProjectsStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // Agregamos bg-[#1a1a1a] al fondo general por si hay rebote en Safari, no se vea blanco
    <main className="bg-[#1a1a1a]">
      <Hero />
      <ProjectsStack />
      <Footer />
    </main>
  );
}
