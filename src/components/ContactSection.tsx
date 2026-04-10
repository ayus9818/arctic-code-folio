import { Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get in Touch
        </h2>
        <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-primary" />
        <p className="mt-6 text-muted-foreground leading-relaxed">
          I'm always open to discussing new opportunities, projects, or just having a chat
          about technology. Feel free to reach out!
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="gap-2">
            <a href="mailto:ayush@example.com">
              <Send size={16} />
              Send Email
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="gap-2">
            <a href="https://github.com/ayus9818" target="_blank" rel="noreferrer">
              <Github size={16} />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="gap-2">
            <a href="https://www.linkedin.com/in/ayush-kc-386a82178/" target="_blank" rel="noreferrer">
              <Linkedin size={16} />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
