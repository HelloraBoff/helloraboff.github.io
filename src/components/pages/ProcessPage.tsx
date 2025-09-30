import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ArrowRight, Search, Lightbulb, Palette, TestTube, Rocket, CheckCircle } from "lucide-react";
import type { PageType } from "../../App-MultiPage";

interface ProcessPageProps {
  onNavigate: (page: PageType) => void;
}

const processSteps = [
  {
    icon: Search,
    number: "01",
    title: "Descoberta & Research",
    duration: "1-2 semanas",
    description: "Entendimento profundo do problema, usuários e contexto através de pesquisa qualitativa e quantitativa.",
    activities: [
      "Entrevistas com stakeholders",
      "Pesquisa com usuários",
      "Análise competitiva",
      "Auditoria de UX existente"
    ],
    deliverables: [
      "Personas validadas",
      "Journey maps atuais",
      "Insights e oportunidades",
      "Briefing estratégico"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Estratégia & Planejamento",
    duration: "1 semana",
    description: "Definição da estratégia de UX alinhada aos objetivos de negócio e necessidades dos usuários.",
    activities: [
      "Definição de objetivos",
      "Priorização de features",
      "Arquitetura de informação",
      "Planejamento de testes"
    ],
    deliverables: [
      "Estratégia de UX",
      "Roadmap de features",
      "Sitemap/Fluxos",
      "Plano de validação"
    ],
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Palette,
    number: "03",
    title: "Design & Prototipação",
    duration: "2-4 semanas",
    description: "Criação de soluções visuais e interativas que materializem a estratégia definida.",
    activities: [
      "Wireframes de baixa fidelidade",
      "Design system/UI Kit",
      "Protótipos interativos",
      "Design de alta fidelidade"
    ],
    deliverables: [
      "Wireframes validados",
      "Design system",
      "Protótipos funcionais",
      "Especificações de UI"
    ],
    color: "from-fuchsia-500 to-pink-500"
  },
  {
    icon: TestTube,
    number: "04",
    title: "Testes & Validação",
    duration: "1-2 semanas",
    description: "Validação das soluções com usuários reais antes da implementação final.",
    activities: [
      "Testes de usabilidade",
      "Testes A/B",
      "Feedback de stakeholders",
      "Refinamentos iterativos"
    ],
    deliverables: [
      "Relatório de testes",
      "Insights de usabilidade",
      "Design refinado",
      "Plano de implementação"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Rocket,
    number: "05",
    title: "Implementação & Acompanhamento",
    duration: "Contínuo",
    description: "Suporte à implementação e monitoramento contínuo para garantir sucesso da solução.",
    activities: [
      "Handoff para desenvolvimento",
      "QA de implementação",
      "Monitoramento de métricas",
      "Melhorias contínuas"
    ],
    deliverables: [
      "Documentação técnica",
      "Guias de implementação",
      "Dashboard de métricas",
      "Relatório de resultados"
    ],
    color: "from-orange-500 to-red-500"
  }
];

const methodologies = [
  {
    title: "Design Thinking",
    description: "Abordagem centrada no humano para inovação",
    icon: "🧠"
  },
  {
    title: "Lean UX",
    description: "Desenvolvimento ágil com validação contínua",
    icon: "⚡"
  },
  {
    title: "Jobs-to-be-Done",
    description: "Foco nos trabalhos que usuários precisam realizar",
    icon: "🎯"
  },
  {
    title: "Service Design",
    description: "Visão holística da experiência do serviço",
    icon: "🔄"
  }
];

const tools = [
  {
    category: "Research",
    items: ["Miro", "FigJam", "Google Forms", "Zoom", "Loom"]
  },
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "Sketch", "Principle", "Framer"]
  },
  {
    category: "Testing",
    items: ["Maze", "UserTesting", "Hotjar", "Google Analytics", "Amplitude"]
  },
  {
    category: "Collaboration",
    items: ["Slack", "Notion", "Trello", "Monday", "GitHub"]
  }
];

const successFactors = [
  {
    factor: "Colaboração contínua",
    description: "Trabalho próximo com stakeholders, desenvolvedores e usuários durante todo o processo"
  },
  {
    factor: "Validação frequente",
    description: "Testes regulares com usuários reais para garantir que estamos no caminho certo"
  },
  {
    factor: "Foco em resultados",
    description: "Métricas claras e acompanhamento contínuo do impacto das soluções implementadas"
  },
  {
    factor: "Adaptabilidade",
    description: "Flexibilidade para ajustar o processo conforme necessidades específicas do projeto"
  }
];

export function ProcessPage({ onNavigate }: ProcessPageProps) {
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
              Meu Processo
            </Badge>
            
            <h1 className="mb-8">
              Como Transformo Ideias em Soluções
            </h1>
            
            <p className="lead max-w-3xl mx-auto mb-12">
              Metodologia <span className="text-violet-600 dark:text-violet-200 font-semibold">testada e validada em 10+ anos</span> de experiência, 
              combinando rigor estratégico com agilidade na execução para entregar resultados consistentes
            </p>

            {/* Process Overview */}
            <motion.div
              className="glass-strong rounded-3xl p-8 border border-violet-500/20 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">5</div>
                  <div className="font-medium text-gray-900 dark:text-violet-200">Fases Estruturadas</div>
                  <div className="text-sm text-gray-600 dark:text-violet-300">Do problema à solução</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">4-8</div>
                  <div className="font-medium text-gray-900 dark:text-violet-200">Semanas Típicas</div>
                  <div className="text-sm text-gray-600 dark:text-violet-300">Dependendo da complexidade</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">100%</div>
                  <div className="font-medium text-gray-900 dark:text-violet-200">Validação</div>
                  <div className="text-sm text-gray-600 dark:text-violet-300">Com usuários reais</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
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
              5 Fases Estruturadas
            </Badge>
            <h2 className="mb-6">Metodologia Detalhada</h2>
            <p className="lead max-w-3xl mx-auto">
              Cada fase tem objetivos claros, atividades específicas e 
              <span className="text-violet-600 dark:text-violet-200 font-semibold"> entregáveis mensuráveis</span>
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Card className="glass-strong p-12 rounded-3xl border border-violet-500/20 text-center group hover:scale-[1.02] transition-all duration-300">
                    <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${step.color} p-1`}>
                      <div className="w-full h-full glass-subtle rounded-3xl flex items-center justify-center">
                        <step.icon className="w-10 h-10 text-gray-700 dark:text-violet-300" />
                      </div>
                    </div>
                    <div className="text-6xl font-bold text-violet-600 dark:text-violet-400 mb-4">{step.number}</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-violet-200 mb-2">{step.title}</h3>
                    <Badge variant="secondary" className="glass-subtle text-xs border-violet-500/20 text-gray-700 dark:text-violet-300">
                      {step.duration}
                    </Badge>
                  </Card>
                </div>

                {/* Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-violet-200 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-violet-100/80 leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Activities */}
                    <div className="glass-subtle p-6 rounded-2xl border border-violet-500/15">
                      <h4 className="font-semibold text-gray-900 dark:text-violet-200 mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-violet-500 rounded-full" />
                        Atividades Principais
                      </h4>
                      <ul className="space-y-2">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="text-sm text-gray-700 dark:text-violet-100/80 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="glass-subtle p-6 rounded-2xl border border-violet-500/15">
                      <h4 className="font-semibold text-gray-900 dark:text-violet-200 mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-fuchsia-500 rounded-full" />
                        Entregáveis
                      </h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, i) => (
                          <li key={i} className="text-sm text-gray-700 dark:text-violet-100/80 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
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
              Metodologias
            </Badge>
            <h2 className="mb-6">Frameworks que Utilizo</h2>
            <p className="lead max-w-3xl mx-auto">
              Combinação de metodologias comprovadas adaptadas para 
              <span className="text-violet-600 dark:text-violet-200 font-semibold"> máxima eficácia em cada contexto</span>
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {methodologies.map((methodology, index) => (
              <Card key={methodology.title} className="glass-strong p-6 border border-violet-500/20 hover:border-violet-500/40 hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{methodology.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-violet-200 mb-2">{methodology.title}</h4>
                    <p className="text-sm text-gray-700 dark:text-violet-100/80">{methodology.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools */}
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
              Ferramentas
            </Badge>
            <h2 className="mb-6">Stack Técnico Atualizado</h2>
            <p className="lead max-w-3xl mx-auto">
              Ferramentas modernas para cada etapa do processo, sempre 
              <span className="text-violet-600 dark:text-violet-200 font-semibold"> atualizadas com o mercado</span>
            </p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {tools.map((category, index) => (
              <Card key={category.category} className="glass-strong p-6 border border-violet-500/20">
                <h4 className="font-semibold text-gray-900 dark:text-violet-200 mb-4">{category.category}</h4>
                <div className="space-y-2">
                  {category.items.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="w-full justify-center glass-subtle px-3 py-2 text-xs border-violet-500/15 text-gray-700 dark:text-violet-300"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-radial from-violet-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl" />
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
              Fatores de Sucesso
            </Badge>
            <h2 className="mb-6">O que Garante Resultados</h2>
            <p className="lead max-w-3xl mx-auto">
              Princípios fundamentais que aplicam em cada projeto para 
              <span className="text-violet-600 dark:text-violet-200 font-semibold"> garantir entrega de valor real</span>
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {successFactors.map((item, index) => (
              <motion.div
                key={item.factor}
                className="glass-strong p-6 rounded-2xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 glass-subtle rounded-xl flex items-center justify-center border border-violet-500/20 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-violet-200 mb-2">{item.factor}</h4>
                    <p className="text-gray-700 dark:text-violet-100/80">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              <h2 className="mb-6">Pronto para aplicar essa metodologia no seu projeto?</h2>
              
              <p className="lead mb-8">
                Vamos conversar sobre como meu processo pode 
                <span className="text-violet-600 dark:text-violet-200 font-semibold"> transformar suas ideias em soluções eficazes</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  onClick={() => onNavigate('contact')}
                >
                  Vamos conversar sobre seu projeto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-violet-400/40 text-gray-800 dark:text-violet-200 hover:bg-violet-500/10"
                  onClick={() => onNavigate('work')}
                >
                  Ver casos práticos
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}