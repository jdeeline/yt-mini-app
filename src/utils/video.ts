import { Video } from '@/types';

const YT_VIDEO_URL_REGEX =
  /^https?:\/\/(www\.youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)[\w-]+([?&][^?&]+)*/i;

const toUrl = (url: string) => new URL(url);

export const validateUrl = (url: string) => YT_VIDEO_URL_REGEX.test(url);

export const createVideoFromUrl = (url: string): Video => {
  const parsedUrl = toUrl(url);
  const videoId = parsedUrl.searchParams.get('v') as string;
  const timestamp = parsedUrl.searchParams.get('t') as number | null;

  return {
    videoId,
    timestamp,
    createdAt: new Date().valueOf(),
  };
};

export const createEmbedUrl = ({ videoId, timestamp }: Video) => {
  const queryParams = new URLSearchParams({
    rel: '0',
  });

  if (timestamp) {
    queryParams.append('start', timestamp.toString());
  }

  return `https://www.youtube.com/embed/${videoId}?${queryParams.toString()}`;
};
