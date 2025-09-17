import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, ArrowRight, Eye, Users, Zap, Heart } from "lucide-react";

const featuredProjects = [
  {
    id: "sistema-reembolso",
    title: "Sistema de Reembolso",
    company: "Caixa Seguradora",
    category: "UX Strategy & Corporate",
    description: "Transformação digital de processo manual complexo em experiência fluida para 2000+ colaboradores",
    impact: "90% redução no tempo de processamento",
    tags: ["Journey Mapping", "UX Research", "Process Design"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    color: "violet",
    mediumUrl: "https://medium.com/@helloraboff/sistema-reembolso-case",
    liveUrl: null,
    icon: Users
  },
  {
    id: "b2hr-platform",
    title: "Plataforma B2HR",
    company: "B2HR",
    category: "UX/UI Design & Strategy",
    description: "Redesign completo da plataforma corporativa focada em experiência do RH e gestão de pessoas",
    impact: "40% aumento na satisfação do usuário",
    tags: ["UI Design", "UX Strategy", "Design System"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    color: "fuchsia",
    mediumUrl: "https://medium.com/@helloraboff/b2hr-redesign-case",
    liveUrl: "https://b2hr.com.br",
    icon: Zap
  },
  {
    id: "biblioteca-volnei",
    title: "Biblioteca Volnei Garrafa",
    company: "Projeto Social - UnB",
    category: "Social Impact & UX",
    description: "Plataforma digital para democratizar acesso ao conhecimento em comunidades vulneráveis",
    impact: "500+ usuários alcançados mensalmente",
    tags: ["Social Impact", "UX Research", "Accessibility"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    color: "purple",
    mediumUrl: "https://medium.com/@helloraboff/biblioteca-volnei-case",
    liveUrl: null,
    icon: Heart
  },
  {
    id: "original-blocos",
    title: "Original Blocos",
    company: "Startup - PME",
    category: "Branding & UX/UI",
    description: "Identidade visual e plataforma digital para empresa de materiais de construção sustentáveis",
    impact: "300% aumento em leads qualificados",
    tags: ["Branding", "UI Design", "Marketing Digital"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    color: "cyan",
    mediumUrl: "https://medium.com/@helloraboff/original-blocos-case",
    liveUrl: "https://originalblocos.com.br",
    icon: Eye
  }
];

const colorMap = {
  violet: {
    border: "border-violet-500/30",
    text: "text-violet-300",
    bg: "bg-violet-500/10",
    gradient: "from-violet-500 to-purple-500"
  },
  fuchsia: {
    border: "border-fuchsia-500/30", 
    text: "text-fuchsia-300",
    bg: "bg-fuchsia-500/10",
    gradient: "from-fuchsia-500 to-pink-500"
  },
  purple: {
    border: "border-purple-500/30",
    text: "text-purple-300", 
    bg: "bg-purple-500/10",
    gradient: "from-purple-500 to-violet-500"
  },
  cyan: {
    border: "border-cyan-500/30",
    text: "text-cyan-300",
    bg: "bg-cyan-500/10", 
    gradient: "from-cyan-500 to-blue-500"
  }
};

export function ProjectsSection() {
  const openMediumCase = (url: string) => {
    window.open(url, "_blank");
  };

  const openLiveProject = (url: string) => {
    window.open(url, "_blank");
  };

  const openAllMedium = () => {
    window.open("https://medium.com/@helloraboff", "_blank");
  };

  return (
    <section id="projetos" className="py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-violet-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial from-fuchsia-500/10 via-violet-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-violet-600/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="glass-subtle px-6 py-3 text-sm border-violet-500/20 text-violet-600 dark:text-violet-300 mb-8">
            Projetos em Destaque
          </Badge>
          
          <h2 className="mb-6">
            Cases que transformaram experiências
          </h2>
          <p className="lead max-w-3xl mx-auto">
            De sistemas corporativos complexos a impacto social — 
            <span className="text-violet-600 dark:text-violet-200 font-semibold">design estratégico que gera resultados reais</span>
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-strong rounded-3xl overflow-hidden border border-violet-500/20 hover:border-violet-400/40 group transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className={`glass-strong px-3 py-1 text-xs ${colorMap[project.color].border} ${colorMap[project.color].text}`}>
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className={`w-12 h-12 glass-subtle rounded-xl flex items-center justify-center ${colorMap[project.color].border}`}>
                    <project.icon className={`w-6 h-6 ${colorMap[project.color].text}`} />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-violet-200 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-violet-100/60">
                      {project.company}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-violet-100/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Metric */}
                <div className={`glass-subtle p-3 rounded-xl mb-6 ${colorMap[project.color].border}`}>
                  <div className="text-sm font-semibold text-gray-800 dark:text-violet-200 mb-1">Impacto:</div>
                  <div className={`text-lg font-bold bg-gradient-to-r ${colorMap[project.color].gradient} bg-clip-text text-transparent`}>
                    {project.impact}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag}
                      variant="secondary"
                      className="text-xs glass-subtle border-violet-500/20 text-gray-700 dark:text-violet-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className={`bg-gradient-to-r ${colorMap[project.color].gradient} hover:opacity-90 text-white flex-1`}
                    onClick={() => openMediumCase(project.mediumUrl)}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Case Completo
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-violet-500/30 text-gray-700 dark:text-violet-300 hover:bg-violet-500/10"
                      onClick={() => openLiveProject(project.liveUrl!)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA for More Cases */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-strong p-8 rounded-3xl border border-violet-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-violet-200 mb-4">
              Quer ver mais cases e insights?
            </h3>
            <p className="text-gray-700 dark:text-violet-100/70 mb-6">
              Publico estudos de caso detalhados, processos de design e insights sobre UX Strategy no Medium
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-xl hover:scale-105 transition-all duration-300"
              onClick={openAllMedium}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Explorar todos os cases
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}