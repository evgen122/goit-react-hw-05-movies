import { Link, useLocation } from 'react-router-dom';

export const TrendingList = dataTrendingToday => {
  const location = useLocation();

  if (!dataTrendingToday.data.results) {
    return '';
  } else {
    return dataTrendingToday.data.results.map(i => (
      <li key={i.id}>
        <Link to={`/movies/${i.id}`} state={{ from: location }}>
          {i.name ?? i.title}
        </Link>
      </li>
    ));
  }
};
