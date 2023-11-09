import { fetchMoviesDetails } from 'api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

export default function MovieDetails() {
  const [, setLoading] = useState(false);
  const [, setError] = useState(false);
  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState();
  const [overview, setOverview] = useState();
  const [genres, setGenres] = useState();
  const [voteAverage, setVoteAverage] = useState();
  const [releaseDate, setReleaseDate] = useState();

  const params = useParams().movieId;
  const location = useLocation();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    movieCard(params);
  }, [params]);

  const movieCard = async params => {
    try {
      setLoading(true);
      setError(false);
      const data = await fetchMoviesDetails(params);
      const {
        poster_path,
        title,
        overview,
        genres,
        vote_average,
        release_date,
      } = data;

      setPoster(poster_path ?? '');
      setTitle(title);
      setOverview(overview);
      setVoteAverage(vote_average * 10);
      setReleaseDate(release_date);

      const genresList = genres.map(i => i.name + '\u00A0');
      setGenres(genresList);

      return setLoading(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Link to={backLink}>
        <BsArrowLeft /> Go back
      </Link>

      {poster && (
        <img
          src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : defaultImg}
          alt={title}
          width="250px"
        />
      )}

      <h2>
        {title} ({releaseDate ? releaseDate.substring(0, 4) : '----'})
      </h2>
      <p>Use score {Math.trunc(voteAverage)}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
      <nav>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </nav>
    </div>
  );
}
