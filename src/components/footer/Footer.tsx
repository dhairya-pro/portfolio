import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#1F2430] py-12 text-xs font-mono text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-white text-base font-sans">{RESUME_DATA.name}</span>
              <span className="px-2 py-0.5 rounded bg-[#00F0FF]/10 text-[#00F0FF] text-[10px]">
                Portfolio 2026
              </span>
            </div>
            <p className="text-gray-400 font-sans text-xs">
              {RESUME_DATA.subtext} — {RESUME_DATA.location}
            </p>
          </div>

          {/* Center Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={RESUME_DATA.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-[#0B0C10] border border-[#1F2430] text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-colors"
              data-cursor-text="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={RESUME_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-[#0B0C10] border border-[#1F2430] text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-colors"
              data-cursor-text="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${RESUME_DATA.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-[#0B0C10] border border-[#1F2430] text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-colors"
              data-cursor-text="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B0C10] border border-[#1F2430] text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-colors"
            data-cursor-text="Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00F0FF]" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-[#1F2430]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <div>
            © 2026 Dhairya Shah. All rights reserved. Strictly authentic resume metrics.
          </div>
          <div className="flex items-center gap-1">
            Engineered with React, TypeScript & Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
};
