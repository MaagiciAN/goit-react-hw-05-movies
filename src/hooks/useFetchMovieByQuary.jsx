import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'service/movies-services';

export const useFetchMovieByQuery = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getMovieByQuery(query);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };
  return { movies, error, isLoading, handleSubmit };
};