import { useEffect, useState } from 'react';
import {getTrending} from '../../components/Fetch';
import css from './Home.module.css'
import {MovieList} from '../../components/MovieList/MovieList'

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
