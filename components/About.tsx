import React from 'react';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { CHRISTIAN_IMAGES } from '../constants';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <Section id="about" className="!py-0 !pb-0">
      {/* Reduced bottom padding (pb-3) to remove empty space below text */}
      <Card className="p-5 pb-4 bg-gradient-to-b from-[#121212] to-black border-white/5">
        
        {/* Dual Image Grid - Compact */}
        <div className="grid grid-cols-2 gap-3 mb-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
            >
                <img 
                  src={CHRISTIAN_IMAGES.img1} 
                  alt="Christian Vamela" 
                  className="w-full h-full object-cover"
                />
            </motion.div>
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 mt-6"
            >
                <img 
                  src={CHRISTIAN_IMAGES.img2} 
                  alt="Christian Action" 
                  className="w-full h-full object-cover"
                />
            </motion.div>
        </div>
        
        {/* Text container without extra bottom margin */}
        <div className="mt-1">
            <h3 className="text-xl font-black mb-2 tracking-tight text-white uppercase">
              Hi, ich bin Christian.
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
                Vergiss steife Agenturen und Buzzwords. Ich bin dein kreativer Partner auf Augenhöhe. 
                Ob Design, Code oder einfach nur eine gute Idee – ich helfe dir, dein Ding groß zu machen. 
                Ehrlich, direkt und mit Bock auf richtig gute Ergebnisse.
            </p>
        </div>
      </Card>
    </Section>
  );
};