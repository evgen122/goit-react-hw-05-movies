export const CastList = ({ data }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  console.log(data);
  return data.map(i => (
    <li key={i.id}>
      <img
        src={
          i.profile_path
            ? `https://image.tmdb.org/t/p/w500${i.profile_path}`
            : defaultImg
        }
        alt={i.name}
        width="200px"
      />
      <p>{i.name}</p>
      <p>Character: {i.character}</p>
    </li>
  ));
};
