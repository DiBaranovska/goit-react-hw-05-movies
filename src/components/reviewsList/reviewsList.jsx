import css from './reviewsList.jsx.module.css';
import PropTypes from 'prop-types';

const ReviewsList = ({ reviews }) => {
  let reviewResults = null;
  if (reviews.total_results === 0) {
    return (reviewResults = (
      <div className={css.reviews_text}>
        We don't have any reviews for this movie
      </div>
    ));
  } else {
    return (reviewResults = (
      <ul className={css.reviews_list}>
        {reviews.results.map(resalt => {
          return (
            <li key={resalt.id} className={css.reviews_item}>
              <h4>Autor: {resalt.author}</h4>
              <p className={css.reviews_content}> {resalt.content}</p>
            </li>
          );
        })}
      </ul>
    ));
  }
  return reviewResults;
};
export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.object.isRequired,
}