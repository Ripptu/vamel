import React, { useState } from 'react';
import { Section } from './ui/Section';
import { FAQS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQs = FAQS.filter(
    item => 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Section id="faq">
      <h2 className="text-2xl font-black tracking-tighter mb-6 text-white">Knowledge Hub</h2>
      
      {/* Search Input */}
      <div className="relative mb-8">
        <input 
          type="text" 
          placeholder="Suche nach Preisen, Ablauf..." 
          className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 pl-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-vamela-purple text-white font-medium placeholder-gray-500 backdrop-blur-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" strokeWidth="2"></circle><line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2"></line></svg>
      </div>

      <div className="space-y-3">
        {filteredFAQs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-sm hover:bg-white/10 transition-colors"
            >
              <button 
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div>
                  <span className="text-xs font-bold text-vamela-purple-glow uppercase tracking-wider mb-1 block">{faq.category}</span>
                  <h3 className="font-bold text-white pr-4">{faq.question}</h3>
                </div>
                <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-gray-400 leading-relaxed text-sm border-t border-white/5 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        {filteredFAQs.length === 0 && (
           <div className="text-center text-gray-600 py-8">Keine Ergebnisse gefunden.</div>
        )}
      </div>
    </Section>
  );
};