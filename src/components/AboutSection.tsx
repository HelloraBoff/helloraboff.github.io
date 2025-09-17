import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export function AboutSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projetos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openMedium = () => {
    window.open("https://medium.com/@helloraboff", "_blank");
  };

  return (
    <section id="sobre" className="py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-violet-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial from-fuchsia-500/10 via-violet-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-violet-600/8 to-transparent rounded-full blur-3xl" />
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
            Sobre mim
          </Badge>
          
          <h2 className="mb-6">
            De Processos Corporativos para Experiências Transformadoras
          </h2>
          
          <p className="lead max-w-4xl mx-auto">
            <span className="text-violet-600 dark:text-violet-200 font-semibold">10+ anos com foco em dados, experiência e conteúdo</span> transformando complexidade em clareza. 
            Especialista em <span className="text-violet-600 dark:text-violet-200 font-semibold">Employee Experience</span> e 
            soluções que conectam estratégia corporativa com impacto social.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20 max-w-6xl mx-auto">
          
          {/* Story & Approach */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-strong rounded-3xl p-8 border border-violet-500/20">
              <h3 className="mb-6 text-gray-900 dark:text-violet-200">
                Minha Abordagem Única
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-violet-500 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-violet-200 mb-2">Visão 360° dos Processos</div>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-violet-100/70">
                      Experiência prática em operações corporativas me permite criar soluções de UX/UI 
                      que funcionam na realidade empresarial, não apenas na teoria.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-fuchsia-500 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-violet-200 mb-2">Employee Experience Specialist</div>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-violet-100/70">
                      <span className="font-medium text-gray-900 dark:text-violet-200">4+ anos</span> especializados em transformar 
                      experiências corporativas complexas em jornadas simples e eficientes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-violet-200 mb-2">Design com Propósito</div>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-violet-100/70">
                      Equilibrio entre projetos corporativos de alto impacto e iniciativas sociais 
                      que geram transformação real na comunidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA para ver cases */}
            <motion.div
              className="glass-subtle p-6 rounded-2xl border border-violet-500/20 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-gray-900 dark:text-violet-200 mb-3">Veja meu trabalho em ação</h4>
              <p className="text-sm text-gray-700 dark:text-violet-100/70 mb-4">
                5 cases que mostram como transformo complexidade em experiências claras
              </p>
              <Button
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white border-0"
                onClick={scrollToProjects}
              >
                Ver Cases Completos
              </Button>
            </motion.div>
          </motion.div>

          {/* Medium & Philosophy */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass-strong rounded-3xl p-8 border border-violet-500/20">
              <h3 className="mb-6 text-gray-900 dark:text-violet-200">
                Filosofia de Trabalho
              </h3>
              
              <div className="space-y-6">
                <blockquote className="border-l-4 border-violet-500 pl-4 py-2">
                  <p className="text-gray-800 dark:text-violet-200 italic mb-2">
                    "Design não é sobre fazer bonito. É sobre fazer funcionar para pessoas reais, 
                    com problemas reais, em contextos reais."
                  </p>
                  <cite className="text-sm text-gray-600 dark:text-violet-300 font-medium">
                    — Hellora Boff
                  </cite>
                </blockquote>

                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-subtle p-4 rounded-xl border border-violet-500/15">
                    <div className="text-2xl font-bold text-violet-600 dark:text-violet-400 mb-1">📊</div>
                    <div className="text-sm font-medium text-gray-900 dark:text-violet-200">Data-Driven</div>
                    <div className="text-xs text-gray-600 dark:text-violet-300">Decisões baseadas em evidências</div>
                  </div>
                  
                  <div className="glass-subtle p-4 rounded-xl border border-violet-500/15">
                    <div className="text-2xl font-bold text-violet-600 dark:text-violet-400 mb-1">🎯</div>
                    <div className="text-sm font-medium text-gray-900 dark:text-violet-200">User-Centered</div>
                    <div className="text-xs text-gray-600 dark:text-violet-300">Foco na experiência real</div>
                  </div>
                  
                  <div className="glass-subtle p-4 rounded-xl border border-violet-500/15">
                    <div className="text-2xl font-bold text-violet-600 dark:text-violet-400 mb-1">🤝</div>
                    <div className="text-sm font-medium text-gray-900 dark:text-violet-200">Collaborative</div>
                    <div className="text-xs text-gray-600 dark:text-violet-300">Trabalho em equipe</div>
                  </div>
                  
                  <div className="glass-subtle p-4 rounded-xl border border-violet-500/15">
                    <div className="text-2xl font-bold text-violet-600 dark:text-violet-400 mb-1">🚀</div>
                    <div className="text-sm font-medium text-gray-900 dark:text-violet-200">Strategic</div>
                    <div className="text-xs text-gray-600 dark:text-violet-300">Visão de negócios</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium CTA */}
            <motion.div
              className="glass-subtle p-6 rounded-2xl border border-violet-500/20 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-gray-900 dark:text-violet-200 mb-3">Compartilho conhecimento</h4>
              <p className="text-sm text-gray-700 dark:text-violet-100/70 mb-4">
                Publico insights, estudos de caso e aprendizados no Medium
              </p>
              <Button
                variant="outline"
                size="sm"
                className="border-violet-400/40 text-gray-800 dark:text-violet-200 hover:bg-violet-500/10"
                onClick={openMedium}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Ler no Medium
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}