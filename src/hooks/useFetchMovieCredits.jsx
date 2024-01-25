import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/movies-services';

export const useFetchMovieCredits = () => {
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (!movieId) return;
    const fetchDataMovie = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCredits(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataMovie();
  }, [movieId]);

  return { credits, error, isLoading };
};