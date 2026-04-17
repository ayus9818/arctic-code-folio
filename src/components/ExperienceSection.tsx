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
    <section id="experience" className="py-32 px-6 bg-surface">

      {/* FULL WIDTH */}
      <div className="w-full px-6 lg:px-16 xl:px-32">

        {/* TITLE */}
        <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          Experience
        </h2>

        <div className="mt-3 h-1 w-16 rounded-full bg-primary" />

        {/* LIST */}
        <div className="mt-14 space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="flex gap-6 rounded-2xl border border-border bg-card p-8 hover-lift transition-all"
            >

              {/* ICON */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Briefcase size={24} />
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                  {exp.role}
                </h3>

                <p className="text-base text-primary">
                  {exp.company}
                </p>

                <p className="mt-3 text-base lg:text-lg text-muted-foreground leading-relaxed">
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