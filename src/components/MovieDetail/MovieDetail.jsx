import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDetailsMovies } from '../Fetch';
import css from '../MovieDetail/MovieDetail.module.css'

const MovieDetail = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const lastLocation = location.state?.from ?? '/' 
  

  useEffect(() => {
    getDetailsMovies(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    return;
  }
  return (
    <>
      <Link to={lastLocation}>Go back</Link>
      <div className={css.movieSection}>{movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className={css.imgMain}
                  ></img>
                ) : (
                  <img
                     className={css.imgError}
                    src="https://i.gifer.com/C7Gr.gif"
                    alt="error"
        ></img>)}
        <ul className={css.movieInfo}>
          <h2>{movie.title}</h2>
          <p>Rating: {movie.vote_average.toFixed(1)}</p>
          <p>Runtime: {movie.runtime} min</p>
          <p>Budget: { movie.budget}$</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          {movie.genres.map(res => <p>{res.name}</p>)}
        </ul>
      </div>
  
      <ul className={css.subMenu}>
        <li>
          <Link  to="cast" className={css.subMenuLink}>
            Cast
          </Link>
        </li>
        <li>
          <Link  to="reviews" className={css.subMenuLink}>
            Review
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetail;
