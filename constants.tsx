
import { Memory, Soundtrack, LoveReason } from './types';

/**
 * PHOTO GALLERY (Favorite Memories Section)
 * -----------------------------------------
 * DIRECTIONS FOR YOUR MACBOOK:
 * 1. Move your photos into the same folder as index.html.
 * 2. Rename your photos to 'memory1.jpg', 'memory2.jpg', etc.
 * 3. Or change the filenames below to match yours!
 */
export const MEMORIES: Memory[] = [
  { 
    id: '1', 
    imageUrl: './Users/rupeshkumarmygapula/Desktop/lalleeee/first.jpeg', 
    caption: 'Our first date where it all began.' 
  },
  { 
    id: '2', 
    imageUrl: './Users/rupeshkumarmygapula/Desktop/lalleeee/second.jpeg', 
    caption: 'Our second date.' 
  },
  { 
    id: '3', 
    imageUrl: './Users/rupeshkumarmygapula/Desktop/lalleeee/third.jpeg', 
    caption: 'Best times with you.' 
  },
  { 
    id: '4', 
    imageUrl: './Users/rupeshkumarmygapula/Desktop/lalleeee/fouth.jpeg', 
    caption: 'Best times with you.' 
  },
];

/**
 * MUSIC & COVERS (Soundtrack Section)
 * -----------------------------------------
 * DIRECTIONS FOR YOUR MACBOOK:
 * 1. Move your .mp3 songs and .jpg covers into the folder.
 * 2. Update the filenames below (e.g., './my-song.mp3').
 */
export const SOUNDTRACKS: Soundtrack[] = [
  { 
    id: '1', 
    title: 'Veyyira Cheyyi Veyyira', 
    artist: 'Panja', 
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=200',
    audioUrl: 'https://open.spotify.com/search/veyyi%20ra%20chey%20vera'
  },
  { 
    id: '2', 
    title: 'Oh Priya Priya', 
    artist: 'Ishq', 
    cover: 'https://images.unsplash.com/photo-1459749411177-042180ec75ff?auto=format&fit=crop&q=80&w=200',
    audioUrl: 'https://open.spotify.com/search/oh%20priya%20priya'
  },
  { 
    id: '3', 
    title: 'Avunu Nijam', 
    artist: 'Athadu', 
    cover: 'https://images.unsplash.com/photo-1514525253361-bee8718a74a2?auto=format&fit=crop&q=80&w=200',
    audioUrl: 'https://open.spotify.com/search/avunu%20nijam'
  },
  { 
    id: '4', 
    title: 'Singari', 
    artist: 'Dude', 
    cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=200',
    audioUrl: 'https://open.spotify.com/search/singari'
  },
];

export const LOVE_REASONS: LoveReason[] = [
  { id: 1, text: "The way your eyes sparkle when you laugh.", emoji: "✨" },
  { id: 2, text: "Your beautiful soul.", emoji: "🌸" },
  { id: 3, text: "Just watching you talk and listening to you.", emoji: "🧸" },
  { id: 4, text: "The way you believe in me, even when I struggle to believe in myself.", emoji: "🤝" },
  { id: 5, text: "How you make ordinary moments feel meaningful just by being there.", emoji: "🌙" },
];
