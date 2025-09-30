import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import whatsappIcon from "figma:asset/c43308fd809abdc89ffd6cf33d27a99bd32d707f.png";
import emailIcon from "figma:asset/dc9299b45ca7ae1cab75d0e1cea490dbd392086a.png";

const contactData = {
  pt: {
    title: "Vamos criar juntos?",
    subtitle: "UX/UI Designer com Visão Estratégica de Negócio",
    description: "Do físico ao digital, a solução pode estar a um clique!",
    location: "Atendimento Remoto | Internacional",
    email: "helloraboff@gmail.com",
    whatsapp: "(61) 99640-4389",
    methods: [
      {
        icon: emailIcon,
        title: "Email",
        subtitle: "Resposta em até 24h",
        action: "helloraboff@gmail.com",
        href: "mailto:helloraboff@gmail.com"
      },
      {
        icon: whatsappIcon,
        title: "WhatsApp",
        subtitle: "Chat instantâneo",
        action: "(61) 99640-4389",
        href: "https://wa.me/5561996404389"
      }
    ]
  },
  en: {
    title: "Let's Connect?",
    subtitle: "UX/UI Designer with Strategic Business Vision",
    description: "Let's talk about how to transform experiences into real impact",
    location: "Atendimento Internacional | Remoto",
    email: "helloraboff@gmail.com",
    whatsapp: "(61) 99640-4389",
    methods: [
      {
        icon: emailIcon,
        title: "Email",
        subtitle: "Response within 24h",
        action: "helloraboff@gmail.com",
        href: "mailto:helloraboff@gmail.com"
      },
      {
        icon: whatsappIcon,
        title: "WhatsApp",
        subtitle: "Instant chat",
        action: "+55 61 99640-4389",
        href: "https://wa.me/5561996404389"
      }
    ]
  }
};

export function ContactSection() {
  const { language } = useLanguage();
  const content = contactData[language];

  return (
    <section id="contato" className="py-8 relative">
      <div className="container mx-auto px-4">
        {/* Main Contact Card - Card compacto e elegante */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Container com borda gradiente elegante */}
          <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 dark:from-violet-500/30 dark:via-purple-500/20 dark:to-teal-500/30">
            <div className="glass-strong rounded-3xl p-6 md:p-8 relative overflow-hidden">
              
              {/* Foto Sobreposta - Responsiva */}
              <div className="absolute bottom-0 right-4 w-48 h-56 sm:w-60 sm:h-72 md:w-80 md:h-96 lg:w-96 lg:h-[420px] z-30 pointer-events-none hidden sm:block">
                <img 
                  src="https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/77dc3ae7807ea8e564f42e9c246268d50a7db5f1/images/foto%20perfil%20profissional.png"
                  alt="Hellora Boff - UX/UI Designer"
                  className="w-full h-full object-contain object-bottom scale-x-[-1]"
                />
              </div>
              {/* Efeito de brilho interno */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5 dark:from-violet-500/10 dark:to-teal-500/10 pointer-events-none" />
              
              {/* Header dentro do card - Alinhado à esquerda */}
              <motion.div
                className="relative z-10 text-left mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4 no-decorative-line">
                  {content.title}
                </h2>
                <p className="text-muted-foreground max-w-2xl mb-6">
                  {content.description}
                </p>

                {/* Linha decorativa após descrição - Elegante e sutil */}
                <motion.div
                  className="flex justify-start mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-violet-500 dark:to-teal-500 rounded-full"></div>
                </motion.div>

              </motion.div>
              
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">
                {/* Left Column - Contact Methods */}
                <div>
                  {/* Contact Methods - Cards menores */}
                  <div className="space-y-3 max-w-[280px] mb-8">
                    {content.methods.map((method, index) => (
                      <motion.a
                        key={method.title}
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 8, scale: 1.02 }}
                        className="flex items-center gap-3 p-3 rounded-2xl glass-subtle border border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300 group w-full"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/80 dark:bg-slate-800/80 flex items-center justify-center border border-violet-500/30 flex-shrink-0 overflow-hidden">
                          <img 
                            src={method.icon} 
                            alt={method.title}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-foreground mb-1">
                            {method.title}
                          </div>
                          <span className="text-muted-foreground text-sm">
                            {method.action}
                          </span>
                        </div>
                        
                        <ArrowRight className="w-4 h-4 text-violet-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                      </motion.a>
                    ))}
                  </div>
                  
                  {/* Location Badge - Abaixo dos Cards de Contato */}
                  <div className="flex justify-start mt-4">
                    <div className="inline-flex items-center px-4 py-2 rounded-full glass-subtle border border-violet-500/20 text-sm font-medium text-gray-700 dark:text-violet-300">
                      <svg className="w-4 h-4 mr-2 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect width="20" height="14" x="2" y="3" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                      </svg>
                      {content.location}
                    </div>
                  </div>
                </div>

                {/* Right Column - Visual Element */}
                <motion.div
                  className="hidden md:flex items-center justify-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    {/* Central Circle - Background Decorativo */}
                    <div className="w-72 h-72 rounded-full bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 dark:from-violet-500/20 dark:via-purple-500/20 dark:to-teal-500/20 border border-violet-500/30 backdrop-blur-sm">
                    </div>

                    {/* Floating Dots - Decoração elegante e sutil */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-gradient-to-r from-violet-500/60 to-purple-500/60 dark:from-violet-500/60 dark:to-teal-500/60"
                      animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    <motion.div
                      className="absolute top-8 -right-6 w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-500/50 to-pink-500/50 dark:from-violet-400/50 dark:to-teal-400/50"
                      animate={{ x: [-3, 3, -3], opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />

                    <motion.div
                      className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-gradient-to-r from-violet-400/40 to-purple-400/40 dark:from-violet-400/40 dark:to-teal-400/40"
                      animate={{ y: [0, 8, 0], x: [0, -4, 0], opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />
                    
                    <motion.div
                      className="absolute bottom-12 -left-8 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-fuchsia-400/45 to-pink-400/45 dark:from-violet-300/45 dark:to-teal-300/45"
                      animate={{ y: [-5, 5, -5], opacity: [0.5, 0.9, 0.5] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />

                    <motion.div
                      className="absolute top-20 right-8 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-300/60 to-purple-300/60 dark:from-violet-300/60 dark:to-teal-300/60"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
                    />

                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full border border-violet-500/30 animate-pulse" />

                  </div>
                </motion.div>
              </div>

              {/* Linha decorativa final - Apenas border sutil, SEM gradiente */}
              <motion.div
                className="relative z-10 mt-6 pt-4 border-t border-violet-500/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Redes Sociais - DENTRO do card, abaixo da linha */}
                <div className="flex items-center justify-start gap-4 pt-2 pr-[0px] pb-[0px] pl-[0px]">
                  <motion.a
                    href="https://linkedin.com/in/helloraboff"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 dark:from-violet-500/20 dark:to-teal-500/20 flex items-center justify-center border border-violet-500/30 hover:border-violet-500/50 transition-all duration-300 linkedin-hover"
                  >
                    <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                  
                  <motion.a
                    href="https://github.com/helloraboff"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 dark:from-violet-500/20 dark:to-teal-500/20 flex items-center justify-center border border-violet-500/30 hover:border-violet-500/50 transition-all duration-300 hover:bg-gray-900 hover:border-gray-900 group"
                  >
                    <svg className="w-5 h-5 text-violet-600 dark:text-violet-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                  
                  <motion.a
                    href="/cv-hellora-boff.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 dark:from-violet-500/20 dark:to-teal-500/20 flex items-center justify-center border border-violet-500/30 hover:border-violet-500/50 transition-all duration-300 hover:bg-gray-900 hover:border-gray-900 group"
                  >
                    <svg className="w-5 h-5 text-violet-600 dark:text-violet-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}