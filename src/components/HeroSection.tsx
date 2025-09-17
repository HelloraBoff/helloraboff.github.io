import { motion } from "motion/react";
import { ArrowRight, Mail, ExternalLink, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import profileImage from "figma:asset/56319979c2fcb75448033089703dae67faad8642.png";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openMedium = () => {
    window.open("https://medium.com/@helloraboff", "_blank");
  };

  const downloadCV = () => {
    // Implementar download do CV
    console.log("Download CV");
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Violet Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-violet-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-fuchsia-500/20 via-violet-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-violet-600/10 via-purple-600/5 to-transparent rounded-full blur-3xl" />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-violet-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Impact Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="glass-strong px-6 py-3 text-sm border-violet-500/30 text-violet-300 bg-violet-950/30">
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full mr-3"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Disponível para novos desafios
              </Badge>
            </motion.div>

            {/* Powerful Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="overline text-violet-600 dark:text-violet-400 mb-4 tracking-widest">
                UX/UI DESIGNER · ESTRATÉGIA DIGITAL
              </div>
              <h1 className="leading-tight">
                Transformo <span className="gradient-text">complexidade em clareza</span> através do design estratégico
              </h1>
            </motion.div>

            {/* Compelling Value Prop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="lead text-xl leading-relaxed max-w-2xl">
                <span className="text-violet-600 dark:text-violet-200 font-semibold">10+ anos com foco em dados, experiência e conteúdo</span> transformando processos corporativos em 
                experiências digitais. De sistemas de reembolso a plataformas educacionais — 
                <span className="text-violet-600 dark:text-violet-200 font-semibold"> design que conecta pessoas e resultados</span>.
              </p>
            </motion.div>

            {/* Quick Impact Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 py-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { number: "15+", label: "Projetos" },
                { number: "3", label: "Setores" },
                { number: "10+", label: "Anos" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center glass-subtle p-4 rounded-xl border border-violet-500/20"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-violet-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-2xl hover:shadow-violet-500/25 hover:scale-105 transition-all duration-300 group px-8 py-6 text-base font-semibold border-0"
                onClick={() => scrollToSection("#projetos")}
              >
                Ver meus cases
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-strong border-violet-400/30 hover:border-violet-400/50 hover:bg-violet-500/10 hover:scale-105 transition-all duration-300 px-8 py-6 text-base font-semibold text-gray-700 dark:text-violet-200"
                onClick={() => scrollToSection("#contato")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Fale comigo
              </Button>
            </motion.div>

            {/* Secondary CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 dark:text-violet-300 hover:text-gray-800 dark:hover:text-violet-200 hover:bg-violet-500/10 transition-all duration-300"
                onClick={openMedium}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Medium
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 dark:text-violet-300 hover:text-gray-800 dark:hover:text-violet-200 hover:bg-violet-500/10 transition-all duration-300"
                onClick={downloadCV}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Impact */}
          <motion.div 
            className="flex flex-col items-center space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Enhanced Profile */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-violet-600/30 via-fuchsia-600/30 to-violet-600/30 rounded-full blur-2xl opacity-60 animate-pulse" />
              
              {/* Profile Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full animate-pulse" />
                <img
                  src={profileImage}
                  alt="Hellora Boff - UX/UI Designer"
                  className="relative w-full h-full rounded-full object-cover glass-strong border-4 border-violet-400/30 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-violet-500/20 ring-offset-8 ring-offset-transparent" />
              </div>
              
              {/* Profile Info */}
              <motion.div 
                className="text-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-violet-300 mb-2">
                  Hellora Boff
                </h2>
                <p className="text-gray-600 dark:text-violet-200 text-lg">
                  UX/UI Designer · Brasília/DF
                </p>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-500 dark:text-violet-300">Disponível para projetos</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-violet-400/40 rounded-full flex justify-center cursor-pointer hover:border-violet-400/60 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection("#sobre")}
        >
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}