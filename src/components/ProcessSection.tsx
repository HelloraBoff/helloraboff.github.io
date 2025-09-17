import { motion } from "motion/react";
import { Search, Lightbulb, Code, Rocket, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "UX Research",
    description: "Entendimento profundo dos usuários, stakeholders e contexto do negócio através de entrevistas, observação e análise de dados.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "Estratégia & IA",
    description: "Definição da arquitetura de informação, fluxos de usuário e estratégia de conteúdo baseada nos insights da pesquisa.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Code,
    title: "Prototipagem",
    description: "Criação de wireframes, protótipos interativos e testes de usabilidade para validar soluções antes da implementação.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Rocket,
    title: "UI Design",
    description: "Desenvolvimento da interface visual, sistema de design e especificações técnicas para desenvolvimento.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: CheckCircle,
    title: "Implementação & Testes",
    description: "Acompanhamento da implementação, testes de usabilidade e ajustes baseados no feedback real dos usuários.",
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
          <div className="overline text-blue-600 mb-4">METODOLOGIA</div>
          <h2>
            Processo T-Shaped Centrado no Usuário
          </h2>
          <p className="lead max-w-3xl mx-auto">
            Metodologia estruturada que combina <span className="emphasis-text">pesquisa estratégica</span>, 
            <span className="emphasis-text">design thinking</span> e <span className="emphasis-text">validação contínua</span> 
            para criar experiências que realmente fazem a diferença nos negócios.
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
                    className="glass rounded-2xl p-8"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="w-8 h-8 text-blue-500" />
                    </motion.div>
                    <h4>{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                </div>

                {/* Central Icon */}
                <div className="relative hidden lg:block">
                  <motion.div
                    className="w-24 h-24 rounded-full glass-strong border-2 border-white/20 flex items-center justify-center relative z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                  >
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-20 animate-pulse`} />
                    <step.icon className={`w-10 h-10 bg-gradient-to-r ${step.color} bg-clip-text text-transparent relative z-10`} />
                    
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Enhanced Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl" />
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
          <div className="max-w-2xl mx-auto p-8 glass rounded-2xl">
            <h3>Pronta para transformar sua ideia?</h3>
            <p className="text-muted-foreground mb-6">
              Vamos conversar sobre como posso ajudar a criar experiências que conectem pessoas e gerem resultados reais.
            </p>
            <motion.button 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector("#contato");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Vamos Conversar
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}