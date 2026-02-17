import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-24 md:py-32">
      <div className="relative rounded-2xl border border-border bg-card px-6 py-16 md:px-16 md:py-20 text-center overflow-hidden">
        
        <div className="absolute inset-0 -z-10 bg-primary/5" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 bg-primary/20 blur-[100px] rounded-full" />

        <h2 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Vamos construir algo <span className="text-primary">incrível</span> juntos?
        </h2>
        
        <p className="mx-auto mb-10 max-w-[600px] text-lg text-muted-foreground">
          Estou disponível para novas oportunidades como Full Stack Developer.
          Se você tem um projeto desafiador ou uma vaga na sua equipe, me mande um "Olá".
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="mailto:paulovictor.pv05@gmail.com">
            <Button size="lg" className="gap-2 text-md px-8 h-12">
              <Mail className="h-5 w-5" />
              Enviar E-mail
            </Button>
          </a>
          
          <Link href="https://linkedin.com/in/paulo-victor-desousa" target="_blank">
            <Button variant="outline" size="lg" className="gap-2 text-md px-8 h-12">
              <Linkedin className="h-5 w-5" />
              LinkedIn
              <ArrowUpRight className="h-4 w-4 opacity-50" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}