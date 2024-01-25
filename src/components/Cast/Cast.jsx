import { useFetchMovieCredits } from 'hooks/useFetchMovieCredits';
import css from './Cast.module.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const cast = useFetchMovieCredits();

  return (
    <ul className={css.ul}>
      {cast.credits.map(({ id, profile_path, original_name, character }) => (
        <li key={id}>
          <img
            className={css.img}
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : defaultImg
            }
            alt={original_name}
            width={250}
          />
          <p className={css.text}>{original_name}</p>
          <p className={css.text}>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;