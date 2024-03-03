import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/Hero";
import Container from "./components/Container";
import AboutSection from "./sections/About";
import SkillsSection from "./sections/Skills";
import ExperienceSection from "./sections/Experience";
import ProjectsSection from "./sections/Projects";
import ContactSection from "./sections/Contact";

function App() {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </Container>
  );
}

export default App;
