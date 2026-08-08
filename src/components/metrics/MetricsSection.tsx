import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap, TrendingUp, Users, Cpu, Award, BarChart3 } from 'lucide-react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export const MetricsSection: React.FC = () => {
  const metricsList = [
    { value: '95+', label: 'Lighthouse Accessibility Score', sub: 'HealthBridge AI Figma & React UX', icon: Award, highlight: true },
    { value: '<100ms', label: 'Real-Time Chat Latency', sub: 'HealthBridge AI WebSocket Stream', icon: Zap, highlight: true },
    { value: '35%', label: 'Page Load Time Improvement', sub: 'Auramed MongoDB Index Optimization', icon: TrendingUp, highlight: true },
    { value: '1,000+', label: 'Active Application Users', sub: 'Technoviewer Client Deployments', icon: Users, highlight: false },
    { value: '500+', label: 'Daily API Requests Handled', sub: 'Technoviewer RESTful JWT APIs', icon: Activity, highlight: false },
    { value: '200+', label: 'Beta Test Users Served', sub: 'HealthBridge AI Symptom Engine', icon: Cpu, highlight: false },
    { value: '300+', label: 'Monthly Website Visitors', sub: 'TanushBuildCon Live Client Platform', icon: BarChart3, highlight: false },
    { value: '10+', label: 'Concurrent Whiteboard Users', sub: 'CollabBoard Socket.io & Redis', icon: ShieldCheck, highlight: false },
    { value: '50+', label: 'Monthly Client Submissions', sub: 'TanushBuildCon Inquiry Pipeline', icon: Activity, highlight: false },
  ];

  return (
    <section id="metrics" className="py-20 md:py-32 relative bg-[#07080B]/60 border-t border-[#1F2430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Empirical Performance Benchmarks</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering That Measures Up
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            Real metrics extracted directly from Dhairya Shah's production code deployments and load testing.
          </p>
        </div>

        {/* Animated Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metricsList.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`p-6 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                  m.highlight
                    ? 'bg-gradient-to-br from-[#0B0C10] via-[#12141C] to-[#0B0C10] border-[#00F0FF]/40 shadow-[0_0_25px_rgba(0,240,255,0.12)]'
                    : 'bg-[#0B0C10] border-[#1F2430] hover:border-gray-600'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${m.highlight ? 'bg-[#00F0FF]/10 text-[#00F0FF]' : 'bg-white/5 text-gray-400'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {m.highlight && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00F0FF]/20 text-[#00F0FF] font-bold uppercase">
                      Top Benchmark
                    </span>
                  )}
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white group-hover:text-[#00F0FF] transition-colors tracking-tight">
                  <AnimatedCounter value={m.value} />
                </div>

                <div className="text-sm font-bold text-gray-200 mt-2">
                  {m.label}
                </div>

                <div className="text-xs font-mono text-gray-400 mt-1">
                  {m.sub}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
