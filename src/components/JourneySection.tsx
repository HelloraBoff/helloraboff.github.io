import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Building, Plane, GraduationCap, Heart } from "lucide-react";

const journeySteps = [
  {
    icon: Building,
    period: "2017-2019",
    title: "Caixa Seguradora",
    role: "Representante da Diretoria de Pessoas",
    description: "Base em Business Alignment e stakeholder management. Vivência operacional que me ensinou a conectar estratégia corporativa à experiência do colaborador.",
    highlight: "Fundação em visão de negócio"
  },
  {
    icon: Plane,
    period: "2019-2020", 
    title: "LATAM Airlines",
    role: "Agente de Operações & Vendas",
    description: "Experiência prática em Customer Experience e operações complexas. Desenvolvi olhar analítico para jornadas do usuário em ambientes de alta performance.",
    highlight: "Analytics comportamentais na prática"
  },
  {
    icon: GraduationCap,
    period: "2020-2022",
    title: "Transição Estratégica",
    role: "Formação UX/UI + Projetos UnB",
    description: "Especialização técnica aplicando conhecimento empresarial. Projetos acadêmicos (UnB) e sociais consolidaram expertise em UX Strategy e Data-informed Design.",
    highlight: "Convergência: negócio + design"
  },
  {
    icon: Heart,
    period: "2022-Presente",
    title: "B2HR & Growth Design",
    role: "UX/UI Designer T-Shaped",
    description: "Profundidade em Growth Design, UX Strategy e Rapid Prototyping. Amplitude em branding, facilitação e analytics — criando soluções holísticas de impacto.",
    highlight: "Perfil T-shaped consolidado"
  }
];

export function JourneySection() {
  return (
    <section id="jornada" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-radial from-violet-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-radial from-fuchsia-500/10 via-violet-500/5 to-transparent rounded-full blur-3xl" />
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
          <Badge className="glass-subtle px-6 py-3 text-sm border-violet-500/30 text-violet-600 dark:text-violet-300 mb-8">
            Minha Jornada
          </Badge>
          
          <h2 className="mb-6">
            Minha Jornada: Construindo um Perfil T-Shaped
          </h2>
          
          <p className="lead max-w-4xl mx-auto">
            <span className="text-violet-600 dark:text-violet-200 font-semibold">Administradora por formação, designer por paixão</span> — 
            minha trajetória conecta vivência empresarial, visão de negócio e expertise em Growth Design 
            para soluções que geram impacto mensurável.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="max-w-6xl mx-auto">
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
                {/* Timeline Connector (só para desktop) */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-violet-500/30 to-transparent" />
                )}

                {/* Card */}
                <div className="glass-strong rounded-3xl p-8 border border-violet-500/20 h-full group-hover:border-violet-500/40 transition-all duration-300 group-hover:scale-[1.02]">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 glass-subtle rounded-2xl flex items-center justify-center border border-violet-500/20 group-hover:border-violet-500/40 transition-all duration-300 flex-shrink-0">
                      <step.icon className="w-7 h-7 text-violet-500 dark:text-violet-400" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="glass-subtle text-xs border-violet-500/20 text-gray-700 dark:text-violet-300">
                          {step.period}
                        </Badge>
                      </div>
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
                            ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 flex-1' 
                            : 'bg-violet-500/20 w-6'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-strong p-8 rounded-3xl border border-violet-500/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-violet-200 mb-4">
              O Diferencial T-Shaped: Profundidade + Amplitude
            </h3>
            <p className="text-gray-700 dark:text-violet-100/80 leading-relaxed">
              Esta jornada me permite <span className="font-semibold text-violet-600 dark:text-violet-300">atuar com profundidade 
              em Growth Design e UX Strategy, mas também colaborar em branding, facilitação, analytics e comunicação</span>. 
              Resultado: soluções que conectam objetivos de negócio a experiências de impacto mensurável.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}