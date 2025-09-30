import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageContext";

export function Header() {
  const { t, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const navItems = [
    { name: t('nav.home'), href: "#inicio", id: "inicio" },
    { name: t('nav.about'), href: "#sobre", id: "sobre" },
    { name: t('nav.skills'), href: "#skills", id: "skills" },
    { name: t('nav.portfolio'), href: "#projetos", id: "projetos" },
    { name: t('nav.testimonials'), href: "#reconhecimento", id: "reconhecimento" },
    { name: t('nav.contact'), href: "#contato", id: "contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detecção de seção ativa (scroll spy)
      const sections = navItems.map(item => item.id);
      let currentSection = "inicio";
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100; // Offset do header fixo
          
          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    // Executar imediatamente para definir seção inicial
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 relative ${
        isScrolled 
          ? "bg-white/85 dark:bg-slate-900/85 backdrop-blur-md shadow-lg header-with-border" 
          : "bg-transparent"
      }`}
      style={{ 
        zIndex: 9999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between h-16 py-[5px] px-[8px]">
          {/* Logo - Growth Design inspired */}
          <motion.div
            className="relative group cursor-pointer flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("#inicio")}
          >
            {/* Growth Design glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-violet-500/25 via-purple-500/20 to-pink-500/15 rounded-xl blur group-hover:blur-md transition-all opacity-0 group-hover:opacity-100" />
            <span className="relative text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 dark:from-violet-600 dark:via-purple-600 dark:to-teal-500 bg-clip-text text-transparent whitespace-nowrap text-[20px] pt-[0px] pr-[0px] pb-[0px] pl-[8px]">
              Hellora Boff
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.name}
                    className={`relative transition-colors duration-200 group font-medium whitespace-nowrap ${
                      isActive 
                        ? "text-foreground" 
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {item.name}
                    {/* Linha gradiente - ativa permanentemente se seção ativa, ou no hover */}
                    <span 
                      className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                        isActive 
                          ? "w-full bg-gradient-to-r from-violet-500 to-pink-500 dark:from-violet-500 dark:to-teal-500" 
                          : "w-0 group-hover:w-full bg-gradient-to-r from-violet-500 to-pink-500 dark:from-violet-500 dark:to-teal-500"
                      }`} 
                    />
                  </motion.button>
                );
              })}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            <Button
              className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-400 hover:from-violet-600 hover:via-purple-600 hover:to-pink-500 dark:from-violet-500 dark:via-purple-500 dark:to-teal-400 dark:hover:from-violet-600 dark:hover:via-purple-600 dark:hover:to-teal-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold px-6 relative overflow-hidden group text-[12px]"
              onClick={() => scrollToSection("#contato")}
            >
              {/* Growth Design shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative">{t('header.hire')}</span>
            </Button>
            {/* Separador sutil */}
            <div className="w-px h-6 bg-muted-foreground/30" />
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden flex items-center space-x-2 flex-shrink-0">
            {/* Separador sutil */}
            <div className="w-px h-6 bg-muted-foreground/30" />
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative overflow-hidden glass-subtle border border-white/20"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="lg:hidden mt-4 p-6 glass rounded-2xl border border-white/10 shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.name}
                    className={`text-left transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-white/5 font-medium relative ${
                      isActive 
                        ? "text-foreground bg-gradient-to-r from-violet-500/10 to-pink-500/10 dark:from-violet-500/10 dark:to-teal-500/10" 
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-pink-500 dark:from-violet-500 dark:to-teal-500 rounded-r" />
                    )}
                  </motion.button>
                );
              })}
              <motion.div
                className="pt-4 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Button
                  className="w-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:from-indigo-700 hover:via-violet-700 hover:to-purple-700 text-white font-semibold"
                  onClick={() => scrollToSection("#contato")}
                >
      {t('header.hire')}
                </Button>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}