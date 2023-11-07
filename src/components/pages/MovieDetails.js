import { fetchMoviesDetails } from 'api';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState({});
  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState();
  const [overview, setOverview] = useState();
  const [genres, setGenres] = useState();
  const [voteAverage, setVoteAverage] = useState();
  const [releaseDate, setReleaseDate] = useState();

  const params = useParams().movieId;

  console.log(params);

  useEffect(() => {
    movieCard(params);
  }, [params]);

  const movieCard = async params => {
    try {
      setLoading(true);
      setError(false);
      const data = await fetchMoviesDetails(params);
      setMovie(data);
      // console.log(data);
      // console.log(movie);
      const {
        poster_path,
        title,
        overview,
        genres,
        vote_average,
        release_date,
      } = data;
      setPoster(poster_path);
      setTitle(title);
      setOverview(overview);
      // setGenres(genres);
      setVoteAverage(vote_average * 10);
      setReleaseDate(release_date);

      console.log(poster_path);

      const genresList = genres.map(i => i.name + '\u00A0');
      setGenres(genresList);

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
  };

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt={title}
        width="250px"
      />
      <h2>
        {title} ({releaseDate})
      </h2>
      <p>Use score {voteAverage}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link>Cast</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
