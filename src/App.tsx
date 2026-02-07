import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DemoSection } from './components/DemoSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { ResearchSection } from './components/ResearchSection';
import { APISection } from './components/APISection';
import { Footer } from './components/Footer';

export default function App() {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else if (section === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onNavigate={handleNavigate} />
      
      <main>
        <HeroSection onNavigateToDemo={() => handleNavigate('demo')} />
        <DemoSection />
        <HowItWorksSection />
        <ArchitectureSection />
        <ResearchSection />
        <APISection />
      </main>

      <Footer />
    </div>
  );
}
