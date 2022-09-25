import { useEffect, useState } from 'react';
import getSearchMovies from '../../components/Fetch';
import css from '../movies/Movies.module.css';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getSearchMovies(query);
    setQuery('');
  };

//   useEffect(() => {
//     if (query === '') {
//       return;
//     }
//     getSearchMovies(query).then(data => {
//       setFilms(data.results);
//     });
//   }, [films, query]);

  return (
    <header>
      <form onSubmit={handleSubmit}>
         <input
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
    </header>
  );
};

export default Movies;
