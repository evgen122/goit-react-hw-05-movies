import { fetchMoviesDetails } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState({});
  const [poster, setPoster] = useState('');

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
      console.log(data);
      console.log(movie);
      const { posterPath, title, overview, genres } = data;

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

  return `  <div>
      <h2>MovieDetails {params}</h2>
      <img src="https://image.tmdb.org/t/p/w500/${fdg}" />
    </div>`;
}

// adult
// :
// false
// backdrop_path
// :
// "/gDdKAlNEd80PLLUBSz4OejBd9FG.jpg"
// belongs_to_collection
// :
// null
// budget
// :
// 5000000
// genres
// :
// (2) [{…}, {…}]
// homepage
// :
// ""
// id
// :
// 1429
// imdb_id
// :
// "tt0307901"
// original_language
// :
// "en"
// original_title
// :
// "25th Hour"
// overview
// :
// "In New York City in the days following the events of 9/11, Monty Brogan is a convicted drug dealer about to start a seven-year prison sentence, and his final hours of freedom are devoted to hanging out with his closest buddies and trying to prepare his girlfriend for his extended absence."
// popularity
// :
// 16.229
// poster_path
// :
// "/uW7tTRElr2tRhmAVESzvHy4ByXg.jpg"
// production_companies
// :
// (2) [{…}, {…}]
// production_countries
// :
// [{…}]
// release_date
// :
// "2002-12-19"
// revenue
// :
// 23932055
// runtime
// :
// 135
// spoken_languages
// :
// [{…}]
// status
// :
// "Released"
// tagline
// :
// "Can you change your whole life in one day?"
// title
// :
// "25th Hour"
// video
// :
// false
// vote_average
// :
// 7.331
// vote_count
// :
// 2164
