import { BookOpen, Brain, Users, Code } from "lucide-react";

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
        
        {/* Coluna da Esquerda */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Mais do que apenas código. <br />
            <span className="text-primary">Eu construo soluções.</span>
          </h2>
          
            <p className="text-lg text-muted-foreground leading-relaxed">
              Me chamo <strong>Paulo Victor de Sousa Gomes</strong>, tenho 23 anos e sou de Fortaleza, CE. Atualmente, estou cursando Ciência da Computação na Universidade Estadual do Ceará (UECE).
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou desenvolvedor Full Stack com foco em <strong>Java e Spring Boot</strong> para o backend, e <strong>React/React Native</strong> para o frontend e mobile. Tenho experiência em desenvolvimento de software, metodologias ágeis, mineração de dados e pesquisas acadêmicas.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Busco constantemente <strong>evoluir tecnicamente</strong>  e desenvolver soluções eficientes que gerem <strong>impacto real</strong> para usuários e negócios.
            </p>

          <div className="mt-4">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Tech Stack Atual
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "TypeScript", "Next.js", "PostgreSQL", "Tailwind"].map((tech) => (
                <span 
                  key={tech} 
                  className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna da Direita*/}
        <div className="grid gap-4 sm:grid-cols-2">
          
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/5">
            <BookOpen className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 font-semibold text-foreground">Formação Sólida</h3>
            <p className="text-sm text-muted-foreground">
              Ciência da Computação na UECE. Base forte em algoritmos, lógica de programação e estrutura de dados.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/5">
            <Users className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 font-semibold text-foreground">Liderança & Ensino</h3>
            <p className="text-sm text-muted-foreground">
              Ex-bolsista PET e Monitor de Matemática. Sei trabalhar em equipe e explicar conceitos complexos.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/5">
            <Brain className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 font-semibold text-foreground">Resolução Analítica</h3>
            <p className="text-sm text-muted-foreground">
              Experiência com Data Mining (Python) e pesquisa acadêmica. Olhar crítico para dados.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md hover:shadow-primary/5">
            <Code className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 font-semibold text-foreground">Dev Full Stack</h3>
            <p className="text-sm text-muted-foreground">
              Do banco de dados ao Frontend. Foco em arquitetura limpa com Spring Boot e React.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}