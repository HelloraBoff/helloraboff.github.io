import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ArrowRight, ExternalLink, MapPin, Calendar, Star, Briefcase, Users, Award } from "lucide-react";
import type { PageType } from "../../App-MultiPage";

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

const quickStats = [
  { icon: Briefcase, number: "15+", label: "Projetos", description: "Soluções completas" },
  { icon: Users, number: "1000+", label: "Usuários", description: "Experiências transformadas" },
  { icon: Calendar, number: "10+", label: "Anos", description: "De experiência" },
  { icon: Award, number: "100%", label: "Satisfação", description: "Cliente garantida" }
];

const featuredWork = [
  {
    title: "Sistema de Reembolso",
    company: "Caixa Seguradora",
    category: "Corporativo",
    description: "Transformação digital de processos complexos de reembolso",
    impact: "50% redução no tempo de processamento",
    image: "💼"
  },
  {
    title: "Site B2HR",
    company: "B2HR Consultoria", 
    category: "Corporativo",
    description: "Redesign completo focado em Employee Experience",
    impact: "200% aumento em conversões",
    image: "🌐"
  },
  {
    title: "Original Blocos",
    company: "Plataforma Educacional",
    category: "Educação",
    description: "Interface intuitiva para aprendizagem colaborativa",
    impact: "95% satisfação dos usuários",
    image: "🎓"
  }
];

const testimonialHighlight = {
  name: "Marina Amorim",
  role: "Head de Marketing e Vendas",
  company: "B2HR",
  content: "Hellora tem uma visão estratégica única que conecta UX/UI com resultados reais de negócio. Trabalhar com ela é transformador.",
  rating: 5
};

export function HomePage({ onNavigate }: HomePageProps) {
  const openMedium = () => {
    window.open("https://medium.com/@helloraboff", "_blank");
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-violet-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial from-fuchsia-500/15 via-violet-500/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-violet-600/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Badge className="glass-subtle px-6 py-3 text-sm border-violet-500/30 text-violet-600 dark:text-violet-300 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Disponível para novos desafios
                    </div>
                  </Badge>
                </motion.div>

                {/* Overline */}
                <motion.p
                  className="overline text-violet-600 dark:text-violet-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  UX/UI Designer · Estratégia Digital
                </motion.p>

                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Transformo <span className="text-violet-600 dark:text-transparent dark:bg-gradient-to-r dark:from-violet-400 dark:to-fuchsia-400 dark:bg-clip-text">complexidade em clareza</span> através do design estratégico
                </motion.h1>

                {/* Lead */}
                <motion.p
                  className="lead"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <span className="text-violet-600 dark:text-violet-200 font-semibold">10+ anos com foco em dados, experiência e conteúdo</span> transformando 
                  processos corporativos em experiências que conectam pessoas e resultados.
                </motion.p>

                {/* Location */}
                <motion.div
                  className="flex items-center gap-2 text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <MapPin className="w-4 h-4" />
                  <span>Brasília/DF, Brasil</span>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    onClick={() => onNavigate('work')}
                  >
                    Ver meus cases
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-violet-400/40 text-gray-800 dark:text-violet-200 hover:bg-violet-500/10"
                    onClick={() => onNavigate('contact')}
                  >
                    Fale comigo
                  </Button>
                </motion.div>

                {/* Secondary CTAs */}
                <motion.div
                  className="flex items-center gap-6 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-violet-600 dark:text-violet-400 hover:bg-violet-500/10"
                    onClick={openMedium}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Medium
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-violet-600 dark:text-violet-400 hover:bg-violet-500/10"
                  >
                    Download CV
                  </Button>
                </motion.div>
              </motion.div>

              {/* Profile Card */}
              <motion.div
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Card className="glass-strong p-8 max-w-sm border border-violet-500/20">
                  <div className="text-center space-y-4">
                    {/* Avatar */}
                    <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-500 p-1">
                      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900 dark:to-fuchsia-900 flex items-center justify-center">
                        <span className="text-4xl font-bold text-violet-600 dark:text-violet-300">HB</span>
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-violet-200">Hellora Boff</h3>
                      <p className="text-sm text-violet-600 dark:text-violet-400">UX/UI Designer</p>
                      <p className="text-xs text-gray-600 dark:text-violet-300 mt-1">Brasília/DF</p>
                    </div>

                    {/* Status */}
                    <div className="flex items-center justify-center gap-2 text-sm text-green-600 dark:text-green-400">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Disponível para projetos
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-strong p-6 rounded-2xl text-center border border-violet-500/20 hover:border-violet-500/40 hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="w-8 h-8 text-violet-500 dark:text-violet-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-1">{stat.number}</div>
                  <div className="font-semibold text-gray-900 dark:text-violet-200 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-600 dark:text-violet-300">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-radial from-fuchsia-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="glass-subtle px-6 py-3 text-sm border-violet-500/30 text-violet-600 dark:text-violet-300 mb-6">
              Trabalhos em Destaque
            </Badge>
            <h2 className="mb-6">Projetos que Transformaram Negócios</h2>
            <p className="lead max-w-3xl mx-auto">
              Seleção dos meus <span className="text-violet-600 dark:text-violet-200 font-semibold">casos de maior impacto</span>, 
              onde design estratégico gerou resultados mensuráveis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {featuredWork.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass-strong rounded-3xl overflow-hidden border border-violet-500/20 hover:border-violet-500/40 hover:scale-[1.02] transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <Badge variant="secondary" className="glass-subtle text-xs border-violet-500/20 text-gray-700 dark:text-violet-300 mb-3">
                    {project.category}
                  </Badge>
                  
                  <h4 className="text-xl font-bold text-gray-900 dark:text-violet-200 mb-2">
                    {project.title}
                  </h4>
                  
                  <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-3">
                    {project.company}
                  </p>
                  
                  <p className="text-gray-700 dark:text-violet-100/80 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Impact */}
                  <div className="glass-subtle p-3 rounded-xl border border-violet-500/15">
                    <p className="text-xs font-medium text-green-600 dark:text-green-400">
                      📈 {project.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-violet-400/40 text-gray-800 dark:text-violet-200 hover:bg-violet-500/10"
              onClick={() => onNavigate('work')}
            >
              Ver todos os cases
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-strong rounded-3xl p-8 lg:p-12 border border-violet-500/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="glass-subtle px-6 py-3 text-sm border-violet-500/30 text-violet-600 dark:text-violet-300 mb-6">
                    Sobre mim
                  </Badge>
                  
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-violet-200 mb-4">
                    Design que conecta estratégia e pessoas
                  </h3>
                  
                  <p className="text-gray-700 dark:text-violet-100/80 leading-relaxed mb-6">
                    <span className="font-semibold text-violet-600 dark:text-violet-300">10+ anos</span> conectando 
                    experiência operacional em grandes empresas com expertise em UX/UI para criar 
                    soluções que realmente funcionam na prática.
                  </p>

                  <Button
                    variant="outline"
                    className="border-violet-400/40 text-gray-800 dark:text-violet-200 hover:bg-violet-500/10"
                    onClick={() => onNavigate('about')}
                  >
                    Conhecer minha jornada
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Skills Preview */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-violet-200">Especialidades principais</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["UX Strategy", "Employee Experience", "Design Systems", "Content Strategy"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="w-full justify-center glass-subtle px-3 py-2 text-xs border-violet-500/20 text-gray-800 dark:text-violet-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-radial from-violet-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <Badge className="glass-subtle px-6 py-3 text-sm border-violet-500/30 text-violet-600 dark:text-violet-300 mb-6">
                Recomendação
              </Badge>
              <h2 className="mb-6">O que dizem sobre meu trabalho</h2>
            </div>

            <div className="glass-strong rounded-3xl p-8 lg:p-12 border border-violet-500/20 text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonialHighlight.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl text-gray-800 dark:text-violet-200 leading-relaxed mb-8 font-medium">
                "{testimonialHighlight.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MA</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 dark:text-violet-200">{testimonialHighlight.name}</div>
                  <div className="text-sm text-gray-600 dark:text-violet-300">{testimonialHighlight.role}</div>
                  <div className="text-xs text-violet-600 dark:text-violet-400">{testimonialHighlight.company}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-strong rounded-3xl p-8 lg:p-12 border border-violet-500/20">
              <h2 className="mb-6">Pronta para transformar sua próxima ideia?</h2>
              
              <p className="lead mb-8">
                Vamos conversar sobre como minha experiência única pode 
                <span className="text-violet-600 dark:text-violet-200 font-semibold"> impulsionar seu projeto</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  onClick={() => onNavigate('contact')}
                >
                  Iniciar conversa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-violet-400/40 text-gray-800 dark:text-violet-200 hover:bg-violet-500/10"
                  onClick={() => onNavigate('process')}
                >
                  Ver meu processo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}