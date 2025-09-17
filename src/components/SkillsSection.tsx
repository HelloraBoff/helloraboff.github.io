import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Target, Users, Lightbulb, Heart } from "lucide-react";

const coreValues = [
  {
    icon: Target,
    title: "Research & Strategy",
    description: "Decisões baseadas em dados reais e necessidades validadas"
  },
  {
    icon: Users,
    title: "Employee Experience",
    description: "Especialista em conectar operação, compliance e experiência do usuário"
  },
  {
    icon: Lightbulb,
    title: "Design Systems",
    description: "Transformando processos complexos em experiências escaláveis"
  },
  {
    icon: Heart,
    title: "Content Strategy",
    description: "UX Writing e estratégia de conteúdo para máximo impacto"
  }
];

const skills = [
  "UX Strategy", "UX Research", "Journey Mapping", "Usability Testing", 
  "UI Design", "Design Systems", "Content Strategy", "UX Writing",
  "Employee Experience", "Service Design", "Information Architecture", "Wireframing"
];

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-violet-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial from-fuchsia-500/8 via-violet-500/4 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="glass-subtle px-6 py-3 text-sm border-violet-500/30 text-violet-600 dark:text-violet-300 mb-8">
            Habilidades
          </Badge>
          
          <h2 className="mb-6">
            Especialidades que Conectam Estratégia e Execução
          </h2>
          
          <p className="lead max-w-3xl mx-auto">
            <span className="text-violet-600 dark:text-violet-200 font-semibold">Abordagem T-shaped</span> com visão estratégica corporativa 
            e execução prática em UX/UI para criar experiências que realmente funcionam
          </p>
        </motion.div>

        {/* Core Skills */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <value.icon className="w-7 h-7 text-violet-500 dark:text-violet-400" />
                </div>
                <h4 className="mb-3 font-semibold text-gray-900 dark:text-violet-200">{value.title}</h4>
                <p className="text-sm text-gray-700 dark:text-violet-100/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-strong rounded-2xl p-8 border border-violet-500/20">
            <h3 className="mb-6 text-gray-900 dark:text-violet-200 text-center">
              Stack Completo
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge 
                    variant="secondary" 
                    className="w-full justify-center glass-subtle px-3 py-2 text-xs border-violet-500/20 text-gray-800 dark:text-violet-300 hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}