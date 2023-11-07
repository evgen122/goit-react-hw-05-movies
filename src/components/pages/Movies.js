import { fetchSearchMovies } from 'api';
import { MoviesList } from 'components/Movies/Movies.list';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';

export default function Movies() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const [img, setImg] = useState([]);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);

  const addSearch = newSearch => {
    setPage(1);
    setImg([]);
    setMovieData([]);
    setFilter(newSearch);
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
        console.log(movieData);

        return (
          // setImg(prevState => [...prevState, ...imges.hits]),
          // setTotal(imges.total),
          setLoading(false)
        );
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <h2>Movies</h2>
      <Searchbar movieData={movieData} onSearch={addSearch} />
      <ul>
        <MoviesList movList={movieData} />
      </ul>
    </div>
  );
}
