export const ReviewsList = ({ data }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  if (data) {
    return data.map(i => (
      <li key={i.id}>
        <img
          src={
            i.author_details.avatar_path
              ? `https://image.tmdb.org/t/p/w500${i.author_details.avatar_path}`
              : defaultImg
          }
          alt={i.author}
          width="200px"
        />
        <p>{i.author}</p>
        <p>Reviews: {i.content}</p>
      </li>
    ));
  }
};
