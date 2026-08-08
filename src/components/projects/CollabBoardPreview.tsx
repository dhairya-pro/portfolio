import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Wifi, RefreshCw, Shield, Layers, MousePointer2 } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const CollabBoardPreview: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Fake cursor bots state
  const [cursors, setCursors] = useState([
    { id: 1, name: 'Dhairya (Owner)', role: 'Owner', color: '#00F0FF', x: 80, y: 120, targetX: 200, targetY: 150 },
    { id: 2, name: 'Client_A (Editor)', role: 'Editor', color: '#10B981', x: 280, y: 220, targetX: 180, targetY: 80 },
    { id: 3, name: 'Reviewer (Viewer)', role: 'Viewer', color: '#8B5CF6', x: 420, y: 160, targetX: 350, targetY: 240 }
  ]);

  const [syncedStrokes, setSyncedStrokes] = useState<number>(142);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setCursors((prev) =>
        prev.map((c) => {
          const dx = (Math.random() - 0.5) * 120;
          const dy = (Math.random() - 0.5) * 100;
          return {
            ...c,
            x: Math.max(40, Math.min(460, c.x + dx)),
            y: Math.max(40, Math.min(260, c.y + dy))
          };
        })
      );
      setSyncedStrokes((s) => s + 1);
    }, 1800);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  // Draw background canvas lines
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw canvas grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    const gridSize = 20;
    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Draw vector shapes
    ctx.strokeStyle = '#00F0FF';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    // Draw smooth bezier vector line representing collaborative whiteboard work
    ctx.beginPath();
    ctx.moveTo(60, 140);
    ctx.bezierCurveTo(120, 60, 240, 220, 320, 120);
    ctx.stroke();

    ctx.strokeStyle = '#10B981';
    ctx.beginPath();
    ctx.arc(360, 180, 45, 0, Math.PI * 2);
    ctx.stroke();

  }, [cursors]);

  return (
    <div className="rounded-2xl bg-[#090A0E] border border-[#1F2430] p-4 sm:p-5 space-y-4 shadow-xl relative overflow-hidden">
      
      {/* Real-time Multiplayer Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1F2430] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-emerald-400">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-bold">10+ Users Connected</span>
        </div>

        <div className="flex items-center gap-3 text-gray-400">
          <span className="flex items-center gap-1.5 text-[#00F0FF]">
            <Wifi className="w-3.5 h-3.5" />
            Redis Pub/Sub Sync
          </span>
          <span className="flex items-center gap-1.5 text-purple-400 hidden sm:flex">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            Strokes: {syncedStrokes}
          </span>
        </div>
      </div>

      {/* Interactive Miniature Canvas Area */}
      <div className="relative h-64 sm:h-72 w-full rounded-xl bg-[#050505] border border-white/10 overflow-hidden">
        <canvas
          ref={canvasRef}
          width={520}
          height={280}
          className="w-full h-full object-cover"
        />

        {/* Animated Fake User Cursors */}
        {cursors.map((cursor) => (
          <motion.div
            key={cursor.id}
            animate={{ x: cursor.x, y: cursor.y }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute top-0 left-0 pointer-events-none flex flex-col items-start z-10"
          >
            <MousePointer2
              className="w-4 h-4 -rotate-45"
              style={{ color: cursor.color, fill: cursor.color }}
            />
            <span
              className="mt-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-white shadow-lg flex items-center gap-1"
              style={{ backgroundColor: cursor.color }}
            >
              {cursor.name}
            </span>
          </motion.div>
        ))}

        {/* Real-time Role Badges */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2 py-0.5 rounded bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40 text-[10px] font-mono font-bold">
            Owner: Full Control
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-mono font-bold">
            Editor: Draw & Edit
          </span>
          <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 border border-purple-500/40 text-[10px] font-mono font-bold">
            Viewer: Read Only
          </span>
        </div>
      </div>

      {/* Architecture Highlights Pill */}
      <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-gray-400 pt-1">
        <span className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-[#00F0FF]" />
          JWT Refresh-Token Rotation
        </span>
        <span className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-emerald-400" />
          Conflict-Free Socket.io Delta Broadcast
        </span>
      </div>

    </div>
  );
};
