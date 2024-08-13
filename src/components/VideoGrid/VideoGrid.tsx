import VideoPlayer from '@components/VideoPlayer/VideoPlayer';
import { Video } from '@/types';
import './VideoGrid.css';

type ComponentProps = {
  videos: Video[];
};

function VideoGrid({ videos }: ComponentProps) {
  return (
    <div className="video-grid">
      {videos.map(({ videoId, timestamp }) => (
        <VideoPlayer videoId={videoId} timestamp={timestamp} />
      ))}
    </div>
  );
}

export default VideoGrid;
