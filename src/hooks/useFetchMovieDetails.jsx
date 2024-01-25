import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../service/movies-services';

export const useFetchMovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (!movieId) return;
    const fetchDataMovie = async () => {
      try {
        const data = await getMovieDetails(movieId);

        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataMovie();
  }, [movieId]);

  return { movie, error, isLoading };
};