import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  
  useReveal();

  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}
