import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { 
      type: 'spring', 
      stiffness: 180, 
      damping: 20, 
      mass: 1 
    } 
  }
};

export const ExperienceGrid: React.FC = () => {
  const items = [
    {
        title: "Design",
        subtitle: "Pixel-Perfect",
        icon: "🎨",
        color: "from-purple-500/20 to-blue-600/10",
        border: "group-hover:border-purple-500/50"
    },
    {
        title: "Code",
        subtitle: "High-Speed",
        icon: "⚡",
        color: "from-vamela-green/20 to-emerald-600/10",
        border: "group-hover:border-vamela-green/50"
    },
    {
        title: "Growth",
        subtitle: "Conversion",
        icon: "📈",
        color: "from-amber-500/20 to-orange-600/10",
        border: "group-hover:border-amber-500/50"
    },
    {
        title: "Brand",
        subtitle: "Identity",
        icon: "💎",
        color: "from-cyan-500/20 to-blue-600/10",
        border: "group-hover:border-cyan-500/50"
    }
  ];

  return (
    <Section id="experience" className="!py-0">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4"
      >
        {items.map((item, i) => (
            <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-br ${item.color} border border-[#222] rounded-[28px] p-6 flex flex-col justify-between aspect-square group cursor-pointer relative overflow-hidden backdrop-blur-sm shadow-lg ${item.border} transition-colors duration-500`}
            >
                {/* Subtle sheen effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center text-2xl mb-2 z-10 backdrop-blur-md shadow-inner">
                    {item.icon}
                </div>
                <div className="z-10">
                    <h3 className="text-white font-bold text-xl leading-tight mb-1 tracking-tight">{item.title}</h3>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wide opacity-80">{item.subtitle}</p>
                </div>
            </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};