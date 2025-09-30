import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Logos das ferramentas - IMAGENS REAIS DO GITHUB - AUMENTADAS PARA MELHOR VISIBILIDADE
const toolLogos = {
  Figma: (
    <ImageWithFallback
      src="https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/refs/heads/main/images/Figma%20design%20logo.png"
      alt="Figma"
      className="w-7 h-7 object-contain"
    />
  ),
  Miro: (
    <ImageWithFallback
      src="https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/refs/heads/main/images/miro.png"
      alt="Miro"
      className="w-7 h-7 object-contain"
    />
  ),
  Notion: (
    <ImageWithFallback
      src="https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/refs/heads/main/images/Notion%20logo.png"
      alt="Notion"
      className="w-7 h-7 object-contain"
    />
  ),
  WordPress: (
    <ImageWithFallback
      src="https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/refs/heads/main/images/wordpress%20%2B%20elementor%20logo.png"
      alt="WordPress + Elementor"
      className="w-7 h-7 object-contain"
    />
  ),
  GPT: (
    <ImageWithFallback
      src="https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/refs/heads/main/images/GPT%20_%20Gemini%20logo.png"
      alt="GPT + Gemini"
      className="w-7 h-7 object-contain"
    />
  ),
  FigmaMake: (
    <ImageWithFallback
      src="https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/refs/heads/main/images/Figma%20make%20logo.png"
      alt="Figma Make"
      className="w-7 h-7 object-contain"
    />
  ),
  "Nano Banana": (
    <ImageWithFallback
      src="https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/refs/heads/main/images/Nano%20Banana%20logo.png"
      alt="Nano Banana"
      className="w-7 h-7 object-contain"
    />
  )
};

// Sistema de indicadores de nível (Amarelo, Verde, Azul)
const LevelIndicator = ({ level }) => {
  const colors = [
    { bg: 'bg-yellow-500', border: 'border-yellow-500' }, // Nível 1 - Amarelo
    { bg: 'bg-green-500', border: 'border-green-500' },   // Nível 2 - Verde  
    { bg: 'bg-blue-500', border: 'border-blue-500' }      // Nível 3 - Azul
  ];
  
  return (
    <div className="flex gap-1 ml-auto">
      {[1, 2, 3].map((dot) => (
        <div
          key={dot}
          className={`w-2 h-2 rounded-full border ${
            dot <= level
              ? `${colors[dot-1].bg} ${colors[dot-1].border}`
              : 'bg-transparent border-gray-300/50 dark:border-violet-300/30'
          }`}
        />
      ))}
    </div>
  );
};

const skillsData = {
  pt: {
    title: "Estratégia & Habilidades T-Shaped",
    subtitle: "Experiência que combina profundidade em áreas estratégicas com amplitude em todo o ciclo de vida do projeto, garantindo viabilidade e impacto.",
    softSkills: [
      "Empatia Aplicada",
      "Storytelling",
      "Flexibilidade",
      "Business Acumen",
      "Pensamento Sistêmico",
      "Comunicação Persuasiva",
      "Gestão de Stakeholders",
      "Ownership e Proatividade",
      "Liderança Sem Posição", 
      "Resolução de Problemas Complexos"
    ],
    categories: [
      {
        name: "Estratégia & Gestão",
        skills: [
          { name: "UX Strategy", level: 3 },
          { name: "Business Alignment", level: 3 },
          { name: "Design Strategy", level: 3 },
          { name: "Product Strategy", level: 2 },
          { name: "Growth Design", level: 2 },
          { name: "Data-informed Design", level: 2 }
        ]
      },
      {
        name: "Pesquisa & Insights", 
        skills: [
          { name: "UX Research", level: 2 },
          { name: "Pesquisa Qualitativa & Quantitativa", level: 2 },
          { name: "User Journeys & Journey Mapping", level: 2 },
          { name: "Analytics & Análise de Dados", level: 2 },
          { name: "Customer Insights", level: 2 }
        ]
      },
      {
        name: "Experiência & Design",
        skills: [
          { name: "Arquitetura de Informação (IA)", level: 2 },
          { name: "UX Design", level: 2 },
          { name: "Design Systems", level: 2 },
          { name: "UI Design", level: 3 }
        ]
      },
      {
        name: "Conteúdo & Comunicação",
        skills: [
          { name: "Content Strategy", level: 2 },
          { name: "UX Writing", level: 3 },
          { name: "Storytelling", level: 2 },
          { name: "Brand Experience", level: 3 },
          { name: "Communication Design", level: 3 }
        ]
      },
      {
        name: "Metodologias & Processos",
        skills: [
          { name: "Agile", level: 2 },
          { name: "Design Thinking", level: 3 },
          { name: "Design Iterativo", level: 3 },
          { name: "Melhoria Contínua", level: 3 },
          { name: "Prototipagem Rápida", level: 2 }
        ]
      },
      {
        name: "Tecnologias de Front-end para Designers",
        skills: [
          { name: "HTML", level: 1 },
          { name: "CSS", level: 1 },
          { name: "JavaScript", level: 1 },
          { name: "TypeScript", level: 1 },
          { name: "Tailwind CSS", level: 1 },
          { name: "React", level: 1 }
        ]
      },
      {
        name: "Ferramentas",
        isTools: true,
        tools: [
          { name: "Figma", logo: "Figma", level: 2 },
          { name: "Miro", logo: "Miro", level: 2 },
          { name: "Notion", logo: "Notion", level: 2 },
          { name: "WordPress + Elementor", logo: "WordPress", level: 2 },
          { name: "GPT + Gemini", logo: "GPT", level: 2 },
          { name: "Figma Make", logo: "FigmaMake", level: 3 },
          { name: "Nano Banana", logo: "Nano Banana", level: 2 }
        ]
      }
    ]
  },
  en: {
    title: "Strategy & T-Shaped Skills", 
    subtitle: "My experience combines depth in strategic areas with breadth across the entire project lifecycle",
    softSkills: [
      "Applied Empathy",
      "Storytelling", 
      "Flexibility",
      "Business Acumen",
      "Systems Thinking",
      "Persuasive Communication",
      "Stakeholder Management",
      "Ownership & Proactivity",
      "Leadership Without Position",
      "Complex Problem Solving"
    ],
    categories: [
      {
        name: "Strategy & Management",
        skills: [
          { name: "UX Strategy", level: 3 },
          { name: "Business Alignment", level: 3 },
          { name: "Design Strategy", level: 3 },
          { name: "Product Strategy", level: 2 },
          { name: "Growth Design", level: 2 },
          { name: "Data-informed Design", level: 2 }
        ]
      },
      {
        name: "Research & Insights",
        skills: [
          { name: "UX Research", level: 2 },
          { name: "Qualitative & Quantitative Research", level: 2 },
          { name: "User Journeys & Journey Mapping", level: 2 },
          { name: "Analytics & Data Analysis", level: 2 },
          { name: "Customer Insights", level: 2 }
        ]
      },
      {
        name: "Experience & Design", 
        skills: [
          { name: "Information Architecture (IA)", level: 2 },
          { name: "UX Design", level: 2 },
          { name: "Design Systems", level: 2 },
          { name: "UI Design", level: 3 }
        ]
      },
      {
        name: "Content & Communication",
        skills: [
          { name: "Content Strategy", level: 2 },
          { name: "UX Writing", level: 3 },
          { name: "Storytelling", level: 2 },
          { name: "Brand Experience", level: 3 },
          { name: "Communication Design", level: 3 }
        ]
      },
      {
        name: "Methodologies & Processes",
        skills: [
          { name: "Agile", level: 2 },
          { name: "Design Thinking", level: 3 },
          { name: "Iterative Design", level: 3 },
          { name: "Continuous Improvement", level: 3 },
          { name: "Rapid Prototyping", level: 2 }
        ]
      },
      {
        name: "Front-end Technologies for Designers",
        skills: [
          { name: "HTML", level: 1 },
          { name: "CSS", level: 1 },
          { name: "JavaScript", level: 1 },
          { name: "TypeScript", level: 1 },
          { name: "Tailwind CSS", level: 1 },
          { name: "React", level: 1 }
        ]
      },
      {
        name: "Tools",
        isTools: true,
        tools: [
          { name: "Figma", logo: "Figma", level: 2 },
          { name: "Miro", logo: "Miro", level: 2 },
          { name: "Notion", logo: "Notion", level: 2 },
          { name: "WordPress + Elementor", logo: "WordPress", level: 2 },
          { name: "GPT + Gemini", logo: "GPT", level: 2 },
          { name: "Figma Make", logo: "FigmaMake", level: 3 },
          { name: "Nano Banana", logo: "Nano Banana", level: 2 }
        ]
      }
    ]
  }
};

export function SkillsSection() {
  const { language } = useLanguage();
  const content = skillsData[language];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4">
            {content.title}
          </h3>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Legenda do Sistema de Níveis - NOVA POSIÇÃO ESTRATÉGICA */}
        <motion.div
          className="max-w-4xl mx-auto mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-gradient rounded-2xl mx-4 sm:mx-8 md:mx-16 lg:mx-[-175px] my-[0px] pt-[20px] pr-[16px] sm:pr-[20px] md:pr-[24px] pb-[20px] pl-[16px] sm:pl-[20px] md:pl-[24px]">
            {/* Título em linha única */}
            <h4 className="text-center mb-4 font-semibold text-foreground">
              {language === 'pt' ? 'Sistema de Níveis de Proficiência' : 'Proficiency Level System'}
            </h4>
            
            {/* Separador elegante com gradiente */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent mb-6" />
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Nível 1 - Amarelo */}
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-yellow-500 border border-yellow-500 flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground text-sm">
                    {language === 'pt' ? 'Conhecimento Básico' : 'Basic Knowledge'}
                  </span>
                  <p className="text-xs text-muted-foreground">
                    {language === 'pt' 
                      ? 'Noções fundamentais e conhecimento conceitual' 
                      : 'Fundamental notions and conceptual knowledge'
                    }
                  </p>
                </div>
              </div>

              {/* Nível 2 - Verde */}
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 border border-green-500 flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground text-sm">
                    {language === 'pt' ? 'Experiência Prática' : 'Practical Experience'}
                  </span>
                  <p className="text-xs text-muted-foreground">
                    {language === 'pt' 
                      ? 'Conhecimento aplicado com experiência em projetos' 
                      : 'Applied knowledge with project experience'
                    }
                  </p>
                </div>
              </div>

              {/* Nível 3 - Azul */}
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-blue-500 border border-blue-500 flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground text-sm">
                    {language === 'pt' ? 'Domínio Avançado' : 'Advanced Mastery'}
                  </span>
                  <p className="text-xs text-muted-foreground">
                    {language === 'pt' 
                      ? 'Conhecimento consolidado e capacidade de compartilhar' 
                      : 'Consolidated knowledge and ability to share expertise'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid - LAYOUT HÍBRIDO INTELIGENTE PARA 7 CARDS */}
        <div className="max-w-7xl mx-auto mt-6">
          {/* SEÇÃO 1: Primeiros 4 cards principais em grid 2x2 no desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mb-8">
            {content.categories.slice(0, 4).map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
                className="card-elegant p-6 h-full flex flex-col border-elegant-hover accent-gradient"
              >
              {/* Category Header */}
                {/* Category Header */}
                <h3 className="card-title mb-6 text-center">
                  {category.name}
                </h3>

                {/* Skills List */}
                {category.skills && (
                  <div className="space-y-4 flex-grow">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.3 + skillIndex * 0.05
                        }}
                        className="flex items-center justify-between p-3 rounded-xl bg-violet-500/5 border border-violet-500/10 hover:border-violet-500/20 hover:bg-violet-500/10 transition-all duration-300"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <LevelIndicator level={skill.level} />
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Tools List */}
                {category.tools && (
                  <div className="space-y-4 flex-grow">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.3 + toolIndex * 0.05
                        }}
                        className="flex items-center justify-between p-3 rounded-xl bg-violet-500/5 border border-violet-500/10 hover:border-violet-500/20 hover:bg-violet-500/10 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          {/* Tool Logo */}
                          <div className="flex-shrink-0">
                            {toolLogos[tool.logo] || (
                              <div className="w-7 h-7 bg-violet-500/20 rounded-md flex items-center justify-center">
                                <span className="text-xs font-bold text-violet-600">
                                  {tool.name.charAt(0)}
                                </span>
                              </div>
                            )}
                          </div>
                          
                          {/* Tool Name */}
                          <span className="text-sm font-medium text-foreground">
                            {tool.name}
                          </span>
                        </div>
                        
                        {/* Level Indicator */}
                        <LevelIndicator level={tool.level} />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* SEÇÃO 2: Últimos 3 cards em grid 3 colunas no desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {content.categories.slice(4).map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: (index + 4) * 0.1
                }}
                className="card-elegant p-6 h-full flex flex-col border-elegant-hover accent-gradient"
              >
                {/* Category Header */}
                <h3 className="card-title mb-6 text-center">
                  {category.name}
                </h3>

                {/* Skills List */}
                {category.skills && (
                  <div className="space-y-4 flex-grow">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.3 + skillIndex * 0.05
                        }}
                        className="flex items-center justify-between p-3 rounded-xl bg-violet-500/5 border border-violet-500/10 hover:border-violet-500/20 hover:bg-violet-500/10 transition-all duration-300"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <LevelIndicator level={skill.level} />
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Tools List */}
                {category.tools && (
                  <div className="space-y-4 flex-grow">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.3 + toolIndex * 0.05
                        }}
                        className="flex items-center justify-between p-3 rounded-xl bg-violet-500/5 border border-violet-500/10 hover:border-violet-500/20 hover:bg-violet-500/10 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          {/* Tool Logo */}
                          <div className="flex-shrink-0">
                            {toolLogos[tool.logo] || (
                              <div className="w-7 h-7 bg-violet-500/20 rounded-md flex items-center justify-center">
                                <span className="text-xs font-bold text-violet-600">
                                  {tool.name.charAt(0)}
                                </span>
                              </div>
                            )}
                          </div>
                          
                          {/* Tool Name */}
                          <span className="text-sm font-medium text-foreground">
                            {tool.name}
                          </span>
                        </div>
                        
                        {/* Level Indicator */}
                        <LevelIndicator level={tool.level} />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills Horizontal Card - COMPETÊNCIAS COMPORTAMENTAIS */}
        <motion.div
          className="max-w-7xl mx-auto mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="card-elegant p-4 border-elegant-hover accent-gradient">
            {/* Header compacto */}
            <h3 className="card-title text-center mb-6 text-[24px]">
              {language === 'pt' ? 'Competências Comportamentais' : 'Behavioral Competencies'}
            </h3>

            {/* Lista de Soft Skills horizontal compacta */}
            <div className="flex flex-wrap justify-center gap-2">
              {content.softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + index * 0.03
                  }}
                  className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-foreground bg-violet-500/5 border border-violet-500/10 rounded-lg hover:bg-violet-500/10 hover:border-violet-500/20 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}