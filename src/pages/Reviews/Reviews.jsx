import { getRewiesMovies } from '../../Services/MoviesAPi'
import { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'
import css from '../Reviews/Reviews.module.css'

export const Reviews = () => {

const { movieId } = useParams();
  const [review, setReview] = useState([]);
  

  useEffect(() => {
    getRewiesMovies(movieId).then(data => {
      setReview(data.results);
    });
  }, [movieId]);

  if (review.length === 0 ) {
    return <><p className={css.errorReviews}>Sorry, no reviews yet</p></>;
  }

    return <ul className={css.reviewsList}>
          {review.map(item => {
            return (
              <li key={item.id} className={css.reviewsItem}>
                    <h3>Author: {item.author_details.name ? item.author_details.name : 'Anonymus'}</h3>
                    <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
    }
export default Reviews