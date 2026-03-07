import { HeroSection } from '../components/HeroSection';
import { DemoSection } from '../components/DemoSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { ArchitectureSection } from '../components/ArchitectureSection';
import { ResearchSection } from '../components/ResearchSection';
import { APISection } from '../components/APISection';
import { useOutletContext } from 'react-router';

export function Home() {
  const { onNavigate } = useOutletContext<{ onNavigate: (section: string) => void }>();

  return (
    <main>
      <HeroSection onNavigateToDemo={() => onNavigate('demo')} />
      <DemoSection />
      <HowItWorksSection />
      <ArchitectureSection />
      <ResearchSection />
      <APISection />
    </main>
  );
}
