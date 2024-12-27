import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initializePlaces } from './redux/placesSlice';
import { ROUTE, dummyPlaces } from './utils/constant';
import './App.css';
import LoadingFallback from './components/LoadingFallback';
import Header from './layout/Header';

// Lazy-loaded components
const ListScreen = lazy(() => import('./features/list/ListScreen'));
const DetailScreen = lazy(() => import('./features/detail/DetailScreen'));
const Error404 = lazy(() => import('./components/Error404'));

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Initialize dummy data
    dispatch(initializePlaces(dummyPlaces));
  }, [dispatch]);

  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Header />
        <Routes>
          <Route path={ROUTE.DEFAULT} element={<ListScreen />} />
          <Route path={ROUTE.DETAIL} element={<DetailScreen />} />
          <Route path={ROUTE.NOT_FOUND} element={<Error404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
