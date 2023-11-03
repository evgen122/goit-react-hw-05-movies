import { useState } from 'react';
import { fetchTrending } from 'api';
import { TrendingList } from 'components/TrendingList/TrendingList';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const trendingToday = async () => {
    try {
      setLoading(true);
      setError(false);
      await fetchTrending();
      // toast.success('Создали квиз! Вернитесь на список чтобы увидеть!');
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        <TrendingList data={trendingToday} />
      </ul>
    </div>
  );
}
