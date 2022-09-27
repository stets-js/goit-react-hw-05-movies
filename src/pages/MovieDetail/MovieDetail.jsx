import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDetailsMovies } from '../../Services/MoviesAPi';
import css from '../MovieDetail/MovieDetail.module.css'
import nextId from "react-id-generator";

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
      <Link to={lastLocation} ><button className={css.btn}>Go back</button></Link>
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
          <h2 key="title">{movie.title}</h2>
          <p key="rating">Rating: {movie.vote_average.toFixed(1)}</p>
          <p key="runtime">Runtime: {movie.runtime} min</p>
          <p key="budget">Budget: { movie.budget}$</p>
          <h3 key="overviewTitle">Overview</h3>
          <p key="overview">{movie.overview}</p>
          <h3 key="genres">Genres</h3>
          {movie.genres.map(res => <p key={nextId()}>{res.name}</p>)}
        </ul>
      </div>
  
      <ul className={css.subMenu}>
        <li>
          <Link  key='cast' to="cast" className={css.subMenuLink}>
            Cast
          </Link>
        </li>
        <li>
          <Link key='reviews' to="reviews" className={css.subMenuLink}>
            Review
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetail;
