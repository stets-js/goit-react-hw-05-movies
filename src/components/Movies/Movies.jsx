//import { useEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../../Services/MoviesAPi';
import {MovieList} from '../MovieList/MovieList'
import css from './Movies.module.css';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');
  let [queryParams, setQueryParams] = useSearchParams();
  const lastQuery = queryParams.get('query') ?? '';

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    
    e.preventDefault();
    if (!query) {
      alert('Please enter movie');
      return;
    }
    setQueryParams({ query })
    getSearchMovies(query).then(res => setFilms(res.results));
    setQuery('');
  };

  useEffect(() => {
    if (lastQuery) {
      getSearchMovies(lastQuery).then(res => setFilms(res.results))
    }
}, [lastQuery])


  return (
    <>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.inputForm}
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search movie..."
          value={query}
          onChange={handleChange}
        />
        <button className={css.btn}>Search</button>
      </form>

      {films.length > 0 ? ( <MovieList films={films} />) : null}
    </>
  );
};

export default Movies;
