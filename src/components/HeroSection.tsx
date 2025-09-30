import image_25ab1fcd235fddec490acb55278383b3eeffa2a0 from "figma:asset/25ab1fcd235fddec490acb55278383b3eeffa2a0.png";
import image_8b48844947ed81bcd09f80fa31869d5ad5f28d58 from "figma:asset/8b48844947ed81bcd09f80fa31869d5ad5f28d58.png";
import image_73ea124db1a8b1b990710e2802e91a80c5cdcc63 from "figma:asset/73ea124db1a8b1b990710e2802e91a80c5cdcc63.png";
import image_8b48844947ed81bcd09f80fa31869d5ad5f28d58 from "figma:asset/8b48844947ed81bcd09f80fa31869d5ad5f28d58.png";
import { motion } from "motion/react";
import {
  ArrowRight,
  Mail,
  Linkedin,
  FileDown,
  MessageCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "./LanguageContext";
import profileImage from "figma:asset/56319979c2fcb75448033089703dae67faad8642.png";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative lg:min-h-screen flex items-center justify-center overflow-hidden py-8 lg:py-0"
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-violet-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-emerald-500/12 via-violet-500/6 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-violet-600/8 via-purple-600/4 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 py-16 lg:py-20 relative z-10 flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-24 items-center">
            {/* Left Column - Visual Portrait */}
            <motion.div
              className="lg:col-span-5 relative order-1 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Artistic Background Elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-8 left-8 w-64 h-64 bg-gradient-to-br from-violet-500/8 via-purple-500/4 to-transparent rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -right-8 w-80 h-80 bg-gradient-to-br from-emerald-500/6 via-violet-500/3 to-transparent rounded-full blur-3xl" />
              </div>

              {/* Main Portrait Card */}
              <div className="relative flex justify-center lg:justify-end w-full">
                <motion.div
                  className="glass-strong rounded-3xl p-4 lg:p-8 border-elegant-hover backdrop-blur-xl shadow-2xl"
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <div className="relative">
                    {/* Profile Image with sophisticated frame */}
                    <div className="w-full aspect-square max-w-[120px] lg:max-w-xs mx-auto mb-2 lg:mb-6 relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 dark:from-violet-600 dark:via-purple-600 dark:to-emerald-500 p-[2px] shadow-xl">
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <img
                            src={image_25ab1fcd235fddec490acb55278383b3eeffa2a0}
                            alt="Hellora Boff - UX/UI Designer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Dynamic floating elements with enhanced life */}
                      <motion.div
                        className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-violet-400/80 to-pink-400/80 dark:from-violet-400/80 dark:to-emerald-500/80 rounded-full shadow-lg"
                        animate={{
                          y: [-3, 6, -3],
                          x: [-1, 2, -1],
                          rotate: [0, 360],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{
                          filter: "blur(0.5px)",
                          boxShadow: "0 0 12px rgba(139, 92, 246, 0.4)",
                        }}
                      />

                      <motion.div
                        className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-rose-400/80 to-pink-500/80 dark:from-emerald-400/80 dark:to-teal-500/80 rounded-full shadow-lg"
                        animate={{
                          y: [3, -4, 3],
                          x: [1, -2, 1],
                          scale: [1, 1.3, 1],
                          rotate: [0, -180, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          delay: 1.5,
                          ease: "easeInOut",
                        }}
                        style={{
                          filter: "blur(0.3px)",
                          boxShadow: "0 0 10px rgba(244, 51, 158, 0.3)",
                        }}
                      />

                      {/* Additional micro floating elements */}
                      <motion.div
                        className="absolute top-1/4 -right-3 w-2 h-2 bg-gradient-to-br from-purple-300/60 to-pink-300/60 dark:from-purple-300/60 dark:to-teal-300/60 rounded-full shadow-md"
                        animate={{
                          y: [-2, 4, -2],
                          opacity: [0.6, 1, 0.6],
                          scale: [0.8, 1.1, 0.8],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: 0.5,
                          ease: "easeInOut",
                        }}
                        style={{
                          filter: "blur(0.2px)",
                          boxShadow: "0 0 8px rgba(139, 92, 246, 0.2)",
                        }}
                      />

                      <motion.div
                        className="absolute bottom-1/3 -left-4 w-1.5 h-1.5 bg-gradient-to-br from-violet-300/50 to-rose-300/50 dark:from-violet-300/50 dark:to-emerald-300/50 rounded-full shadow-sm"
                        animate={{
                          x: [-1, 3, -1],
                          y: [1, -2, 1],
                          opacity: [0.5, 0.9, 0.5],
                          rotate: [0, 270, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          delay: 2,
                          ease: "easeInOut",
                        }}
                        style={{
                          filter: "blur(0.1px)",
                          boxShadow: "0 0 6px rgba(16, 205, 165, 0.15)",
                        }}
                      />
                    </div>

                    {/* Profile Information */}
                    <div className="text-center space-y-2 lg:space-y-4">
                      <div>
                        <h3 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-violet-100 mb-1 lg:mb-2">
                          Hellora Boff
                        </h3>
                        <p className="text-slate-600 dark:text-violet-400 font-medium text-[12px] lg:text-[14px] mb-2 lg:mb-4">
                          UX/UI Designer
                        </p>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-2 lg:gap-4 pt-2 lg:pt-[8px]">
                        {[
                          {
                            icon: Linkedin,
                            href: "https://linkedin.com/in/helloraboff",
                            label: "LinkedIn",
                          },
                          {
                            icon: FileDown,
                            href: "#",
                            label: "Resume",
                            onClick: () => {
                              const cvUrl =
                                "https://drive.google.com/file/d/1eI5QJbSvKvQiJyRn8A_sJ6Mf7N2Og8T/view?usp=sharing";
                              window.open(cvUrl, "_blank");
                            },
                          },
                          {
                            icon: MessageCircle,
                            href: "https://wa.me/5561999999999",
                            label: "WhatsApp",
                          },
                        ].map((social, index) => (
                          <motion.a
                            key={social.label}
                            href={social.href}
                            onClick={social.onClick}
                            target={
                              social.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              social.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="group relative w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white/70 backdrop-blur-md border border-violet-400/30 hover:border-violet-500/50 dark:bg-slate-900/40 dark:border-violet-500/30 dark:hover:border-violet-400/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.8 + index * 0.1,
                            }}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 dark:from-violet-600 dark:via-purple-600 dark:to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Icon */}
                            <social.icon className="w-3 h-3 lg:w-5 lg:h-5 text-violet-600 dark:text-violet-400 group-hover:text-white transition-colors duration-300 relative z-10" />

                            {/* Tooltip */}
                            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-1 bg-violet-900 dark:bg-violet-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-[100]">
                              {social.label}
                            </div>
                          </motion.a>
                        ))}
                      </div>

                      {/* Badge Status - Movido para o final do card */}
                      <div className="flex justify-center pt-2 lg:pt-4">
                        <div className="inline-flex items-center px-3 py-1.5 bg-violet-100 dark:bg-violet-900/40 border border-violet-300 dark:border-violet-500/30 rounded-full backdrop-blur-sm">
                          <motion.div
                            className="w-2 h-2 bg-green-400 rounded-full mr-2 shadow-sm"
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                          <span className="text-[10px] lg:text-xs font-medium text-violet-700 dark:text-violet-200">
                            {t('hero.available')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Main Content */}
            <motion.div
              className="lg:col-span-7 order-2 lg:order-2 flex items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 flex-1 max-w-xs sm:max-w-md lg:max-w-2xl px-1 sm:px-2 lg:px-0 overflow-hidden">
                {/* Overline Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Badge className="bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-pink-500/20 dark:from-violet-600/25 dark:via-purple-600/25 dark:to-teal-500/25 backdrop-blur-md border border-white/20 dark:border-violet-500/20 text-violet-900 dark:text-violet-100 font-medium text-[9px] sm:text-[10px] lg:text-xs px-2 sm:px-3 lg:px-[14px] py-1.5 lg:py-[6px] text-center leading-relaxed w-full">
                    <span className="inline">UX/UI STRATEGY</span>
                    <span className="inline text-violet-600 dark:text-violet-300 mx-1">•</span>
                    <span className="inline">GROWTH DESIGN</span>
                    <span className="inline text-violet-600 dark:text-violet-300 mx-1">•</span>
                    <span className="inline">BUSINESS ALIGNMENT</span>
                  </Badge>
                </motion.div>

                {/* Hero Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h1 className="flex flex-col justify-center h-full max-w-xl">
                    <span className="font-extrabold mb-2 lg:mb-3 block leading-tight">
                      <span className="gradient-text text-lg sm:text-xl lg:text-3xl xl:text-4xl block mb-1 lg:mb-2">
                        {t("hero.main_title")}
                      </span>
                      <span className="text-slate-600 dark:text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-tight">
                        {t("hero.headline")}
                      </span>
                    </span>
                  </h1>
                </motion.div>

                {/* Value Proposition */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="max-w-xl"
                >
                  <p className="leading-relaxed text-slate-700 dark:text-violet-100/90 text-[10px] sm:text-[12px] lg:text-[16px] mt-1 lg:mt-6 line-clamp-4 lg:line-clamp-none overflow-hidden">
                    {t("hero.description")}
                  </p>
                </motion.div>

                {/* Primary Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 lg:pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 hover:from-violet-700 hover:via-purple-700 hover:to-pink-600 dark:from-violet-600 dark:via-purple-600 dark:to-teal-500 dark:hover:from-violet-700 dark:hover:via-purple-700 dark:hover:to-teal-600 text-white shadow-2xl hover:shadow-violet-500/25 hover:scale-105 transition-all duration-300 group font-semibold text-sm"
                    onClick={() => scrollToSection("#projetos")}
                  >
                    {t("hero.cta.portfolio")}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    className="glass-strong border-violet-400/30 hover:border-violet-400/40 hover:text-white dark:hover:text-white footer-gradient-hover hover:scale-105 transition-all duration-300 text-slate-700 dark:text-violet-200 font-semibold text-sm"
                    onClick={() => scrollToSection("#contato")}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {t("hero.cta.contact")}
                  </Button>
                </motion.div>


              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-violet-400/40 rounded-full flex justify-center cursor-pointer hover:border-violet-400/60 transition-colors group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection("#sobre")}
        >
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-violet-500 to-purple-500 rounded-full mt-2 group-hover:from-violet-400 group-hover:to-purple-400 transition-colors"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}