import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Vamos usar o botão do Shadcn se já tiver, senão usamos HTML puro estilizado por enquanto
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background py-20">
      
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="h-[300px] w-[300px] bg-primary blur-[100px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        
        <div className="mb-8 flex justify-center">
          <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg shadow-primary/10 transition-transform hover:scale-105">
            <Image
              src="/perfil.jpg"
              alt="Foto de Victor"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
          <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          Disponível para vagas e projetos
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          Olá, meu nome é <span className="text-primary">Victor Gomes</span>.
        </h1>
        
        <p className="mt-6 text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto">
          Full Stack Developer apaixonado por criar soluções elegantes e eficientes com <span className="text-foreground font-semibold">Java Spring Boot</span> e <span className="text-foreground font-semibold">React</span>.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          {/* Botão Principal */}
          <Link href="#projects">
            <button className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              Ver Projetos
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </Link>

          {/* Botão Secundário*/}
          <Link href="#contact">
            <button className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              Entrar em Contato
            </button>
          </Link>
        </div>

        {/* Links  */}
        <div className="mt-12 flex justify-center gap-6 text-muted-foreground">
          <a href="https://github.com/victorrgoms" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/paulo-victor-desousa" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="/Curriculo_Paulo_Victor.pdf" target="_blank" className="hover:text-primary transition-colors">
             <FileText className="h-6 w-6" />
             <span className="sr-only">Currículo</span>
          </a>
        </div>
      </div>
    </section>
  );
}