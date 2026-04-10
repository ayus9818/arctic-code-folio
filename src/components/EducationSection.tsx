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
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Education
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-primary" />

        <div className="mt-10 space-y-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-xl border border-border bg-card p-6 hover-lift"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-sm text-primary">{edu.school}</p>
                <p className="mt-1 text-xs text-muted-foreground">{edu.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
