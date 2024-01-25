import { GoBackBtn } from '../components/GoBackBtn/GoBackBtn';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import { useFetchMovieDetails } from 'hooks/useFetchMovieDetails';
import { Suspense, useRef } from 'react';
import { Oval } from 'react-loader-spinner';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const { movie, error, isLoading } = useFetchMovieDetails();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <>
      {isLoading && (
        <Oval
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{ margin: '0 47%' }}
        />
      )}
      {error && <h2>Something went wrong</h2>}
      <GoBackBtn path={backLinkHref.current} />
      <MovieInfo movie={movie} />
      <ul style={{ listStyle: 'none', display: 'flex', gap: '10px' }}>
        <li>
          <Link
            to="cast"
            style={{
              margin: '0',
              padding: '5px',
              color: 'rgb(56, 35, 1)',
              fontWeight: '400',
              lineHeight: '120%',
              border: '1px solid rgb(53, 51, 47)',
              borderRadius: '10px',
              boxShadow: '0px 2px 10px 1px rgb(53, 51, 47)',
              textDecoration: 'none',
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to="reviews"
            style={{
              margin: '0',
              padding: '5px',
              color: 'rgb(56, 35, 1)',
              fontWeight: '400',
              lineHeight: '120%',
              border: '1px solid rgb(53, 51, 47)',
              borderRadius: '10px',
              boxShadow: '0px 2px 10px 1px rgb(53, 51, 47)',
              textDecoration: 'none',
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;