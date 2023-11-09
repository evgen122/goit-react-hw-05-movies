import { fetchSearchMovies } from 'api';
import { MoviesList } from 'components/Movies/Movies.list';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [, setLoading] = useState(false);
  const [, setError] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [setImg] = useState([]);
  const [params] = useSearchParams();
  const filter = params.get('query') ?? '';

  const addSearch = newSearch => {
    setImg([]);
    setMovieData([]);
  };

  useEffect(() => {
    addListmovies(filter);
  }, [filter]);

  const addListmovies = async filter => {
    if (filter !== '') {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchSearchMovies(filter);
        setMovieData(data.results);

        return setLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <Searchbar movieData={movieData} onSearch={addSearch} />
      <ul>
        <MoviesList movList={movieData} />
      </ul>
    </div>
  );
}
