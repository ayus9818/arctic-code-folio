import { Code, Server, Database, Brain, Wrench } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML", "CSS", "Tailwind CSS", "React", "Jetpack Compose"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "C#", ".NET", "PHP"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "Room (Android)"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["LLM Fine-tuning", "LoRA / Unsloth", "Dataset Cleaning", "JSONL SFT Prep"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Firebase", "REST APIs"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Skills
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-primary" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-border bg-card p-6 hover-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <cat.icon size={20} />
                </div>
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
