import { useEffect, useState } from 'react';
import { fetchTrending } from 'api';
import { TrendingList } from 'components/TrendingList/TrendingList';
// import { fetchTrending } from 'api';

export default function Home() {
  const [dataTrendingToday, setDataTrendingToday] = useState([]);
  const [, setLoading] = useState(false);
  const [, setError] = useState(false);

  useEffect(() => {
    const trendingToday = async () => {
      try {
        setLoading(true);
        setError(false);
        const movies = await fetchTrending();
        setDataTrendingToday(movies);
        // console.log(movies);
        // toast.success('Создали квиз! Вернитесь на список чтобы увидеть!');
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    trendingToday();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>

      <ul>
        <TrendingList data={dataTrendingToday} />
      </ul>
    </div>
  );
}
