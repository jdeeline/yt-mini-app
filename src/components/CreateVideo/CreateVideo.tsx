import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '@/constants';
import { validateUrl, createVideoFromUrl } from '@utils/video';
import { Video } from '@/types';
import useLocalStorage from '@hooks/useLocalStorage';
import './CreateVideo.css';

const createWatchTo = ({ videoId, timestamp }: Video): string => {
  const path = AppRoutes.Watch.replace(':videoId', videoId);
  return `${path}${timestamp ? `?timestamp=${timestamp}` : ''}`;
};

function CreateVideo() {
  const [query, setQuery] = useState('');
  const [history, setHistory] = useLocalStorage<Video[]>('history', []);
  const navigate = useNavigate();

  const isValidUrl = validateUrl(query);

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    if (isValidUrl) {
      const video = createVideoFromUrl(query);
      await setHistory([...history, video]);
      navigate(createWatchTo(video));
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value.trim());
  };

  return (
    <form className="create-video" onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} placeholder="Insert YouTube link" />

      <button type="submit" disabled={!isValidUrl}>
        Watch
      </button>
    </form>
  );
}

export default CreateVideo;
