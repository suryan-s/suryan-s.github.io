import React from 'react';
import { CustomCursor } from './components/CustomCursor';

// Shared Components
import { BackgroundGrid, BackgroundWatermark } from './components/shared/BackgroundElements';
import { Logo } from './components/shared/Logo';
import { VerticalSocials } from './components/shared/VerticalSocials';
import { ShareWidget } from './components/shared/ShareWidget';

// Section Components
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { TerminalSection } from './components/sections/TerminalSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0e0e0e] text-white overflow-x-hidden font-sans selection:bg-cyan-500/20 selection:text-cyan-200 cursor-none">
      <CustomCursor />

      {/* Fixed Background Elements */}
      <BackgroundGrid />
      <BackgroundWatermark />

      {/* Fixed UI Overlays */}
      <Logo />
      <VerticalSocials />
      <ShareWidget />

      {/* Scrollable Content */}
      <main className="relative z-10 w-full">
        <HeroSection />
        <AboutSection />
        <TerminalSection />
        <ProjectsSection />
        <ContactSection />
      </main>

    </div>
  );
};

export default App;

