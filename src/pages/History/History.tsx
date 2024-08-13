import useLocalStorage from '@hooks/useLocalStorage';
import VideoGrid from '@components/VideoGrid/VideoGrid';
import { Video } from '@/types';

function History() {
  const [history] = useLocalStorage<Video[]>('history', []);

  return <VideoGrid videos={history.reverse()} />;
}

export default History;
