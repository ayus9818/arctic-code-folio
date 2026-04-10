import { ExternalLink, Github, Brain, Smartphone, Bike, Globe, ClipboardList, Shield, Cpu, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Advertising Model",
    subtitle: "Bachelor Thesis",
    icon: Brain,
    description: "Fine-tuned Qwen2.5 using LoRA for generating ad scripts. Cleaned and transformed AWIM/Eurobest datasets with reasoning tokens.",
    tech: ["Python", "Unsloth", "HuggingFace", "LoRA"],
    github: "#",
    featured: true,
  },
  {
    title: "Android Training Log",
    icon: Smartphone,
    description: "Kotlin + Jetpack Compose app with timer, session logging, multi-screen navigation. MVVM architecture with state hoisting.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM"],
    github: "#",
  },
  {
    title: "Bike Rental App",
    icon: Bike,
    description: "UI-based app with dynamic selections for user type, height, and bike type. Includes payment simulation.",
    tech: ["UI/UX", "Dynamic State"],
    github: "#",
  },
  {
    title: "Blog Platform API",
    icon: Globe,
    description: "RESTful backend built with C#/.NET featuring CRUD operations and authentication.",
    tech: ["C#", ".NET", "REST API"],
    github: "#",
  },
  {
    title: "Task Management API",
    icon: ClipboardList,
    description: "REST API for managing tasks with full CRUD operations. Backend-focused project.",
    tech: ["REST API", "Backend"],
    github: "#",
  },
  {
    title: "Smart Surveillance System",
    subtitle: "Concept",
    icon: Shield,
    description: "AI-based fight detection concept with real-time alert system design.",
    tech: ["AI", "Computer Vision"],
    github: "#",
  },
  {
    title: "Robot Arm Project",
    icon: Cpu,
    description: "Hardware + programming integration project combining physical systems with code.",
    tech: ["Hardware", "Programming"],
    github: "#",
  },
  {
    title: "Library Management System",
    icon: BookOpen,
    description: "Basic CRUD system for managing library resources.",
    tech: ["CRUD", "Full-Stack"],
    github: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-primary" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`group rounded-xl border bg-card p-6 hover-lift ${
                p.featured ? "border-primary/30 sm:col-span-2" : "border-border"
              }`}
            >
              {p.featured && (
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Featured
                </span>
              )}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <p.icon size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-foreground">
                    {p.title}
                    {p.subtitle && (
                      <span className="ml-2 text-xs font-normal text-muted-foreground">
                        {p.subtitle}
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button variant="ghost" size="sm" asChild className="gap-1.5 text-muted-foreground hover:text-foreground">
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github size={14} />
                        View on GitHub
                        <ExternalLink size={12} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
