import { useState } from "react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ArrowRight, ExternalLink, Calendar, Users, TrendingUp, Award, Building } from "lucide-react";
import type { PageType } from "../../App-MultiPage";

interface WorkPageProps {
  onNavigate: (page: PageType) => void;
}

const projects = [
  {
    id: "reembolso-caixa",
    title: "Sistema de Reembolso",
    company: "Caixa Seguradora",
    category: "corporativo",
    period: "2018-2019",
    duration: "8 meses",
    team: "4 pessoas",
    image: "💼",
    description: "Transformação digital completa do processo de reembolso médico, eliminando formulários físicos e automatizando fluxos aprovação.",
    challenge: "Processo manual complexo com alta taxa de erro e demora de até 45 dias para aprovação de reembolso médico.",
    solution: "Sistema digital integrado com validação automática, fluxo de aprovação otimizado e dashboard de acompanhamento em tempo real.",
    results: [
      "75% redução no tempo de processamento",
      "90% diminuição na taxa de erro",
      "95% satisfação dos usuários",
      "R$ 2.5M economia anual estimada"
    ],
    technologies: ["UX Research", "Journey Mapping", "Prototyping", "Usability Testing"],
    link: "#",
    featured: true
  },
  {
    id: "site-b2hr",
    title: "Site B2HR",
    company: "B2HR Consultoria",
    category: "corporativo",
    period: "2022-2024",
    duration: "6 meses",
    team: "3 pessoas",
    image: "🌐",
    description: "Redesign completo do site corporativo focado em Employee Experience e conversão de leads qualificados.",
    challenge: "Site desatualizado com baixa conversão e experiência confusa para diferentes personas (RH, CEO, Colaboradores).",
    solution: "Arquitetura de informação clara, jornadas personalizadas por persona e sistema de conversão otimizado.",
    results: [
      "300% aumento em conversões",
      "60% redução na taxa de rejeição",
      "150% aumento no tempo de permanência",
      "2x mais leads qualificados"
    ],
    technologies: ["UX Strategy", "UI Design", "Content Strategy", "A/B Testing"],
    link: "https://b2hr.com.br",
    featured: true
  },
  {
    id: "original-blocos",
    title: "Original Blocos",
    company: "Plataforma Educacional",
    category: "educacional",
    period: "2021-2022",
    duration: "10 meses",
    team: "5 pessoas",
    image: "🎓",
    description: "Interface intuitiva para plataforma de aprendizagem colaborativa com foco em construção de conhecimento em blocos.",
    challenge: "Plataforma educacional complexa precisava ser acessível para diferentes níveis de letramento digital.",
    solution: "Design system escalável, navegação simplificada e gamificação para engajamento contínuo.",
    results: [
      "95% satisfação dos usuários",
      "40% aumento no engajamento",
      "85% taxa de conclusão de cursos",
      "Prêmio Inovação EdTech 2022"
    ],
    technologies: ["Design Systems", "Gamification", "Accessibility", "Mobile First"],
    link: "#",
    featured: true
  },
  {
    id: "obam-unb",
    title: "OBAM",
    company: "Universidade de Brasília",
    category: "educacional",
    period: "2020-2021",
    duration: "12 meses",
    team: "8 pessoas",
    image: "🏛️",
    description: "Observatório de Biotecnologia de Atenção à Saúde - plataforma acadêmica para pesquisa e disseminação científica.",
    challenge: "Necessidade de plataforma acadêmica que facilitasse o acesso a pesquisas complexas para diferentes públicos.",
    solution: "Arquitetura de informação hierárquica, busca avançada e visualização de dados científicos simplificada.",
    results: [
      "500+ pesquisadores cadastrados",
      "1000+ artigos indexados",
      "Referência nacional em biotecnologia",
      "Parcerias com 15 universidades"
    ],
    technologies: ["Information Architecture", "Data Visualization", "Academic UX", "Research"],
    link: "#",
    featured: false
  },
  {
    id: "biblioteca-volnei",
    title: "Biblioteca Volnei Garrafa",
    company: "Projeto Social",
    category: "social",
    period: "2022-2023",
    duration: "6 meses",
    team: "Voluntário",
    image: "📚",
    description: "Sistema de gestão e catálogo digital para biblioteca comunitária, facilitando acesso à literatura para comunidade local.",
    challenge: "Biblioteca comunitária precisava digitalizar acervo e melhorar acessibilidade para diferentes idades e letramento.",
    solution: "Catálogo digital intuitivo, sistema de reservas simples e interface acessível para todas as idades.",
    results: [
      "80% aumento no uso da biblioteca",
      "300+ novos usuários cadastrados",
      "95% satisfação da comunidade",
      "Modelo replicado em 3 bairros"
    ],
    technologies: ["Social Impact Design", "Accessibility", "Community Research", "Volunteer Management"],
    link: "#",
    featured: false
  }
];

const impactStats = [
  { icon: Building, number: "6", label: "Organizações", description: "Impactadas diretamente" },
  { icon: Users, number: "2000+", label: "Usuários", description: "Experiências melhoradas" },
  { icon: TrendingUp, number: "150%", label: "Avg. Melhoria", description: "KPIs principais" },
  { icon: Award, number: "5", label: "Reconhecimentos", description: "Prêmios e menções" }
];

export function WorkPage({ onNavigate }: WorkPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const filteredProjects = selectedCategory === "todos" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-violet-500/12 via-purple-500/6 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial from-fuchsia-500/12 via-violet-500/6 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="glass-subtle px-6 py-3 text-sm border-violet-500/30 text-violet-600 dark:text-violet-300 mb-8">
              Meu Trabalho
            </Badge>
            
            <h1 className="mb-8">
              Cases que Transformaram Negócios
            </h1>
            
            <p className="lead max-w-3xl mx-auto mb-12">
              <span className="text-violet-600 dark:text-violet-200 font-semibold">5 projetos estratégicos</span> que demonstram como 
              design centrado no usuário pode gerar <span className="text-violet-600 dark:text-violet-200 font-semibold">impacto mensurável</span> em 
              diferentes setores e contextos
            </p>

            {/* Quick Impact Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {impactStats.map((stat, index) => (
                <div key={stat.label} className="glass-strong p-4 rounded-2xl border border-violet-500/20 text-center">
                  <stat.icon className="w-6 h-6 text-violet-500 dark:text-violet-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-violet-600 dark:text-violet-400 mb-1">{stat.number}</div>
                  <div className="font-medium text-gray-900 dark:text-violet-200 text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-600 dark:text-violet-300">{stat.description}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="glass-subtle px-6 py-3 text-sm border-violet-500/30 text-violet-600 dark:text-violet-300 mb-6">
              Projetos em Destaque
            </Badge>
            <h2 className="mb-6">Cases de Maior Impacto</h2>
            <p className="lead max-w-3xl mx-auto">
              Seleção dos projetos que melhor demonstram minha abordagem estratégica e 
              <span className="text-violet-600 dark:text-violet-200 font-semibold"> capacidade de gerar resultados tangíveis</span>
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Project Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Card className="glass-strong p-12 rounded-3xl border border-violet-500/20 text-center group hover:scale-[1.02] transition-all duration-300">
                    <div className="text-8xl mb-6">{project.image}</div>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="glass-subtle text-xs border-violet-500/20 text-gray-700 dark:text-violet-300">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </Badge>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-violet-200">{project.title}</h3>
                      <p className="text-violet-600 dark:text-violet-400 font-medium">{project.company}</p>
                    </div>
                  </Card>
                </div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-violet-200 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-violet-100/80 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Meta */}
                  <div className="grid grid-cols-3 gap-4 py-4">
                    <div className="text-center">
                      <Calendar className="w-5 h-5 text-violet-500 mx-auto mb-1" />
                      <p className="text-sm font-medium text-gray-900 dark:text-violet-200">{project.duration}</p>
                      <p className="text-xs text-gray-600 dark:text-violet-300">Duração</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-violet-500 mx-auto mb-1" />
                      <p className="text-sm font-medium text-gray-900 dark:text-violet-200">{project.team}</p>
                      <p className="text-xs text-gray-600 dark:text-violet-300">Equipe</p>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-5 h-5 text-violet-500 mx-auto mb-1" />
                      <p className="text-sm font-medium text-gray-900 dark:text-violet-200">{project.period}</p>
                      <p className="text-xs text-gray-600 dark:text-violet-300">Período</p>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="glass-subtle p-6 rounded-2xl border border-violet-500/15">
                    <h4 className="font-semibold text-gray-900 dark:text-violet-200 mb-4">Principais Resultados</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.results.slice(0, 4).map((result, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-violet-100/80">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="glass-subtle px-3 py-1 text-xs border-violet-500/15 text-gray-700 dark:text-violet-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  {project.link !== "#" && (
                    <Button
                      variant="outline"
                      className="border-violet-400/40 text-gray-800 dark:text-violet-200 hover:bg-violet-500/10"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver projeto
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
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
              Portfólio Completo
            </Badge>
            <h2 className="mb-6">Todos os Projetos</h2>
            <p className="lead max-w-3xl mx-auto">
              Explorando diferentes setores e contextos para demonstrar 
              <span className="text-violet-600 dark:text-violet-200 font-semibold"> versatilidade e adaptabilidade</span>
            </p>
          </motion.div>

          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="grid w-full grid-cols-4 mb-12 glass-strong border border-violet-500/20">
                <TabsTrigger value="todos">Todos</TabsTrigger>
                <TabsTrigger value="corporativo">Corporativo</TabsTrigger>
                <TabsTrigger value="educacional">Educacional</TabsTrigger>
                <TabsTrigger value="social">Social</TabsTrigger>
              </TabsList>

              <TabsContent value={selectedCategory} className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="glass-strong rounded-3xl overflow-hidden border border-violet-500/20 hover:border-violet-500/40 hover:scale-[1.02] transition-all duration-300 group h-full">
                        {/* Project Header */}
                        <div className="h-40 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 flex items-center justify-center text-6xl">
                          {project.image}
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="secondary" className="glass-subtle text-xs border-violet-500/20 text-gray-700 dark:text-violet-300">
                              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                            </Badge>
                            {project.featured && (
                              <Badge className="glass-subtle text-xs border-yellow-500/30 text-yellow-600 dark:text-yellow-300">
                                ⭐ Destaque
                              </Badge>
                            )}
                          </div>
                          
                          <h4 className="text-xl font-bold text-gray-900 dark:text-violet-200 mb-2">
                            {project.title}
                          </h4>
                          
                          <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-3">
                            {project.company}
                          </p>
                          
                          <p className="text-gray-700 dark:text-violet-100/80 text-sm mb-4 leading-relaxed flex-1">
                            {project.description}
                          </p>
                          
                          {/* Key Result */}
                          <div className="glass-subtle p-3 rounded-xl border border-violet-500/15 mb-4">
                            <p className="text-xs font-medium text-green-600 dark:text-green-400">
                              📈 {project.results[0]}
                            </p>
                          </div>

                          {/* Footer */}
                          <div className="flex items-center justify-between text-xs text-gray-600 dark:text-violet-300">
                            <span>{project.period}</span>
                            <span>{project.duration}</span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-strong p-8 lg:p-12 border border-violet-500/20">
              <h2 className="mb-6">Interessado em saber como alcancei esses resultados?</h2>
              
              <p className="lead mb-8">
                Conheça minha <span className="text-violet-600 dark:text-violet-200 font-semibold">metodologia testada</span> e 
                como aplico design estratégico para gerar impacto real
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  onClick={() => onNavigate('process')}
                >
                  Ver meu processo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-violet-400/40 text-gray-800 dark:text-violet-200 hover:bg-violet-500/10"
                  onClick={() => onNavigate('contact')}
                >
                  Discutir um projeto
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}