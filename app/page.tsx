// app/page.tsx
import Hero from "./components/Hero";
import ProjectsStack from "./components/ProjectsStack";
import Footer from "./components/Footer";
// Importa el resto de tus componentes...

export default function Home() {
  return (
    <main 
      className="min-h-screen text-white bg-no-repeat bg-cover bg-center bg-fixed font-sans"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <Hero />
      <ProjectsStack />
      <Footer />
    </main>
  );
}
