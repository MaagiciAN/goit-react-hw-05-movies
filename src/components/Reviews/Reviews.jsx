import { useFetchMovieReviews } from 'hooks/useFetchMovieReviews';
import css from './Reviews.module.css';

const Reviews = () => {
  const reviews = useFetchMovieReviews();

  return (
    <ul className={css.ul}>
      {reviews.length !== 0 ? (
        reviews.reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p className={css.title}>{author}</p>
            <p className={css.info}>{content}</p>
          </li>
        ))
      ) : (
        <li className={css.info}>We don't have any reviews for this movie</li>
      )}
    </ul>
  );
};

export default Reviews;