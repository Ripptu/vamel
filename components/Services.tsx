import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

const services = [
  {
    title: "YouTube & Social",
    description: "Thumbnails & Assets die konvertieren.",
    icon: "📺",
    highlight: "text-red-400"
  },
  {
    title: "Corporate Identity",
    description: "Logo, Print & kompletter Marken-Look.",
    icon: "✨",
    highlight: "text-purple-400"
  },
  {
    title: "Web-Entwicklung",
    description: "Schnell, responsive & verkaufsstark.",
    icon: "💻",
    highlight: "text-vamela-green"
  }
];

export const Services: React.FC = () => {
  return (
    <Section id="services" className="!pt-2">
      <div className="flex justify-between items-center mb-4 px-1">
        <h2 className="text-lg font-bold text-white tracking-tight">Was ich liefere</h2>
      </div>
      
      <div className="space-y-3">
        {services.map((service, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A] group cursor-pointer hover:bg-[#151515] transition-colors"
            >
                {/* Icon Container */}
                <div className="w-12 h-12 min-w-[48px] rounded-2xl bg-[#1A1A1A] border border-[#222] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {service.icon}
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                    <h3 className={`text-base font-bold text-white mb-0.5 group-hover:${service.highlight} transition-colors`}>
                        {service.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                        {service.description}
                    </p>
                </div>

                <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-gray-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </div>
            </motion.div>
        ))}
      </div>
    </Section>
  );
};