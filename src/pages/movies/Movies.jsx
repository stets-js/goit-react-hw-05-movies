import { useEffect } from 'react';
import { useState } from 'react';
import {getSearchMovies} from '../../components/Fetch';
import css from '../movies/Movies.module.css';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
      e.preventDefault();
      if (!query) {
          alert('Enter movie')
          return
      }
    getSearchMovies(query).then( res=> setFilms(res.results));
    setQuery('');
  };

    useEffect(() => {
        <h1>list</h1>
    },[films, query])
    

    return (
      <>
    <header>
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
            </header>
        {films.length > 0 ? <ul className={css.movieList}>
      {films.map(film => (
        <li key={film.id} className={css.listItem}>
              {film.poster_path ? <img
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.title}
                  className={css.imgItem}
              ></img> : <img className={css.errorImg} src='https://i.gifer.com/C7Gr.gif' alt='error'></img>}
              <h2 className={css.titleItem}>{film.title}</h2>
              <p className={css.subtitleItem}>Relase year: {film.release_date}</p>
        </li>
      ))}
    </ul> : null }    
        </>
  );
};

export default Movies;
