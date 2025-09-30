import { AnimatedBackground } from "./components/AnimatedBackground";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProcessSection } from "./components/ProcessSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { LanguageProvider } from "./components/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Header */}
        <Header />
        
        {/* Main Content - ESTRUTURA OTIMIZADA PARA CONVERSÃO */}
        <main className="relative z-10">
          {/* 1. IMPACTO INICIAL - Hero + Badge disponibilidade */}
          <HeroSection />
          
          {/* 2. CREDIBILIDADE - Jornada + Fotos + CTA Resume */}
          <AboutSection />
          
          {/* 3. COMPETÊNCIA TÉCNICA - Skills T-Shaped + Ferramentas com Logos */}
          <SkillsSection />
          
          {/* 4. METODOLOGIA - Como Trabalho (4 cards visuais) */}
          <ProcessSection />
          
          {/* 5. EVIDÊNCIAS - Projetos com Cases */}
          <ProjectsSection />
          
          {/* 6. VALIDAÇÃO SOCIAL - Depoimentos (carousel automático) */}
          <TestimonialsSection />
          
          {/* 7. CONVERSÃO - Contato Focado (Email + WhatsApp) */}
          <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Toast Notifications */}
        <Toaster />
      </div>
    </LanguageProvider>
  );
}