import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movList }) => {
  const location = useLocation();
  if (!movList || movList.length === 0) {
    return '';
  } else {
    return movList.map(i => (
      <li key={i.id}>
        <Link to={`/movies/${i.id}`} state={{ from: location }}>
          {i.name ?? i.title}
        </Link>
      </li>
    ));
  }
};
