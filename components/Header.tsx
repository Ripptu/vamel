import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  return (
    <header className="px-5 pt-8 pb-2 max-w-2xl mx-auto flex flex-col items-start text-left relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Apple-like easing
      >
        {/* Top Icon Row */}
        <div className="flex justify-between items-center w-full mb-8">
             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-md border border-white/5">
                <span className="text-xl">👋</span>
             </div>
             <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                 <div className="w-2 h-2 rounded-full bg-vamela-green animate-pulse shadow-[0_0_10px_#00DC82]"></div>
                 <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">Online</span>
             </div>
        </div>
        
        {/* Updated Headline with Serif Font */}
        <h1 className="text-4xl md:text-5xl font-serif italic tracking-tight mb-2 text-white/90">
          Deine eigene Website.
        </h1>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-tight">
          <span className="italic text-vamela-green drop-shadow-[0_0_15px_rgba(0,220,130,0.4)]">Starte jetzt.</span>
        </h2>
      </motion.div>
    </header>
  );
};