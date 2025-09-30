import { motion } from "motion/react";
import { Heart, Linkedin, Mail, MapPin, ExternalLink, Github, FileText } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const openEmail = () => {
    window.location.href = "mailto:helloraboff@gmail.com";
  };

  const openLinkedIn = () => {
    window.open("https://linkedin.com/in/helloraboff", "_blank");
  };

  const openMedium = () => {
    window.open("https://medium.com/@hellorabrito", "_blank");
  };

  const openGitHub = () => {
    window.open("https://github.com/helloraboff", "_blank");
  };

  const openCurriculo = () => {
    window.open("https://drive.google.com/file/d/your-resume-id/view", "_blank");
  };

  return (
    <footer className="relative mt-20">
      {/* Linha Gradiente Superior - Bem Visível */}
      <div className="w-full h-1 bg-gradient-to-r from-violet-500/90 to-fuchsia-500/90 dark:from-violet-500/80 dark:to-teal-500/80"></div>
      
      {/* Fundo Glassmorphing Elegante */}
      <div className="glass-strong bg-gradient-to-br from-violet-500/8 via-pink-500/4 to-transparent dark:from-violet-500/10 dark:via-teal-500/6 dark:to-transparent">
        {/* Background Decorativo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-32 bg-gradient-radial from-violet-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-32 bg-gradient-radial from-fuchsia-500/15 via-violet-500/8 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <h4 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-violet-400 dark:to-teal-400 bg-clip-text text-transparent">
                  Hellora Boff
                </h4>
                <p className="text-gray-600 dark:text-violet-100/80 leading-relaxed">
                  {language === 'pt' 
                    ? 'UX/UI Designer especializada em transformar ideias complexas em experiências de valor.'
                    : 'UX/UI Designer specialized in transforming complex ideas into valuable experiences.'
                  }
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={openLinkedIn}
                  className="p-3 rounded-xl glass-subtle hover:glass-strong border border-violet-500/20 hover:border-violet-400/40 text-gray-600 dark:text-violet-300 hover:text-white dark:hover:text-white linkedin-hover transition-all duration-500"
                  whileHover={{ 
                    scale: 1.08,
                    rotateY: 5,
                    boxShadow: "0 10px 25px rgba(0, 119, 181, 0.3)"
                  }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Linkedin className="w-5 h-5 transition-all duration-300" />
                </motion.button>
                
                <motion.button
                  onClick={openGitHub}
                  className="p-3 rounded-xl glass-subtle hover:glass-strong border border-violet-500/20 hover:border-violet-400/40 text-gray-600 dark:text-violet-300 hover:text-white dark:hover:text-white footer-gradient-hover transition-all duration-500"
                  whileHover={{ 
                    scale: 1.08,
                    rotateY: -5,
                    boxShadow: "0 10px 25px rgba(153, 77, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Github className="w-5 h-5 transition-all duration-300" />
                </motion.button>

                <motion.button
                  onClick={openCurriculo}
                  className="p-3 rounded-xl glass-subtle hover:glass-strong border border-violet-500/20 hover:border-violet-400/40 text-gray-600 dark:text-violet-300 hover:text-white dark:hover:text-white footer-gradient-hover transition-all duration-500"
                  whileHover={{ 
                    scale: 1.08,
                    rotateY: 5,
                    boxShadow: "0 10px 25px rgba(153, 77, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <FileText className="w-5 h-5 transition-all duration-300" />
                </motion.button>
                
                <motion.button
                  onClick={openEmail}
                  className="p-3 rounded-xl glass-subtle hover:glass-strong border border-violet-500/20 hover:border-violet-400/40 text-gray-600 dark:text-violet-300 hover:text-white dark:hover:text-white footer-gradient-hover transition-all duration-500"
                  whileHover={{ 
                    scale: 1.08,
                    rotateY: -5,
                    boxShadow: "0 10px 25px rgba(153, 77, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Mail className="w-5 h-5 transition-all duration-300" />
                </motion.button>

                <motion.button
                  onClick={openMedium}
                  className="p-3 rounded-xl glass-subtle hover:glass-strong border border-violet-500/20 hover:border-violet-400/40 text-gray-600 dark:text-violet-300 hover:text-white dark:hover:text-white footer-gradient-hover transition-all duration-500"
                  whileHover={{ 
                    scale: 1.08,
                    rotateY: 5,
                    boxShadow: "0 10px 25px rgba(153, 77, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ExternalLink className="w-5 h-5 transition-all duration-300" />
                </motion.button>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h5 className="text-lg font-semibold text-gray-700 dark:text-violet-200">
{language === 'pt' ? 'Navegação' : 'Navigation'}
              </h5>
              <div className="space-y-3">
{(language === 'pt' ? [
                  { name: "Início", href: "#inicio" },
                  { name: "Sobre", href: "#sobre" },
                  { name: "Habilidades", href: "#skills" },
                  { name: "Projetos", href: "#projetos" },
                  { name: "Reconhecimento", href: "#reconhecimento" },
                  { name: "Contato", href: "#contato" }
                ] : [
                  { name: "Home", href: "#inicio" },
                  { name: "About", href: "#sobre" },
                  { name: "Skills", href: "#skills" },
                  { name: "Projects", href: "#projetos" },
                  { name: "Testimonials", href: "#reconhecimento" },
                  { name: "Contact", href: "#contato" }
                ]).map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block text-gray-600 dark:text-violet-100/80 hover:text-violet-600 dark:hover:text-violet-200 transition-colors duration-300 text-left group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-violet-400 dark:to-teal-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5 className="text-lg font-semibold text-gray-700 dark:text-violet-200">
{language === 'pt' ? 'Contato' : 'Contact'}
              </h5>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-violet-100/80">
                  <Mail className="w-4 h-4 text-violet-500" />
                  <span className="text-sm">helloraboff@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-violet-100/80">
                  <Linkedin className="w-4 h-4 text-violet-500" />
                  <span className="text-sm">linkedin.com/in/helloraboff</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-violet-100/80">
                  <MapPin className="w-4 h-4 text-violet-500" />
                  <span className="text-sm">{language === 'pt' ? 'Brasil | Atendimento remoto internacional' : 'Brazil | International remote service'}</span>
                </div>
              </div>
              
              {/* Disponibilidade Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle border border-violet-500/30 dark:border-violet-400/40">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600 dark:text-violet-200">
{language === 'pt' ? 'Vamos criar juntos? :)' : "Let's create together? :)"}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Linha Separadora com Gradiente */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-violet-100/80">
              <span>© {currentYear} Hellora Boff.</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>{language === 'pt' ? 'Feito por uma designer apaixonada pelo que faz.' : 'Made by a designer passionate about what she does.'}</span>
            </div>
            
            <div className="text-sm text-gray-500 dark:text-violet-100/60">
              <span>{language === 'pt' ? 'Desenvolvido com React + Tailwind CSS' : 'Built with React + Tailwind CSS'}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Linha Gradiente Inferior - Sutil */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>
    </footer>
  );
}