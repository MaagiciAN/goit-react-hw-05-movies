import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ movies = [] }) => {
  const location = useLocation();
  return (
    <ul className={css.ul}>
      {movies.map(
        ({ id, title }) =>
          title && (
            <li key={id} className={css.li}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <h3>{title}</h3>
              </Link>
            </li>
          )
      )}
    </ul>
  );
};

export default MoviesList;