import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, ArrowRight, Cpu, Database, Shield, Server, ArrowDown, Info } from 'lucide-react';
import { ArchitectureNode } from '../../data/projectsData';

interface ArchitectureDiagramProps {
  projectName: string;
  nodes: ArchitectureNode[];
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ projectName, nodes }) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(nodes[0]?.id || '');

  if (!nodes || nodes.length === 0) return null;

  const activeNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  return (
    <div className="rounded-2xl bg-[#090A0E] border border-[#1F2430] p-5 sm:p-6 space-y-6">
      
      {/* Title */}
      <div className="flex items-center justify-between border-b border-[#1F2430] pb-4">
        <div className="flex items-center gap-2">
          <Network className="w-5 h-5 text-[#00F0FF]" />
          <h3 className="text-base font-bold text-white font-mono">
            {projectName} System Architecture
          </h3>
        </div>
        <span className="text-xs font-mono text-gray-400">Click any node to inspect</span>
      </div>

      {/* Nodes Graph Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 relative">
        {nodes.map((node) => {
          const isSelected = selectedNodeId === node.id;

          const categoryColors = {
            Client: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
            Gateway: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
            Realtime: 'border-[#00F0FF]/40 text-[#00F0FF] bg-[#00F0FF]/10',
            AI: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
            Database: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
            Auth: 'border-rose-500/40 text-rose-400 bg-rose-500/10',
          };

          const colorClass = categoryColors[node.category] || 'border-gray-500/40 text-gray-300';

          return (
            <button
              key={node.id}
              onClick={() => setSelectedNodeId(node.id)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 relative group flex flex-col justify-between h-24 ${
                isSelected
                  ? 'bg-[#12141C] border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.2)] scale-[1.02]'
                  : 'bg-[#0B0C10] border-[#1F2430] hover:border-gray-600 hover:bg-[#12141C]/50'
              }`}
              data-cursor-text="Inspect"
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-bold ${colorClass}`}>
                  {node.category}
                </span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                )}
              </div>

              <div className="font-mono text-xs sm:text-sm font-bold text-white tracking-tight group-hover:text-[#00F0FF] transition-colors">
                {node.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Details Box */}
      <AnimatePresence mode="wait">
        {activeNode && (
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-5 rounded-xl bg-[#0F1118] border border-[#00F0FF]/30 space-y-2 relative"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF] font-bold">
              <Info className="w-4 h-4" />
              <span>Node Breakdown: {activeNode.name}</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              {activeNode.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
