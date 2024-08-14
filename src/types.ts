export type Video = {
  videoId: string;
  timestamp: number | null;
  createdAt: number;
};

export type VideoProps = Omit<Video, 'createdAt'>;
