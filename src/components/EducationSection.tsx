import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor in Computer Science (Datateknikk)",
    school: "UiT – The Arctic University of Norway",
    status: "Ongoing · Final semester",
  },
  {
    degree: "Bachelor (Hons) Computing",
    school: "The British College (Leeds Beckett University), Kathmandu, Nepal",
    status: "Completed",
  },
  {
    degree: "+12 Science",
    school: "Molihss Kumaripati Lalitpur, Nepal",
    status: "Completed",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-32 px-6">

      {/* FULL WIDTH */}
      <div className="w-full px-6 lg:px-16 xl:px-32">

        {/* TITLE */}
        <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          Education
        </h2>

        <div className="mt-3 h-1 w-16 rounded-full bg-primary" />

        {/* LIST */}
        <div className="mt-14 space-y-8">
          {education.map((edu, i) => (
            <div
              key={i}
              className="flex gap-6 rounded-2xl border border-border bg-card p-8 hover-lift transition-all"
            >

              {/* ICON */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap size={24} />
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                  {edu.degree}
                </h3>

                <p className="text-base text-primary">
                  {edu.school}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  {edu.status}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}