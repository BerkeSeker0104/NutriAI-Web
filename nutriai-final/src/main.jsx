import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import FeaturesPage from './pages/FeaturesPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import SinglePostPage from './pages/SinglePostPage.jsx';
import FaqPage from './pages/FaqPage.jsx'; // 1. Import et
import LegalPage from './pages/LegalPage.jsx'; // 2. Import et
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'hakkimizda', element: <AboutPage /> },
      { path: 'ozellikler', element: <FeaturesPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:slug', element: <SinglePostPage /> },
      { path: 'sss', element: <FaqPage /> }, // 3. Yeni rotayı ekle
      { path: 'yasal', element: <LegalPage /> }, // 4. Yeni rotayı ekle
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);