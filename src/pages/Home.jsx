// import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { EducationSection } from "../components/EducationSection";
import { AchievementSection } from "../components/AchievementSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle => by default dark mode kardia*/}
      {/* <ThemeToggle /> */}
      {/* BackGround Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <section id="career" className="py-24 px-4 relative">
          <div className="container mx-auto max-w-5xl">
            {/* Section Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Career <span className="text-primary">Journey</span>
            </h2>

            {/* Sections */}
            <div className="space-y-20">
              <EducationSection />
              <ExperienceSection />
              <AchievementSection />
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      {/* Footer  */}
      <Footer />
    </div>
  );
};
