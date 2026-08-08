import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Layers, Cpu, Sparkles } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const AboutSection: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden border-t border-[#1F2430]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Developer Identity & Philosophy</span>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              From interface <br />
              <span className="bg-gradient-to-r from-[#00F0FF] via-blue-400 to-purple-400 bg-clip-text text-transparent">
                to infrastructure.
              </span>
            </h2>

            <p className="text-base text-gray-300 font-sans leading-relaxed">
              I specialize in bridging front-end user experience with production-grade back-end architectures and machine learning capabilities.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0B0C10] border border-[#1F2430] hover:border-[#00F0FF]/40 transition-colors">
                <div className="p-2.5 rounded-xl bg-[#00F0FF]/10 text-[#00F0FF]">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Full-Stack MERN Engineering</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Building robust RESTful APIs with JWT authentication, MongoDB schema security, and optimized React interfaces.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0B0C10] border border-[#1F2430] hover:border-purple-400/40 transition-colors">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">AI & ML Capabilities</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Leveraging Python, scikit-learn, TensorFlow, spaCy, and OpenAI API for intelligent symptom triage and data modeling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Prominent Education Card */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Story Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B0C10] border border-[#1F2430] space-y-6 shadow-xl relative">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF]" />
                Engineering Approach
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                My work focuses on real-world client impact, high concurrency, and measurable performance. From engineering real-time collaborative whiteboards using Socket.io and Redis Pub/Sub to optimizing MongoDB compound indexes to reduce page load time by 35%, every decision is driven by security, accessibility, and speed.
              </p>

              {/* Verified Metrics Counter Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#1F2430]">
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#00F0FF] font-mono">
                    <AnimatedCounter value="3+" />
                  </div>
                  <div className="text-[11px] font-mono text-gray-400">Full-Stack Apps</div>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#00F0FF] font-mono">
                    <AnimatedCounter value="1,000+" />
                  </div>
                  <div className="text-[11px] font-mono text-gray-400">Active Users</div>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#00F0FF] font-mono">
                    <AnimatedCounter value="500+" />
                  </div>
                  <div className="text-[11px] font-mono text-gray-400">Daily Requests</div>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#00F0FF] font-mono">
                    <AnimatedCounter value="9.0" />
                  </div>
                  <div className="text-[11px] font-mono text-gray-400">/ 10 CGPA</div>
                </div>
              </div>
            </div>

            {/* Prominent Education Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0B0C10] via-[#12141C] to-[#0B0C10] border border-[#00F0FF]/40 shadow-[0_0_30px_rgba(0,240,255,0.1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2 flex-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 font-bold">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Qualification</span>
                </div>
                <h4 className="text-lg font-bold text-white">
                  {RESUME_DATA.education.degree}
                </h4>
                <p className="text-sm text-gray-300 font-medium">
                  {RESUME_DATA.education.institution} — {RESUME_DATA.education.location}
                </p>
                <p className="text-xs text-gray-400 font-mono">
                  {RESUME_DATA.education.period}
                </p>
              </div>

              {/* Prominent 9.0/10 CGPA Badge */}
              <div className="flex flex-col items-center justify-center p-4.5 rounded-2xl bg-[#050505] border border-[#00F0FF]/50 text-center min-w-[140px] shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <span className="text-2xl font-extrabold text-[#00F0FF] font-mono tracking-tight">
                  9.0 / 10
                </span>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-1">
                  Cumulative CGPA
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
