
import React, { useState, useRef } from 'react';

interface HeroProps {
  onYes: () => void;
  isAccepted: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onYes, isAccepted }) => {
  const [noPosition, setNoPosition] = useState({ top: 0, left: 0 });
  const [isNoButtonMoved, setIsNoButtonMoved] = useState(false);
  const [showTooLateMsg, setShowTooLateMsg] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    setNoPosition({ top: y, left: x });
    setIsNoButtonMoved(true);
    setNoClickCount(prev => prev + 1);
  };

  const noButtonTexts = [
    "No",
    "Are you sure?",
    "Really sure??",
    "Think again! 🌸",
    "Last chance...",
    "Surely not?",
    "You might regret this! 🌹",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake! 🪷",
    "Have a heart! ❤️",
    "Don't be so cold! ❄️",
    "Change of heart? ✨",
    "Wouldn't you rather say yes?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 relative">
      {!isAccepted ? (
        <div className="animate-in fade-in zoom-in duration-1000 flex flex-col items-center max-w-lg w-full">
          <div className="mb-8 relative">
             <div className="absolute inset-0 bg-purple-200 blur-3xl opacity-30 rounded-full animate-pulse" />
             {/* TO CHANGE THIS: Add 'waiting.gif' to your folder */}
             <img 
               src="./waiting.gif" 
               alt="Waiting Cat" 
               className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10"
               onError={(e) => {
                 // Fallback if local file isn't found yet
                 (e.target as HTMLImageElement).src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpwaGdzNmJtNWh4ZzNidzh4Znp4ZzNidzh4Znp4ZzNidzh4Znp4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MDJ9IbxxvDUQM/giphy.gif";
               }}
             />
             <div className="absolute -top-4 -left-4 text-4xl animate-bounce">🪷</div>
             <div className="absolute -bottom-4 -right-4 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌹</div>
          </div>

          <h1 className="text-5xl md:text-7xl font-romantic font-bold text-purple-700 mb-12 drop-shadow-sm leading-tight">
            Will you be my Valentine?
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full relative h-32 sm:h-20">
            <button
              onClick={onYes}
              style={{ fontSize: `${Math.min(1.5 + noClickCount * 0.1, 4)}rem` }}
              className="bg-purple-600 hover:bg-purple-700 text-white font-black py-4 px-12 rounded-full shadow-[0_10px_30px_rgba(168,85,247,0.4)] transform hover:scale-110 active:scale-95 transition-all duration-300 z-20"
            >
              YES! 💖
            </button>
            
            <button
              ref={noButtonRef}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              style={{
                position: isNoButtonMoved ? 'absolute' : 'relative',
                transform: isNoButtonMoved ? `translate(${noPosition.left}px, ${noPosition.top}px)` : 'none',
                transition: isNoButtonMoved ? 'all 0.15s cubic-bezier(0.18, 0.89, 0.32, 1.28)' : 'none',
                zIndex: isNoButtonMoved ? 50 : 1,
              }}
              className="bg-white text-purple-400 font-bold py-3 px-8 rounded-full shadow-lg border-2 border-purple-100 hover:text-purple-600 transition-colors"
            >
              {noButtonTexts[Math.min(noClickCount, noButtonTexts.length - 1)]}
            </button>
          </div>
        </div>
      ) : (
        <div className="animate-in zoom-in duration-700 flex flex-col items-center">
          <div className="mb-10 relative">
            <div className="absolute inset-0 bg-purple-100 blur-3xl opacity-40 rounded-full" />
            {/* TO CHANGE THIS: Add 'celebration.gif' to your folder */}
            <img 
              src="./celebration.gif" 
              alt="Happy Celebration" 
              className="w-56 h-56 md:w-72 md:h-72 object-contain relative z-10"
              onError={(e) => {
                // Fallback if local file isn't found yet
                (e.target as HTMLImageElement).src = "https://media.tenor.com/2Xy3-82o6oAAAAAi/mochi-peach.gif";
              }}
            />
            <div className="absolute top-0 right-0 text-6xl animate-pulse">✨</div>
          </div>

          <h2 className="text-5xl md:text-7xl font-romantic text-purple-700 px-6 leading-tight drop-shadow-sm mb-8">
            Yay! You said Yes! 🥰
          </h2>
          <p className="text-purple-400 font-medium tracking-[0.2em] uppercase text-sm mb-12">I knew you couldn't resist me 🪷</p>
          
          {!showTooLateMsg ? (
            <div className="pt-8">
              <button
                onClick={() => setShowTooLateMsg(true)}
                className="text-purple-300 hover:text-purple-600 underline text-xs transition-all uppercase font-bold tracking-widest opacity-60 hover:opacity-100"
              >
                Actually... NO
              </button>
            </div>
          ) : (
            <div className="mt-12 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border-4 border-purple-100 animate-in slide-in-from-bottom duration-500 relative max-w-md">
              <div className="absolute -top-6 -right-6 text-5xl">🌺</div>
              <div className="absolute -bottom-6 -left-6 text-5xl">🪷</div>
              <p className="text-2xl md:text-3xl font-black text-purple-800 leading-tight italic">
                Too late cutie. You already said yes, which means you’re mine now — deal with it. 💍✨
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
