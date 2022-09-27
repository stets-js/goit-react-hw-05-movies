import { useEffect, useState } from 'react';
import {getTrending} from '../../Services/MoviesAPi';
import css from './Home.module.css'
import {MovieList} from '../MovieList/MovieList'

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrending().then(data => setFilms(data.results));
  }, []);

    return (
        <>
      <h1 className={css.heroTitle}>WEEK TRENDS</h1>
        <MovieList films={films} />
</>
  );
};

export default Home;
