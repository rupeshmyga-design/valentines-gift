
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { SecretNote } from './components/SecretNote';
import { FavoriteMemories } from './components/FavoriteMemories';
import { SoundtrackSection } from './components/SoundtrackSection';
import { ReasonsILoveYou } from './components/ReasonsILoveYou';
import { FloatingHearts } from './components/FloatingHearts';

const App: React.FC = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleYes = () => {
    setHasAccepted(true);
    // Add a slight delay for the celebration animation before showing sections
    setTimeout(() => {
      setShowFullContent(true);
      window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }, 1500);
  };

  const SimpleFloralDivider = () => (
    <div className="flex justify-center items-center py-20 gap-6 opacity-30 select-none">
      <span className="text-3xl">🪷</span>
      <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
      <span className="text-3xl">🌸</span>
      <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
      <span className="text-3xl">🌹</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-purple-50 selection:bg-purple-200 overflow-x-hidden relative pb-20">
      <FloatingHearts />
      
      <main className="max-w-4xl mx-auto px-4 py-8 relative z-10">
        <Hero onYes={handleYes} isAccepted={hasAccepted} />

        {showFullContent && (
          <div className="space-y-24 mt-12 animate-in fade-in slide-in-from-bottom duration-1000">
            <SimpleFloralDivider />
            <SecretNote />
            <SimpleFloralDivider />
            <FavoriteMemories />
            <SimpleFloralDivider />
            <ReasonsILoveYou />
            <SimpleFloralDivider />
            <SoundtrackSection />
            
            <footer className="text-center py-20 mt-32">
              <div className="mb-10 flex justify-center gap-6">
                <span className="text-3xl animate-bounce" style={{ animationDelay: '0s' }}>🌸</span>
                <span className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>🌹</span>
                <span className="text-3xl animate-bounce" style={{ animationDelay: '0.4s' }}>🪷</span>
              </div>
              <h2 className="font-romantic text-5xl md:text-6xl text-purple-600 mb-4 drop-shadow-sm">Forever & Always yours.</h2>
              <p className="text-purple-300 text-xs tracking-[0.4em] uppercase font-black">Crafted with endless love</p>
            </footer>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
