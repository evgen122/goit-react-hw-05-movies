import { fetchSearchMovies } from 'api';
import { MoviesList } from 'components/Movies/Movies.list';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [setImg] = useState([]);
  // const [filter, setFilter] = useState('');
  // const [setPage] = useState(1);
  const [params] = useSearchParams();
  // const [query, setQuery] = useState('');

  const filter = params.get('query') ?? '';
  // setQuery(params.get('query') ?? '');
  // const filter = query

  const addSearch = newSearch => {
    // setPage(1);
    setImg([]);
    setMovieData([]);
    // setFilter(newSearch);
  };

  useEffect(() => {
    addListmovies(filter);
  }, [filter]);

  const addListmovies = async filter => {
    console.log(filter);
    if (filter !== '') {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchSearchMovies(filter);
        setMovieData(data.results);
        console.log(data.results);
        // console.log(movieData);

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
