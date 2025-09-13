import { motion } from "motion/react";
import { Search, Lightbulb, Code, Rocket, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Descoberta",
    description: "Análise profunda dos objetivos, público-alvo e requisitos do projeto para garantir alinhamento total.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "Ideação",
    description: "Brainstorming criativo e desenvolvimento de conceitos inovadores baseados na pesquisa inicial.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    description: "Implementação técnica com código limpo, boas práticas e foco na performance e acessibilidade.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Rocket,
    title: "Testes & Entrega",
    description: "Testes rigorosos, otimizações finais e deploy em produção com documentação completa.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: CheckCircle,
    title: "Entrega & Suporte",
    description: "Entrega do projeto final com suporte contínuo e acompanhamento de performance.",
    color: "from-indigo-500 to-purple-500"
  }
];

export function ProcessSection() {
  return (
    <section id="processo" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meu Processo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma metodologia testada e refinada que garante resultados consistentes 
            e projetos entregues com excelência.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent -translate-x-1/2" />

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-8 h-8 text-blue-500" />
                  </motion.div>
                  <h3 className="mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Central Icon */}
                <div className="relative">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-card border-2 border-border/50 flex items-center justify-center relative z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-20 animate-pulse`} />
                    <step.icon className={`w-8 h-8 bg-gradient-to-r ${step.color} bg-clip-text text-transparent relative z-10`} />
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} blur-xl opacity-0 hover:opacity-30 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl border border-blue-500/10">
            <h3 className="mb-4">Pronto para começar seu projeto?</h3>
            <p className="text-muted-foreground mb-6">
              Vamos discutir como posso ajudar a transformar sua ideia em uma solução digital excepcional.
            </p>
            <button 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={() => {
                const element = document.querySelector("#contato");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Iniciar Projeto
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}