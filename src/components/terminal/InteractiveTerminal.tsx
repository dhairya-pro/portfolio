import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2, Sparkles } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';
import { EXPERIENCES } from '../../data/experienceData';
import { PROJECTS } from '../../data/projectsData';
import { SKILL_CATEGORIES, SKILLS } from '../../data/skillsData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'whoami',
      output: (
        <div className="space-y-1 text-gray-300">
          <p className="text-[#00F0FF] font-bold">Dhairya Shah — Full-Stack Developer & AI/ML Engineer</p>
          <p>Location: {RESUME_DATA.location} | CGPA: {RESUME_DATA.education.cgpa}</p>
          <p className="text-gray-400 italic">"I build production-grade web applications and intelligent digital products."</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let outputNode: React.ReactNode;

    switch (cleanCmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-gray-300">
            <p className="text-[#00F0FF] font-bold">Available Commands:</p>
            <p><span className="text-[#00F0FF]">whoami</span> • <span className="text-[#00F0FF]">skills</span> • <span className="text-[#00F0FF]">projects</span> • <span className="text-[#00F0FF]">experience</span> • <span className="text-[#00F0FF]">education</span> • <span className="text-[#00F0FF]">contact</span> • <span className="text-[#00F0FF]">clear</span></p>
          </div>
        );
        break;

      case 'whoami':
      case 'about':
        outputNode = (
          <div className="space-y-1 text-gray-300">
            <p className="text-[#00F0FF] font-bold">Dhairya Shah</p>
            <p>Role: {RESUME_DATA.role}</p>
            <p>Location: {RESUME_DATA.location}</p>
            <p className="text-emerald-400">Internship: MERN Stack Developer @ Technoviewer (1,000+ users, 500+ daily API requests)</p>
          </div>
        );
        break;

      case 'skills':
      case 'stack':
        outputNode = (
          <div className="space-y-1 text-gray-300">
            <p className="text-[#00F0FF] font-bold">Stack Overview:</p>
            {SKILL_CATEGORIES.map((cat) => (
              <p key={cat}><span className="text-purple-400 font-semibold">{cat}:</span> {SKILLS.filter((s) => s.category === cat).map((s) => s.name).join(', ')}</p>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-1 text-gray-300">
            <p className="text-[#00F0FF] font-bold">Featured Projects:</p>
            {PROJECTS.map((p) => (
              <p key={p.id}>• <span className="text-white font-bold">{p.name}</span>: {p.tagline}</p>
            ))}
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="space-y-1 text-gray-300">
            <p className="text-[#00F0FF] font-bold">Career Timeline:</p>
            {EXPERIENCES.map((e) => (
              <p key={e.id}>• <span className="text-white font-bold">{e.role}</span> @ {e.company} ({e.period})</p>
            ))}
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div className="space-y-1 text-gray-300">
            <p className="text-[#00F0FF] font-bold">{RESUME_DATA.education.institution}</p>
            <p>{RESUME_DATA.education.degree} | CGPA: <span className="text-emerald-400 font-bold">{RESUME_DATA.education.cgpa}</span></p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-gray-300">
            <p className="text-[#00F0FF] font-bold">Contact Details:</p>
            <p>Email: {RESUME_DATA.email} | Phone: {RESUME_DATA.phone}</p>
          </div>
        );
        break;

      default:
        outputNode = (
          <p className="text-rose-400">
            Unknown command: {cmdStr}. Type <button onClick={() => handleCommand('help')} className="text-[#00F0FF] underline font-bold">help</button>.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: outputNode }]);
    setInputVal('');
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  const quickCommands = ['whoami', 'skills', 'projects', 'experience', 'education', 'contact'];

  return (
    <section id="terminal" className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-[#090A0E] border border-[#1F2430] shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden font-mono text-xs sm:text-sm">
        
        {/* Terminal Titlebar */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#12141C] border-b border-[#1F2430]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs text-gray-400 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#00F0FF]" />
              dhairya@portfolio:~
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] text-gray-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-colors"
                data-cursor-text="Run"
              >
                ${cmd}
              </button>
            ))}
            <button
              onClick={() => handleCommand('clear')}
              className="p-1 rounded bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors ml-1"
              title="Clear terminal"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div className="p-4 sm:p-5 space-y-3 max-h-[300px] overflow-y-auto custom-scrollbar bg-[#050505]/95">
          <div className="text-gray-500 text-xs">
            Interactive developer terminal. Click command chips above or type a command below.
          </div>

          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[#00F0FF]">
                <span className="text-emerald-400">dhairya@dev:~$</span>
                <span className="font-bold text-white">{item.command}</span>
              </div>
              <div className="pl-3 border-l border-white/10">{item.output}</div>
            </div>
          ))}

          <form onSubmit={onSubmit} className="flex items-center gap-2 pt-1">
            <span className="text-emerald-400">dhairya@dev:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type whoami, skills, projects, experience..."
              className="flex-1 bg-transparent text-white outline-none placeholder-gray-600 font-mono text-xs sm:text-sm"
              aria-label="Terminal Command Input"
            />
            <button type="submit" className="text-gray-500 hover:text-[#00F0FF]">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

          <div ref={bottomRef} />
        </div>
      </div>
    </section>
  );
};
