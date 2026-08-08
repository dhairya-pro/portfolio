import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Wifi, ShieldCheck, CheckCircle2, Play, Activity } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const LiveWorkspace: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<'collab' | 'ai' | 'api'>('collab');
  const [ping, setPing] = useState(24);
  const [reqCount, setReqCount] = useState(512);

  // Live simulation ticks
  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setPing(Math.floor(18 + Math.random() * 14)); // 18-32ms
      setReqCount((prev) => prev + (Math.random() > 0.6 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const snippets = {
    collab: `// CollabBoard Redis Pub/Sub WebSocket Sync
import { Server } from 'socket.io';
import { Redis } from 'ioredis';

const pub = new Redis(process.env.REDIS_URL);
const sub = pub.duplicate();

sub.subscribe('WHITEBOARD_CANVAS_DELTA');
sub.on('message', (channel, message) => {
  const { boardId, strokeData, userId, role } = JSON.parse(message);
  if (role === 'VIEWER') return; // Strict RBAC
  
  // Broadcast conflict-free state to 10+ concurrent users
  io.to(boardId).emit('canvas:remote_stroke', strokeData);
});`,

    ai: `// HealthBridge AI Symptom Triage Engine
import { OpenAI } from 'openai';

export async function processTriageStream(userSymptoms: string) {
  const openai = new OpenAI();
  
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
      { role: "system", content: "Clinical triage assistant. Provide accessible guidance." },
      { role: "user", content: userSymptoms }
    ],
    temperature: 0.2,
    stream: true,
  });

  return response; // Streamed to doctor-patient session (<100ms latency)
}`,

    api: `// Technoviewer REST API Auth & Integrity
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const verifyJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Token expired' });
    req.user = decoded;
    next(); // Serving 500+ daily requests securely
  });
};`
  };

  return (
    <div className="w-full rounded-2xl bg-[#0B0C10] border border-[#1F2430] shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden">
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#12141C] border-b border-[#1F2430]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-gray-400 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" />
            dhairya-dev-workspace.ts
          </span>
        </div>

        {/* Real-time Status Badges */}
        <div className="flex items-center gap-3 text-[11px] font-mono">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>SOCKET LIVE: {ping}ms</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[#00F0FF]">
            <Activity className="w-3 h-3" />
            <span>REQ/DAY: 500+</span>
          </div>
        </div>
      </div>

      {/* Workspace Tabs */}
      <div className="flex items-center border-b border-[#1F2430] bg-[#090A0E] px-2 pt-2 gap-1 overflow-x-auto custom-scrollbar">
        <button
          onClick={() => setActiveTab('collab')}
          className={`flex items-center gap-2 px-3 py-2 text-xs font-mono rounded-t-lg transition-all border-t border-x ${
            activeTab === 'collab'
              ? 'bg-[#0B0C10] text-[#00F0FF] border-[#00F0FF]/40 border-b-transparent font-bold'
              : 'text-gray-400 border-transparent hover:text-gray-200 hover:bg-white/5'
          }`}
        >
          <Wifi className="w-3.5 h-3.5" />
          <span>CollabBoard.ts</span>
        </button>

        <button
          onClick={() => setActiveTab('ai')}
          className={`flex items-center gap-2 px-3 py-2 text-xs font-mono rounded-t-lg transition-all border-t border-x ${
            activeTab === 'ai'
              ? 'bg-[#0B0C10] text-[#00F0FF] border-[#00F0FF]/40 border-b-transparent font-bold'
              : 'text-gray-400 border-transparent hover:text-gray-200 hover:bg-white/5'
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>HealthBridgeAI.ts</span>
        </button>

        <button
          onClick={() => setActiveTab('api')}
          className={`flex items-center gap-2 px-3 py-2 text-xs font-mono rounded-t-lg transition-all border-t border-x ${
            activeTab === 'api'
              ? 'bg-[#0B0C10] text-[#00F0FF] border-[#00F0FF]/40 border-b-transparent font-bold'
              : 'text-gray-400 border-transparent hover:text-gray-200 hover:bg-white/5'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>TechnoviewerAuth.ts</span>
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 font-mono text-xs text-gray-300 leading-relaxed overflow-x-auto bg-[#07080B]">
        <pre className="text-gray-300">
          <code>
            {snippets[activeTab].split('\n').map((line, idx) => (
              <div key={idx} className="table-row">
                <span className="table-cell pr-4 text-gray-600 select-none text-right w-8">{idx + 1}</span>
                <span className="table-cell">
                  {line.startsWith('//') ? (
                    <span className="text-emerald-400/90 italic">{line}</span>
                  ) : line.includes('import') || line.includes('export') || line.includes('async') || line.includes('const') ? (
                    <span className="text-[#00F0FF] font-semibold">{line}</span>
                  ) : line.includes('process.env') || line.includes('return') ? (
                    <span className="text-purple-400">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Node Status Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-[#090A0E] border-t border-[#1F2430] text-[11px] font-mono text-gray-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            MongoDB Connected
          </span>
          <span className="flex items-center gap-1.5 text-[#00F0FF]">
            <Database className="w-3.5 h-3.5" />
            Redis Pub/Sub Active
          </span>
        </div>

        <div className="text-gray-500">
          MERN + AI/ML Pipeline • Bharuch, IN
        </div>
      </div>
    </div>
  );
};
