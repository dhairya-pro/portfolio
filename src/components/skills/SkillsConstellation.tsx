import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Check, Info } from 'lucide-react';
import { SKILL_CATEGORIES, SKILLS, SkillItem } from '../../data/skillsData';

export const SkillsConstellation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(SKILLS[0]);

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-32 relative border-t border-[#1F2430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technology Stack Constellation
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
            Categorized technical stack backed by real production application implementations. Zero arbitrary percentage bars.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#1F2430] pb-4">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
              selectedCategory === 'All'
                ? 'bg-[#00F0FF] text-[#050505] shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                : 'bg-[#0B0C10] text-gray-400 border border-[#1F2430] hover:text-white'
            }`}
            data-cursor-text="Filter"
          >
            All Stack ({SKILLS.length})
          </button>

          {SKILL_CATEGORIES.map((cat) => {
            const count = SKILLS.filter((s) => s.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#00F0FF] text-[#050505] shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'bg-[#0B0C10] text-gray-400 border border-[#1F2430] hover:text-white'
                }`}
                data-cursor-text="Filter"
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Constellation Grid & Detail Popover */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Grid of Interactive Skill Nodes */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {filteredSkills.map((skill) => {
              const isSelected = activeSkill?.name === skill.name;

              return (
                <button
                  key={skill.name}
                  onClick={() => setActiveSkill(skill)}
                  onMouseEnter={() => setActiveSkill(skill)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 relative group flex flex-col justify-between h-24 ${
                    isSelected
                      ? 'bg-[#12141C] border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.25)] scale-[1.02]'
                      : 'bg-[#0B0C10] border-[#1F2430] hover:border-gray-500 hover:bg-[#12141C]/50'
                  }`}
                  data-cursor-text="Inspect"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gray-400 uppercase">
                      {skill.category}
                    </span>
                    {skill.featured && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" title="Featured Core Tech" />
                    )}
                  </div>

                  <div className="text-sm font-mono font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                    {skill.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Skill Detail Card */}
          <div className="lg:col-span-4 sticky top-28">
            {activeSkill ? (
              <div className="p-6 rounded-2xl bg-[#0B0C10] border border-[#00F0FF]/40 shadow-[0_0_30px_rgba(0,240,255,0.1)] space-y-4">
                <div className="flex items-center justify-between border-b border-[#1F2430] pb-3">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 uppercase font-bold">
                    {activeSkill.category}
                  </span>
                  <span className="text-[11px] font-mono text-gray-500 flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" /> Verified Tech
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white font-mono">
                  {activeSkill.name}
                </h3>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-gray-400 block font-semibold uppercase tracking-wider">
                    Application in Dhairya's Work:
                  </span>
                  <p className="text-sm text-gray-300 leading-relaxed font-sans">
                    {activeSkill.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1F2430] text-xs font-mono text-emerald-400 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Integrated in Production / Internship Apps</span>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-[#0B0C10] border border-[#1F2430] text-center text-gray-500 text-sm font-mono">
                Hover or click any technology node to view project context.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
