import { Code2, Database, Layout, Smartphone, Terminal, Wrench } from "lucide-react";

export const skillCategories = [
  {
    id: "backend",
    title: "Backend & Banco de Dados",
    icon: Database,
    skills: ["Java", "Spring Boot", "JPA / Hibernate", "PostgreSQL", "API REST", "Maven"],
  },
  {
    id: "frontend",
    title: "Frontend Web",
    icon: Layout,
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "UI/UX Design"],
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Expo", "Mobile UI/UX"],
  },
  {
    id: "tools",
    title: "Ferramentas & Outros",
    icon: Terminal,
    skills: ["Git / Github", "Linux", "Docker", "Scrum", "IntelliJ IDEA", "VS Code"],
  },
];