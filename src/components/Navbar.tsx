import React, { useEffect, useState } from 'react';
import {
  Download,
  Eye,
  GitBranch,
  Home,
  MapPin,
  Monitor,
  Send,
  Star,
  Trophy,
  Briefcase,
  X,
  ArrowUpRight,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export type NavSectionId =
  | 'home'
  | 'journey'
  | 'profile'
  | 'skills'
  | 'projects'
  | 'services'
  | 'certifications'
  | 'contact';

interface NavbarProps {
  activeSection: NavSectionId;
}

interface NavItem {
  id: NavSectionId;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home', icon: Home },
  { id: 'journey', label: 'Journey', href: '#journey', icon: GitBranch },
  { id: 'profile', label: 'Profile', href: '#profile', icon: Eye },
  { id: 'skills', label: 'Skills', href: '#skills', icon: Star },
  { id: 'projects', label: 'Projects', href: '#projects', icon: Monitor },
  { id: 'services', label: 'Services', href: '#services', icon: Briefcase },
  {
    id: 'certifications',
    label: 'Certificates',
    href: '#certifications',
    icon: Trophy,
  },
  { id: 'contact', label: 'Contact', href: '#contact', icon: Send },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setDrawerOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F3F2EE]/90 backdrop-blur-md border-b border-black/6 py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-3">
          {/* Left Navigation Cluster matching reference design */}
          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-1.5 sm:gap-2.5 min-w-0"
          >
            {NAV_ITEMS.slice(0, 7).map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-label={item.label}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative flex items-center gap-2 transition-colors duration-200 shrink-0 ${
                    isActive
                      ? 'rounded-full bg-[#121212] text-white px-4 py-2 shadow-[0_8px_20px_rgba(16,16,16,0.22)]'
                      : 'hidden md:flex w-9 h-9 rounded-full items-center justify-center text-[#1B1B1B]/85 hover:text-[#101010] hover:bg-black/6'
                  }`}
                >
                  <Icon
                    className={`w-[16px] h-[16px] transition-colors ${
                      isActive ? 'text-[#EAAE0F]' : 'text-current'
                    }`}
                    strokeWidth={1.85}
                  />
                  {isActive ? (
                    <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
                      {item.label}
                    </span>
                  ) : (
                    <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-[#121212] px-2 py-0.5 text-[10px] font-medium text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </a>
              );
            })}

            {/* Resume PDF Download Icon Button matching reference */}
            <a
              href={PORTFOLIO_DATA.personal.resumePath}
              download={PORTFOLIO_DATA.personal.resumeFileName}
              aria-label="Download Resume PDF"
              className="group relative hidden md:flex w-9 h-9 rounded-full items-center justify-center text-[#1B1B1B]/85 hover:text-[#101010] hover:bg-black/6 transition-all shrink-0"
            >
              <Download className="w-[16px] h-[16px]" strokeWidth={1.85} />
              <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-[#121212] px-2 py-0.5 text-[10px] font-medium text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap">
                Resume PDF
              </span>
            </a>

            {/* Contact Paper Plane Icon Button */}
            {(() => {
              const contactItem = NAV_ITEMS[7];
              const ContactIcon = contactItem.icon;
              const isContactActive = activeSection === 'contact';
              return (
                <a
                  href={contactItem.href}
                  onClick={(e) => handleNavClick(e, contactItem.href)}
                  aria-label="Contact"
                  aria-current={isContactActive ? 'page' : undefined}
                  className={`group relative flex items-center gap-2 transition-colors duration-200 shrink-0 ${
                    isContactActive
                      ? 'rounded-full bg-[#121212] text-white px-4 py-2 shadow-[0_8px_20px_rgba(16,16,16,0.22)]'
                      : 'hidden md:flex w-9 h-9 rounded-full items-center justify-center text-[#1B1B1B]/85 hover:text-[#101010] hover:bg-black/6'
                  }`}
                >
                  <ContactIcon
                    className={`w-[16px] h-[16px] ${
                      isContactActive ? 'text-[#EAAE0F]' : 'text-current'
                    }`}
                    strokeWidth={1.85}
                  />
                  {isContactActive ? (
                    <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
                      Contact
                    </span>
                  ) : (
                    <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-[#121212] px-2 py-0.5 text-[10px] font-medium text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap">
                      Contact
                    </span>
                  )}
                </a>
              );
            })()}
          </nav>

          {/* Top-right actions: Mobile PDF quick link + 4-dot grid button */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={PORTFOLIO_DATA.personal.resumePath}
              download={PORTFOLIO_DATA.personal.resumeFileName}
              className="md:hidden inline-flex items-center gap-1.5 rounded-full bg-[#F3B71B] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#101010] shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF</span>
            </a>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open section index"
              aria-expanded={drawerOpen}
              className="w-10 h-10 rounded-full bg-white/95 hover:bg-white border border-black/8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#101010] transition-transform duration-200 hover:scale-105 cursor-pointer"
            >
              <span className="grid grid-cols-2 gap-[3px]">
                <span className="w-[3.5px] h-[3.5px] rounded-[1px] bg-[#101010]" />
                <span className="w-[3.5px] h-[3.5px] rounded-[1px] bg-[#101010]" />
                <span className="w-[3.5px] h-[3.5px] rounded-[1px] bg-[#101010]" />
                <span className="w-[3.5px] h-[3.5px] rounded-[1px] bg-[#EAAE0F]" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Quick Navigation & Portfolio Index Drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-xs"
          onClick={() => setDrawerOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio navigation drawer"
        >
          <div
            className="w-full max-w-md bg-[#101010] text-white h-full p-7 sm:p-9 flex flex-col justify-between shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-white/60">
                    <span className="w-3.5 h-[1.5px] bg-[#EAAE0F]" />
                    <span>Navigation Index</span>
                  </div>
                  <p className="font-serif text-xl font-bold mt-1">
                    {PORTFOLIO_DATA.personal.fullName}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close navigation drawer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-7 space-y-1.5">
                {NAV_ITEMS.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? 'bg-white/10 text-white'
                          : 'text-white/75 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-3.5">
                        <span className="font-condensed text-xs tracking-wider text-[#EAAE0F] w-5">
                          0{idx + 1}
                        </span>
                        <Icon className="w-4 h-4 text-[#EAAE0F]" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-white/40" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs text-white/65">
                <MapPin className="w-3.5 h-3.5 text-[#EAAE0F]" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
              <a
                href={PORTFOLIO_DATA.personal.resumePath}
                download={PORTFOLIO_DATA.personal.resumeFileName}
                className="w-full inline-flex items-center justify-between rounded-full bg-gradient-to-r from-[#F5BD1E] to-[#E7A609] p-1.5 pr-4 text-[#101010] font-bold text-xs tracking-[0.12em] uppercase hover:brightness-105 transition"
              >
                <span className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#101010] text-[#EAAE0F] flex items-center justify-center">
                    <Download className="w-3.5 h-3.5" />
                  </span>
                  Download Resume
                </span>
                <span className="rounded-full bg-[#101010]/15 px-2 py-0.5 text-[10px]">
                  PDF
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
