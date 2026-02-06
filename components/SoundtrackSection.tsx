
import React, { useState, useRef, useEffect } from 'react';
import { SOUNDTRACKS } from '../constants';

export const SoundtrackSection: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleTrack = (trackId: string, url: string) => {
    setError(null);
    
    if (activeTrack === trackId) {
      if (audioRef.current) {
        audioRef.current.pause();
        setActiveTrack(null);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      setIsLoading(trackId);
      const newAudio = new Audio(url);
      audioRef.current = newAudio;
      
      newAudio.play()
        .then(() => {
          setActiveTrack(trackId);
          setIsLoading(null);
        })
        .catch(e => {
          console.error("Audio playback failed:", e);
          setError("Could not load track. Check your connection.");
          setIsLoading(null);
          setActiveTrack(null);
        });
      
      newAudio.onended = () => {
        setActiveTrack(null);
      };

      newAudio.onerror = () => {
        setError("Playback error: Unrecognized audio format.");
        setIsLoading(null);
        setActiveTrack(null);
      };
    }
  };

  const FlowerIcon = ({ type }: { type: number }) => {
    const flowers = ['🪷', '🌹', '🌸', '🌺'];
    return <span className="text-lg opacity-40">{flowers[type % 4]}</span>;
  };

  return (
    <section className="space-y-12 py-8">
      <div className="text-center relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-32 bg-purple-400/5 rounded-full blur-2xl pointer-events-none" />
        <h2 className="text-4xl md:text-5xl font-romantic text-purple-700 relative inline-block">
          Our Special Soundtrack
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent" />
        </h2>
        <p className="text-purple-500 font-medium mt-4 tracking-widest uppercase text-xs">A collection of our favorite beats</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {SOUNDTRACKS.map((track, idx) => (
          <div 
            key={track.id}
            onClick={() => toggleTrack(track.id, track.audioUrl)}
            className={`group relative cursor-pointer bg-white rounded-[2rem] p-5 shadow-xl transition-all duration-500 hover:shadow-2xl border-2 flex flex-col items-center
              ${activeTrack === track.id 
                ? 'border-purple-500 scale-105 shadow-purple-200/50' 
                : 'border-white hover:border-purple-200 hover:-translate-y-2'}`}
          >
            <div className="absolute top-4 right-4 text-sm">
                <FlowerIcon type={idx} />
            </div>

            <div className="relative w-full aspect-square overflow-hidden rounded-[1.5rem] shadow-inner">
              <img 
                src={track.cover} 
                alt={track.title} 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent flex flex-col items-center justify-center transition-all duration-500 ${activeTrack === track.id || isLoading === track.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                <div className={`bg-white rounded-full p-4 shadow-2xl text-purple-600 transform transition-all duration-500 ${(activeTrack === track.id || isLoading === track.id) ? 'scale-110' : 'scale-75 group-hover:scale-100'}`}>
                  {isLoading === track.id ? (
                    <div className="w-8 h-8 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
                  ) : activeTrack === track.id ? (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
                <span className="text-white text-xs mt-4 font-bold tracking-widest uppercase drop-shadow-md">
                  {isLoading === track.id ? 'Loading...' : activeTrack === track.id ? 'Now Playing' : 'Play Now'}
                </span>
              </div>
            </div>

            <div className="mt-6 text-center w-full px-2">
              <h3 className="text-lg font-bold text-purple-900 truncate mb-1 group-hover:text-purple-600 transition-colors">{track.title}</h3>
              <p className="text-sm text-purple-400 font-semibold italic">{track.artist}</p>
            </div>
            
            {activeTrack === track.id && (
              <div className="mt-4 flex items-center justify-center gap-1.5 h-6">
                {[...Array(6)].map((_, i) => (
                   <div 
                    key={i} 
                    className="w-1.5 bg-purple-500 rounded-full animate-bounce" 
                    style={{ 
                        height: `${Math.random() * 80 + 20}%`,
                        animationDuration: `${0.4 + Math.random() * 0.4}s`,
                        animationDelay: `${i * 0.1}s` 
                    }} 
                   />
                ))}
              </div>
            )}

            <div className={`mt-2 transition-all duration-500 ${activeTrack === track.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`}>
                <span className="text-purple-400 text-[0.6rem] tracking-[0.3em] uppercase">Love Collection</span>
            </div>
          </div>
        ))}
      </div>
      
      {(activeTrack || error) && (
        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500 pt-8 flex flex-col items-center">
          {error ? (
            <div className="bg-red-50 text-red-500 px-6 py-2 rounded-full border border-red-100 text-sm font-bold flex items-center gap-2">
              <span>⚠️</span> {error}
            </div>
          ) : (
            <div className="inline-flex items-center gap-3 bg-purple-50 px-6 py-2 rounded-full border border-purple-100 shadow-sm">
               <span className="text-lg animate-spin-slow">🎼</span>
               <p className="text-sm text-purple-600 font-bold tracking-wide">
                 Listening to: <span className="italic">{SOUNDTRACKS.find(t => t.id === activeTrack)?.title}</span>
               </p>
               <button 
                onClick={(e) => {
                  e.stopPropagation();
                  if (audioRef.current) audioRef.current.pause();
                  setActiveTrack(null);
                }}
                className="ml-2 text-purple-300 hover:text-purple-600 transition-colors p-1"
               >
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
               </button>
            </div>
          )}
          <p className="text-[10px] text-purple-300 mt-4 uppercase tracking-[0.2em] font-bold">Soundscape Active ✨</p>
        </div>
      )}
    </section>
  );
};
