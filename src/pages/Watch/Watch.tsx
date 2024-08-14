import { useParams, useSearchParams } from 'react-router-dom';
import VideoPlayer from '@components/VideoPlayer/VideoPlayer';
import { VideoProps } from '@/types';

type RouteParams = Pick<VideoProps, 'videoId'>;

type TimestampParam = VideoProps['timestamp'];

function Watch() {
  const { videoId } = useParams<RouteParams>() as RouteParams;
  const [searchParams] = useSearchParams();
  const timestamp = searchParams.get('timestamp') as TimestampParam;

  return (
    <div>
      <VideoPlayer videoId={videoId} timestamp={timestamp} />
    </div>
  );
}

export default Watch;
