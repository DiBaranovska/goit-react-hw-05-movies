import { useEffect, useRef, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import css from './movieDetails.module.css'
import Loader from '../../components/loader';
import MovieItem from '../movieItem/movieItem';

const MovieDetails = () => {
  const { movieID } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const locationLink = useRef(location.state?.from ?? '/movies')

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, {
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
        return Promise.reject(new Error(`Movie not found`));
      })
      .then(movie => {
        setMovie(movie);
      })
      .catch(error => {
        setError(error);
      })
      .finally(setLoading(false));
  }, [movieID]);

  return (
    <div className={css.conteiner}>
      <Link to={locationLink.current} className={css.backBtn}>Go back</Link>
      {error && <h1>{error.message}</h1>}
      {loading && <Loader />}
      {movie && <MovieItem movie={movie} />}
    </div>
  );
};

export default MovieDetails;
