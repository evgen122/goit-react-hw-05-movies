import styled from 'styled-components';

export const SearchBar = styled.header`
  display: flex;
  justify-content: center;
  background-color: blue;
  padding-top: ${p => p.theme.spacing(2)};
  padding-bottom: ${p => p.theme.spacing(2)};
`;
