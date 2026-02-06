
import React, { useState, useEffect } from 'react';

export const SecretNote: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the note is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <section className="flex flex-col items-center py-12 relative">
      <h2 className="text-3xl font-romantic text-purple-500 mb-12 flex items-center gap-4">
        <span className="text-xl">🪷</span>
        A Little Secret Note
        <span className="text-xl">🪷</span>
      </h2>

      {/* The Envelope - Trigger */}
      <div 
        className={`relative w-80 h-56 cursor-pointer transition-all duration-500 perspective-1000 ${isOpen ? 'opacity-0 scale-90' : 'hover:scale-105 active:scale-95'}`}
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute inset-0 bg-purple-300 rounded-[1.5rem] shadow-2xl overflow-hidden border-2 border-purple-400/20">
            {/* Top Flap (Closed) */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-purple-400 z-30" 
                 style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}>
                 <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/40 text-2xl">🌹</div>
            </div>
            
            {/* Envelope Pocket */}
            <div className="absolute inset-0 bg-purple-200 z-10" style={{ clipPath: 'polygon(0 40%, 50% 100%, 100% 40%, 100% 100%, 0 100%)' }} />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-purple-600 text-white rounded-full w-14 h-14 flex items-center justify-center animate-pulse shadow-xl border-4 border-white">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
        </div>
      </div>
      {!isOpen && (
        <p className="mt-8 text-purple-300 text-sm font-bold uppercase tracking-widest animate-pulse">Touch to reveal my heart</p>
      )}

      {/* Expanded Letter Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-500">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-purple-900/40 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
          
          {/* The Large Letter */}
          <div className="relative w-full max-w-2xl bg-[#fdfcf0] shadow-[0_30px_100px_rgba(0,0,0,0.3)] rounded-lg p-8 md:p-12 overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-700 max-h-[90vh] flex flex-col">
            
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper.png")' }} />
            
            {/* Red wax seal or decorative top */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400" />
            
            <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-purple-300 hover:text-purple-600 transition-colors z-50 p-2"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="relative z-10 flex-grow overflow-y-auto pr-4 custom-scrollbar-large">
                <div className="font-romantic text-2xl md:text-3xl text-purple-900 space-y-8 leading-relaxed">
                    <p className="border-b border-purple-100 pb-4 italic text-purple-400 text-xl">My Dearest,</p>
                    
                    <p>You are gorgeous but that’s honestly not the most interesting thing about you.</p>
                    
                    <p>Yes, you’re beautiful, and anyone with eyes can see that. But what I see in you takes attention. It takes knowing you, day after day. And that’s the part that makes you unforgettable.</p>

                    <p>I notice the way your eyes look when you’re happy. I notice your laugh — not the polite one you use when you’re trying to be quiet, but the real one. The one that takes over your whole body. The one you try to cover because you’re scared it’s "too much."</p>

                    <p>And then there are the moments nobody else sees. The way you fall silent when you’re hurting. The way you hold yourself together because you don’t want to burden anyone with your pain. You carry it like you owe the world an apology, like you have to be strong all the time.</p>

                    <p>And somehow, even in your quietest moments, you still show up for people with your whole heart. That’s strength. That’s rare.</p>

                    <p>Your soul is the most beautiful thing about you. That’s the kind of beauty you can’t put makeup on. The kind that leaves a mark on the people lucky enough to know you. That’s what makes you unforgettable. Your real beauty exists in the parts of you the world never sees unless they earn it.</p>

                    <p>I feel lucky, truly lucky, to know you. And I’m excited to keep knowing you for all the years to come. In my mind, you are nothing short of a miracle.</p>

                    <p>More than anything, I don’t want to be someone who holds you down. What I want is to give you freedom — the freedom to be exactly who you are, and who you’re becoming. To let you exist without inhibition, without shrinking, without apology.</p>
                    
                    <div className="pt-12 flex flex-col items-end">
                        <p className="font-bold text-purple-600">I love you so much,</p>
                        <p className="text-4xl mt-2">❤️</p>
                    </div>
                </div>
                
                <div className="flex justify-center gap-6 py-12">
                    <span className="text-4xl animate-bounce" style={{ animationDelay: '0s' }}>🌸</span>
                    <span className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>🪷</span>
                    <span className="text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌸</span>
                </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar-large::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar-large::-webkit-scrollbar-track {
          background: rgba(168, 85, 247, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar-large::-webkit-scrollbar-thumb {
          background: #e9d5ff;
          border-radius: 10px;
        }
        .custom-scrollbar-large::-webkit-scrollbar-thumb:hover {
          background: #d8b4fe;
        }
      `}</style>
    </section>
  );
};
