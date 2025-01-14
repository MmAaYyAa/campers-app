import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const CamperDetailsPage = lazy(() =>
  import('../pages/CamperDetailsPage/CamperDetailsPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
  <>
    <Routes>
    <Route path="/" element={<Layout />}>
         <Route index element={<HomePage />} />
         <Route path="catalog" element={<CatalogPage />}/>
         <Route path="catalog/:id" element={<CamperDetailsPage />}/>
         <Route path="*" element={<NotFoundPage />} />
        </Route>
        </Routes>
    </>
  );
};

export default App;
