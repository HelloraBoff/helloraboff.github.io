import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Building2, Users, TrendingUp, Award } from "lucide-react";

const impactStats = [
  {
    icon: Building2,
    number: "15+",
    label: "Projetos Entregues",
    description: "Soluções completas de UX/UI"
  },
  {
    icon: Users,
    number: "1000+",
    label: "Usuários Impactados",
    description: "Experiências transformadas"
  },
  {
    icon: TrendingUp,
    number: "3",
    label: "Setores Diversos",
    description: "Seguros, RH, Educação"
  },
  {
    icon: Award,
    number: "100%",
    label: "Satisfação Cliente",
    description: "Projetos entregues com sucesso"
  }
];

// Empresas/organizações com as quais trabalhou
const organizations = [
  {
    name: "Caixa Seguradora",
    type: "Financeiro/Seguros",
    role: "Sistema de Reembolso & Processos",
    period: "2017-2019"
  },
  {
    name: "LATAM Airlines",
    type: "Aviação/Turismo", 
    role: "Operações & Experiência do Cliente",
    period: "2019-2020"
  },
  {
    name: "B2HR Consultoria",
    type: "Recursos Humanos",
    role: "UX/UI Designer & Estratégia",
    period: "2022-Presente"
  },
  {
    name: "UnB - Universidade de Brasília",
    type: "Educação/Acadêmico",
    role: "Projetos OBAM & Pesquisa",
    period: "2020-2022"
  },
  {
    name: "Original Blocos",
    type: "EdTech/Educação",
    role: "Plataforma de Aprendizagem",
    period: "2021-2022"
  },
  {
    name: "Biblioteca Volnei Garrafa",
    type: "Cultural/Social",
    role: "Projeto de Impacto Social",
    period: "2022-2023"
  }
];

export function ImpactSection() {
  return (
    <section id="impacto" className="py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-violet-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-fuchsia-500/15 via-violet-500/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-violet-600/10 to-transparent rounded-full blur-3xl" />
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
          <Badge className="glass-subtle px-8 py-4 text-base border-violet-500/30 text-violet-600 dark:text-violet-300 mb-8">
            Impacto & Resultados
          </Badge>
          
          <h2 className="mb-8">
            Experiência Diversificada em Setores Estratégicos
          </h2>
          
          <p className="lead max-w-5xl mx-auto text-xl">
            <span className="text-violet-600 dark:text-violet-200 font-semibold">10+ anos conectando diferentes perspectivas:</span> 
            {" "}da operação de seguros à experiência aérea, do RH corporativo à educação — 
            uma visão única que enriquece cada projeto de UX/UI
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-strong p-6 rounded-3xl text-center group hover:scale-105 transition-all duration-300 border border-violet-500/20 hover:border-violet-500/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 glass-subtle mx-auto mb-4 rounded-2xl flex items-center justify-center border border-violet-500/20 group-hover:border-violet-500/40 transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-violet-500 dark:text-violet-400" />
                </div>
                
                <div className="text-4xl font-bold text-violet-600 dark:bg-gradient-to-br dark:from-violet-500 dark:to-fuchsia-500 dark:bg-clip-text dark:text-transparent mb-2">
                  {stat.number}
                </div>
                
                <h4 className="font-semibold text-gray-900 dark:text-violet-200 mb-2">
                  {stat.label}
                </h4>
                
                <p className="text-sm text-gray-600 dark:text-violet-100/60">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Organizations Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-violet-200 mb-4">
              Organizações que Impactei
            </h3>
            <p className="text-gray-700 dark:text-violet-100/70 max-w-3xl mx-auto">
              Cada experiência agregou uma perspectiva única ao meu trabalho em UX/UI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {organizations.map((org, index) => (
              <motion.div
                key={org.name}
                className="glass-strong rounded-3xl p-6 group hover:scale-[1.02] transition-all duration-300 border border-violet-500/20 hover:border-violet-500/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 dark:text-violet-200 mb-2 text-lg">
                    {org.name}
                  </h4>
                  <Badge 
                    variant="secondary" 
                    className="glass-subtle text-xs border-violet-500/20 text-gray-700 dark:text-violet-300 mb-2"
                  >
                    {org.type}
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <p className="text-sm text-gray-700 dark:text-violet-100/80 font-medium">
                    {org.role}
                  </p>
                  
                  <p className="text-xs text-gray-600 dark:text-violet-100/60">
                    {org.period}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="mt-4 h-1 bg-gradient-to-r from-violet-500/30 via-fuchsia-500/30 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >

        </motion.div>
      </div>
    </section>
  );
}