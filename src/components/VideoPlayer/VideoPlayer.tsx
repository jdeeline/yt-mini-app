import { createEmbedUrl } from '@utils/video';
import { VideoProps } from '@/types';
import './VideoPlayer.css';

function VideoPlayer(props: VideoProps) {
  const url = createEmbedUrl(props);

  return (
    <div className="video-player">
      <iframe
        className="video-player__frame"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default VideoPlayer;
