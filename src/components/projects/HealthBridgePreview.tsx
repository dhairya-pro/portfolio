import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, User, Zap, Award, Activity, MessageSquare, CheckCircle, ShieldAlert } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const HealthBridgePreview: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [selectedSymptom, setSelectedSymptom] = useState<string>('chest_tightness');

  const chatLogs = {
    chest_tightness: {
      user: "Patient: Experiencing mild chest pressure after workouts.",
      aiResponse: "HealthBridge AI Triage: Preliminary assessment indicates low-risk muscular strain, but immediate clinical evaluation is recommended. Session escalated to Doctor Queue.",
      latency: "84ms",
      score: "98/100 A11y"
    },
    migraine: {
      user: "Patient: Throbbing headache with light sensitivity.",
      aiResponse: "HealthBridge AI Triage: Symptoms correlate with acute migraine. Hydration & dark room rest advised while connecting with attending physician.",
      latency: "76ms",
      score: "97/100 A11y"
    }
  };

  const activeData = chatLogs[selectedSymptom as keyof typeof chatLogs];

  return (
    <div className="rounded-2xl bg-[#090A0E] border border-[#1F2430] p-4 sm:p-5 space-y-4 shadow-xl">
      
      {/* Top Header Metrics Row */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1F2430] pb-3 text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#00F0FF]/10 text-[#00F0FF] font-bold border border-[#00F0FF]/30">
            <Zap className="w-3.5 h-3.5" />
            Sub-100ms Latency ({activeData.latency})
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30">
            <Award className="w-3.5 h-3.5" />
            95+ Lighthouse Accessibility
          </span>
        </div>

        <div className="text-gray-400 flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-purple-400" />
          <span>200+ Beta Test Users</span>
        </div>
      </div>

      {/* Interactive Symptom Selector */}
      <div className="flex items-center gap-2 text-xs font-mono">
        <span className="text-gray-400">Simulate Triage Prompt:</span>
        <button
          onClick={() => setSelectedSymptom('chest_tightness')}
          className={`px-2.5 py-1 rounded-md transition-all ${
            selectedSymptom === 'chest_tightness'
              ? 'bg-[#00F0FF] text-[#050505] font-bold'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          Chest Pressure
        </button>
        <button
          onClick={() => setSelectedSymptom('migraine')}
          className={`px-2.5 py-1 rounded-md transition-all ${
            selectedSymptom === 'migraine'
              ? 'bg-[#00F0FF] text-[#050505] font-bold'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          Migraine Symptom
        </button>
      </div>

      {/* Futuristic Doctor-Patient Chat Bubble Interface */}
      <div className="h-64 sm:h-72 rounded-xl bg-[#050505] border border-white/10 p-4 space-y-3 overflow-y-auto custom-scrollbar font-sans text-xs">
        
        {/* User Patient Bubble */}
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-full bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
            <User className="w-4 h-4" />
          </div>
          <div className="p-3 rounded-2xl bg-[#12141C] border border-[#1F2430] text-gray-200 max-w-[85%]">
            {activeData.user}
          </div>
        </div>

        {/* OpenAI LLM Triage Response Bubble */}
        <motion.div
          key={selectedSymptom}
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-start gap-3"
        >
          <div className="w-7 h-7 rounded-full bg-[#00F0FF]/20 border border-[#00F0FF]/40 flex items-center justify-center text-[#00F0FF] shrink-0 mt-0.5 shadow-[0_0_10px_#00F0FF]">
            <Bot className="w-4 h-4" />
          </div>
          <div className="p-3 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] max-w-[85%] space-y-2">
            <p className="leading-relaxed font-medium">{activeData.aiResponse}</p>
            <div className="flex items-center gap-3 pt-1 text-[10px] font-mono text-gray-400 border-t border-[#00F0FF]/20">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle className="w-3 h-3" />
                Socket.io Streamed
              </span>
              <span>Latency: {activeData.latency}</span>
            </div>
          </div>
        </motion.div>

        {/* Doctor WebSocket Queue Live Status */}
        <div className="p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-purple-300 text-[11px] font-mono flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
            Real-Time Doctor Consultation Channel
          </span>
          <span className="text-emerald-400 font-bold">Sub-100ms Verified</span>
        </div>
      </div>

      {/* Accessible Figma UX Footnote */}
      <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pt-1">
        <span>Figma Designed Accessible Layout</span>
        <span className="text-[#00F0FF]">WCAG AAA Contrast Standard</span>
      </div>

    </div>
  );
};
