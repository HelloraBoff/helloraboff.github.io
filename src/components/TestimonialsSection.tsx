import { motion } from "motion/react";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const testimonials = [
  {
    name: "Marina Amorim",
    role: "Head de Marketing e Vendas",
    company: "B2HR",
    content: "A Hello iniciou sua trajetória como UX Designer na B2HR em 2022 e desde então realizou grandes projetos. Entregou experiências de aprendizagem com o time de Treinamento & Desenvolvimento, criou materiais sobre as soluções da B2 entre outros. Hoje está na equipe de MKT e continua sendo essencial.",
    date: "Agosto 2024",
    relationship: "Supervisionou Hellora diretamente",
    rating: 5,
    avatar: "MA"
  },
  {
    name: "Ana Paula Lucas Sandoval Machado",
    role: "Head de Treinamento e Desenvolvimento",
    company: "B2HR",
    content: "Trabalhar com a Hellô é um privilégio. Atenta, detalhista, aberta ao novo, organizada. Focada em definição e melhoria dos processos nos quais está envolvida, expressa uma criatividade que encanta. Gosta de trabalhar com metas, prazos e prioridades bem definidas. Alegre, disposta e disponível. Adere aos desafios com vitalidade. Está sempre pronta a colaborar com a equipe.",
    date: "Fevereiro 2024",
    relationship: "Supervisionou Hellora diretamente",
    rating: 5,
    avatar: "AP"
  },
  {
    name: "Ana Elisa Lopes Chaves",
    role: "Head/Líder/Gerente de RH",
    company: "B2HR",
    content: "Hellora é uma profissional \"hands on\", que busca em sua atuação criar e propor soluções colaborativas e práticas, com muita facilidade para atuar em times multidisciplinares. Sua capacidade profissional de ser multifuncional, associada à sua curiosidade sobre diferentes contextos e como esses se relacionam para traduzi-los em iniciativas é um diferencial em seu perfil. Trabalharia sem dúvidas novamente com ela.",
    date: "Março 2022",
    relationship: "Supervisionou Hellora diretamente",
    rating: 5,
    avatar: "AE"
  },
  {
    name: "Patrícia Batista",
    role: "Coordenadora e Professora Agenda ESG",
    company: "Consultora e Palestrante",
    content: "A Hellora é uma das pessoas mais inteligentes que já trabalhei. Realizava atividades no trabalho que exigiam análise, responsabilidade e habilidade com dados. Se destaca por ter senso de dono, disponibilidade para compartilhar o conhecimento e orientação para promover melhoria de processos e projetos. É uma pessoa muito querida por todos, confiável e comprometida.",
    date: "Março 2022",
    relationship: "Trabalhou na mesma equipe",
    rating: 5,
    avatar: "PB"
  }
];

export function TestimonialsSection() {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/helloraboff/", "_blank");
  };

  return (
    <section id="depoimentos" className="py-32 relative overflow-hidden">
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
            Depoimentos Reais
          </Badge>
          
          <h2 className="mb-6">
            Validação de Quem Trabalhou Comigo
          </h2>
          
          <p className="lead max-w-4xl mx-auto">
            <span className="text-violet-600 dark:text-violet-200 font-semibold">Recomendações autênticas</span> do LinkedIn de 
            supervisores e colegas que <span className="text-violet-600 dark:text-violet-200 font-semibold">vivenciaram meu trabalho na prática</span>
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-fuchsia-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative glass-strong p-8 rounded-3xl group-hover:border-violet-500/40 transition-all duration-300 h-full border border-violet-500/20">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-10 h-10 text-violet-500" />
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16 ring-2 ring-violet-500/30 group-hover:ring-violet-500/50 transition-all duration-300">
                      <AvatarFallback className="bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-violet-600 dark:text-violet-300 font-bold text-lg">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-violet-200 mb-1">{testimonial.name}</h4>
                      <p className="text-sm font-medium text-gray-700 dark:text-violet-100/70 mb-1">{testimonial.role}</p>
                      <p className="text-xs text-gray-600 dark:text-violet-100/50">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Relationship Badge */}
                <Badge 
                  variant="secondary" 
                  className="mb-4 text-xs glass-subtle border-violet-500/20 text-gray-700 dark:text-violet-300"
                >
                  {testimonial.relationship} • {testimonial.date}
                </Badge>

                {/* Content */}
                <p className="text-gray-700 dark:text-violet-100/80 leading-relaxed text-sm italic mb-6">
                  "{testimonial.content}"
                </p>

                {/* Source Link */}
                <div className="flex items-center justify-between pt-4 border-t border-violet-500/20">
                  <span className="text-xs text-gray-500 dark:text-violet-100/50">
                    Fonte: LinkedIn
                  </span>
                  <ExternalLink className="w-4 h-4 text-violet-500 dark:text-violet-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-subtle p-8 rounded-3xl border border-violet-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-violet-200 mb-4">
              Quer verificar essas recomendações?
            </h3>
            <p className="text-gray-700 dark:text-violet-100/70 mb-6">
              Todos esses depoimentos estão disponíveis publicamente no meu LinkedIn
            </p>
            <motion.button
              className="glass-strong px-8 py-4 rounded-2xl border border-violet-500/30 text-gray-800 dark:text-violet-200 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 font-semibold flex items-center gap-3 mx-auto group"
              onClick={openLinkedIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors duration-300" />
              Ver no LinkedIn
            </motion.button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center glass-subtle p-6 rounded-2xl border border-violet-500/20">
              <div className="text-3xl font-bold text-violet-600 dark:bg-gradient-to-br dark:from-violet-500 dark:to-fuchsia-500 dark:bg-clip-text dark:text-transparent mb-2">
                100%
              </div>
              <p className="text-sm text-gray-600 dark:text-violet-100/60">Projetos Entregues</p>
            </div>
            <div className="text-center glass-subtle p-6 rounded-2xl border border-violet-500/20">
              <div className="text-3xl font-bold text-violet-600 dark:bg-gradient-to-br dark:from-violet-500 dark:to-fuchsia-500 dark:bg-clip-text dark:text-transparent mb-2">
                5.0⭐
              </div>
              <p className="text-sm text-gray-600 dark:text-violet-100/60">Avaliação Média</p>
            </div>
            <div className="text-center glass-subtle p-6 rounded-2xl border border-violet-500/20">
              <div className="text-3xl font-bold text-violet-600 dark:bg-gradient-to-br dark:from-violet-500 dark:to-fuchsia-500 dark:bg-clip-text dark:text-transparent mb-2">
                4+
              </div>
              <p className="text-sm text-gray-600 dark:text-violet-100/60">Anos B2HR</p>
            </div>
            <div className="text-center glass-subtle p-6 rounded-2xl border border-violet-500/20">
              <div className="text-3xl font-bold text-violet-600 dark:bg-gradient-to-br dark:from-violet-500 dark:to-fuchsia-500 dark:bg-clip-text dark:text-transparent mb-2">
                100%
              </div>
              <p className="text-sm text-gray-600 dark:text-violet-100/60">Recomendariam</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}