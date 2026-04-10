import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayush K.C. — Software Engineer Portfolio" },
      { name: "description", content: "Portfolio of Ayush K.C., aspiring software engineer specializing in AI, full-stack development, and modern web technologies. Based in Narvik, Norway." },
      { property: "og:title", content: "Ayush K.C. — Software Engineer Portfolio" },
      { property: "og:description", content: "Aspiring Software Engineer | AI & Full-Stack Enthusiast" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundBlobs />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
