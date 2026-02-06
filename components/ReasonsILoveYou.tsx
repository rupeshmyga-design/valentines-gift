
import React from 'react';
import { LOVE_REASONS } from '../constants';

export const ReasonsILoveYou: React.FC = () => {
  return (
    <section className="bg-white/80 backdrop-blur-md rounded-[3.5rem] p-10 md:p-16 shadow-2xl border-4 border-white relative overflow-hidden">
      {/* Decorative Watermarks */}
      <div className="absolute -top-16 -right-16 text-[15rem] opacity-5 select-none pointer-events-none">🌸</div>
      <div className="absolute -bottom-16 -left-16 text-[15rem] opacity-5 select-none pointer-events-none rotate-45">🪷</div>

      <div className="relative z-10">
        <div className="flex flex-col items-center mb-16">
            <div className="bg-purple-100 text-purple-600 px-6 py-1 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-4 shadow-inner">Our bond</div>
            <h2 className="text-4xl md:text-6xl font-romantic text-purple-700 text-center">Things I Adore About You</h2>
        </div>
        
        <div className="space-y-10 max-w-2xl mx-auto">
          {LOVE_REASONS.map((reason, index) => (
            <div 
              key={reason.id} 
              className="flex items-start gap-8 group transition-all duration-500 transform hover:translate-x-4"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center text-3xl shadow-md border-2 border-purple-200 group-hover:rotate-6 transition-transform">
                {['🪷', '🌹', '🌸', '🌺', '✨'][index % 5]}
              </div>
              <div className="flex-grow pt-2">
                <p className="text-2xl text-purple-800 font-bold tracking-tight mb-2 leading-tight">{reason.text}</p>
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-400 to-transparent transition-all duration-1000 rounded-full" />
              </div>
            </div>
          ))}
          
          <div className="flex justify-center mt-20 gap-8 opacity-40">
             <span className="text-4xl hover:scale-125 transition">🌹</span>
             <span className="text-4xl hover:scale-125 transition">🪷</span>
             <span className="text-4xl hover:scale-125 transition">🌸</span>
          </div>
        </div>
      </div>
    </section>
  );
};
