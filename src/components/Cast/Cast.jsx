import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovies } from '../Fetch';
//import css from '../Cast/Cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  console.log(cast);

  useEffect(() => {
    getCastMovies(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
            <ul>
          {cast.map(item =>
              <li key={item.id}>
                  <img
                      src={
                          item.profile_path
                              ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                              : 'https://i.gifer.com/C7Gr.gif'
                      }
                      alt={item.name}
                  />
                  <h3>{item.name}</h3>
                  <p>Character: {item.character}</p>
              </li>
          )}
        </ul>
  );
};
export default Cast;
