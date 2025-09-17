import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import type { PageType } from "../App-MultiPage";

const navItems: { name: string; page: PageType; label: string }[] = [
  { name: "Home", page: "home", label: "Início" },
  { name: "About", page: "about", label: "Sobre" },
  { name: "Work", page: "work", label: "Trabalho" },
  { name: "Process", page: "process", label: "Processo" },
  { name: "Contact", page: "contact", label: "Contato" },
];

interface HeaderMultiPageProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function HeaderMultiPage({ currentPage, onNavigate }: HeaderMultiPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (page: PageType) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass border-b border-white/10" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="relative group cursor-pointer flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavigation('home')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-xl blur group-hover:blur-md transition-all" />
            <div className="relative glass-subtle px-6 py-3 rounded-xl border border-violet-500/30">
              <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent whitespace-nowrap">
                Hellora Boff
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.page}
                  className={`relative transition-colors duration-200 group font-medium whitespace-nowrap ${
                    currentPage === item.page
                      ? 'text-violet-600 dark:text-violet-400'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                  onClick={() => handleNavigation(item.page)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 ${
                    currentPage === item.page ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </motion.button>
              ))}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <ThemeToggle />
            <Button
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold px-6"
              onClick={() => handleNavigation('contact')}
            >
              Contratar
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden flex items-center space-x-3 flex-shrink-0">
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
              {navItems.map((item, index) => (
                <motion.button
                  key={item.page}
                  className={`text-left transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-white/5 font-medium ${
                    currentPage === item.page
                      ? 'text-violet-600 dark:text-violet-400 bg-violet-500/10'
                      : 'text-foreground/80 hover:text-foreground'
                  }`}
                  onClick={() => handleNavigation(item.page)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                className="pt-4 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Button
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-semibold"
                  onClick={() => handleNavigation('contact')}
                >
                  Contratar
                </Button>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}