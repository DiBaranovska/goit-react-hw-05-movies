import { Suspense } from 'react';
import PropTypes from 'prop-types';
import css from './movieItem.module.css';
import { Link, Outlet } from 'react-router-dom';


const MovieItem = ({ movie }) => {
  const filmDate = new Date(movie.release_date);
  return (
    <>
      <section className={css.about_film}>
        <img
          className={css.about_film_img}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`poster of the movie ${movie.title}`}
          loading="lazy"
        />
        <div>
          <h1>{`${movie.title} (${filmDate.getFullYear()})`}</h1>
          <p>{`User Score: ${Math.round(movie.vote_average * 10)}%`}</p>

          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul className={css.about_film_genres}>
            {movie.genres.map(genr => {
              return (
                <li className={css.about_film_genres_item} key={genr.id}>
                  {genr.name}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section>
        <div className={css.details}>
          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
          </Suspense>
      </section>
    </>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
}