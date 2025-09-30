import { motion } from "motion/react";
import { TrendingUp, Users, Award, Target } from "lucide-react";

const impactStats = [
  { 
    number: "15+", 
    label: "Projetos Entregues", 
    description: "Corporativos, educacionais e sociais",
    icon: Target,
    gradient: "from-violet-500 to-purple-500"
  },
  { 
    number: "3", 
    label: "Setores Impactados", 
    description: "Corporativo, Saúde & Educação",
    icon: TrendingUp,
    gradient: "from-fuchsia-500 to-pink-500"
  },
  { 
    number: "7+", 
    label: "Anos Corporativos", 
    description: "Experiência em ambientes complexos",
    icon: Award,
    gradient: "from-purple-500 to-violet-500"
  },
  { 
    number: "4+", 
    label: "Anos UX/UI", 
    description: "Estratégia e comunicação digital",
    icon: Users,
    gradient: "from-violet-500 to-fuchsia-500"
  }
];

export function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Violet Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-radial from-violet-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-radial from-fuchsia-500/15 via-violet-500/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Minimal Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Impacto & Resultados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Stats Grid - Full Width Impact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-strong rounded-3xl p-8 text-center group hover:scale-105 transition-all duration-500 border border-violet-500/30 dark:border-violet-500/20 hover:border-violet-400/50 dark:hover:border-violet-400/40 bg-white/85 dark:bg-slate-900/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Icon */}
              <motion.div
                className="relative w-20 h-20 glass-subtle mx-auto mb-6 rounded-2xl flex items-center justify-center border border-violet-500/20 group-hover:border-violet-400/40 transition-all duration-300"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                viewport={{ once: true }}
              >
                <stat.icon className="w-10 h-10 text-violet-500 dark:text-violet-400 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors duration-300" />
              </motion.div>

              {/* Number with Enhanced Animation */}
              <motion.div
                className={`text-5xl lg:text-6xl font-black text-slate-800 dark:bg-gradient-to-br dark:${stat.gradient} dark:bg-clip-text dark:text-transparent mb-4 leading-none`}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.15 + 0.4,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>

              {/* Label */}
              <motion.h4
                className="text-lg font-bold text-slate-800 dark:text-violet-200 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.h4>

              {/* Description */}
              <motion.p
                className="text-sm text-slate-700 dark:text-violet-100/60 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.8 }}
                viewport={{ once: true }}
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Players Showcase - Enhanced */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-strong p-8 rounded-3xl border border-violet-500/20 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-fuchsia-500/5 rounded-3xl" />
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-violet-200 mb-6">
                Grandes Players Impactados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { name: "Caixa Seguradora", color: "violet", desc: "Sistema de Reembolso" },
                  { name: "B2HR", color: "fuchsia", desc: "Plataforma Corporativa" },
                  { name: "UnB", color: "purple", desc: "Projetos Acadêmicos" },
                  { name: "Projetos Sociais", color: "pink", desc: "Impacto Social" }
                ].map((player, index) => (
                  <motion.div
                    key={player.name}
                    className="glass-subtle p-4 rounded-2xl border border-violet-500/10 hover:border-violet-400/30 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`text-${player.color}-600 dark:text-${player.color}-300 font-bold text-lg mb-1`}>
                      {player.name}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-violet-100/60">
                      {player.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}