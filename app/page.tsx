import Hero from "@/components/Hero";
import ProjectsStack from "@/components/ProjectsStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main 
      // ELIMINADO el overflow-hidden que rompía el anclaje (sticky)
      className="w-full min-h-screen bg-[#111] bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <Hero />
      <ProjectsStack />
      <Footer />
    </main>
  );
}
