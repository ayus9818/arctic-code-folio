import { Code, Server, Database, Brain, Wrench } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Bootstrap", "Responsive Design", "UI/UX Design Basics", "REST API Integration"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Python", "REST API Development", "Authentication (JWT)", "API Design", "MVC Architecture", "Server-side Logic", "Git & Version Control"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "Database Design", "CRUD Operations", "Firebase", "Data Modeling", "Query Optimization"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["LLMs", "NLP", "Fine-tuning (LoRA / Unsloth)", "Hugging Face", "Dataset Cleaning", "JSONL SFT Prep"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Firebase", "REST APIs"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 bg-surface">

      {/* FULL WIDTH CONTAINER */}
      <div className="w-full px-6 lg:px-16 xl:px-32">

        {/* TITLE */}
        <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          Skills
        </h2>

        <div className="mt-3 h-1 w-16 rounded-full bg-primary" />

        {/* GRID */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-border bg-card p-8 hover-lift transition-all duration-300"
            >

              {/* HEADER */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <cat.icon size={24} />
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                  {cat.title}
                </h3>
              </div>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
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