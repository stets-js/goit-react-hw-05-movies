import { useEffect, useState } from 'react';
import getTrending from '../../components/Fetch';
import css from './Home.module.css'

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrending().then(data => setFilms(data.results));
  }, []);

    return (
        <>
      <h1 className={css.heroTitle}>WEEK TRENDS</h1>
    <ul className={css.movieList}>
      {films.map(film => (
        <li key={film.id} className={css.listItem}>
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.title}
                  className={css.imgItem}
          ></img>
              <h2 className={css.titleItem}>{film.title}</h2>
              <p className={css.subtitleItem}>Relase year: {film.release_date}</p>
        </li>
      ))}
    </ul>
</>
  );
};

export default Home;
