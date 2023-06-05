import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from '../../pages/home/home.module.css'
import defaultImg from '../../images/movie-poster-coming-soon-2.jpg';

const MoviestList = ({ movies }) => {
    const location = useLocation();
    if (movies.length === 0) {
        return (<div>Movies not found</div>);
    } else if (movies === null) { return}
    else {
        return (
            <ul className={css.movies_list}>
                {movies.map(movie => {
                let imgUrl = null;
                    if (movie.poster_path === null) {
                    imgUrl = `${defaultImg}`;
                    } else {
                    imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                    }
                    return (
                        <li key={movie.id} className={css.movies_list_item}>
                            <Link to={`${movie.id}`}
                                state={{ from: location }}
                                className={css.movies_list_item}>
                                <img src={imgUrl}
                                    alt={css.original_title}
                                    className={css.movies_list_img}>
                                </img><span className={css.movies_list_name}>
                                {movie.original_title}</span></Link>
                        </li>
                    );
                })}
            </ul>
        )
    }
}

export default MoviestList;

MoviestList.propTypes = {
  movies: PropTypes.array.isRequired,
}