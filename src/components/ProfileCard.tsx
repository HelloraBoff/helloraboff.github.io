import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import image_25ab1fcd235fddec490acb55278383b3eeffa2a0 from 'figma:asset/25ab1fcd235fddec490acb55278383b3eeffa2a0.png';

export function ProfileCard() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projetos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-violet-500/5 via-purple-500/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-radial from-emerald-500/5 via-violet-500/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Profile Card - Design Impactante */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative w-80 bg-gradient-to-br from-slate-900/98 via-slate-800/98 to-slate-700/98 dark:from-violet-900/95 dark:via-purple-900/95 dark:to-emerald-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-500/60 dark:border-violet-500/30 shadow-2xl"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Elementos decorativos flutuantes */}
            <motion.div
              className="absolute top-6 right-6 w-4 h-4 bg-violet-400 rounded-full shadow-lg shadow-violet-400/50"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 left-6 w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />

            {/* Profile Image com borda gradiente */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-violet-600 via-purple-600 to-emerald-500 rounded-full p-[3px] shadow-2xl shadow-violet-500/40">
                  <div className="w-full h-full bg-violet-900 rounded-full p-[2px]">
                    <img
                      src={image_25ab1fcd235fddec490acb55278383b3eeffa2a0}
                      alt="Hellora Boff - UX/UI Designer"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Nome e Título */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white dark:text-white mb-2">
                Hellora Boff
              </h3>
              <p className="text-violet-200 font-medium mb-4">
                UX/UI Designer • Growth Focused
              </p>
              
              {/* Badge Status */}
              <div className="inline-flex items-center px-4 py-2 bg-violet-800/40 border border-violet-500/30 rounded-full backdrop-blur-sm">
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full mr-2 shadow-sm"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="text-xs font-medium text-violet-200">
                  Disponível para novos desafios
                </span>
              </div>
            </div>

            {/* Ícones de Ação */}
            <div className="flex justify-center gap-6">
              <motion.button
                className="w-12 h-12 bg-violet-700/50 hover:bg-violet-600/70 border border-violet-500/50 rounded-xl flex items-center justify-center backdrop-blur-sm transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://www.linkedin.com/in/helloraboff/", "_blank")}
              >
                <svg className="w-5 h-5 text-violet-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.button>

              <motion.button
                className="w-12 h-12 bg-violet-700/50 hover:bg-violet-600/70 border border-violet-500/50 rounded-xl flex items-center justify-center backdrop-blur-sm transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://medium.com/@helloraboff", "_blank")}
              >
                <svg className="w-5 h-5 text-violet-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </motion.button>

              <motion.button
                className="w-12 h-12 bg-violet-700/50 hover:bg-violet-600/70 border border-violet-500/50 rounded-xl flex items-center justify-center backdrop-blur-sm transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToProjects()}
              >
                <svg className="w-5 h-5 text-violet-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}