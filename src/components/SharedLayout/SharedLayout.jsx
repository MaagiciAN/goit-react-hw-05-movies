import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.wrapper}>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
        </div>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;