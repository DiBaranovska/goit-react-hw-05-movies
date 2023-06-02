import { useEffect, useState } from 'react';
import { useSearchParams} from 'react-router-dom';
import Loader from '../../components/loader';
import MoviestList from '../../components/moviesList/moviesList'
import css from '../movies/movies.module.css'

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const movieNameId = searchParams.get('movieName')

    
  const handleInputChange = event => {
    setMovieName(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (movieName.trim() === '') {
      return  setSearchParams({});
    }
    setSearchParams({ movieName });
  };

  useEffect(() => {
    if (movieNameId === null) {
      return setMovies(null)
    }
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieNameId}&include_adult=false&language=en-US&page=1`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmNkOTM1ZjZkZjQ5YTgwOWFjNzg0NTk2MmM3NGQ0ZCIsInN1YiI6IjY0NzMwN2E0YTE5OWE2MDBiZjI5ZTVlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.250sjm96Er0JgnZyU-7UbzMGl38okKHn9DWdgi3aWgA',
        },
      }
    )
      .then(res => {
        setMovieName(movieNameId)
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`The movie not found`));
      })
      .then(mov => {
        setMovies(mov.results);
      })
      .catch(error => {
        setError(error);
      })
      .finally(setLoading(false));
  }, [ movieNameId]);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      {loading && <Loader />}
      <form onSubmit={handleSubmit} className={css.movies_founder}>
        <input type="text" value={movieName} onChange={handleInputChange} className={css.movies_input}/>
        <button type="submit" className={css.movies_btn}>Search</button>
      </form>
    {movies && <MoviestList movies={movies} />}
    </>
  );
};

export default Movies;
