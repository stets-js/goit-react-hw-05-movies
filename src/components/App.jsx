import {Route, Routes} from 'react-router-dom'
import Layout from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='home' element={<div>Home Trends</div>}></Route>
        <Route path='movies' element={<div>Search movies</div>}>
          <Route path=':movieId' element={<div>Movie detail</div>}>
            <Route path='cast' element={<div>Movie cast</div>}></Route>
            <Route path='reviews' element={<div>Movie reviews</div>}></Route>
          </Route>
        </Route>
      </Route>
   </Routes>
  );
};
