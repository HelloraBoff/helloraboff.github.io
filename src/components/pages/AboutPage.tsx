import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ArrowRight, ExternalLink, Building, Plane, GraduationCap, Heart, Target, Users, Lightbulb, Zap } from "lucide-react";
import type { PageType } from "../../App-MultiPage";

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

const journeySteps = [
  {
    icon: Building,
    period: "2017-2019",
    title: "Caixa Seguradora",
    role: "Representante da Diretoria de Pessoas",
    description: "Vivência operacional em processos corporativos, compliance e experiência do colaborador. Base sólida para entender a realidade empresarial.",
    highlight: "Fundação em processos empresariais",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Plane,
    period: "2019-2020",
    title: "LATAM Airlines",
    role: "Agente de Operações & Vendas",
    description: "Experiência prática em operações complexas e atendimento ao cliente. Visão completa da jornada do usuário em ambiente de alta pressão.",
    highlight: "Perspectiva operacional e comercial",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: GraduationCap,
    period: "2020-2022",
    title: "Transição para UX/UI",
    role: "Formação & Primeiros Projetos",
    description: "Especialização em UX/UI Design aplicando conhecimento prévio em processos. Projetos acadêmicos (UnB) e sociais para consolidar expertise.",
    highlight: "Aplicação estratégica do conhecimento",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Heart,
    period: "2022-Presente",
    title: "B2HR & Projetos Autorais",
    role: "UX/UI Designer Especialista",
    description: "4+ anos focados em Employee Experience, sistemas complexos e impacto social. Combinação única de visão estratégica e execução prática.",
    highlight: "Expertise consolidada e impacto mensurável",
    color: "from-fuchsia-500 to-pink-500"
  }
];

const coreValues = [
  {
    icon: Target,
    title: "Research & Strategy",
    description: "Decisões baseadas em dados reais e necessidades validadas, nunca em suposições",
    color: "text-violet-500"
  },
  {
    icon: Users,
    title: "Employee Experience",
    description: "Especialista em conectar operação, compliance e experiência do usuário final",
    color: "text-fuchsia-500"
  },
  {
    icon: Lightbulb,
    title: "Design Systems",
    description: "Transformando processos complexos em experiências escaláveis e consistentes",
    color: "text-purple-500"
  },
  {
    icon: Zap,
    title: "Content Strategy",
    description: "UX Writing e estratégia de conteúdo para comunicação clara e impactante",
    color: "text-indigo-500"
  }
];

const skillsData = [
  { category: "UX Strategy", skills: ["UX Research", "Journey Mapping", "Usability Testing", "User Interviews"] },
  { category: "Design Systems", skills: ["UI Design", "Component Libraries", "Design Tokens", "Documentation"] },
  { category: "Content Strategy", skills: ["UX Writing", "Information Architecture", "Content Audit", "Voice & Tone"] },
  { category: "Employee Experience", skills: ["Service Design", "Process Optimization", "Internal Tools", "Training Design"] }
];

export function AboutPage({ onNavigate }: AboutPageProps) {
  const openMedium = () => {
    window.open("https://medium.com/@helloraboff", "_blank");
  };

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
              Sobre mim
            </Badge>
            
            <h1 className="mb-8">
              Da Operação ao Design Estratégico
            </h1>
            
            <p className="lead max-w-3xl mx-auto mb-12">
              <span className="text-violet-600 dark:text-violet-200 font-semibold">10+ anos conectando</span> vivência operacional, 
              comercial e acadêmica para criar soluções de UX/UI que <span className="text-violet-600 dark:text-violet-200 font-semibold">realmente funcionam na prática</span>
            </p>

            {/* Philosophy Quote */}
            <motion.div
              className="glass-strong rounded-3xl p-8 border border-violet-500/20 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <blockquote className="text-2xl text-gray-800 dark:text-violet-200 italic mb-4 leading-relaxed">
                "Design não é sobre fazer bonito. É sobre fazer funcionar para pessoas reais, 
                com problemas reais, em contextos reais."
              </blockquote>
              <cite className="text-lg text-violet-600 dark:text-violet-400 font-medium">
                — Hellora Boff
              </cite>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-violet-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-fuchsia-500/8 via-violet-500/4 to-transparent rounded-full blur-3xl" />
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
              Minha Jornada
            </Badge>
            <h2 className="mb-6">Experiência que Faz a Diferença</h2>
            <p className="lead max-w-3xl mx-auto">
              Cada etapa da minha carreira contribuiu para uma <span className="text-violet-600 dark:text-violet-200 font-semibold">visão única</span> 
              sobre como criar experiências que funcionam tanto para usuários quanto para o negócio
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-strong p-8 border border-violet-500/20 h-full group-hover:border-violet-500/40 transition-all duration-300 group-hover:scale-[1.02]">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 glass-subtle rounded-2xl flex items-center justify-center border border-violet-500/20 group-hover:border-violet-500/40 transition-all duration-300 bg-gradient-to-br ${step.color} p-0.5`}>
                        <div className="w-full h-full glass-subtle rounded-2xl flex items-center justify-center">
                          <step.icon className="w-7 h-7 text-gray-700 dark:text-violet-300" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <Badge variant="secondary" className="glass-subtle text-xs border-violet-500/20 text-gray-700 dark:text-violet-300 mb-2">
                          {step.period}
                        </Badge>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-violet-200 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm font-medium text-violet-600 dark:text-violet-300">
                          {step.role}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <p className="text-gray-700 dark:text-violet-100/80 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Highlight */}
                      <div className="glass-subtle p-4 rounded-xl border border-violet-500/15">
                        <p className="text-sm font-medium text-violet-600 dark:text-violet-300">
                          💡 {step.highlight}
                        </p>
                      </div>
                    </div>

                    {/* Progress indicator */}
                    <div className="mt-6 flex items-center gap-2">
                      {journeySteps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i <= index 
                              ? `bg-gradient-to-r ${step.color} flex-1` 
                              : 'bg-violet-500/20 w-6'
                          }`}
                        />
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Journey Summary */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-strong p-8 border border-violet-500/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-violet-200 mb-4">
                O Diferencial: Visão 360°
              </h3>
              <p className="text-gray-700 dark:text-violet-100/80 leading-relaxed text-lg">
                Esta trajetória única me permite <span className="font-semibold text-violet-600 dark:text-violet-300">conectar 
                realidade operacional, necessidades comerciais e excelência em UX/UI</span> para criar soluções que 
                funcionam na teoria e na prática.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
              Abordagem T-Shaped
            </Badge>
            <h2 className="mb-6">Especialidades que Conectam Estratégia e Execução</h2>
            <p className="lead max-w-3xl mx-auto">
              Visão estratégica corporativa + execução prática em UX/UI para 
              <span className="text-violet-600 dark:text-violet-200 font-semibold"> resultados que realmente importam</span>
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="glass-strong rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 border border-violet-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 glass-subtle mx-auto mb-4 rounded-2xl flex items-center justify-center border border-violet-500/20 group-hover:border-violet-500/40 transition-all duration-300">
                    <value.icon className={`w-7 h-7 ${value.color} dark:text-violet-400`} />
                  </div>
                  <h4 className="mb-3 font-semibold text-gray-900 dark:text-violet-200">{value.title}</h4>
                  <p className="text-sm text-gray-700 dark:text-violet-100/70 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Skills Breakdown */}
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {skillsData.map((category, index) => (
                <Card key={category.category} className="glass-strong p-6 border border-violet-500/20">
                  <h4 className="font-semibold text-gray-900 dark:text-violet-200 mb-4">{category.category}</h4>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="mr-2 mb-2 glass-subtle px-3 py-1.5 text-xs border-violet-500/15 text-gray-700 dark:text-violet-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy & Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-radial from-fuchsia-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl" />
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
                Filosofia de Trabalho
              </Badge>
              <h2 className="mb-6">Como Abordo Cada Projeto</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <Card className="glass-strong p-6 border border-violet-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">📊</div>
                    <h4 className="font-semibold text-gray-900 dark:text-violet-200">Data-Driven</h4>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-violet-100/70">
                    Todas as decisões baseadas em evidências, pesquisa e métricas reais. 
                    Nunca em suposições ou tendências passageiras.
                  </p>
                </Card>

                <Card className="glass-strong p-6 border border-violet-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">🎯</div>
                    <h4 className="font-semibold text-gray-900 dark:text-violet-200">User-Centered</h4>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-violet-100/70">
                    Foco na experiência real dos usuários, considerando contexto, 
                    limitações e objetivos do mundo real.
                  </p>
                </Card>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <Card className="glass-strong p-6 border border-violet-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">🤝</div>
                    <h4 className="font-semibold text-gray-900 dark:text-violet-200">Collaborative</h4>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-violet-100/70">
                    Trabalho em equipe com stakeholders, desenvolvedores e usuários 
                    para criar soluções viáveis e valiosas.
                  </p>
                </Card>

                <Card className="glass-strong p-6 border border-violet-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">🚀</div>
                    <h4 className="font-semibold text-gray-900 dark:text-violet-200">Strategic</h4>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-violet-100/70">
                    Visão de negócios que conecta objetivos estratégicos 
                    com experiências excepcionais do usuário.
                  </p>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Medium & Contact CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Medium CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-strong p-8 border border-violet-500/20 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">📝</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-violet-200 mb-4">
                    Compartilho Conhecimento
                  </h3>
                  <p className="text-gray-700 dark:text-violet-100/70 mb-6">
                    Publico insights, estudos de caso e aprendizados sobre UX/UI no Medium
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="border-violet-400/40 text-gray-800 dark:text-violet-200 hover:bg-violet-500/10"
                  onClick={openMedium}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ler no Medium
                </Button>
              </Card>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-strong p-8 border border-violet-500/20 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-violet-200 mb-4">
                    Vamos Conversar?
                  </h3>
                  <p className="text-gray-700 dark:text-violet-100/70 mb-6">
                    Quer saber mais sobre minha abordagem ou discutir seu próximo projeto?
                  </p>
                </div>
                <Button
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white"
                  onClick={() => onNavigate('contact')}
                >
                  Entrar em contato
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}