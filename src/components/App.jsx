import {Route, Routes} from 'react-router-dom'
import Layout from './Layout/Layout';
import Home from '../pages/home/Home'
import Movies from '../pages/movies/Movies'
import MovieDetail from '../components/MovieDetail/MovieDetail'
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <Layout>
    <Routes>
      <Route path='/' element={<Home />} ></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/movies/:movieId' element={<MovieDetail />}>
          <Route path='cast' element={<Cast />}></Route>
          <Route path='reviews' element={<Reviews />}></Route>
        </Route>
        
      
      </Routes>
    </Layout>
  );
};
