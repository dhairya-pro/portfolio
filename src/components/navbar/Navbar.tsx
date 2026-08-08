import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'ai-engine', label: 'AI Architecture' },
    { id: 'skills', label: 'Skills' },
    { id: 'terminal', label: 'Terminal' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#050505]/80 backdrop-blur-xl border-b border-[#1F2430]/80 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            data-cursor-text="Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0B0C10] border border-[#00F0FF]/30 flex items-center justify-center transition-all duration-300 group-hover:border-[#00F0FF] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <span className="font-mono font-bold text-[#00F0FF] text-base tracking-tighter">DS</span>
            </div>
            <div>
              <span className="font-bold text-white tracking-tight group-hover:text-[#00F0FF] transition-colors block text-sm sm:text-base">
                Dhairya Shah
              </span>
              <span className="text-[10px] font-mono text-[#A1A1AA] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Roles
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-[#0B0C10]/80 border border-[#1F2430] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#00F0FF]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  data-cursor-text="Go"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Action Resume Link */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={RESUME_DATA.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0B0C10] text-[#00F0FF] border border-[#00F0FF]/40 hover:bg-[#00F0FF]/10 hover:border-[#00F0FF] hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all duration-200"
              data-cursor-text="Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#0B0C10] border border-[#1F2430] text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#00F0FF]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-[#050505]/95 backdrop-blur-2xl border-b border-[#1F2430] lg:hidden px-6 py-6 space-y-4 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.id
                      ? 'bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30'
                      : 'bg-[#0B0C10] text-gray-300 border border-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#1F2430] flex flex-col gap-3">
              <a
                href={RESUME_DATA.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-[#00F0FF] text-[#050505] hover:bg-[#00F0FF]/90 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                <Download className="w-4 h-4" />
                <span>View / Download Resume (Google Drive)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
