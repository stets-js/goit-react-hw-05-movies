import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout';
//import Home from '../pages/home/Home'
import Movies from '../pages/Movies/Movies'
//import MovieDetail from '../components/MovieDetail/MovieDetail'
import Cast from '../pages/Cast/Cast';
import Reviews from '../pages/Reviews/Reviews';

const Home = lazy(() => import('../pages/Home/Home'));
//const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetail = lazy(() => import('../pages/MovieDetail/MovieDetail'));


export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<h2 style={{ color: "white", }}>Loading ...</h2>}>
    <Routes>
          <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/movies/:movieId' element={<MovieDetail />}>
          <Route path='cast' element={<Cast />}></Route>
          <Route path='reviews' element={<Reviews />}></Route>
          </Route>
      </Routes>
      </Suspense>
        
      
    </Layout>
  );
};
