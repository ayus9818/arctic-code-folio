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
    github: "https://github.com/ayus9818/training-logs-app",
  },
  {
    title: "Bike Rental App",
    icon: Bike,
    description: "UI-based app with dynamic selections for user type, height, and bike type. Includes payment simulation.",
    tech: ["UI/UX", "Dynamic State"],
    github: "https://github.com/ayus9818/renting-bicycle-app",
  },
  {
    title: "Blog Platform API",
    icon: Globe,
    description: "RESTful backend built with C#/.NET featuring CRUD operations and authentication.",
    tech: ["C#", ".NET", "REST API"],
    github: "https://github.com/ayus9818/blog-platform-api",
  },
  {
    title: "Task Management API",
    icon: ClipboardList,
    description: "REST API for managing tasks with full CRUD operations. Backend-focused project.",
    tech: ["REST API", "Backend"],
    github: "https://github.com/ayus9818/task-management-api",
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
    github: "https://github.com/ayus9818/robot-arm-simulation",
  },
  {
    title: "Library Management System",
    icon: BookOpen,
    description: "Basic CRUD system for managing library resources.",
    tech: ["CRUD", "Full-Stack"],
    github: "https://github.com/ayus9818/library-management-system",
  },
  {
    title: "SeaStride Game",
    icon: BookOpen,
    description: "A mobile game project where real-world movement controls a virtual boat in a shared environment",
    tech: ["KOTLIN", "JETPACK COMPOSE", "ANDROID SENSORS", "GPS AND MOTIONS BASED INTERACTIONS"],
    github: "https://github.com/ayus9818/seastride-game",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6">

      {/* FULL WIDTH */}
      <div className="w-full px-6 lg:px-16 xl:px-32">

        {/* TITLE */}
        <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          Projects
        </h2>

        <div className="mt-3 h-1 w-16 rounded-full bg-primary" />

        {/* GRID */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((p) => (
            <div
              key={p.title}
              className={`group rounded-2xl border bg-card p-8 hover-lift transition-all duration-300 ${
                p.featured ? "border-primary/40 lg:col-span-2" : "border-border"
              }`}
            >

              {/* FEATURED TAG */}
              {p.featured && (
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Featured
                </span>
              )}

              <div className="flex items-start gap-4">

                {/* ICON */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <p.icon size={24} />
                </div>

                {/* CONTENT */}
                <div className="min-w-0 flex-1">

                  {/* TITLE */}
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                    {p.title}
                    {p.subtitle && (
                      <span className="ml-2 text-sm font-normal text-muted-foreground">
                        {p.subtitle}
                      </span>
                    )}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-2 text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <div className="mt-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="gap-2 text-base text-muted-foreground hover:text-foreground"
                    >
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github size={16} />
                        View on GitHub
                        <ExternalLink size={14} />
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