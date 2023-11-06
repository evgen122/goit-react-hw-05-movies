import { Link } from "react-router-dom";

export const TrendingList = dataTrendingToday => {
  dataTrendingToday.map(i => {
      <li key={ i.id }>
        <Link to={`/i/${i.id}`}
    </li>;
  });
  const a = dataTrendingToday;
  console.log(a);
  //   return <li>item movie</li>;
};
