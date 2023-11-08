export const CastList = ({ data }) => {
  console.log(data);
  return data.map(i => (
    <li key={i.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500${i.profile_path}`}
        alt={i.name}
        width="200px"
      />
      <p>{i.name}</p>
      <p>Character: {i.character}</p>
    </li>
  ));
};
