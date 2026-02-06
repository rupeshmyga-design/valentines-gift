
import React, { useState } from 'react';
import { MEMORIES } from '../constants';

export const FavoriteMemories: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);

  const handleCameraClick = () => {
    setIsFlashing(true);
    setTimeout(() => {
      setIsFlashing(false);
      setIsOpen(true);
    }, 400);
  };

  return (
    <section className="flex flex-col items-center py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-romantic text-purple-600 mb-4 px-4">Our Favorite Memories</h2>
        <div className="flex justify-center gap-2">
            {[...Array(3)].map((_, i) => <span key={i} className="text-purple-200 text-xl">🌹</span>)}
        </div>
      </div>
      
      {!isOpen ? (
        <div 
          onClick={handleCameraClick}
          className="relative group cursor-pointer flex flex-col items-center"
        >
          {isFlashing && (
            <div className="fixed inset-0 bg-white z-[100] animate-out fade-out duration-500 pointer-events-none" />
          )}

          {/* Vintage Camera Body */}
          <div className="w-72 h-48 relative transition-all duration-500 group-hover:scale-105 group-active:scale-95 drop-shadow-[0_20px_50px_rgba(168,85,247,0.3)]">
            
            {/* Top Plate (Silver/Light Lilac Metal) */}
            <div className="absolute top-0 left-4 right-4 h-10 bg-gradient-to-b from-purple-100 to-purple-200 rounded-t-xl border-x-4 border-t-4 border-purple-300 z-10 shadow-sm" />
            
            {/* Viewfinder Hump */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[40%] w-24 h-12 bg-gradient-to-b from-purple-100 to-purple-200 rounded-t-2xl border-x-4 border-t-4 border-purple-300 z-10 flex items-center justify-center overflow-hidden shadow-sm">
                <div className="w-10 h-6 bg-purple-900/80 rounded-sm border border-purple-400/50" />
            </div>

            {/* Main Body (Leather-like texture) */}
            <div className="absolute top-10 inset-x-0 bottom-0 bg-purple-800 rounded-b-2xl border-4 border-purple-400 overflow-hidden shadow-inner">
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }} />
                
                {/* Brand label */}
                <div className="absolute top-4 left-6 text-[10px] font-black text-purple-300/50 tracking-widest uppercase">Lovecam v1.0</div>
                
                {/* Decorative grips */}
                <div className="absolute inset-y-0 left-0 w-8 bg-purple-900/40 border-r border-purple-400/20" />
                <div className="absolute inset-y-0 right-0 w-8 bg-purple-900/40 border-l border-purple-400/20" />
            </div>

            {/* Lens (The centerpiece) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 p-2 shadow-2xl z-20 border-4 border-purple-50">
                <div className="w-full h-full rounded-full bg-purple-900 border-4 border-purple-500 flex items-center justify-center relative overflow-hidden shadow-inner">
                    {/* Aperture Rings */}
                    <div className="w-[85%] h-[85%] rounded-full border-2 border-purple-400/30" />
                    <div className="w-[70%] h-[70%] absolute rounded-full border border-purple-300/20" />
                    
                    {/* Glass Center */}
                    <div className="w-[60%] h-[60%] absolute rounded-full bg-gradient-to-tr from-purple-950 via-indigo-950 to-purple-900 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-purple-400/10 blur-[2px]" />
                        <div className="absolute top-4 right-4 w-6 h-3 bg-white/10 rounded-full rotate-45" />
                    </div>
                </div>
            </div>

            {/* Shutter Button */}
            <div className="absolute top-0 right-10 -translate-y-1/2 w-8 h-8 bg-red-400 hover:bg-red-500 rounded-full border-4 border-purple-100 z-30 shadow-md group-hover:scale-110 active:scale-90 transition-transform cursor-pointer" />

            {/* Film Advance Knob */}
            <div className="absolute top-0 left-8 -translate-y-[40%] w-10 h-6 bg-purple-200 rounded-sm border-2 border-purple-300 z-10" />

            {/* Floral Accents */}
            <div className="absolute -bottom-4 -left-6 text-5xl animate-bounce drop-shadow-lg z-30" style={{ animationDuration: '3s' }}>🪷</div>
            <div className="absolute -top-10 -right-4 text-4xl animate-bounce drop-shadow-lg z-30" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>🌸</div>
          </div>
          
          <div className="mt-12 bg-white shadow-xl px-10 py-4 rounded-full border-2 border-purple-100 group-hover:bg-purple-50 transition-all group-hover:shadow-purple-200/50">
            <p className="text-purple-600 font-black tracking-widest uppercase text-sm flex items-center gap-3">
              <span className="text-xl animate-pulse">✨</span> Snap a memory
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full space-y-16 animate-in zoom-in duration-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
            {MEMORIES.map((memory, index) => (
              <div 
                key={memory.id} 
                className="group relative bg-white p-5 rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:rotate-0 border-2 border-purple-50"
                style={{ transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})` }}
              >
                <div className="overflow-hidden rounded-[2rem] relative h-80">
                  <img 
                    src={memory.imageUrl} 
                    alt={memory.caption} 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-8 pb-4 text-center">
                  <p className="font-romantic text-3xl text-purple-700 mb-2">{memory.caption}</p>
                  <div className="flex justify-center gap-1 opacity-30">
                     <span className="text-xs">🌸</span><span className="text-xs">🪷</span><span className="text-xs">🌸</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 mx-auto bg-purple-600 text-white font-black px-12 py-4 rounded-full shadow-2xl hover:bg-purple-700 transition-all transform hover:scale-110 active:scale-95 uppercase tracking-[0.2em]"
          >
            <span>📷</span> Back to Camera
          </button>
        </div>
      )}
    </section>
  );
};
