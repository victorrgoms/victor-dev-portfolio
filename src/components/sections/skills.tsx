import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 py-24 bg-background/50">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Minhas <span className="text-primary">Stacks</span>
        </h2>
        <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl">
          Tecnologias que domino e ferramentas que uso no dia a dia para transformar problemas em software.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.id} className="border-border/50 bg-card/30 transition-colors hover:border-primary/40">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-medium">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-secondary/50 hover:bg-secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}