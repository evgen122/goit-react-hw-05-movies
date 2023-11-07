import { Link, useLocation } from 'react-router-dom';

export const TrendingList = dataTrendingToday => {
  //   console.log(dataTrendingToday.data.results);
  // console.log(results);

  const location = useLocation();

  if (!dataTrendingToday.data.results) {
    return '';
  } else {
    console.log(dataTrendingToday.data.results);

    return dataTrendingToday.data.results.map(i => (
      <li key={i.id}>
        <Link to={`/movie/${i.id}`} state={{ from: location }}>
          {i.name ?? i.title}
        </Link>
      </li>
    ));
  }
};
