import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

export const Navigation = () => {
  return (
    <nav>
      <Link to="/" end>
        Home
      </Link>
      <Link to="/movies">Movies</Link>
    </nav>
  );
};
