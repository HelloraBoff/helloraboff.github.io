import { useState } from "react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { toast } from "sonner@2.0.3";
import { Mail, MessageCircle, MapPin, ExternalLink, Send, Clock, CheckCircle, Star } from "lucide-react";
import type { PageType } from "../../App-MultiPage";

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Resposta em até 24h",
    value: "contato@helloraboff.com",
    action: () => window.open("mailto:contato@helloraboff.com", "_blank")
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Resposta rápida",
    value: "+55 (61) 99999-9999",
    action: () => window.open("https://wa.me/5561999999999", "_blank")
  },
  {
    icon: MapPin,
    title: "Localização",
    description: "Atendo presencial e remoto",
    value: "Brasília/DF, Brasil",
    action: null
  }
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/helloraboff/",
    description: "Conecte-se comigo"
  },
  {
    name: "Behance",
    url: "https://www.behance.net/helloraboff",
    description: "Veja meu portfólio visual"
  },
  {
    name: "Medium",
    url: "https://medium.com/@helloraboff",
    description: "Leia meus artigos"
  }
];

const faqs = [
  {
    question: "Qual o seu processo de trabalho?",
    answer: "Sigo um processo estruturado em 5 fases: Descoberta & Research, Estratégia & Planejamento, Design & Prototipação, Testes & Validação, e Implementação & Acompanhamento. Cada projeto é adaptado às necessidades específicas."
  },
  {
    question: "Trabalha com projetos remotos?",
    answer: "Sim! Trabalho 100% remotamente com clientes de todo o Brasil. Tenho experiência consolidada em colaboração remota e utilizo ferramentas modernas para garantir comunicação eficaz."
  },
  {
    question: "Qual o investimento típico?",
    answer: "O investimento varia conforme complexidade e escopo. Após nossa conversa inicial, envio uma proposta detalhada com valores transparentes e cronograma. Aceito projetos a partir de R$ 5.000."
  },
  {
    question: "Quanto tempo leva um projeto?",
    answer: "Projetos típicos levam entre 4-8 semanas, dependendo da complexidade. Projetos menores podem ser concluídos em 2-3 semanas, enquanto projetos complexos podem levar 10-12 semanas."
  }
];

const testimonialFeatured = {
  name: "Marina Amorim",
  role: "Head de Marketing e Vendas",
  company: "B2HR",
  content: "Hellora tem uma capacidade única de transformar problemas complexos em soluções elegantes. Seu trabalho no nosso site gerou resultados imediatos e mensuráveis.",
  rating: 5,
  project: "Redesign Site B2HR"
};

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success("Mensagem enviada com sucesso! Retornarei em breve.");
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-violet-500/12 via-purple-500/6 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial from-fuchsia-500/12 via-violet-500/6 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="glass-subtle px-6 py-3 text-sm border-violet-500/30 text-violet-600 dark:text-violet-300 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Vamos Conversar
              </div>
            </Badge>
            
            <h1 className="mb-8">
              Pronta para Novos Desafios
            </h1>
            
            <p className="lead max-w-3xl mx-auto mb-12">
              Transforme sua ideia em realidade com <span className="text-violet-600 dark:text-violet-200 font-semibold">design estratégico 
              que gera resultados</span>. Vamos conversar sobre como posso ajudar seu projeto a alcançar o próximo nível
            </p>

            {/* Availability Status */}
            <motion.div
              className="glass-strong rounded-2xl p-6 border border-violet-500/20 max-w-md mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-gray-900 dark:text-violet-200">Status Atual</span>
              </div>
              <p className="text-green-600 dark:text-green-400 font-medium">Disponível para novos projetos</p>
              <p className="text-sm text-gray-600 dark:text-violet-300 mt-1">Início imediato • Agenda aberta para 2024</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass-strong p-8 border border-violet-500/20">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-violet-200 mb-4">
                    Envie sua Mensagem
                  </h2>
                  <p className="text-gray-700 dark:text-violet-100/80">
                    Conte-me sobre seu projeto e como posso ajudar. Respondo todas as mensagens pessoalmente.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1 glass-subtle border-violet-500/20 focus:border-violet-500/40"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 glass-subtle border-violet-500/20 focus:border-violet-500/40"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1 glass-subtle border-violet-500/20 focus:border-violet-500/40"
                      placeholder="Nome da sua empresa (opcional)"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-1 glass-subtle border-violet-500/20 focus:border-violet-500/40"
                      placeholder="Conte-me sobre seu projeto, desafios e como posso ajudar..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info & Methods */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Contact Methods */}
              <Card className="glass-strong p-8 border border-violet-500/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-violet-200 mb-6">
                  Outras Formas de Contato
                </h3>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div
                      key={method.title}
                      className={`glass-subtle p-4 rounded-xl border border-violet-500/15 ${method.action ? 'cursor-pointer hover:border-violet-500/30 transition-all duration-300' : ''}`}
                      onClick={method.action || undefined}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 glass-subtle rounded-xl flex items-center justify-center border border-violet-500/20">
                          <method.icon className="w-5 h-5 text-violet-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-violet-200 mb-1">
                            {method.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-violet-300 mb-1">
                            {method.description}
                          </p>
                          <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                            {method.value}
                          </p>
                        </div>
                        {method.action && (
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="glass-strong p-8 border border-violet-500/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-violet-200 mb-6">
                  Conecte-se Comigo
                </h3>
                
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="ghost"
                      className="w-full justify-between hover:bg-violet-500/10 p-4 h-auto"
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      <div className="text-left">
                        <div className="font-medium text-gray-900 dark:text-violet-200">{social.name}</div>
                        <div className="text-sm text-gray-600 dark:text-violet-300">{social.description}</div>
                      </div>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-radial from-fuchsia-500/8 via-purple-500/4 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="glass-subtle px-6 py-3 text-sm border-violet-500/30 text-violet-600 dark:text-violet-300 mb-8">
              Depoimento Real
            </Badge>
            
            <Card className="glass-strong p-8 lg:p-12 border border-violet-500/20">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonialFeatured.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl text-gray-800 dark:text-violet-200 leading-relaxed mb-8 font-medium">
                "{testimonialFeatured.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MA</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 dark:text-violet-200">{testimonialFeatured.name}</div>
                  <div className="text-sm text-gray-600 dark:text-violet-300">{testimonialFeatured.role}</div>
                  <div className="text-xs text-violet-600 dark:text-violet-400">{testimonialFeatured.company}</div>
                </div>
              </div>

              <Badge variant="secondary" className="glass-subtle text-xs border-violet-500/20 text-gray-700 dark:text-violet-300">
                {testimonialFeatured.project}
              </Badge>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="glass-subtle px-6 py-3 text-sm border-violet-500/30 text-violet-600 dark:text-violet-300 mb-6">
              Perguntas Frequentes
            </Badge>
            <h2 className="mb-6">Dúvidas Comuns</h2>
            <p className="lead max-w-3xl mx-auto">
              Respostas para as perguntas mais frequentes sobre 
              <span className="text-violet-600 dark:text-violet-200 font-semibold"> meu processo e forma de trabalho</span>
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <Card key={index} className="glass-strong p-6 border border-violet-500/20">
                <h4 className="font-semibold text-gray-900 dark:text-violet-200 mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-700 dark:text-violet-100/80 leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-strong p-8 lg:p-12 border border-violet-500/20">
              <h2 className="mb-6">Ainda tem dúvidas?</h2>
              
              <p className="lead mb-8">
                Vamos conversar! Será um prazer conhecer seu projeto e 
                <span className="text-violet-600 dark:text-violet-200 font-semibold"> entender como posso ajudar</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  onClick={() => window.open("https://wa.me/5561999999999", "_blank")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp direto
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-violet-400/40 text-gray-800 dark:text-violet-200 hover:bg-violet-500/10"
                  onClick={() => onNavigate('work')}
                >
                  Ver meus cases
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}