import { fetchMovieCredits } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './CastList';

export const Cast = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dataCast, setDataCast] = useState([]);

  const params = useParams().movieId;

  useEffect(() => {
    movieCast(params);
  }, [params]);

  const movieCast = async params => {
    try {
      setLoading(true);
      setError(false);
      const data = await fetchMovieCredits(params);
      console.log(data);
      setDataCast(data.cast);

      return setLoading(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ul>
        <CastList data={dataCast} />
      </ul>
    </div>
  );
};
