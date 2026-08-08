import React from 'react';
import { Modal } from '../ui/Modal';
import { ProjectItem } from '../../data/projectsData';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { CheckCircle2, Cpu, AlertTriangle, Lightbulb, Layers, Award } from 'lucide-react';

interface ProjectCaseStudyModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`${project.name} Case Study`}>
      <div className="space-y-8 font-sans">
        
        {/* Header Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#00F0FF]/15 via-blue-900/10 to-[#0B0C10] border border-[#00F0FF]/30 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40">
              {project.category}
            </span>
            <span className="text-xs font-mono text-gray-400">Production-Grade Case Study</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.name} — <span className="text-gray-300 font-normal">{project.tagline}</span>
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed">
            {project.description}
          </p>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-[#00F0FF]/20">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#050505]/80 border border-white/10">
                <div className="text-lg font-bold font-mono text-[#00F0FF]">{m.value}</div>
                <div className="text-[11px] font-mono text-gray-400">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem */}
          <div className="p-6 rounded-2xl bg-[#0B0C10] border border-rose-500/30 space-y-3">
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>Engineering Challenge / Problem</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-6 rounded-2xl bg-[#0B0C10] border border-emerald-500/30 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>Architectural Solution</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Interactive Architecture Diagram (if available) */}
        {project.architecture && project.architecture.length > 0 && (
          <ArchitectureDiagram projectName={project.name} nodes={project.architecture} />
        )}

        {/* Key Engineering Decisions */}
        <div className="space-y-4">
          <h4 className="text-sm font-mono font-bold text-[#00F0FF] uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Key Technical & Engineering Decisions</span>
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {project.engineeringDecisions.map((decision, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#12141C] border border-[#1F2430] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#00F0FF]/10 text-[#00F0FF] font-mono text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <span className="text-sm text-gray-300 leading-relaxed">{decision}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Measurable Results */}
        <div className="space-y-4">
          <h4 className="text-sm font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>Verified Results & Production Impact</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.results.map((result, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0B0C10] border border-emerald-500/20 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <p className="text-xs text-gray-300 leading-relaxed">{result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-[#1F2430]">
          <span className="text-xs font-mono text-gray-400 block mb-2">Technologies Used:</span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-gray-200">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </Modal>
  );
};
