import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Card } from './ui/Card';

export const PortfolioSlider: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div id="portfolio" className="py-8 overflow-hidden">
      <div className="max-w-2xl mx-auto px-5 mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Selected Work</h2>
        <span className="text-xs font-medium text-vamela-green uppercase tracking-wider">Swipe &rarr;</span>
      </div>
      
      {/* Draggable Area */}
      <motion.div 
        ref={carousel} 
        className="cursor-grab active:cursor-grabbing pl-5"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width - 20 }}
          className="flex gap-4 pr-5"
        >
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              className="relative shrink-0 w-[80vw] md:w-[350px] h-[260px]"
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full pointer-events-none">
                <Card className="h-full p-0 overflow-hidden group border border-[#222]" noGlass>
                  {/* Image Background */}
                  <div className="absolute inset-0">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                     <div className="bg-[#0F0F0F]/80 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-lg">
                        <div className="text-[10px] font-bold text-vamela-green mb-0.5 uppercase tracking-wider">{project.category}</div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                     </div>
                  </div>
                </Card>
              </a>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-30" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};