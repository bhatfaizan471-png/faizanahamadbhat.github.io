import React, { useEffect, useState } from 'react';
import { Navbar, NavSectionId } from './components/Navbar';
import { Hero } from './components/Hero';
import { JourneySection } from './components/JourneySection';
import { ProfileSection } from './components/ProfileSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';

const SECTION_IDS: NavSectionId[] = [
  'home',
  'journey',
  'profile',
  'skills',
  'projects',
  'services',
  'certifications',
  'contact',
];

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<NavSectionId>('home');

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;
      requestAnimationFrame(() => {
        const target = document.querySelector(hash) as HTMLElement | null;
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'instant' as ScrollBehavior,
          });
        }
      });
    }
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollMarker = window.scrollY + window.innerHeight * 0.35;

      // Highlight contact when scrolled near bottom of page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection('contact');
        return;
      }

      let current: NavSectionId = 'home';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollMarker) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F3F2EE] text-[#101010] overflow-x-clip">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <JourneySection />
        <ProfileSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <CertificationsSection />
      </main>
      <ContactSection />
    </div>
  );
};

export default App;
