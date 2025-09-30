import { motion } from "motion/react";
import { Search, PenTool, Palette, TrendingUp } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const processSteps = {
  pt: [
    {
      icon: Search,
      number: "1",
      title: "Pesquisa & Insights",
      description: "Começo entendendo profundamente as necessidades dos usuários e do negócio através de métodos de pesquisa qualitativa e quantitativa",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: PenTool,
      number: "2", 
      title: "Arquitetura & Prototipagem",
      description: "Uso prototipagem rápida para explorar soluções, testar hipóteses e refinar a experiência do usuário",
      color: "from-violet-600 to-purple-600"
    },
    {
      icon: Palette,
      number: "3",
      title: "Design & Narrativas", 
      description: "Crio sistemas visuais coerentes e estratégias de conteúdo que comunicam com clareza e engajam os usuários",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: TrendingUp,
      number: "4",
      title: "Dados & Crescimento",
      description: "Utilizo métodos de design orientado por dados para medir, aprender e otimizar experiências continuamente",
      color: "from-purple-600 to-violet-600"
    }
  ],
  en: [
    {
      icon: Search,
      number: "1",
      title: "Research & Insights",
      description: "I start by deeply understanding user and business needs through qualitative and quantitative research methods",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: PenTool,
      number: "2",
      title: "Architecture & Prototyping", 
      description: "I use rapid prototyping to explore solutions, test hypotheses, and refine the user experience",
      color: "from-violet-600 to-purple-600"
    },
    {
      icon: Palette,
      number: "3",
      title: "Design & Narratives",
      description: "I create coherent visual systems and content strategies that communicate clearly and engage users",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: TrendingUp,
      number: "4", 
      title: "Data & Growth",
      description: "I use data-informed design methods to continuously measure, learn and optimize experiences",
      color: "from-purple-600 to-violet-600"
    }
  ]
};

export function ProcessSection() {
  const { language } = useLanguage();
  const steps = processSteps[language];

  const content = {
    pt: {
      overline: "METODOLOGIA",
      title: "Como Eu Trabalho",
      subtitle: "Minha abordagem combina pensamento estratégico com um processo de design centrado no humano"
    },
    en: {
      overline: "METHODOLOGY", 
      title: "How I Work",
      subtitle: "My approach combines strategic thinking with a human-centered design process"
    }
  };

  return (
    <section id="processo" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Container com borda gradiente elegante */}
        <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 dark:from-violet-500/30 dark:via-purple-500/20 dark:to-teal-500/30">
          <div className="bg-background/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 relative">
            {/* Efeito de brilho interno */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5 dark:from-violet-500/10 dark:to-teal-500/10 pointer-events-none" />
            
            {/* Section Header dentro da borda */}
            <motion.div
              className="text-center mb-16 relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4">
                {content[language].title}
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                {content[language].subtitle}
              </p>
            </motion.div>
            
        {/* Process Cards - Horizontal Layout (exatamente como na imagem) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
          {/* Connecting Line (Desktop only) - Consistente com design violeta */}
          <div 
            className="absolute top-1/2 left-0 w-full h-0.5 hidden lg:block connecting-line"
            style={{ transform: 'translateY(-50%)' }}
          />

          {steps.map((step, index) => {
            // Ícones específicos para UX/UI Design Process
            const processIcons = {
              1: Search,        // Research & Discovery
              2: PenTool,       // Design & Wireframe  
              3: Palette,       // Visual Design & Prototype
              4: TrendingUp     // Test & Optimize
            };
            
            const IconComponent = processIcons[step.number] || step.icon;
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.15
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative z-10"
              >
                {/* Card - Consistente com outras seções */}
                <div className="card-premium p-4 sm:p-6 h-full flex flex-col items-center text-center card-hover-lift transition-all duration-300 group relative overflow-hidden">
                  
                  {/* Background gradient hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon Container - Design refinado */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 border border-violet-500/20 relative overflow-hidden group-hover:scale-110 group-hover:border-violet-500/40 transition-all duration-300">
                      
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                      
                      {/* Icon com gradiente consistente e linhas refinadas */}
                      <IconComponent strokeWidth={1.5} className="w-10 h-10 text-violet-600 dark:text-violet-400 relative z-10 group-hover:text-violet-500 transition-colors duration-300" />
                      
                      {/* Pulse effect no hover */}
                      <div className="absolute inset-0 rounded-2xl border border-violet-500/20 opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                    </div>
                    
                    {/* Step Number - Fora do container do ícone */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-lg group-hover:shadow-xl transition-shadow duration-300 z-20">
                      {step.number}
                    </div>
                  </div>

                  {/* Content - Typography consistente */}
                  <div className="relative z-10 flex flex-col items-center flex-grow">
                    <h4 className="mb-4 text-center text-gray-600 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                      {step.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed text-center flex-grow">
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 dark:from-violet-500/20 dark:to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Connection dots for mobile - Tons violeta consistentes */}

          </div>
        </div>
       </div>
    </section>
  );
}