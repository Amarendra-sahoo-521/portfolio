import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SplashCursor from "./components/SplashCursor";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <SplashCursor
          rainbow={false}
          size={1}
          force={1}
          swirl={3}
          trail={1}
          clickSplash
          colorSpeed={1}
          intensity={1}
          momentum={1}
          shading={1}
          glow={0}
          quality="high"
          intro
          contained={false}
        />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm dark:border-white/10">
        © {new Date().getFullYear()} Amarendra Built with React + Tailwind.
      </footer>
    </>
  );
}
