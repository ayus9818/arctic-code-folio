import { MapPin, BookOpen, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6">

      {/* FULL WIDTH */}
      <div className="w-full px-6 lg:px-16 xl:px-32">
        
        {/* TITLE */}
        <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          About Me
        </h2>

        <div className="mt-3 h-1 w-16 rounded-full bg-primary" />

        {/* CONTENT */}
        <div className="mt-12 grid gap-12 md:grid-cols-2 items-start">

          {/* LEFT TEXT */}
          <div className="space-y-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
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

          {/* RIGHT CARDS */}
          <div className="space-y-6">

            {/* LOCATION */}
            <div className="flex items-start gap-4 rounded-2xl bg-card p-6 border border-border hover-lift transition-all duration-300">
              <MapPin size={24} className="mt-1 shrink-0 text-primary" />
              <div>
                <p className="text-lg font-semibold text-foreground">Location</p>
                <p className="text-base text-muted-foreground">Narvik, Norway</p>
              </div>
            </div>

            {/* STATUS */}
            <div className="flex items-start gap-4 rounded-2xl bg-card p-6 border border-border hover-lift transition-all duration-300">
              <BookOpen size={24} className="mt-1 shrink-0 text-primary" />
              <div>
                <p className="text-lg font-semibold text-foreground">Status</p>
                <p className="text-base text-muted-foreground">
                  Final semester · Bachelor thesis ongoing
                </p>
              </div>
            </div>

            {/* LANGUAGES */}
            <div className="flex items-start gap-4 rounded-2xl bg-card p-6 border border-border hover-lift transition-all duration-300">
              <Globe size={24} className="mt-1 shrink-0 text-primary" />
              <div>
                <p className="text-lg font-semibold text-foreground">Languages</p>
                <p className="text-base text-muted-foreground">
                  English (fluent) · Norwegian (fluent) · Nepali (fluent) · Hindi (fluent)
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}