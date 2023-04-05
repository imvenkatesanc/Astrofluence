import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
      <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      </>
  );
}

export default App;