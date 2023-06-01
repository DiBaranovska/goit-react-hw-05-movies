import { useEffect, useState } from 'react';
import css from './home.module.css';
import Loader from '../../components/loader';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmNkOTM1ZjZkZjQ5YTgwOWFjNzg0NTk2MmM3NGQ0ZCIsInN1YiI6IjY0NzMwN2E0YTE5OWE2MDBiZjI5ZTVlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.250sjm96Er0JgnZyU-7UbzMGl38okKHn9DWdgi3aWgA',
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Trending movies not found`));
      })
      .then(movie => {

        setMovies(state => {
          return [...movie.results];
        });
      })
      .catch(error => {
        setError(error);
      })
      .finally(setLoading(false));
  }, []);

  return (
    <div>
      {error && <h1>{error.message}</h1>}
      {loading && <Loader />}
      <h1 className={css.movies_list_title}>Trending today</h1>
      <ul className={css.movies_list}>
        {movies.map(movie => {
          return (
            <li key={movie.id} >
              <Link to={`movies/${movie.id}`}
                state={{ from: location }}
                className={css.movies_list_item}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={css.movies_list_item} className={css.movies_list_img}></img>
                <span className={css.movies_list_name}>{movie.original_title}</span>
                </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
