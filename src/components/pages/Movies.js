import { fetchSearchMovies } from 'api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';

export default function Movies() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    const searchMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchSearchMovies();
        setMovieData(data);
        // console.log(movies);
        // toast.success('Создали квиз! Вернитесь на список чтобы увидеть!');
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    searchMovies();
  }, [movieData]);

  return (
    <div>
      <h2>Movies</h2>
      <Searchbar movieData={movieData} />
    </div>
  );
}
