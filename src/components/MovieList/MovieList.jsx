import css from '../MovieList/MovieList.module.css'
import {Link,useLocation} from 'react-router-dom'

export const MovieList = ({films}) => {
  const location = useLocation();


   return ( <ul className={css.movieList}>
          {films.map(film => (
            <li key={film.id} className={css.listItem}>
              <Link to={`/movies/${film.id}`} className={css.linkItem} state={{from: location}}>
                {film.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    alt={film.title}
                    className={css.imgItem}
                  ></img>
                ) : (
                  <img
                    className={css.errorImg}
                    src="https://i.gifer.com/C7Gr.gif"
                    alt="error"
                  ></img>
                )}
                <h2 className={css.titleItem}>{film.title}</h2>
                <p className={css.subtitleItem}>
                  Relase year: {film.release_date}
                </p>
              </Link>
            </li>
          ))}
        </ul>)
}
