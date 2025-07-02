// src/pages/Home.jsx

// Hapus impor Navbar dan StarBackground karena sudah ada di Layout.jsx
// import { Navbar } from "../components/Navbar";
// import { StarBackground } from "../components/StarBackground";

import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HobbySection } from "../components/HobbySection";

export const Home = () => {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <HobbySection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};