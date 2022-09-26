import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout';
//import Home from '../pages/home/Home'
//import Movies from '../pages/movies/Movies'
//import MovieDetail from '../components/MovieDetail/MovieDetail'
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const Home = lazy(() => import('../pages/home/Home'));
const Movies = lazy(() => import('../pages/movies/Movies'));
const MovieDetail = lazy(() => import('../components/MovieDetail/MovieDetail'));


export const App = () => {
  return (
    <Layout>
    <Routes>
      <Route path='/' element={<Suspense fallback={<h2>Loading ...</h2>}><Home /></Suspense>} ></Route>
        <Route path='/movies' element={<Suspense fallback={<h2>Loading ...</h2>}><Movies /></Suspense>}></Route>
        <Route path='/movies/:movieId' element={<Suspense fallback={<h2>Loading ...</h2>}><MovieDetail /></Suspense>}>
          <Route path='cast' element={<Cast />}></Route>
          <Route path='reviews' element={<Reviews />}></Route>
        </Route>
        
      
      </Routes>
    </Layout>
  );
};
