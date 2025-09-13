import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Dashboard Analytics Moderno",
    description: "Plataforma completa de analytics com visualizações interativas e relatórios em tempo real. Desenvolvida com React, TypeScript e integração com APIs REST.",
    image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNTc3NzA5NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "API REST"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "E-commerce Responsivo",
    description: "Loja virtual moderna com carrinho de compras, sistema de pagamento e painel administrativo completo.",
    image: "https://images.unsplash.com/photo-1676793894040-b6dd72276620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB1aXxlbnwxfHx8fDE3NTc3NDE2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "App de Gestão de Projetos",
    description: "Ferramenta colaborativa para gerenciamento de projetos com kanban boards e sistema de notificações.",
    image: "https://images.unsplash.com/photo-1752650732799-6e81d5f4c398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHByb2plY3R8ZW58MXx8fHwxNzU3NzQxNjc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Vue.js", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Landing Page Corporativa",
    description: "Site institucional com design moderno, otimizado para SEO e performance.",
    image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNTc3NzA5NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Criativo",
    description: "Website portfolio para artista digital com galeria interativa e animações customizadas.",
    image: "https://images.unsplash.com/photo-1676793894040-b6dd72276620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB1aXxlbnwxfHx8fDE3NTc3NDE2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Framer Motion", "Three.js", "SCSS"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projetos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, demonstrando diferentes tecnologias 
            e abordagens para resolver problemas únicos.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="group relative px-8 py-3 text-foreground border border-border/50 rounded-lg hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Ver Todos os Projetos</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}