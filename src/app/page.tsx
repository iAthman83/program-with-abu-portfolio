import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Tutorials from "@/components/Tutorials";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <About />
      <Portfolio />
      <Tutorials />
      <Contact />
    </main>
  );
}
