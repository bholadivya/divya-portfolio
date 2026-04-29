import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ExperienceSection } from "../components/EducationSection";
import { EducationSection } from "../components/ExperienceSection";
import { AchievementSection } from "../components/AchievementSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* BackGround Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar/>
      {/* Main Content */}
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectSection/>
        <section id="career">
          <ExperienceSection/>
          <EducationSection/>
          <AchievementSection/>
        </section>
        <ContactSection/>
      </main>
      {/* Footer  */}
      <Footer/>
    </div>
  );
};


