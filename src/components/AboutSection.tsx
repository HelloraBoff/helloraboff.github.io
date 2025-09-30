import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageContext";
import { ArrowRight, ExternalLink } from "lucide-react";

const aboutData = {
  pt: {
    title: "Minha Jornada: da visão sistêmica de negócio à estratégia de experiência.",
    paragraphs: [
      "Administradora por formação e UX/UI Designer por paixão, minha trajetória é a união da perspectiva de negócio com a força criativa. Com mais de 10 anos de experiência, atuo como a ponte entre solução e necessidades humanas, conectando humano-digital e traduzindo desafios complexos em jornadas otimizadas (End-to-End).",
      "Meu perfil T-Shaped me permite atuar com profundidade em UX Strategy, Service Design e Growth Design, buscando trazer visão sistêmica e valor agregado para tudo que entrego. Minha abordagem combina pensamento analítico com resolução criativa de problemas, potencializada por uma postura  Rapid Prototyping e processos Data-informed e Iterativos.",
      "Minha missão é ir além do design de telas, sendo a Liderança Técnica que transforma a complexidade do negócio em soluções humanas e escaláveis. Meu maior valor é atuar na estruturação da ambiguidade, criando lógica e viabilidade onde o processo é incerto. Meu compromisso é garantir que cada solução entregue resultados mensuráveis e, acima de tudo, um propósito real para o usuário.", 
      "No fim, é isso que define a Estratégia: Transformar o Design em um Diferencial Competitivo decisivo."
    ],
    cta: "Baixar meu currículo",
    stats: [
      { value: "10+", label: "Anos de Experiência" },
      { value: "25+", label: "Projetos Entregues" },
      { value: "15+", label: "Clientes Satisfeitos" },
      { value: "40+", label: "Soluções de UI/UX" }
    ]
  },
  en: {
    title: "My Journey: From Business Strategy to Experience Design",
    paragraphs: [
      "An Administrator by training and a UX/UI Designer by passion, my professional journey is the union of strategic vision and creativity. With over 10 years of experience, I act as a bridge between human needs and digital solutions, translating user needs and business goals into impactful experiences.",
      "My T-shaped profile allows me to specialize in UX Strategy, Service Design, and Growth Design, bringing systemic vision and added value to everything I deliver. My approach combines analytical thinking with creative problem-solving, enhanced by a Rapid Prototyping mindset and Data-informed, iterative processes.",
      "My mission goes beyond screen design—I serve as Technical Leadership that transforms business complexity into human-centered, scalable solutions. My greatest value lies in structuring ambiguity, creating logic and viability where processes are uncertain. My commitment is to ensure every solution delivers measurable results and, above all, real purpose for the user.",
      "In the end, this is what defines Strategy: transforming Design into a decisive Competitive Advantage."
    ],
    cta: "Download my resume",
    stats: [
      { value: "10+", label: "Years Experience" },
      { value: "25+", label: "Projects Delivered" },
      { value: "15+", label: "Happy Clients" },
      { value: "40+", label: "UI/UX Solutions" }
    ]
  }
};

export function AboutSection() {
  const { language } = useLanguage();
  const content = aboutData[language];

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/helloraboff/details/experience/", "_blank");
  };

  return (
    <>
    <section id="sobre" className="py-20 relative pt-[40px] pr-[0px] pb-[80px] pl-[0px]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl mb-8">
            {content.title}
          </h3>

        </motion.div>

        {/* Main Content - Layout como na imagem anexada */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Texto (7 colunas) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {content.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2
                }}
                className="text-base mb-6 leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Signature - Linha + Nome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="w-12 h-[2px] bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 dark:from-violet-600 dark:via-purple-600 dark:to-teal-500" />
              <span className="text-lg font-bold text-[rgba(165,144,196,1)] dark:text-violet-100">
                Hellora Boff
              </span>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4 mb-8 mt-16"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 dark:from-violet-600 dark:via-purple-600 dark:to-teal-500 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
              >
                {content.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.button
                onClick={openLinkedIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-md border border-violet-500/20 text-foreground linkedin-hover hover:bg-white/80 hover:border-violet-500/30 dark:bg-slate-900/40 dark:border-violet-500/10 dark:hover:bg-slate-900/60 rounded-xl font-semibold transition-all duration-300"
              >
                LinkedIn
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </motion.div>


          </div>

          {/* Right Column - Fotos (5 colunas) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="space-y-6 h-full">
              {/* Foto Principal - Largura total com altura maior */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-xl"
              >
                <ImageWithFallback
                  src="https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/f4b1b6d410222d125f987dfce78a0dcb2e97537b/images/IMG-20250926-WA0004.jpg"
                  alt="Hellora Boff - Professional Photo"
                  className="w-full h-80 object-cover"
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-500/20 via-transparent to-transparent" />
              </motion.div>

              {/* Grid das 3 fotos menores - LADO A LADO com altura alongada */}
              <div className="grid grid-cols-3 gap-4">
                {/* Foto Ambiente 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative rounded-xl overflow-hidden shadow-lg h-48"
                >
                  <ImageWithFallback
                    src="https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/refs/heads/main/images/Imagem%20do%20WhatsApp%20de%202025-09-24%20%C3%A0(s)%2000.31.08_0582e1cb.jpg"
                    alt="Apresentando para equipe"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay sutil para autenticidade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-500/15 via-transparent to-transparent" />
                </motion.div>

                {/* Foto Ambiente 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-lg h-48"
                >
                  <ImageWithFallback
                    src="https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/f4b1b6d410222d125f987dfce78a0dcb2e97537b/images/IMG-20250926-WA0007.jpg"
                    alt="Ambiente de trabalho colaborativo"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay sutil para autenticidade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-500/15 via-transparent to-transparent" />
                </motion.div>

                {/* Foto Ambiente 3 - Nova foto */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative rounded-xl overflow-hidden shadow-lg h-48"
                >
                  <ImageWithFallback
                    src="https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/refs/heads/main/images/f6445aae-8752-45c7-b6e5-7f570ad2a116.jpg"
                    alt="Momento profissional criativo"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay sutil para autenticidade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-500/15 via-transparent to-transparent" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Profissional Compacta - Seguindo exatamente a imagem anexada */}
        <motion.div
          className="mt-20 pt-16 border-t border-violet-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="mb-4">
              {language === 'pt' ? 'Trajetória Profissional' : 'Professional Journey'}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'pt' 
                ? 'Da estratégia de negócios ao design de crescimento - uma jornada de 10+ anos'
                : 'From business strategy to growth design - a 10+ year journey'
              }
            </p>
          </div>

          {/* Timeline Vertical Compacta */}
          <div className="max-w-4xl mx-auto relative">
            {/* Linha Central - Gradient uniforme da paleta */}
            <div className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-violet-500/20 via-violet-500/30 to-violet-500/10 md:transform md:-translate-x-1/2" style={{ height: 'calc(100% - 32px)' }} />
            
            <div className="space-y-8">
              {/* 2021-Atual: Projetos Autônomos & Experimentais */}
              <motion.div
                className="relative flex items-center md:flex-row flex-row"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-violet-500 border-2 border-background shadow-sm z-10" />
                <div className="w-full md:w-5/12 md:pr-8 pl-16 md:pl-0">
                  <div className="glass-subtle rounded-xl border border-violet-500/15 overflow-hidden">
                    {/* Faixa branca superior */}
                    <div className="bg-white flex items-center justify-between px-4 py-2.5 h-16 sm:h-18">
                      {/* Logo à esquerda */}
                      <ImageWithFallback 
                        src="https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/refs/heads/main/images/Projetos%20aut%C3%B4nomos%20e%20experimentais.png"
                        alt="Projetos Autônomos e Experimentais"
                        className="h-full w-auto object-contain flex-shrink-0 max-w-32 sm:max-w-40"
                      />
                      
                      {/* Período à direita */}
                      <div className="flex gap-2">
                        <span className="text-xs font-medium text-violet-600/80 bg-violet-50 px-2 py-1 rounded-full">
                          2021-Atual
                        </span>
                        <span className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded-full font-medium">
                          Contínuo
                        </span>
                      </div>
                    </div>
                    
                    {/* Informações abaixo da faixa branca */}
                    <div className="p-4">
                      <h5 className="font-bold mb-1">Projetos Autônomos & Experimentais</h5>
                      <p className="text-sm text-muted-foreground mb-2">Arquiteta de Experiências Digitais</p>
                      <p className="text-xs text-muted-foreground/70">Construção End-to-End | Rapid Prototyping | Viabilidade Técnica | Front-end para Designers</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-5/12" />
              </motion.div>

              {/* 2022-Atual: B2HR */}
              <motion.div
                className="relative flex items-center md:flex-row-reverse flex-row"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-violet-500 border-2 border-background shadow-sm z-10" />
                <div className="w-full md:w-5/12 md:pl-8 pl-16 md:pr-0">
                  <div className="glass-subtle rounded-xl border border-violet-500/15 overflow-hidden">
                    {/* Faixa branca superior */}
                    <div className="bg-white flex items-center justify-between px-4 py-2.5 h-16 sm:h-18">
                      {/* Logo à esquerda */}
                      <ImageWithFallback 
                        src="https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/refs/heads/main/images/B2HR%20-%20Pessoas%20e%20Estrat%C3%A9gias.png"
                        alt="B2HR - Pessoas e Estratégias"
                        className="h-full w-auto object-contain flex-shrink-0 max-w-32 sm:max-w-40"
                      />
                      
                      {/* Período à direita */}
                      <div className="flex gap-2">
                        <span className="text-xs font-medium text-violet-600/80 bg-violet-50 px-2 py-1 rounded-full">
                          Mai 2022-Atual
                        </span>
                        <span className="text-xs bg-violet-100 text-violet-700 px-2 py-1 rounded-full font-medium">
                          Atual
                        </span>
                      </div>
                    </div>
                    
                    {/* Informações abaixo da faixa branca */}
                    <div className="p-4">
                      <h5 className="font-bold mb-1">B2HR - Pessoas e Estratégias</h5>
                      <p className="text-sm text-muted-foreground mb-2">UX Strategist & Designer</p>
                      <p className="text-xs text-muted-foreground/70">Business Alignment | Liderança Técnica | UX Strategy | Análise de Dados</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-5/12" />
              </motion.div>

              {/* 2015-2021: Caixa Seguradora */}
              <motion.div
                className="relative flex items-center md:flex-row flex-row"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-violet-500/80 border-2 border-background z-10" />
                <div className="w-full md:w-5/12 md:pr-8 pl-16 md:pl-0">
                  <div className="glass-subtle rounded-xl border border-violet-500/10 overflow-hidden">
                    {/* Faixa branca superior */}
                    <div className="bg-white flex items-center justify-between px-4 py-2.5 h-16 sm:h-18">
                      {/* Logo à esquerda */}
                      <ImageWithFallback 
                        src="https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/refs/heads/main/images/CNP%20Seguros%20Holding.png"
                        alt="CNP Seguros Holding"
                        className="h-full w-auto object-contain flex-shrink-0 max-w-32 sm:max-w-40"
                      />
                      
                      {/* Período à direita */}
                      <span className="text-xs font-medium text-violet-600/80 bg-violet-50 px-2 py-1 rounded-full">
                        Ago 2015-Out 2021
                      </span>
                    </div>
                    
                    {/* Informações abaixo da faixa branca */}
                    <div className="p-4">
                      <h5 className="font-bold mb-1">CNP Seguros (Caixa Seguradora)</h5>
                      <p className="text-sm text-muted-foreground mb-2">Analista de Recursos Humanos</p>
                      <p className="text-xs text-muted-foreground/70">Service Design | Otimização Processos | Employee Experience (EX) | Visão Sistêmica | Data analytics</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-5/12" />
              </motion.div>

              {/* Anteriores a 2015: Experiências Fundamentais */}
              <motion.div
                className="relative flex items-center md:flex-row-reverse flex-row"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-violet-500/60 border-2 border-background z-10" />
                <div className="w-full md:w-5/12 md:pl-8 pl-16 md:pr-0">
                  <div className="glass-subtle rounded-xl border border-violet-500/10 overflow-hidden">
                    {/* Faixa branca superior */}
                    <div className="bg-white flex items-center justify-between px-4 py-2.5 h-16 sm:h-18 opacity-90">
                      {/* Logo à esquerda */}
                      <ImageWithFallback 
                        src="https://raw.githubusercontent.com/HelloraBoff/helloraboff.github.io/refs/heads/main/images/Experi%C3%AAncias%20fundamentais.png"
                        alt="Experiências Fundamentais"
                        className="h-full w-auto object-contain flex-shrink-0 max-w-32 sm:max-w-40"
                      />
                      
                      {/* Período à direita */}
                      <span className="text-xs font-medium text-violet-600/70 bg-violet-50/70 px-2 py-1 rounded-full">
                        Anteriores a 2015
                      </span>
                    </div>
                    
                    {/* Informações abaixo da faixa branca */}
                    <div className="p-4">
                      <h5 className="font-bold mb-1 opacity-90">Experiências Fundamentais</h5>
                      <p className="text-sm text-muted-foreground mb-2 opacity-90">Base em Operação e Customer Experience (CX)</p>
                      <p className="text-xs text-muted-foreground/70 opacity-90">Customer Experience (CX) | Jornadas Complexas | Logística e Atendimento | Mediação de Conflitos</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-5/12" />
              </motion.div>
            </div>

            {/* CTA LinkedIn */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={openLinkedIn}
                className="glass-subtle px-6 py-3 text-gray-900 dark:text-violet-200 font-medium rounded-xl text-sm group linkedin-hover border border-violet-500/10 hover:border-violet-500/20 dark:border-violet-500/15 dark:hover:border-violet-500/25 transition-all duration-300"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="transition-colors duration-300">
                  {language === 'pt' 
                    ? 'Ver experiência completa no LinkedIn →'
                    : 'View complete experience on LinkedIn →'
                  }
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>

    {/* Stats Section - SEPARADA com fundo igual ao ImpactSection */}
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced Background - Exatamente igual ao ImpactSection */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-40 bg-gradient-to-br from-violet-500/25 via-transparent to-fuchsia-500/25 dark:from-violet-500/20 dark:to-teal-500/20 transform -translate-y-1/2" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-violet-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-fuchsia-500/15 via-violet-500/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-violet-600/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 max-w-6xl mx-auto relative">
          {/* +10 Anos de Experiência */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center justify-center text-center relative py-4 md:py-6"
          >
            <div className="text-4xl font-bold text-gray-600 dark:text-gray-300 mb-2 drop-shadow-lg">
              +10
            </div>
            <div className="text-sm text-muted-foreground dark:text-muted-foreground font-medium drop-shadow-md mb-1 font-bold">
              Years of Experience
            </div>
            <div className="text-xs text-muted-foreground/80 dark:text-muted-foreground/70 font-normal">
              in Business & Service Design
            </div>
            
            {/* Linha divisória vertical - Desktop (altura reduzida) */}
            <div className="absolute -right-8 md:-right-8 top-1/2 transform -translate-y-1/2 w-px h-12 bg-violet-500/20 hidden md:block" />
          </motion.div>

          {/* +100 Projetos Entregues */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col items-center justify-center text-center relative py-4 md:py-6"
          >
            <div className="text-4xl font-bold text-gray-600 dark:text-gray-300 mb-2 drop-shadow-lg">
              +100
            </div>
            <div className="text-sm text-muted-foreground dark:text-muted-foreground font-medium drop-shadow-md mb-1 font-bold">
              Projects Delivered
            </div>
            <div className="text-xs text-muted-foreground/80 dark:text-muted-foreground/70 font-normal">
              data, experience and optimization
            </div>
            
            {/* Linha divisória vertical - Desktop (altura reduzida) */}
            <div className="absolute -right-8 md:-right-8 top-1/2 transform -translate-y-1/2 w-px h-12 bg-violet-500/20 hidden md:block" />
          </motion.div>

          {/* +3 Anos como Referência */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col items-center justify-center text-center relative py-4 md:py-6"
          >
            <div className="text-4xl font-bold text-gray-600 dark:text-gray-300 mb-2 drop-shadow-lg">
              +3
            </div>
            <div className="text-sm text-muted-foreground dark:text-muted-foreground font-medium drop-shadow-md mb-1 font-bold">
              Years as Reference
            </div>
            <div className="text-xs text-muted-foreground/80 dark:text-muted-foreground/70 font-normal">
              technical in diverse projects
            </div>
            
            {/* Linha divisória vertical - Desktop (altura reduzida) */}
            <div className="absolute -right-8 md:-right-8 top-1/2 transform -translate-y-1/2 w-px h-12 bg-violet-500/20 hidden md:block" />
          </motion.div>

          {/* +5 Anos em atuação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col items-center justify-center text-center relative py-4 md:py-6"
          >
            <div className="text-4xl font-bold text-gray-600 dark:text-gray-300 mb-2 drop-shadow-lg">
              +5
            </div>
            <div className="text-sm text-muted-foreground dark:text-muted-foreground font-medium drop-shadow-md mb-1 font-bold">
              Years Remote Work
            </div>
            <div className="text-xs text-muted-foreground/80 dark:text-muted-foreground/70 font-normal">
              with positive evaluation
            </div>
          </motion.div>
          
          {/* SISTEMA DE CRUZ MOBILE - Linhas Horizontais e Vertical Central */}
          
          {/* Linha horizontal entre primeira linha (itens 1-2) */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-violet-500/20 md:hidden" style={{ transform: 'translateY(-50%)' }} />
          
          {/* Linha vertical central dividindo as colunas */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-violet-500/20 md:hidden" style={{ transform: 'translateX(-50%)' }} />
        </div>
      </div>
    </section>
    </>
  );
}