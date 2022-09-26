import {Route, Routes} from 'react-router-dom'
import Layout from './Layout/Layout';
import Home from '../pages/home/Home'
import Movies from '../pages/movies/Movies'
import MovieDetail from '../components/MovieDetail/MovieDetail'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='home' element={<Home />}></Route>
        <Route path='movies' element={<Movies />}>
          <Route path=':movieId' element={<MovieDetail />}>
            <Route path='cast' element={<div>Movie cast</div>}></Route>
            <Route path='reviews' element={<div>Movie reviews</div>}></Route>
          </Route>
        </Route>
      </Route>
   </Routes>
  );
};
