import React from 'react';
import { Section } from './ui/Section';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <Section id="kontakt" className="pb-40 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">
            Warte nicht <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">auf morgen.</span>
        </h2>
        <p className="text-gray-400 mb-8 font-medium max-w-xs mx-auto text-sm">
            Deine Idee ist bereit. Lass uns etwas starten, auf das wir beide stolz sind.
        </p>
        
        <button 
            onClick={onOpenContact} 
            className="group relative inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] overflow-hidden"
        >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current relative z-10"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span className="relative z-10">WhatsApp Starten</span>
        </button>

        <div className="mt-16 text-xs text-gray-600 font-medium">
            &copy; {new Date().getFullYear()} Vamela. All rights reserved.<br/>
            Impressum | Datenschutz
        </div>
    </Section>
  );
};