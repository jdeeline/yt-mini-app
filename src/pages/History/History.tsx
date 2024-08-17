import useLocalStorage from '@hooks/useLocalStorage';
import VideoGrid from '@components/VideoGrid/VideoGrid';
import { Video } from '@/types';

function History() {
  const [history] = useLocalStorage<Video[]>('history', []);

  if (history.length === 0) {
    return <div className="centered-content">History is empty</div>;
  }

  return <VideoGrid videos={history.reverse()} />;
}

export default History;
