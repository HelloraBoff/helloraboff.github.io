import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MessageCircle, Calendar, ExternalLink, Send, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Direto",
    description: "Resposta em até 24h",
    action: "helloraboff@gmail.com",
    color: "violet",
    onClick: () => window.open("mailto:helloraboff@gmail.com", "_blank")
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat instantâneo",
    action: "Iniciar conversa",
    color: "fuchsia", 
    onClick: () => window.open("https://wa.me/5561999999999", "_blank")
  },
  {
    icon: Calendar,
    title: "Agendar Reunião",
    description: "Calendly ou Google Meet",
    action: "Ver agenda",
    color: "purple",
    onClick: () => window.open("https://calendly.com/helloraboff", "_blank")
  },
  {
    icon: ExternalLink,
    title: "LinkedIn",
    description: "Rede profissional",
    action: "Conectar",
    color: "cyan",
    onClick: () => window.open("https://linkedin.com/in/helloraboff", "_blank")
  }
];

const colorMap = {
  violet: {
    border: "border-violet-500/30",
    text: "text-violet-300",
    bg: "bg-violet-500/10",
    gradient: "from-violet-500 to-purple-500"
  },
  fuchsia: {
    border: "border-fuchsia-500/30",
    text: "text-fuchsia-300", 
    bg: "bg-fuchsia-500/10",
    gradient: "from-fuchsia-500 to-pink-500"
  },
  purple: {
    border: "border-purple-500/30",
    text: "text-purple-300",
    bg: "bg-purple-500/10",
    gradient: "from-purple-500 to-violet-500"
  },
  cyan: {
    border: "border-cyan-500/30",
    text: "text-cyan-300",
    bg: "bg-cyan-500/10",
    gradient: "from-cyan-500 to-blue-500"
  }
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio
    toast.success("Mensagem enviada com sucesso! Respondo em até 24h.");
    
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-32 relative overflow-hidden">
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
          <Badge className="glass-subtle px-6 py-3 text-sm border-violet-500/20 text-violet-600 dark:text-violet-300 mb-8">
            Vamos conversar
          </Badge>
          
          <h2 className="mb-6">
            Pronto para transformar sua ideia em realidade?
          </h2>
          <p className="lead max-w-3xl mx-auto">
            <span className="text-violet-600 dark:text-violet-200 font-semibold">Brasília/DF</span> · Disponível para projetos remotos e presenciais · 
            <span className="text-violet-600 dark:text-violet-200 font-semibold"> Resposta garantida em 24h</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Contact Methods */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-violet-200 mb-6">
                Formas de Contato
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    className="glass-strong p-6 rounded-2xl border border-violet-500/20 hover:border-violet-400/40 group cursor-pointer transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    onClick={method.onClick}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 glass-subtle rounded-2xl flex items-center justify-center ${colorMap[method.color].border} group-hover:${colorMap[method.color].bg} transition-all duration-300`}>
                        <method.icon className={`w-6 h-6 ${colorMap[method.color].text}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-violet-200 mb-1">
                          {method.title}
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-violet-100/60 mb-2">
                          {method.description}
                        </p>
                        <p className={`text-sm font-medium ${colorMap[method.color].text}`}>
                          {method.action}
                        </p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-violet-400 group-hover:text-violet-300 transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <motion.div
              className="glass-subtle p-6 rounded-2xl border border-violet-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-gray-900 dark:text-violet-200 mb-4 text-center">Informações Úteis</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-violet-400" />
                  <span className="text-gray-700 dark:text-violet-100/70">Brasília/DF - Disponível para todo Brasil</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-violet-400" />
                  <span className="text-gray-700 dark:text-violet-100/70">Horário comercial: 8h às 18h</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-violet-400" />
                  <span className="text-gray-700 dark:text-violet-100/70">Resposta garantida em até 24h</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass-strong p-8 rounded-3xl border border-violet-500/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-violet-200 mb-6">
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-900 dark:text-violet-200 mb-2 block">
                      Nome *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass-subtle border-violet-500/20 focus:border-violet-400/50 text-gray-900 dark:text-violet-100 placeholder:text-gray-500 dark:placeholder:text-violet-100/40"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-violet-200 mb-2 block">
                      Empresa
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="glass-subtle border-violet-500/20 focus:border-violet-400/50 text-violet-100 placeholder:text-violet-100/40"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-violet-200 mb-2 block">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass-subtle border-violet-500/20 focus:border-violet-400/50 text-violet-100 placeholder:text-violet-100/40"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-violet-200 mb-2 block">
                    Mensagem *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="glass-subtle border-violet-500/20 focus:border-violet-400/50 text-violet-100 placeholder:text-violet-100/40 resize-none"
                    placeholder="Conte-me sobre seu projeto ou desafio..."
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-xl hover:scale-105 transition-all duration-300 font-semibold py-6"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}