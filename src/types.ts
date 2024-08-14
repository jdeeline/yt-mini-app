export type Video = {
  videoId: string;
  timestamp: number | null;
  createdAt: number;
};

export type VideoProp = Omit<Video, 'createdAt'>;
