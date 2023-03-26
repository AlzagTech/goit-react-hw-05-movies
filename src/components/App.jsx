import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));

const Layout = lazy(() => import('./Layout/Layout'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetalis'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
