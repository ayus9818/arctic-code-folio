import { MapPin, BookOpen, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About Me
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-primary" />

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Computer Science student at UiT The Arctic University of Norway,
              currently in my final semester working on my bachelor thesis. I'm
              passionate about building clean, functional software — from responsive
              frontends to robust backend APIs and AI-driven solutions.
            </p>
            <p>
              My thesis focuses on fine-tuning small language models for advertising
              content generation, combining my interests in AI/ML with practical
              software engineering.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 rounded-xl bg-card p-4 border border-border hover-lift">
              <MapPin size={20} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">Narvik, Norway</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-card p-4 border border-border hover-lift">
              <BookOpen size={20} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-foreground">Status</p>
                <p className="text-sm text-muted-foreground">Final semester · Bachelor thesis ongoing</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-card p-4 border border-border hover-lift">
              <Globe size={20} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-foreground">Languages</p>
                <p className="text-sm text-muted-foreground">English (fluent) · Norwegian (fluent) · Nepali (fluent) · Hindi (fluent)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
