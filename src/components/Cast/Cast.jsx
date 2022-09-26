import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovies } from '../Fetch';
import css from '../Cast/Cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();
    const [cast, setCast] = useState(null);


  useEffect(() => {
    getCastMovies(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <ul className={css.castList}>
          {cast ? cast.map(item => <li className={css.castItem}>
              {item.profile_path ? <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt={item.name} className={css.castImg} /> : <img src={'https://i.gifer.com/C7Gr.gif'}  alt={item.name} className={css.errorImg} />}
              <div className={css.actorInfo}>
                  <h2>{item.name}</h2>
              <p>Character: { item.character}</p>
              </div>
    </li>): null}      
    </ul>
  );
};
export default Cast;
