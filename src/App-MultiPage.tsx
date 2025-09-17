import { useState } from "react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { HeaderMultiPage } from "./components/HeaderMultiPage";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { WorkPage } from "./components/pages/WorkPage";
import { ProcessPage } from "./components/pages/ProcessPage";
import { ContactPage } from "./components/pages/ContactPage";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export type PageType = 'home' | 'about' | 'work' | 'process' | 'contact';

export default function AppMultiPage() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'work':
        return <WorkPage onNavigate={setCurrentPage} />;
      case 'process':
        return <ProcessPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Header */}
      <HeaderMultiPage currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {/* Main Content */}
      <main className="relative z-10">
        {renderCurrentPage()}
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}