
import { useState } from "react";

import Navbar from "./components/Navbar";
import InteractiveBackground from "./components/InteractiveBackground";
import Terminal from "./components/Terminal";
import LoadingScreen from "./components/LoadingScreen";
import DevQuote from "./components/DevQuote";
import VisitorLocation from "./components/VisitorLocation";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import TechNews from "./sections/TechNews";
import Contact from "./sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <LoadingScreen
        onFinish={() => setLoading(false)}
      />
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* BACKGROUND AURORA TECH */}
      <InteractiveBackground />

      {/* CONTEÚDO DO PORTFÓLIO */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <VisitorLocation />
        <DevQuote />
        <About />
        <TechStack />
        <Projects />
        <TechNews />
        <Contact />
        <Terminal />
        <Footer />
      </div>
    </div>
  );
}

export default App;
