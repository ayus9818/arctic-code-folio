import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Teknisk Vakt",
    company: "Technical Support Role",
    description: "Provided technical support and maintained systems, ensuring smooth day-to-day operations.",
  },
  {
    role: "Data Operations",
    company: "CloudFactory",
    description: "Worked on data-related tasks and digital operations, contributing to data quality and processing workflows.",
  },
  {
    role: "Hospitality",
    company: "Customer Service",
    description: "Developed strong communication, problem-solving, and customer service skills through hands-on hospitality work.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-primary" />

        <div className="mt-10 space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-xl border border-border bg-card p-6 hover-lift"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Briefcase size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{exp.role}</h3>
                <p className="text-sm text-primary">{exp.company}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
