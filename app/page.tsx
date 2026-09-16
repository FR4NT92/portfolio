import Hero from "@/components/Hero";
import ProjectsStack from "@/components/ProjectsStack";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="w-full bg-black overflow-hidden">
        <Hero />
        <ProjectsStack />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
