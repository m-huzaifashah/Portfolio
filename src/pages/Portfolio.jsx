import AnimatedBackground from '../components/AnimatedBackground';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skill";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
