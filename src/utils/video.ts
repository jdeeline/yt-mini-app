import { Video, VideoProps } from '@/types';

const YT_VIDEO_URL_REGEX =
  /^https?:\/\/(?:www\.youtube\.com\/(?:watch\?v=|embed\/|live\/)|youtu\.be\/)([\w-]+)(?:[?&](?:t=(\d+)|\w+=[^&]+))*/i;

export const validateUrl = (url: string) => YT_VIDEO_URL_REGEX.test(url);

export const createVideoFromUrl = (url: string): Video => {
  const matches = url.match(YT_VIDEO_URL_REGEX);

  if (!matches) {
    throw new Error('Failed to extract parameters from URL');
  }

  const videoId = matches[1] as Video['videoId'];
  const timestamp = (matches[2] ? Number(matches[2]) : null) as Video['timestamp'];

  return {
    videoId,
    timestamp,
    createdAt: new Date().valueOf(),
  };
};

export const createEmbedUrl = ({ videoId, timestamp }: VideoProps) => {
  const searchParams = new URLSearchParams({
    rel: '0',
  });

  if (timestamp) {
    searchParams.append('start', timestamp.toString());
  }

  return `https://www.youtube.com/embed/${videoId}?${searchParams.toString()}`;
};
