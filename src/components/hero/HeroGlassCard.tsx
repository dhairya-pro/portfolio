import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, ShieldCheck, Database, Wifi, Activity, Sparkles, CheckCircle2, Code2 } from 'lucide-react';

export const HeroGlassCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Glow aura behind card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#00F0FF]/30 via-purple-600/20 to-blue-600/30 rounded-3xl blur-2xl opacity-70 animate-pulse-slow" />

      {/* Main Floating Glass Container */}
      <div className="relative rounded-3xl bg-[#090A0E]/80 border border-[#00F0FF]/30 backdrop-blur-2xl p-6 sm:p-8 space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/40 flex items-center justify-center text-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono">Dhairya Shah</h3>
              <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                MERN Developer Intern @ Technoviewer
              </span>
            </div>
          </div>

          <div className="px-2.5 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-[10px] font-mono font-bold">
            9.0 / 10 CGPA
          </div>
        </div>

        {/* Live Stack Nodes Row */}
        <div className="space-y-3">
          <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block font-semibold">
            Core Production Stack:
          </span>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00F0FF]/40 transition-all flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[#00F0FF]" />
              <div>
                <div className="text-xs font-bold text-white font-mono">React.js</div>
                <div className="text-[10px] text-gray-400">Frontend UX</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-all flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <div>
                <div className="text-xs font-bold text-white font-mono">Node.js</div>
                <div className="text-[10px] text-gray-400">RESTful APIs</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition-all flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              <div>
                <div className="text-xs font-bold text-white font-mono">Python / AI</div>
                <div className="text-[10px] text-gray-400">TensorFlow & OpenAI</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <div>
                <div className="text-xs font-bold text-white font-mono">MongoDB</div>
                <div className="text-[10px] text-gray-400">Data Integrity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Concurrency & Latency Highlights */}
        <div className="p-4 rounded-2xl bg-[#050505]/90 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-gray-400 flex items-center gap-1.5">
              <Wifi className="w-3.5 h-3.5 text-[#00F0FF]" />
              WebSocket Latency:
            </span>
            <span className="text-emerald-400 font-bold">&lt;100ms Verified</span>
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-gray-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-purple-400" />
              Internship Traffic:
            </span>
            <span className="text-[#00F0FF] font-bold">1,000+ Active Users</span>
          </div>
        </div>

        {/* Bottom Verification Footer */}
        <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pt-1">
          <span className="flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            95+ Lighthouse Score
          </span>
          <span>Bharuch, Gujarat, IN</span>
        </div>

      </div>
    </motion.div>
  );
};
