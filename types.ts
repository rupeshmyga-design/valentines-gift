
export interface Memory {
  id: string;
  imageUrl: string;
  caption: string;
}

export interface Soundtrack {
  id: string;
  title: string;
  artist: string;
  cover: string;
  audioUrl: string;
}

export interface LoveReason {
  id: number;
  text: string;
  emoji: string;
}
