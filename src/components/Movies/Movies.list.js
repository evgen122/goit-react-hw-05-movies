import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movList }) => {
  const location = useLocation();
  console.log(movList);
  //   return 5454;
  if (!movList || movList.length === 0) {
    console.log(movList);
    return '';
  } else {
    console.log(movList);
    return movList.map(i => (
      <li key={i.id}>
        <Link to={`/movies/${i.id}`} state={{ from: location }}>
          {i.name ?? i.title}
        </Link>
      </li>
    ));
  }
};
