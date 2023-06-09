import css from './castList.module.css';
import PropTypes from 'prop-types';
import defaultImg from '../../images/unknown-person.jpg';

const CastList = ({ cast }) => {
  if (cast.length === 0) {
    return (<div className={css.cast}>Cast info not found</div>);
  } else {
    return (
      <ul className={css.cast}>
        {cast.map(({ id, profile_path, name, character }) => {
          let imgUrl = null;
          if (profile_path === null) {
            imgUrl = `${defaultImg}`;
          } else {
            imgUrl = `https://image.tmdb.org/t/p/w500${profile_path}`;
          }
          return (
            <li key={id}>
              <img
                className={css.cast_img}
                src={imgUrl}
                alt={`foto by ${name}`}
              />
              <div>
                <p className={css.cast_name}>{name}</p>
                <p className={css.cast_character}>{`Character: ${character}`}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default CastList;

CastList.propTypes = {
  cast: PropTypes.array.isRequired,
};
