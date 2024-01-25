import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/movies-services';

export const useFetchMovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (!movieId) return;
    const fetchDataMovie = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataMovie();
  }, [movieId]);

  return { reviews, error, isLoading };
};