import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Sparkles, ArrowRight, Zap, Database, Terminal, Layers } from 'lucide-react';
import { SKILLS } from '../../data/skillsData';

export const AiNeuralSection: React.FC = () => {
  const aiSkills = SKILLS.filter((s) => s.category === 'AI / ML');
  const [activeStep, setActiveStep] = useState<number>(2);

  const pipelineSteps = [
    { step: '01', title: 'User Interface / React Payload', desc: 'Patient or user inputs raw symptom telemetry or request data.' },
    { step: '02', title: 'MERN API Orchestration', desc: 'Node.js Express backend validates JWT tokens, cleans parameters, and streams data.' },
    { step: '03', title: 'AI / ML Inference Engine', desc: 'Python, scikit-learn, TensorFlow & OpenAI LLM process intelligent triage or classification.' },
    { step: '04', title: 'Real-Time WebSocket Return', desc: 'Sub-100ms Socket.io delivery streams real-time guidance back to the client.' }
  ];

  return (
    <section id="ai-engine" className="py-20 md:py-32 relative bg-[#07080B]/80 border-t border-[#1F2430] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-center sm:text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Brain className="w-3.5 h-3.5" />
            <span>AI / ML & Intelligent Systems</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Where Engineering Meets AI
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Integrating machine learning, natural language processing, and deep learning pipelines into production full-stack web applications.
          </p>
        </div>

        {/* AI Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {aiSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl bg-[#0B0C10] border border-[#1F2430] hover:border-purple-500/50 transition-all group"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-bold">
                <Cpu className="w-4 h-4 text-purple-400 group-hover:rotate-180 transition-transform duration-500" />
                <span>{skill.name}</span>
              </div>
              <p className="text-[11px] text-gray-400 mt-2 font-sans line-clamp-2">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Neural Pipeline Flow */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0B0C10] border border-[#1F2430] space-y-8 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1F2430] pb-4">
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00F0FF]" />
              Full-Stack + AI Execution Pipeline
            </h3>
            <span className="text-xs font-mono text-gray-400">Click steps to visualize flow</span>
          </div>

          {/* Pipeline Interactive Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pipelineSteps.map((s, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border text-left transition-all relative ${
                    isActive
                      ? 'bg-[#12141C] border-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.2)]'
                      : 'bg-[#07080B] border-[#1F2430] hover:border-gray-600'
                  }`}
                  data-cursor-text="Inspect"
                >
                  <span className="text-xs font-mono text-[#00F0FF] font-bold block mb-1">
                    STEP {s.step}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2">{s.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                </button>
              );
            })}
          </div>

          {/* Connected Flow Output Indicator */}
          <div className="p-4 rounded-xl bg-[#050505] border border-purple-500/30 text-xs font-mono text-purple-300 flex flex-wrap items-center justify-between gap-3">
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#00F0FF]" />
              Active Visualization: <span className="text-white font-bold">{pipelineSteps[activeStep].title}</span>
            </span>
            <span className="text-emerald-400 font-bold">HealthBridge AI Verified</span>
          </div>
        </div>

      </div>
    </section>
  );
};
