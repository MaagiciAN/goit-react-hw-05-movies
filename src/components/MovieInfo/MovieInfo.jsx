import css from './MovieInfo.module.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieInfo = ({ movie }) => {
  const { title, poster_path, release_date, vote_average, overview, genres } =
    movie;

  if (!genres) return;
  let genre = genres.map(elem => elem.name).join(', ');

  return (
    <>
      <div style={{ display: 'flex', gap: '10px' }}>
        <img
          className={css.img}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
          width={250}
        />
        <div>
          <h2 className={css.title}>
            {title} {release_date[0]}
            {release_date[1]}
            {release_date[2]}
            {release_date[3]}
          </h2>
          <p className={css.info}>
            User Score: {Math.round(vote_average * 10)}%
          </p>
          <p className={css.title}>Overview</p>
          <p className={css.info}>{overview}</p>
          <p className={css.title}>Genres</p>
          <p className={css.info}>{genre}</p>
        </div>
      </div>
      <h3 className={css.title}>Additional information</h3>
    </>
  );
};

export default MovieInfo;