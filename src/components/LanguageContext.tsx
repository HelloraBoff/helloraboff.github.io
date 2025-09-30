import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Traduções completas
const translations = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades', 
    'nav.portfolio': 'Portfólio',
    'nav.testimonials': 'Depoimentos',
    'nav.contact': 'Contato',
    'header.hire': 'Contratar',
    
    // Hero Section
    'hero.available': 'Disponível para novos desafios',
    'hero.overline': 'UX/UI STRATEGY · GROWTH DESIGN · BUSINESS ALIGNMENT',
    'hero.headline': 'Arquiteto jornadas e soluções com foco no usuário e crescimento do negócio.',
    'hero.main_title': 'Estrategista T-shaped:',
    'hero.description': 'UX Strategy, Content Design e Business Acumen. Sou o ponto Focal de transformação que traduz objetivos de negócio e insights de pesquisa em jornadas Otimizadas end-to-end e soluções com foco em geração de valor. Atuação Data-informed e Ágil.',
    'hero.tshaped': 'Perfil T-shaped',
    'hero.cta.portfolio': 'Ver meus cases',
    'hero.cta.contact': 'Fale comigo',
    'hero.medium': 'Medium',
    'hero.cv': 'Download CV',
    'hero.stats.cases': 'Cases Estratégicos',
    'hero.stats.sectors': 'Setores Impactados', 
    'hero.stats.years': 'Anos T-Shaped',
    'hero.name': 'Hellora Boff',
    'hero.title': 'UX/UI Designer · Brasília/DF',
    
    // About Section
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Conectando estratégia de negócio com design centrado no usuário',
    
    // Skills Section
    'skills.title': 'Habilidades',
    
    // Journey Section
    'journey.title': 'Minha Jornada',
    
    // Tools Section
    'tools.title': 'Ferramentas',
    
    // Impact Section
    'impact.title': 'Impacto',
    
    // Projects Section
    'projects.title': 'Projetos',
    'projects.subtitle': 'Cases que demonstram a aplicação prática do Growth Design',
    'projects.description_part1': 'Cases reais e experimentos que',
    'projects.description_highlight': 'transformaram ideias',
    'projects.description_part2': 'em soluções possíveis',
    
    // Process Section
    'process.title': 'Como Trabalho',
    'process.subtitle': 'Metodologia orientada por dados e centrada no usuário',
    
    // Testimonials Section
    'testimonials.title': 'Depoimentos',
    'testimonials.subtitle': 'O que dizem sobre meu trabalho',
    
    // Contact Section
    'contact.title': 'Contato',
    'contact.subtitle': 'Vamos conversar sobre seu próximo projeto',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.developed': 'Desenvolvido com',
    'footer.description': 'UX/UI Designer especializada em estratégia e experiências digitais que conectam pessoas, negócios e impacto social.',
    'footer.links': 'Links Rápidos',
    'footer.contact': 'Contato',
    'footer.made_with': 'Feito com',
    'footer.purpose': 'e muito propósito.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Uso',
    'footer.location': 'Brasília - DF, Brasil',
    
    // Common
    'common.loading': 'Carregando...',
    'common.error': 'Erro',
    'common.success': 'Sucesso',
    'common.read_more': 'Ler mais',
    'common.view_project': 'Ver projeto',
    'common.view_case': 'Ver case',
    'common.download': 'Download',
    'common.available': 'Disponível',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.portfolio': 'Portfolio', 
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'header.hire': 'Hire Me',
    
    // Hero Section
    'hero.available': 'Available for new challenges',
    'hero.overline': 'UX/UI · GROWTH DESIGN · STRATEGIC NARRATIVES',
    'hero.headline': 'with strategic vision that transforms data into impactful experiences',
    'hero.main_title': 'Impact Design',
    'hero.description': 'with depth in UX Strategy, Data-informed Design and Rapid Prototyping. Business Administrator by training, designer by passion — connecting business objectives to solutions that generate measurable results.',
    'hero.tshaped': 'T-shaped Profile',
    'hero.cta.portfolio': 'View my cases',
    'hero.cta.contact': 'Contact me',
    'hero.medium': 'Medium',
    'hero.cv': 'Download CV',
    'hero.stats.cases': 'Strategic Cases',
    'hero.stats.sectors': 'Impacted Sectors',
    'hero.stats.years': 'T-Shaped Years',
    'hero.name': 'Hellora Boff',
    'hero.title': 'UX/UI Designer · Brasília/Brazil',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Connecting business strategy with user-centered design',
    
    // Skills Section
    'skills.title': 'Skills',
    
    // Journey Section
    'journey.title': 'My Journey',
    
    // Tools Section
    'tools.title': 'Tools',
    
    // Impact Section
    'impact.title': 'Impact',
    
    // Projects Section
    'projects.title': 'Projects',
    'projects.subtitle': 'Cases that demonstrate practical application of Growth Design',
    'projects.description_part1': 'Real cases and experiments that',
    'projects.description_highlight': 'transformed ideas',
    'projects.description_part2': 'into viable solutions',
    
    // Process Section
    'process.title': 'How I Work',
    'process.subtitle': 'Data-driven and user-centered methodology',
    
    // Testimonials Section
    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'What they say about my work',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Let\'s talk about your next project',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.developed': 'Developed with',
    'footer.description': 'UX/UI Designer specialized in strategy and digital experiences that connect people, business and social impact.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.made_with': 'Made with',
    'footer.purpose': 'and a lot of purpose.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.location': 'Brasília - DF, Brazil',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.read_more': 'Read more',
    'common.view_project': 'View project',
    'common.view_case': 'View case',
    'common.download': 'Download',
    'common.available': 'Available',
  }
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('pt');

  // Carregar idioma do localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Salvar idioma no localStorage
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Função de tradução
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}