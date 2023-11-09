import { fetchMovieReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from './ReviewsList';

export const Reviews = () => {
  const [setLoading] = useState(false);
  const [setError] = useState(false);
  const [dataReviews, setDataReviews] = useState();

  const params = useParams().movieId;

  useEffect(() => {
    movieCast(params);
  }, [params]);

  const movieCast = async params => {
    try {
      setLoading(true);
      setError(false);
      const data = await fetchMovieReviews(params);
      console.log(data.results);
      setDataReviews(data.results);
      // console.log(dataReviews);

      return setLoading(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    console.log(dataReviews),
    (
      <div>
        {dataReviews && dataReviews.length !== 0 ? (
          <ul>
            <ReviewsList data={dataReviews} />
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </div>
    )
  );
};
