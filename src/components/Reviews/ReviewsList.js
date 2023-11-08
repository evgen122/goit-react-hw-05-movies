export const ReviewsList = ({ data }) => {
  console.log(data);
  if (data) {
    return data.map(i => (
      <li key={i.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${i.author_details.avatar_path}`}
          alt={i.author}
          width="200px"
        />
        <p>{i.author}</p>
        <p>Reviews: {i.content}</p>
      </li>
    ));
  }
};
