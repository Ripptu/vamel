import React, { useState, useEffect } from 'react';
import { motion, useAnimation, PanInfo, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  setOpen: (isOpen: boolean) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, setOpen }) => {
  const [step, setStep] = useState(0);
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    name: '',
    budget: '',
    message: ''
  });

  useEffect(() => {
    if (isOpen) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isOpen, controls]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 150; // Drag threshold
    if (info.offset.y > threshold) {
      setOpen(false);
    } else if (info.offset.y < -50 && !isOpen) {
       setOpen(true);
    } else {
      if (isOpen) controls.start('visible');
      else controls.start('hidden');
    }
  };

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else handleSubmit();
  };

  const handleSubmit = () => {
    const text = `Hey Christian, ich bin ${formData.name}.%0A%0ABudget: ${formData.budget}%0A%0ANachricht: ${formData.message}`;
    window.open(`https://wa.me/4917624200179?text=${text}`, '_blank');
    setOpen(false);
    setTimeout(() => {
      setStep(0);
      setFormData({ name: '', budget: '', message: '' });
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md"
          />
        )}
      </AnimatePresence>

      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2} // Higher resistance when pulling up further
        onDragEnd={handleDragEnd}
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { y: "calc(100% - 80px)" },
          visible: { y: 0 }
        }}
        // The "Fluid" Physics Configuration
        transition={{ type: "spring", damping: 30, stiffness: 350, mass: 1 }}
        className="fixed bottom-0 left-0 right-0 z-[70] bg-[#0A0A0A] border-t border-white/10 text-white rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.8)] h-[85vh] md:h-[600px] w-full max-w-2xl mx-auto overflow-hidden flex flex-col ring-1 ring-white/5"
      >
        {/* Drag Handle Area */}
        <div 
            className="w-full pt-4 pb-2 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing relative z-20 shrink-0"
            onClick={() => !isOpen && setOpen(true)}
        >
          <div className="w-10 h-1.5 bg-gray-700/50 rounded-full mb-3 backdrop-blur-lg" />
          
          {!isOpen && (
             <motion.div 
                initial={{ opacity: 0, y: 5 }} 
                animate={{ opacity: 1, y: 0 }}
                className="text-center pb-2"
             >
                <p className="font-semibold text-lg text-white tracking-tight">Projekt starten</p>
                <p className="text-[10px] text-vamela-green uppercase tracking-widest font-bold mt-1">Swipe Up</p>
             </motion.div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 px-8 pb-8 overflow-y-auto no-scrollbar flex flex-col relative">
            <div className="flex gap-2 mb-8 mt-2">
                {[0, 1, 2].map(i => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-500 ${i <= step ? 'bg-vamela-green shadow-[0_0_10px_rgba(0,220,130,0.5)]' : 'bg-gray-800'}`} />
                ))}
            </div>

            <AnimatePresence mode="wait" custom={step}>
                {step === 0 && (
                <motion.div 
                    key="step1"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="flex flex-col h-full"
                >
                    <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center text-3xl mb-6 shadow-lg">
                        👋
                    </div>
                    <h3 className="text-3xl font-bold mb-2 tracking-tight">Let's start.</h3>
                    <p className="text-gray-400 mb-8 text-sm font-medium">Wie darf ich dich nennen?</p>
                    <input 
                        autoFocus
                        type="text" 
                        placeholder="Dein Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full text-xl font-medium bg-transparent border-b border-gray-700 py-3 focus:outline-none focus:border-vamela-green placeholder-gray-600 text-white transition-colors"
                        onKeyDown={(e) => e.key === 'Enter' && formData.name && handleNext()}
                    />
                </motion.div>
                )}

                {step === 1 && (
                <motion.div 
                    key="step2"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="flex flex-col h-full"
                >
                     <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center text-3xl mb-6 shadow-lg">
                        💰
                    </div>
                    <h3 className="text-3xl font-bold mb-2 tracking-tight">Budget?</h3>
                    <p className="text-gray-400 mb-8 text-sm font-medium">Grobe Einschätzung reicht.</p>
                    <div className="space-y-3">
                    {['Klein (< 500€)', 'Mittel (500€ - 1.500€)', 'Groß (> 1.500€)'].map((opt) => (
                        <button
                        key={opt}
                        onClick={() => {
                            setFormData({...formData, budget: opt});
                            setTimeout(() => handleNext(), 150);
                        }}
                        className={`w-full p-4 rounded-2xl text-left text-sm font-bold border transition-all duration-200 ${formData.budget === opt ? 'border-vamela-green bg-vamela-green/10 text-vamela-green shadow-[0_0_15px_rgba(0,220,130,0.1)]' : 'border-[#222] bg-[#111] hover:bg-[#1A1A1A] text-gray-400'}`}
                        >
                        {opt}
                        </button>
                    ))}
                    </div>
                </motion.div>
                )}

                {step === 2 && (
                <motion.div 
                    key="step3"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="flex flex-col h-full"
                >
                     <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center text-3xl mb-6 shadow-lg">
                        🚀
                    </div>
                    <h3 className="text-3xl font-bold mb-2 tracking-tight">Deine Vision?</h3>
                    <p className="text-gray-400 mb-8 text-sm font-medium">Worum geht es in dem Projekt?</p>
                    <textarea 
                        autoFocus
                        rows={4}
                        placeholder="Erzähl mir mehr..." 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full text-base font-normal bg-[#111] border border-[#222] rounded-2xl p-4 focus:outline-none focus:border-vamela-green resize-none placeholder-gray-600 text-white transition-colors"
                    />
                </motion.div>
                )}
            </AnimatePresence>

             <div className="mt-auto pt-6">
                <button 
                    onClick={handleNext}
                    disabled={step === 0 && !formData.name || step === 2 && !formData.message}
                    className="w-full bg-white text-black rounded-full py-4 font-bold text-lg shadow-lg hover:bg-gray-200 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 flex justify-center items-center gap-2"
                >
                {step === 2 ? 'Start Chat on WhatsApp' : 'Next'}
                </button>
             </div>
        </div>
      </motion.div>
    </>
  );
};