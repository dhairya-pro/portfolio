import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowUpRight, Sparkles, Layers, ShieldCheck, Activity } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../../data/projectsData';
import { CollabBoardPreview } from './CollabBoardPreview';
import { HealthBridgePreview } from './HealthBridgePreview';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const ProjectsSection: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 relative border-t border-[#1F2430]">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono">
            <Code2 className="w-3.5 h-3.5" />
            <span>Featured Digital Products</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production Software & Case Studies
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            Real-time multiplayer engines, AI healthcare platforms, and production client applications.
          </p>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-12">
          {PROJECTS.map((project) => {
            const isCollab = project.id === 'collabboard';
            const isHealth = project.id === 'healthbridge-ai';

            return (
              <motion.div
                key={project.id}
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={reducedMotion ? {} : { y: -6 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl bg-[#0B0C10] border border-[#1F2430] hover:border-[#00F0FF]/50 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 items-center">
                  
                  {/* Info Column */}
                  <div className="lg:col-span-6 space-y-5">
                    
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Featured Product
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-[#00F0FF] transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs font-mono text-[#00F0FF] font-medium">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-3 pt-1">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-[#12141C] border border-[#1F2430]">
                          <div className="text-base sm:text-lg font-bold font-mono text-[#00F0FF]">{m.value}</div>
                          <div className="text-[10px] font-mono text-gray-400">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-5 py-3 rounded-xl font-bold text-xs bg-[#00F0FF] text-[#050505] shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all flex items-center gap-2"
                        data-cursor-text="Study"
                      >
                        <span>View Full Case Study & Architecture</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                  {/* Interactive Preview Column */}
                  <div className="lg:col-span-6 relative">
                    {isCollab ? (
                      <CollabBoardPreview />
                    ) : isHealth ? (
                      <HealthBridgePreview />
                    ) : (
                      <div className="p-6 rounded-2xl bg-[#090A0E] border border-[#1F2430] space-y-4">
                        <div className="p-4 rounded-xl bg-[#12141C] border border-white/5 space-y-2">
                          <h4 className="text-sm font-bold text-white">Client Solution Impact</h4>
                          <p className="text-xs text-gray-300 leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-[#050505] border border-emerald-500/30 text-xs font-mono text-emerald-400 space-y-1">
                          <span className="font-bold block">Verified Deliverable:</span>
                          <span className="text-gray-300">{project.results[0]}</span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
