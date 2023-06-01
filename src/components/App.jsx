import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout'
const Home = lazy(() => import('../pages/home/home'))
const MovieDetails = lazy(() => import('../pages/movieDetails/movieDetails'))
const Cast = lazy(() => import('./cast'))
const Reviews = lazy(() => import('../components/reviews'))
const Movies = lazy(() => import('../pages/movies/movies'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieID" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
