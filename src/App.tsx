import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { ExperienceTimeline } from './components/experience/ExperienceTimeline';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { AiNeuralSection } from './components/ai/AiNeuralSection';
import { SkillsConstellation } from './components/skills/SkillsConstellation';
import { MetricsSection } from './components/metrics/MetricsSection';
import { InteractiveTerminal } from './components/terminal/InteractiveTerminal';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { useActiveSection } from './hooks/useActiveSection';

export const App: React.FC = () => {
  const activeSection = useActiveSection([
    'hero',
    'about',
    'experience',
    'projects',
    'ai-engine',
    'skills',
    'metrics',
    'terminal',
    'contact',
  ]);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F7] selection:bg-[#00F0FF]/30 selection:text-[#00F0FF] relative font-sans">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <ProjectsSection />
        <AiNeuralSection />
        <SkillsConstellation />
        <MetricsSection />
        <InteractiveTerminal />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
