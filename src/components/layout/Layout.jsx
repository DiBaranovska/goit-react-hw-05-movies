import { Suspense } from 'react';
import css from './layout.module.css';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav className={css.navigation}>
          <ul className={css.navigation_list}>
            <li className={css.navigation_item}>
              <NavLink
                to="/"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isActive ? '#9f00ff' : 'black',
                    textDecoration: 'none',
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            <li className={css.navigation_item}>
              <NavLink
                to="/Movies"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isActive ? '#9f00ff' : 'black',
                    textDecoration: 'none',
                  };
                }}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
         </Suspense>       
      </main>
    </div>
  );
};

export default Layout;
