import { projects } from "@/data/projects"; // Importando os dados
import { Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-24">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Projetos <span className="text-primary">Recentes</span>
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            De APIs robustas em Java a interfaces modernas em React. 
            Aqui está o que tenho construído.
          </p>
        </div>
        
        <Link href="https://github.com/victorrgoms" target="_blank">
            <Button variant="outline" className="group">
                Ver todos no GitHub
                <Github className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
            </Button>
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col border-border/50 bg-card/50 transition-all hover:border-primary/50 hover:bg-card">
            <CardHeader>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                    <Code2 className="h-5 w-5" />
                </div>
                <div className="flex gap-2">
                  {project.repoUrl && (
                    <Link href={project.repoUrl} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>
              <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
              <CardDescription className="line-clamp-2 mt-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-mono text-xs font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}