import { motion } from "motion/react";
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useLanguage } from "./LanguageContext";
import { useState, useEffect } from "react";

const testimonialsData = {
  pt: {
    title: "Reconhecimento de Parcerias Profissionais",
    badge: "Depoimentos Reais",
    cta: {
      title: "Quer verificar essas recomendações?",
      description: "Todos esses depoimentos estão disponíveis publicamente no meu LinkedIn",
      button: "Ver no LinkedIn"
    },
    testimonials: [
      {
        name: "Marina Amorim",
        role: "Head de Marketing e Vendas",
        company: "B2HR",
        content: "O trabalho da Hello está presente em todos os projetos da área de MKT da B2HR. Ela trata muito além do aspecto visual de apresentações. Cria conceitos, storytelling, concatena as ações, cria materiais de suporte. Tem se adaptado cada vez mais a entregas mais simples e diretas para ganhar maior velocidade. Além disso, tem conseguido atuar em múltiplas campanhas ao mesmo tempo. Está desenvolvendo cada vez a autonomia e senso crítico de priorização.",
        relationship: "Supervisiona Hellora diretamente",
        rating: 5,
        avatar: "MA",
        linkedinUrl: "https://www.linkedin.com/in/marina-amorim-b2hr/"
      },
      {
        name: "Marina Amorim",
        role: "Head de Marketing e Vendas",
        company: "B2HR",
        content: "Hello e Bianca, obrigada pelo esforço extra na adaptação da apresentação do treinamento Learnseat! Com a entrega de vocês vamos ter uma experiência fluida, leve, elegante e com a cara da área de T&D da B2HR.",
        relationship: "Supervisiona Hellora diretamente",
        rating: 5,
        avatar: "MA",
        linkedinUrl: "https://www.linkedin.com/in/marina-amorim-b2hr/"
      },
      {
        name: "Marina Barbosa",
        role: "HR Business Partner",
        company: "B2HR",
        content: "Hello, as suas criações para os cursos da B2 são sensacionais, parabéns pela entrega sempre e por pensar em cada detalhe das experiências, sua expertise é um tesouro para nós!",
        relationship: "Trabalha na mesma equipe que Hellora",
        rating: 5,
        avatar: "MB",
        linkedinUrl: "https://www.linkedin.com/in/marina-costa-barbosa/"
      },
      {
        name: "Ana Paula Machado",
        role: "Head de Treinamento e Desenvolvimento",
        company: "B2HR",
        content: "Trabalhar com a Hellô é um privilégio. Atenta, detalhista, aberta ao novo, organizada. Focada em definição e melhoria dos processos nos quais está envolvida, expressa uma criatividade que encanta. Gosta de trabalhar com metas, prazos e prioridades bem definidas. Alegre, disposta e disponível. Adere aos desafios com vitalidade. Está sempre pronta a colaborar com a equipe.",
        date: "Fevereiro 2024",
        relationship: "Supervisionou Hellora",
        rating: 5,
        avatar: "AP",
        linkedinUrl: "https://www.linkedin.com/in/ana-paula-lucas-sandoval-machado/"
      },
      {
        name: "Ana Elisa Lopes Chaves",
        role: "Head/Líder/Gerente de RH",
        company: "Management | Soma",
        content: "Hellora é uma profissional \"hands on\", que busca em sua atuação criar e propor soluções colaborativas e práticas, com muita facilidade para atuar em times multidisciplinares. Sua capacidade profissional de ser multifuncional, associada à sua curiosidade sobre diferentes contextos e como esses se relacionam para traduzi-los em iniciativas é um diferencial em seu perfil. Trabalharia sem dúvidas novamente com ela.",
        date: "Março 2022",
        relationship: "Supervisionou Hellora diretamente",
        rating: 5,
        avatar: "AE",
        linkedinUrl: "https://www.linkedin.com/in/ana-elisa-lopes-chaves/"
      },
      {
        name: "Patrícia Batista",
        role: "Coordenadora e Professora Agenda ESG",
        company: "Gran",
        content: "A Hellora é uma das pessoas mais inteligentes que já trabalhei. Realizava atividades no trabalho que exigiam análise, responsabilidade e habilidade com dados. Se destaca por ter senso de dono, disponibilidade para compartilhar o conhecimento e orientação para promover melhoria de processos e projetos. É uma pessoa muito querida por todos, confiável e comprometida.",
        date: "Março 2022",
        relationship: "Trabalhou na mesma equipe que Hellora",
        rating: 5,
        avatar: "PB",
        linkedinUrl: "https://www.linkedin.com/in/patricia-batista-esg/"
      },
      {
        name: "Marina Amorim",
        role: "Head de Marketing e Vendas",
        company: "B2HR",
        content: "Hello, gostei muito do seu posicionamento ontem na reunião quando trouxe o tema do branding. Você conseguiu abordar o tema com propriedade, de forma empática, destacando a importância e com leveza. Assim ganhamos espaço para que o tema tenha relevância na B2.",
        date: "Outubro 2023",
        relationship: "Supervisiona Hellora diretamente",
        rating: 5,
        avatar: "MD",
        linkedinUrl: "https://www.linkedin.com/in/marina-amorim-b2hr/"
      },
      {
        name: "Marina Amorim",
        role: "Head de Marketing e Vendas", 
        company: "B2HR",
        content: "Hello, gostaria de destacar que sua postura proativa e autônoma já está sendo notada! Você tem dado cadência necessárias nas campanhas!",
        date: "Junho 2025",
        relationship: "Supervisiona Hellora diretamente",
        rating: 5,
        avatar: "MD",
        linkedinUrl: "https://www.linkedin.com/in/marina-amorim-b2hr/"
      },
      {
        name: "Marina Amorim",
        role: "Head de Marketing e Vendas",
        company: "B2HR", 
        content: "Desde que chegou na área de T&D a Hellora já fez importantes contribuições, como a construção dos valores e propósito da área de T&D, entendimento do produto PDL, construção de materiais para propostas comerciais, materiais para pesquisas e organização dos envolvais do PDL.",
        date: "Julho 2023",
        relationship: "Supervisiona Hellora diretamente",
        rating: 5,
        avatar: "MD",
        linkedinUrl: "https://www.linkedin.com/in/marina-amorim-b2hr/"
      }
    ]
  },
  en: {
    title: "Validation from Those Who Worked with Me",
    badge: "Real Testimonials",
    cta: {
      title: "Want to verify these recommendations?",
      description: "All these testimonials are publicly available on my LinkedIn",
      button: "View on LinkedIn"
    },
    testimonials: [
      {
        name: "Marina Amorim",
        role: "Head of Marketing and Sales",
        company: "B2HR",
        content: "Hello's work is present in all projects of the B2HR MKT area. She handles much more than just the visual aspect of presentations. She creates concepts, storytelling, connects actions, creates support materials. She has adapted more and more to simpler and more direct deliveries to gain greater speed. Furthermore, she has been able to work on multiple campaigns at the same time. She is developing more and more autonomy and critical sense of prioritization.",
        relationship: "Directly supervises Hellora",
        rating: 5,
        avatar: "MA",
        linkedinUrl: "https://www.linkedin.com/in/marina-amorim-b2hr/"
      },
      {
        name: "Marina Amorim",
        role: "Head of Marketing and Sales",
        company: "B2HR",
        content: "Hello and Bianca, thank you for the extra effort in adapting the Learnseat training presentation! With your delivery we will have a fluid, light, elegant experience with the face of the T&D area of B2HR.",
        relationship: "Directly supervises Hellora",
        rating: 5,
        avatar: "MA",
        linkedinUrl: "https://www.linkedin.com/in/marina-amorim-b2hr/"
      },
      {
        name: "Marina Barbosa",
        role: "HR Business Partner",
        company: "B2HR",
        content: "Hello, your creations for B2 courses are sensational, congratulations on always delivering and thinking about every detail of the experiences, your expertise is a treasure for us!",
        relationship: "Works on the same team as Hellora",
        rating: 5,
        avatar: "MB",
        linkedinUrl: "https://www.linkedin.com/in/marina-costa-barbosa/"
      },
      {
        name: "Ana Paula Lucas Sandoval Machado",
        role: "Head of Training and Development",
        company: "B2HR",
        content: "Working with Hellô is a privilege. Attentive, detail-oriented, open to new ideas, organized. Focused on defining and improving the processes she's involved in, she expresses creativity that delights. She likes to work with well-defined goals, deadlines and priorities. Cheerful, willing and available. She embraces challenges with vitality. She's always ready to collaborate with the team.",
        date: "February 2024",
        relationship: "Previously supervised Hellora",
        rating: 5,
        avatar: "AP",
        linkedinUrl: "https://www.linkedin.com/in/ana-paula-lucas-sandoval-machado/"
      },
      {
        name: "Ana Elisa Lopes Chaves",
        role: "Head/Leader/HR Manager",
        company: "Management | Soma",
        content: "Hellora is a hands-on professional who seeks to create and propose collaborative and practical solutions in her work, with great ease to work in multidisciplinary teams. Her professional ability to be multifunctional, associated with her curiosity about different contexts and how they relate to translate them into initiatives is a differential in her profile. I would undoubtedly work with her again.",
        date: "March 2022",
        relationship: "Directly supervised Hellora",
        rating: 5,
        avatar: "AE",
        linkedinUrl: "https://www.linkedin.com/in/ana-elisa-lopes-chaves/"
      },
      {
        name: "Patrícia Batista",
        role: "ESG Agenda Coordinator and Professor",
        company: "Gran",
        content: "Hellora is one of the most intelligent people I've ever worked with. She performed activities at work that required analysis, responsibility and data skills. She stands out for having ownership sense, availability to share knowledge and orientation to promote process and project improvement. She's a person very dear to everyone, trustworthy and committed.",
        date: "March 2022",
        relationship: "Worked on the same team at Caixa Seguradora",
        rating: 5,
        avatar: "PB",
        linkedinUrl: "https://www.linkedin.com/in/patricia-batista-esg/"
      },
      {
        name: "Marina Magalhães Duarte de Amorim",
        role: "Head of Marketing and Sales",
        company: "B2HR",
        content: "Hello, I really liked your positioning yesterday in the meeting when you brought up the branding topic. You managed to address the topic with propriety, empathetically, highlighting the importance and with lightness. This way we gained space for the topic to have relevance in B2.",
        date: "October 2023",
        relationship: "Directly supervises Hellora",
        rating: 5,
        avatar: "MD",
        linkedinUrl: "https://www.linkedin.com/in/marina-amorim-b2hr/"
      },
      {
        name: "Marina Magalhães Duarte de Amorim",
        role: "Head of Marketing and Sales",
        company: "B2HR",
        content: "Hello, I would like to highlight that your proactive and autonomous posture is already being noticed! You have given the necessary cadence to the campaigns!",
        date: "June 2025",
        relationship: "Directly supervises Hellora",
        rating: 5,
        avatar: "MD",
        linkedinUrl: "https://www.linkedin.com/in/marina-amorim-b2hr/"
      },
      {
        name: "Marina Magalhães Duarte de Amorim",
        role: "Head of Marketing and Sales",
        company: "B2HR",
        content: "Since she arrived in the T&D area, Hellora has already made important contributions, such as building the values and purpose of the T&D area, understanding the PDL product, building materials for commercial proposals, materials for research and organizing PDL involvement.",
        date: "July 2023",
        relationship: "Directly supervises Hellora",
        rating: 5,
        avatar: "MD",
        linkedinUrl: "https://www.linkedin.com/in/marina-amorim-b2hr/"
      }
    ]
  }
};

export function TestimonialsSection() {
  const { language } = useLanguage();
  const content = testimonialsData[language];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-advance testimonials every 12 seconds (mais devagar para textos extensos)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        (prev + 1) % content.testimonials.length
      );
    }, 12000);

    return () => clearInterval(timer);
  }, [content.testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      (prev + 1) % content.testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? content.testimonials.length - 1 : prev - 1
    );
  };

  const openLinkedInProfile = () => {
    window.open(currentData.linkedinUrl, "_blank");
  };

  const currentData = content.testimonials[currentTestimonial];

  return (
    <section id="reconhecimento" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 text-[30px] font-bold">
            {content.title}
          </h3>
          
          {/* Estrelas abaixo do título */}
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-5 h-5 fill-gray-400 text-gray-400 dark:fill-white dark:text-white opacity-50" 
              />
            ))}
          </div>
        </motion.div>

        {/* Single Testimonial Card - Altura otimizada */}
        <motion.div 
          className="max-w-3xl mx-auto mb-12 relative h-[380px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 -left-20 hidden lg:flex items-center">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 8px 25px rgba(139, 92, 246, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full flex items-center justify-center glass-subtle border border-violet-500/20 hover:border-violet-400/50 hover:bg-violet-500/10 transition-all duration-300 group"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-violet-300 group-hover:text-violet-600 dark:group-hover:text-violet-200 transition-colors duration-300" />
            </motion.button>
          </div>

          <div className="absolute inset-y-0 -right-20 hidden lg:flex items-center">
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 8px 25px rgba(139, 92, 246, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full flex items-center justify-center glass-subtle border border-violet-500/20 hover:border-violet-400/50 hover:bg-violet-500/10 transition-all duration-300 group"
            >
              <ChevronRight className="w-4 h-4 text-gray-600 dark:text-violet-300 group-hover:text-violet-600 dark:group-hover:text-violet-200 transition-colors duration-300" />
            </motion.button>
          </div>

          {/* Testimonial Card Simples */}
          <motion.div
            key={currentTestimonial}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.6
            }}
            className="glass-strong p-6 md:p-8 rounded-2xl border border-violet-500/20 relative overflow-hidden h-full"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-8">
              <Quote className="w-10 h-10 text-violet-500" />
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
              <div className="flex items-center gap-3 flex-shrink-0">
                <Avatar className="w-14 h-14 ring-2 ring-violet-500/30">
                  <AvatarFallback className="bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-violet-600 font-bold text-lg">
                    {currentData.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-0.5">
                    {currentData.name}
                  </h4>
                  <p className="text-sm font-medium text-muted-foreground mb-0.5">
                    {currentData.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {currentData.company}
                  </p>
                </div>
              </div>

              <div className="md:ml-auto flex flex-col items-start md:items-end gap-2">
                <Badge 
                  variant="secondary" 
                  className="text-xs glass-subtle border-violet-500/20 text-muted-foreground px-2 py-1"
                >
                  {currentData.relationship}
                </Badge>
              </div>
            </div>

            {/* Content */}
            <blockquote className="text-base md:text-lg text-foreground leading-relaxed italic mb-6 relative">
              "{currentData.content}"
            </blockquote>

            {/* Footer */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="pt-4 border-t border-violet-500/20">
                {/* Espaço reservado para futuras implementações */}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500/20">
              <motion.div
                className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-violet-500 dark:to-teal-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                key={currentTestimonial}
                transition={{ duration: 12, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-6">
            {content.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-violet-500 scale-125'
                    : 'bg-violet-500/30 hover:bg-violet-500/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}