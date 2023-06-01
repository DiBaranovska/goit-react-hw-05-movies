import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './loader';
import ReviewsList from './reviewsList/reviewsList';

const Reviews = () => {
  const { movieID } = useParams();

  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/reviews?language=en-US&page=1`,
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
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(
          new Error(`We don't have any reviews for this movie`)
        );
      })
      .then(review => {
        setReviews(review);
      })
      .catch(error => {
        setError(error);
      })
      .finally(setLoading(false));
  }, [movieID]);

  return (
    <>
      {error && <h1>{error.message}</h1>}
      {loading && <Loader />}
      {reviews && <ReviewsList reviews={reviews} />}
    </>
  );
};

export default Reviews;
