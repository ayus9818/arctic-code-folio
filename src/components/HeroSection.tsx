import { ArrowDown, Github, Linkedin, Mail, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      {/* Subtle gradient bg */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-primary)/0.06,transparent_60%)]" />

      <div className="mx-auto max-w-4xl text-center animate-fade-up">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Hello, I'm
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Ayush K.C.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Aspiring Software Engineer&nbsp;|&nbsp;AI&nbsp;&&nbsp;Full-Stack Enthusiast
        </p>
        <p className="mx-auto mt-2 text-sm text-muted-foreground">
          Based in Narvik, Norway&nbsp;·&nbsp;Computer Science Student
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href="/cv.pdf" download>
              <FileDown size={16} className="mr-1" />
              Download CV
            </a>
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="https://github.com/ayushkc" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/ayushkc" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
            <Linkedin size={20} />
          </a>
          <a href="mailto:ayush@example.com" className="text-muted-foreground transition-colors hover:text-foreground">
            <Mail size={20} />
          </a>
        </div>

        <a
          href="#about"
          className="mt-16 inline-block animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
