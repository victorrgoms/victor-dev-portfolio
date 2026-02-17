"use client";

import Image from "next/image";
import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    },
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background py-20 w-full">
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="h-[400px] w-[400px] bg-primary/20 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="w-full relative z-10 mx-auto px-4 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
        <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20 bg-zinc-800 shadow-xl shadow-primary/10 transition-transform hover:scale-105">
          <Image
          src="/perfil.jpg"
          alt="Foto de Victor"
          fill
          className="object-cover"
          priority
          onError={(e) => console.error("Erro ao carregar imagem:", e)}
          />
        </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6 inline-flex items-center justify-center">
        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
          <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          Disponível para novos projetos
        </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
        Olá, meu nome é <span className="text-primary">Victor Gomes</span>.
        </motion.h1>
        
        <motion.p variants={itemVariants} className="mt-6 text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto">
        Engenheiro de Software e Full Stack Developer. 
        Busco excelência e evolução desenvolvendo softwares com <span className="text-foreground font-semibold">Java Spring Boot</span> e <span className="text-foreground font-semibold">React</span>.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link href="#projects">
          <Button size="lg" className="h-12 px-8 text-md group">
          Ver Projetos
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>

        <Link href="#contact">
          <Button variant="outline" size="lg" className="h-12 px-8 text-md bg-background/50 backdrop-blur-sm">
          Entrar em Contato
          </Button>
        </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 flex justify-center gap-6 text-muted-foreground">
        <a href="https://github.com/victorrgoms" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors hover:scale-110">
          <Github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
          Github
        </a>
        <a href="https://linkedin.com/in/paulo-victor-desousa" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors hover:scale-110">
          <Linkedin className="h-6 w-6" />
          <span className="sr-only">LinkedIn</span>
          LinkedIn
        </a>
        <a href="/Curriculo_Paulo_Victor.pdf" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors hover:scale-110">
          <FileText className="h-6 w-6" />
          <span className="sr-only">Currículo</span>
          Currículo
        </a>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}