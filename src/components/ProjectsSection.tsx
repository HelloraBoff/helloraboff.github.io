"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, ArrowRight, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { motion } from "motion/react";

const featuredProjects = {
  pt: [
    {
      id: "caixa-seguradora-reembolso",
      title: "Da Burocracia à Confiança | Redesenho sistema de seembolso",
      category: "Service Design | Otimização de Processos | Employee Experience (EX)",
      description: "Participei da transformação de um fluxo de reembolso caótico e manual em um processo digital e intuitivo. O resultado foi redução de SLA, melhoria na Employee Epx. e aumento da eficiência e confiança no processo.",
      tags: ["Service Design", "Process Optimization", "Employee Experience"],
      image: "https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/refs/heads/main/images/capa%20-%20Case%20sistema%20reebolso.png",
      mediumUrl: "https://medium.com/@hellorabrito/da-burocracia-à-confiança-redesenhando-o-sistema-de-reembolso-na-caixa-seguradora-e9238be7a3c0"
    },
    {
      id: "b2hr-redesign",
      title: "Business Alignment | Recriação estratégica do Site B2HR ",
      category: "Growth Design | Content Strategy | UX Writing",
      description: "Liderei a reestruturação do site da B2HR com foco em geração de leads. Apliquei UX Writing e Arquitetura da Informação para reforçar a autoridade de marca e otimizar o fluxo de conversão (CTA).",
      tags: ["Growth Design", "Content Strategy", "UX Writing"],
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*T-v7na-GpFdJj8_uWmtF0g.png",
      mediumUrl: "https://medium.com/@hellorabrito/atualização-do-site-b2hr-pessoas-e-estratégias-ecc25cfd5585"
    },
    {
      id: "avwa-economia-circular",
      title: "AVWA | Aplicativo mobilidade urbana",
      category: "Estratégia de Produto | Visão de Futuro | Sustentabilidade",
      description: "Projeto conceitual de UX Strategy que explorou a intersecção entre a Economia Circular e serviços de mobilidade. Defini a visão e os pilares estratégicos para um novo produto de impacto social e ambiental.",
      tags: ["Product Strategy", "Future Vision", "Sustainability"],
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*q2RparPqY0T7Tfks2ELSYA.png",
      mediumUrl: "https://medium.com/@hellorabrito/avwa-economia-circular-como-alternativa-para-o-futuro-da-mobilidade-urbana-627e08facfae"
    },
    {
      id: "avwa-pesquisa-quantitativa",
      title: "AVWA: Validação e Oportunidades com UX Research Quantitativa",
      category: "UX Research | Data-informed | Análise de Dados", 
      description: "Condução de Pesquisa Quantitativa detalhada para validar gaps e mapear oportunidades de mercado no setor de mobilidade. O projeto demonstra o uso da análise de dados como base para a tomada de decisão estratégica.",
      tags: ["UX Research", "Data Analysis", "Strategic Insights"],
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*r15323sCwsYNCrBZiz4tpw.png",
      mediumUrl: "https://medium.com/@hellorabrito/avwa-pesquisa-quantitativa-para-entendimento-de-oportunidades-153703f973f2"
    },
    {
      id: "avwa-mobilidade-inteligente",
      title: "AVWA: Concepção do Serviço de Mobilidade Urbana Inteligente",
      category: "Pensamento Sistêmico | Service Design | Arquitetura da Informação",
      description: "O projeto que uniu todas as etapas de pesquisa e estratégia em uma solução holística. Concepção da Arquitetura da Informação (IA) e do Service Design do produto de mobilidade eficiente.",
      tags: ["Systems Thinking", "Service Design", "Information Architecture"],
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*LxOL7svaOd1uBnJTjR27kw.png",
      mediumUrl: "https://medium.com/@hellorabrito/avwa-mobilidade-urbana-inteligente-c8c682e3e6ca"
    }
  ],
  en: [
    {
      id: "caixa-seguradora-reembolso",
      title: "From Bureaucracy to Trust: Reimbursement System Redesign",
      category: "Service Design | Process Optimization | Employee Experience (EX)",
      description: "I participated in transforming a chaotic and manual benefits reimbursement flow into a digital and intuitive end-to-end process. The project resulted in significant reduction of HR rework and improved employee experience, increasing efficiency and trust in the process.",
      tags: ["Service Design", "Process Optimization", "Employee Experience"],
      image: "https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/refs/heads/main/images/capa%20-%20Case%20sistema%20reebolso.png",
      mediumUrl: "https://medium.com/@hellorabrito/da-burocracia-à-confiança-redesenhando-o-sistema-de-reembolso-na-caixa-seguradora-e9238be7a3c0"
    },
    {
      id: "b2hr-redesign",
      title: "Business Alignment: B2HR Website Redesign for Authority and Lead Generation",
      category: "Growth Design | Content Strategy | UX Writing",
      description: "I led the restructuring of B2HR's website focusing on Qualified Lead Generation. Applied Strategic UX Writing to reinforce Brand Authority and optimize conversion flow (CTA).",
      tags: ["Growth Design", "Content Strategy", "UX Writing"],
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*T-v7na-GpFdJj8_uWmtF0g.png",
      mediumUrl: "https://medium.com/@hellorabrito/atualização-do-site-b2hr-pessoas-e-estratégias-ecc25cfd5585"
    },
    {
      id: "avwa-economia-circular",
      title: "AVWA: Strategic Vision for the Future of Circular Mobility",
      category: "Product Strategy | Future Vision | Sustainability",
      description: "Conceptual UX Strategy project that explored the intersection between Circular Economy and mobility services. I defined the vision and strategic pillars for a new product with social and environmental impact.",
      tags: ["Product Strategy", "Future Vision", "Sustainability"],
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*q2RparPqY0T7Tfks2ELSYA.png",
      mediumUrl: "https://medium.com/@hellorabrito/avwa-economia-circular-como-alternativa-para-o-futuro-da-mobilidade-urbana-627e08facfae"
    },
    {
      id: "avwa-pesquisa-quantitativa",
      title: "AVWA: Validation and Opportunities with Quantitative UX Research",
      category: "UX Research | Data-informed | Data Analysis", 
      description: "Conducted detailed Quantitative Research to validate gaps and map market opportunities in the mobility sector. The project demonstrates the use of data analysis as the foundation for strategic decision making.",
      tags: ["UX Research", "Data Analysis", "Strategic Insights"],
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*r15323sCwsYNCrBZiz4tpw.png",
      mediumUrl: "https://medium.com/@hellorabrito/avwa-pesquisa-quantitativa-para-entendimento-de-oportunidades-153703f973f2"
    },
    {
      id: "avwa-mobilidade-inteligente",
      title: "AVWA: Smart Urban Mobility Service Conception",
      category: "Systems Thinking | Service Design | Information Architecture",
      description: "The project that united all research and strategy phases into a holistic solution. Conception of Information Architecture (IA) and Service Design for efficient mobility product.",
      tags: ["Systems Thinking", "Service Design", "Information Architecture"],
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*LxOL7svaOd1uBnJTjR27kw.png",
      mediumUrl: "https://medium.com/@hellorabrito/avwa-mobilidade-urbana-inteligente-c8c682e3e6ca"
    }
  ]
};

export function ProjectsSection() {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const openMediumCase = (url: string) => {
    window.open(url, "_blank");
  };

  const openAllMedium = () => {
    window.open("https://medium.com/@hellorabrito", "_blank");
  };

  // CONFIGURAÇÕES DO CARROSSEL CIRCULAR PERFEITO - EXPANDIDO PARA BADGES
  const cardWidth = isMobile ? 340 : 440;
  const gap = isMobile ? 16 : 24;
  const currentProjects = featuredProjects[language];
  const totalProjects = currentProjects.length;
  
  // CLONAGEM PARA LOOP INFINITO PERFEITO
  // Clonar os últimos 3 no início e os primeiros 3 no final
  const cloneCount = 3;
  const lastItems = currentProjects.slice(-cloneCount);
  const firstItems = currentProjects.slice(0, cloneCount);
  
  // Array com clones: [últimos 3] + [originais] + [primeiros 3]
  const circularProjects = [...lastItems, ...currentProjects, ...firstItems];
  
  // Índice inicial (começar nos projetos originais, não nos clones)
  const initialSlideIndex = cloneCount;

  // NAVEGAÇÃO COM RESET IMPERCEPTÍVEL
  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
    
    // Se chegou no primeiro clone (índice < cloneCount), resetar
    setTimeout(() => {
      if (currentSlide - 1 < 0) {
        // Reset sem animação para o final dos originais
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
          setCurrentSlide(totalProjects - 1);
          
          // Restaurar animação após reset
          setTimeout(() => {
            if (carouselRef.current) {
              carouselRef.current.style.transition = 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            }
          }, 50);
        }
      }
      setIsTransitioning(false);
    }, 700);
  }, [currentSlide, isTransitioning, totalProjects]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
    
    // Se chegou no último clone, resetar
    setTimeout(() => {
      if (currentSlide + 1 >= totalProjects) {
        // Reset sem animação para o início dos originais
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
          setCurrentSlide(0);
          
          // Restaurar animação após reset
          setTimeout(() => {
            if (carouselRef.current) {
              carouselRef.current.style.transition = 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            }
          }, 50);
        }
      }
      setIsTransitioning(false);
    }, 700);
  }, [currentSlide, isTransitioning, totalProjects]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setCurrentSlide(index);
  }, [isTransitioning]);

  // CÁLCULO DO OFFSET PARA CENTRALIZAÇÃO
  const calculateOffset = () => {
    const screenCenter = typeof window !== 'undefined' ? window.innerWidth / 2 : 800;
    const cardCenter = cardWidth / 2;
    
    // Usar currentSlide + initialSlideIndex para posicionar corretamente
    const activeIndex = currentSlide + initialSlideIndex;
    return screenCenter - cardCenter - (activeIndex * (cardWidth + gap));
  };

  return (
    <section id="projetos" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Enhanced Background - IGUAL AO IMPACT SECTION */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-violet-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-fuchsia-500/15 via-violet-500/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-violet-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-violet-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-fuchsia-500/15 via-violet-500/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-violet-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Header com container normal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl mb-8 font-bold text-[30px]">
              {t('projects.title')}
            </h3>
            <p className="subtitle max-w-3xl mx-auto">
              {t('projects.description_part1')} <span className="font-semibold text-foreground">{t('projects.description_highlight')}</span> {t('projects.description_part2')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* CARROSSEL CIRCULAR PERFEITO - SEM SALTOS */}
      <div className="relative w-full mb-6" style={{ height: '460px' }}>
        <div className="w-full h-full relative" style={{ overflow: 'visible' }}>
          <div 
            ref={carouselRef}
            className="flex absolute top-0 transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(${calculateOffset()}px)`,
              height: '100%',
              willChange: 'transform'
            }}
          >
            {/* CARDS COM CLONES PARA LOOP INFINITO PERFEITO */}
            {circularProjects.map((project, index) => {
              // Determinar se é o card ativo baseado na posição visual
              const relativeIndex = index - initialSlideIndex;
              const isActive = relativeIndex === currentSlide;
              
              return (
                <div
                  key={`${project.id}-${index}`}
                  className="flex-shrink-0"
                  style={{ 
                    width: `${cardWidth}px`,
                    marginRight: `${gap}px`
                  }}
                >
                  {/* CARD HORIZONTAL - ASPECT RATIO 4:3 */}
                  <div
                    className={`rounded-xl overflow-hidden border transition-all duration-500 flex flex-col bg-white dark:bg-gray-900 shadow-lg cursor-pointer ${
                      isActive 
                        ? 'scale-105 border-violet-400/40 shadow-2xl shadow-violet-500/20 opacity-100' 
                        : 'scale-95 border-violet-500/20 opacity-60 hover:opacity-80'
                    }`}
                    style={{ 
                      height: '420px',
                      minHeight: '420px'
                    }}
                    onClick={() => {
                      // Apenas permitir clique em cards originais
                      if (relativeIndex >= 0 && relativeIndex < totalProjects) {
                        goToSlide(relativeIndex);
                      }
                    }}
                  >
                    {/* IMAGEM - PROPORÇÃO HORIZONTAL */}
                    <div className="relative overflow-hidden" style={{ height: '140px' }}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    
                    {/* CONTEÚDO - DISTRIBUÍDO PARA CARDS HORIZONTAIS */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      {/* TÍTULO */}
                      <div style={{ minHeight: '48px' }}>
                        <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300 leading-tight line-clamp-2">
                          {project.title}
                        </h4>
                      </div>
                      
                      {/* BADGES - SOLUÇÃO ELEGANTE COM LARGURA TOTAL */}
                      <div className="mb-3" style={{ minHeight: '26px' }}>
                        <div className="flex flex-wrap gap-1 w-full overflow-hidden" style={{ maxHeight: '26px' }}>
                          {/* Ordenar tags por tamanho (menores primeiro) para melhor aproveitamento do espaço */}
                          {project.tags
                            .sort((a, b) => a.length - b.length)
                            .map((tag, tagIndex) => (
                              <Badge 
                                key={`${tag}-${tagIndex}`}
                                className={`font-medium bg-violet-100 text-violet-700 border-violet-300 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-400/30 flex-shrink-0 whitespace-nowrap ${
                                  isMobile 
                                    ? 'badge-mobile-expanded' 
                                    : 'badge-desktop-expanded'
                                }`}
                                title={tag} // Tooltip para ver tag completa
                              >
                                {tag}
                              </Badge>
                            ))
                          }
                        </div>
                      </div>
                      
                      {/* DESCRIÇÃO */}
                      <div className="flex-1 mb-4" style={{ maxHeight: '100px' }}>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-5">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* BOTÃO */}
                      <Button
                        className="w-full font-semibold py-2.5 rounded-[40px] transition-all duration-300 text-white project-card-button border-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          openMediumCase(project.mediumUrl);
                        }}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        {language === 'pt' ? 'Ver Case Study' : 'View Case Study'}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Controls - SINCRONIZADOS COM PROJETOS ORIGINAIS */}
      <div className="container mx-auto px-4 -mt-2 relative z-10">
        <div className="flex justify-center items-center gap-4">
          {/* Previous Arrow */}
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center glass-subtle border-0 hover:bg-violet-500/10 transition-all duration-300 group disabled:opacity-50"
            onClick={goToPrev}
            disabled={isTransitioning}
            aria-label={language === 'pt' ? 'Projeto anterior' : 'Previous project'}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-violet-300 group-hover:text-violet-600 dark:group-hover:text-violet-200 transition-colors duration-300" />
          </button>

          {/* Indicators - APENAS PARA OS 7 PROJETOS ORIGINAIS */}
          <div className="flex gap-3">
            {currentProjects.map((_, index) => {
              const isActive = currentSlide === index;
              return (
                <button
                  key={index}
                  className={`rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'w-8 h-3 bg-violet-500 shadow-lg shadow-violet-500/40' 
                      : 'w-3 h-3 bg-violet-300 hover:bg-violet-400 hover:scale-110'
                  }`}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  aria-label={language === 'pt' ? `Ir para projeto ${index + 1}` : `Go to project ${index + 1}`}
                />
              );
            })}
          </div>

          {/* Next Arrow */}
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center glass-subtle border-0 hover:bg-violet-500/10 transition-all duration-300 group disabled:opacity-50"
            onClick={goToNext}
            disabled={isTransitioning}
            aria-label={language === 'pt' ? 'Próximo projeto' : 'Next project'}
          >
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-violet-300 group-hover:text-violet-600 dark:group-hover:text-violet-200 transition-colors duration-300" />
          </button>
        </div>
      </div>

      {/* CTA final */}
      <div className="container mx-auto px-4 mt-12 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              className="glass-strong border-violet-400/30 hover:border-violet-400/40 hover:text-white dark:hover:text-white footer-gradient-hover hover:scale-105 transition-all duration-300 px-6 py-3 text-slate-700 dark:text-violet-200 font-semibold"
              onClick={openAllMedium}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              {language === 'pt' ? 'Ver todos os cases no Medium' : 'View all cases on Medium'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}