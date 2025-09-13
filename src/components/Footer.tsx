import { motion } from "motion/react";
import { Heart, Code } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                <Code className="w-5 h-5 text-blue-500" />
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                Portfolio Dev
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Desenvolvedor frontend especializado em criar experiências digitais 
              que conectam pessoas e geram resultados.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-medium">Links Rápidos</h4>
            <div className="space-y-2">
              {[
                { name: "Sobre", href: "#sobre" },
                { name: "Projetos", href: "#projetos" },
                { name: "Processo", href: "#processo" },
                { name: "Contato", href: "#contato" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-sm text-muted-foreground hover:text-blue-500 transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-medium">Contato</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>contato@portfolio.dev</p>
              <p>+55 (11) 99999-9999</p>
              <p>São Paulo, Brasil</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {currentYear} Portfolio Dev. Feito com 
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            e muito café.
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <button className="hover:text-blue-500 transition-colors duration-200">
              Política de Privacidade
            </button>
            <span>•</span>
            <button className="hover:text-blue-500 transition-colors duration-200">
              Termos de Uso
            </button>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    </footer>
  );
}