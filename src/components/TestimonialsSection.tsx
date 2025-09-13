import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "Ana Silva",
    role: "CEO, TechStartup",
    content: "Trabalho excepcional! O desenvolvedor entregou exatamente o que precisávamos, com qualidade superior e no prazo estabelecido. A comunicação foi transparente durante todo o processo.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Carlos Mendes",
    role: "CTO, FinanceApp",
    content: "Impressionante domínio técnico e atenção aos detalhes. O projeto foi entregue com código limpo, bem documentado e performance otimizada. Definitivamente recomendo!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Marina Costa",
    role: "Designer, CreativeStudio",
    content: "Parceria incrível! Conseguiu traduzir perfeitamente nossa visão de design em código funcional. A colaboração foi fluida e o resultado final superou nossas expectativas.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 relative">
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
            Depoimentos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O que meus clientes dizem sobre nossos projetos e colaborações.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 group-hover:border-blue-500/30 transition-all duration-300 h-full">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-8 h-8 text-blue-500" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 ring-2 ring-blue-500/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                100%
              </div>
              <p className="text-sm text-muted-foreground">Projetos Entregues</p>
            </div>
            <div className="text-center">
              <div className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                5.0⭐
              </div>
              <p className="text-sm text-muted-foreground">Avaliação Média</p>
            </div>
            <div className="text-center">
              <div className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                24h
              </div>
              <p className="text-sm text-muted-foreground">Tempo de Resposta</p>
            </div>
            <div className="text-center">
              <div className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                90%
              </div>
              <p className="text-sm text-muted-foreground">Clientes Recorrentes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}