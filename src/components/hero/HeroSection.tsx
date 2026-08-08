import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, ShieldCheck, Zap, Code2 } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';
import { HeroGlassCard } from './HeroGlassCard';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const HeroSection: React.FC = () => {
  const reducedMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden cyber-grid">
      {/* Soft Ambient Floating Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00F0FF]/15 via-purple-600/10 to-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Status Pill */}
            <motion.div
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0B0C10] border border-[#00F0FF]/30 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
              <span className="text-xs font-mono text-[#00F0FF] tracking-wide uppercase font-semibold">
                {RESUME_DATA.subtext}
              </span>
            </motion.div>

            {/* Main Greeting & Large Headline */}
            <motion.div
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-xl sm:text-2xl font-mono text-gray-400 font-medium">
                Hi, I'm <span className="text-white font-bold">{RESUME_DATA.name}</span>.
              </h1>
              
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Full-Stack Developer <br />
                <span className="bg-gradient-to-r from-white via-[#00F0FF] to-blue-400 bg-clip-text text-transparent">
                  & AI/ML Engineer.
                </span>
              </h2>
            </motion.div>

            {/* Streamlined Story Pitch */}
            <motion.p
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-gray-300 max-w-2xl font-sans leading-relaxed"
            >
              I build production-grade web applications and intelligent digital products by combining modern full-stack engineering with AI/ML.
            </motion.p>

            {/* Proof Badges Row */}
            <motion.div
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-300"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B0C10] border border-[#1F2430]">
                <Zap className="w-4 h-4 text-[#00F0FF]" />
                <span>1,000+ Active Users</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B0C10] border border-[#1F2430]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>500+ Daily Requests</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B0C10] border border-[#1F2430]">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span>9.0 / 10 CGPA</span>
              </div>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-7 py-4 rounded-xl font-bold text-sm bg-[#00F0FF] text-[#050505] shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] transition-all duration-300 flex items-center gap-2.5"
                data-cursor-text="Projects"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-7 py-4 rounded-xl font-semibold text-sm bg-[#0B0C10] text-gray-200 border border-[#1F2430] hover:border-[#00F0FF]/50 hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
                data-cursor-text="Connect"
              >
                <Mail className="w-4 h-4 text-[#00F0FF]" />
                <span>Let's Connect</span>
              </button>

              <a
                href={RESUME_DATA.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 rounded-xl font-semibold text-sm bg-[#0B0C10] text-[#00F0FF] border border-[#00F0FF]/30 hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 transition-all duration-300 flex items-center gap-2"
                data-cursor-text="Resume"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Floating Glass Card */}
          <div className="lg:col-span-5 relative">
            <HeroGlassCard />
          </div>

        </div>
      </div>
    </section>
  );
};
