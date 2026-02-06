
import React, { useEffect, useState } from 'react';

const COLORS = ['#d8b4fe', '#c084fc', '#a855f7', '#fbcfe8', '#f9a8d4', '#e9d5ff'];

// Simple flower SVGs represented by paths
const FLOWER_PATHS = {
  heart: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
  lotus: "M12,2c0,0-4,6-4,10c0,2.2,1.8,4,4,4s4-1.8,4-4C16,8,12,2,12,2z M12,14.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.7,1.6-4.5,2.5-5.9c0.9,1.4,2.5,4.2,2.5,5.9C14.5,13.4,13.4,14.5,12,14.5z M7,10c-1.7,0-3,1.3-3,3c0,2.5,3,6,3,6s1-2.5,1-4.5C8,11.3,7.6,10,7,10z M17,10c-0.6,0-1,1.3-1,3c0,2,1,4.5,1,4.5s3-3.5,3-6C20,11.3,18.7,10,17,10z",
  rose: "M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18z M12,8c-2.2,0-4,1.8-4,4c0,1,0.4,1.9,1,2.6c0.6-0.7,1-1.6,1-2.6c0-2.2,1.8-4,4-4c1,0,1.9,0.4,2.6,1C15.9,8.4,15,8,14,8C12.9,8,12,8,12,8z",
  orchid: "M12,12m-2,0a2,2 0 1,0 4,0a2,2 0 1,0 -4,0 M12,2L10,8L4,4L8,10L2,12L8,14L4,20L10,16L12,22L14,16L20,20L16,14L22,12L16,10L20,4L14,8L12,2"
};

type ItemType = keyof typeof FLOWER_PATHS;

export const FloatingHearts: React.FC = () => {
  const [items, setItems] = useState<{ id: number; left: string; size: number; duration: number; delay: number; color: string; type: ItemType }[]>([]);

  useEffect(() => {
    const types: ItemType[] = ['heart', 'lotus', 'rose', 'orchid'];
    const newItems = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 25 + 15,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      type: types[Math.floor(Math.random() * types.length)]
    }));
    setItems(newItems);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {items.map((item) => (
        <svg
          key={item.id}
          className="floating-heart"
          style={{
            left: item.left,
            width: item.size,
            height: item.size,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
            fill: item.color,
            opacity: 0.6,
          }}
          viewBox="0 0 24 24"
        >
          <path d={FLOWER_PATHS[item.type]} />
        </svg>
      ))}
    </div>
  );
};
