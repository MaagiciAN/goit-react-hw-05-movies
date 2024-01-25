import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <p>Page is not found</p>
      <Link to="/">Go home </Link>
    </>
  );
};

export default NotFound;