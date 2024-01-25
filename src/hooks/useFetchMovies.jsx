import { useEffect, useState } from 'react';
import { getMovies } from 'service/movies-services';

export const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchDataMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataMovies();
  }, []);

  return { movies, error, isLoading };
};