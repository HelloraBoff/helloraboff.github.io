import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Palette, Code, BarChart, Zap } from "lucide-react";

const toolCategories = [
  {
    icon: Palette,
    title: "Design & Prototipação",
    tools: ["Figma", "Adobe XD", "Sketch", "Adobe Creative Suite", "Canva", "Framer"]
  },
  {
    icon: BarChart,
    title: "Research & Analytics",
    tools: ["Miro", "FigJam", "Google Analytics", "Hotjar", "Maze", "UserTesting"]
  },
  {
    icon: Code,
    title: "Development",
    tools: ["HTML/CSS", "JavaScript", "React", "Webflow", "WordPress", "Git"]
  },
  {
    icon: Zap,
    title: "Produtividade",
    tools: ["Notion", "Slack", "Trello", "Monday", "Google Workspace", "Office 365"]
  }
];

export function ToolsSection() {
  return (
    <section id="ferramentas" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-radial from-fuchsia-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-radial from-violet-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl" />
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
            Ferramentas
          </Badge>
          
          <h2 className="mb-6">
            Stack Técnico para Máxima Produtividade
          </h2>
          
          <p className="lead max-w-3xl mx-auto">
            <span className="text-violet-600 dark:text-violet-200 font-semibold">Ferramentas atualizadas</span> para cada etapa do processo, 
            desde research até entrega final
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {toolCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="glass-strong rounded-2xl p-6 group hover:scale-105 transition-all duration-300 border border-violet-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div className="w-14 h-14 glass-subtle mx-auto mb-4 rounded-xl flex items-center justify-center border border-violet-500/20 group-hover:border-violet-500/40 transition-all duration-300">
                  <category.icon className="w-6 h-6 text-violet-500 dark:text-violet-400" />
                </div>

                {/* Title */}
                <h4 className="mb-4 font-semibold text-gray-900 dark:text-violet-200 text-center">
                  {category.title}
                </h4>

                {/* Tools */}
                <div className="space-y-2">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (toolIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="w-full justify-center glass-subtle px-3 py-1.5 text-xs border-violet-500/15 text-gray-700 dark:text-violet-300 hover:border-violet-500/25 hover:bg-violet-500/5 transition-all duration-300"
                      >
                        {tool}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlight */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-subtle p-6 rounded-2xl border border-violet-500/20">
            <p className="text-sm text-gray-700 dark:text-violet-100/70">
              <span className="font-semibold text-gray-900 dark:text-violet-200">Sempre atualizando:</span> 
              {" "}Acompanho as últimas tendências e ferramentas do mercado para entregar 
              soluções modernas e eficientes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}