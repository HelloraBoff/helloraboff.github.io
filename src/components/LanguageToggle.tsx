import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="relative overflow-hidden group transition-all duration-300 hover:scale-110"
      title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <div className="absolute inset-0 bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.div
        className="flex items-center gap-1.5 text-xs font-semibold"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Globe className="h-3.5 w-3.5 text-foreground/80" />
        <span className="text-foreground/80">
          {language.toUpperCase()}
        </span>
      </motion.div>
      
      {/* Subtle glow effect */}

    </Button>
  );
}