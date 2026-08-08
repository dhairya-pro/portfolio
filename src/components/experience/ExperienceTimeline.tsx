import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2, Building2 } from 'lucide-react';
import { EXPERIENCES } from '../../data/experienceData';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const ExperienceTimeline: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [expandedId, setExpandedId] = useState<string>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-20 md:py-32 relative bg-[#07080B]/50 border-t border-[#1F2430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional & Client Career</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work & Client Experience
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            Hands-on experience delivering production applications, RESTful APIs, and client digital platforms.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#1F2430] space-y-10">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            const isCurrent = exp.period.includes('Present');

            return (
              <div key={exp.id} className="relative group">
                
                {/* Connector Node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isCurrent
                      ? 'bg-[#00F0FF] border-[#00F0FF] shadow-[0_0_20px_#00F0FF]'
                      : 'bg-[#0B0C10] border-[#1F2430] group-hover:border-[#00F0FF]'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-[#050505]' : 'bg-[#00F0FF]'}`} />
                </div>

                {/* Main Card */}
                <motion.div
                  whileHover={reducedMotion ? {} : { y: -3 }}
                  className="rounded-2xl bg-[#0B0C10] border border-[#1F2430] hover:border-[#00F0FF]/40 transition-all duration-300 shadow-lg overflow-hidden"
                >
                  
                  {/* Clickable Card Header */}
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="w-full p-6 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#12141C]/40 hover:bg-[#12141C]/80 transition-colors focus:outline-none"
                    data-cursor-text="Details"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20 font-bold">
                          {exp.year}
                        </span>
                        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5" />
                          {exp.type}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase font-bold animate-pulse">
                            Active Internship
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.role} <span className="text-[#00F0FF]">@ {exp.company}</span>
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-gray-500" />
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-gray-500" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-2 rounded-xl bg-white/5 text-gray-300 group-hover:text-[#00F0FF] transition-colors">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Summary Bar */}
                  <div className="px-6 py-3 border-t border-[#1F2430] bg-[#07080B] text-xs text-gray-300 font-sans">
                    {exp.summary}
                  </div>

                  {/* Expandable Breakdown */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        animate={reducedMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
                        exit={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t border-[#1F2430] space-y-6 bg-[#0B0C10]"
                      >
                        <div className="space-y-3">
                          <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                            Key Responsibilities & Deliverables
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-300">
                            {exp.highlights.map((h, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Verified Metrics Row */}
                        <div className="pt-2 border-t border-[#1F2430]/60">
                          <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-3">
                            Verified Deliverable Metrics
                          </h4>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {exp.metrics.map((m, idx) => (
                              <div key={idx} className="p-3 rounded-xl bg-[#12141C] border border-[#1F2430]">
                                <div className="text-lg font-bold font-mono text-[#00F0FF]">{m.value}</div>
                                <div className="text-[11px] text-gray-400 font-mono">{m.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="pt-1">
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
