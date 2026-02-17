import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { FadeIn } from "@/components/ui/fade-in";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      <Hero />

      <FadeIn delay={0.2}>
        <About />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Skills />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Projects />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Contact />
      </FadeIn>
      
      <footer className="w-full py-8 text-center text-sm text-muted-foreground border-t border-border/40 bg-background/50 backdrop-blur-sm">
        <p>© 2026 Victor Dev. Construído com Next.js, Tailwind.</p>
      </footer>
    </main>
  );
}