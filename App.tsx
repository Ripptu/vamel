import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ExperienceGrid } from './components/ExperienceGrid';
import { About } from './components/About';
import { PortfolioSlider } from './components/PortfolioSlider';
import { Services } from './components/Services';
import { FAQ } from './components/FAQ';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

const BackgroundNebula = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-black pointer-events-none">
    {/* Dark Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
    
    {/* Green Nebula Clouds */}
    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-vamela-green/20 rounded-full blur-[120px] animate-nebula mix-blend-screen" />
    <div className="absolute top-[40%] right-[-20%] w-[500px] h-[500px] bg-vamela-green/10 rounded-full blur-[100px] animate-nebula" style={{ animationDelay: '2s' }} />
    <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#003311] rounded-full blur-[130px] animate-nebula" style={{ animationDelay: '4s' }} />
    
    {/* Subtle Grid Pattern Overlay for Tech Feel */}
    <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ 
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
        }} 
    />
  </div>
);

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Force scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white font-sans selection:bg-vamela-green selection:text-black relative overflow-x-hidden">
      <BackgroundNebula />
      
      {/* Reduced padding top */}
      <Header onOpenContact={() => setIsContactOpen(true)} />
      
      {/* Reduced space-y from 10 to 6 to tighten layout */}
      <main className="space-y-6 pb-48">
        <ExperienceGrid />
        <About />
        <PortfolioSlider />
        <Services />
        <FAQ />
        <Footer onOpenContact={() => setIsContactOpen(true)} />
      </main>
      
      <BottomNav />
      {/* The Bottom Sheet */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} setOpen={setIsContactOpen} />
    </div>
  );
}

export default App;