import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import FeaturesPage from './pages/FeaturesPage.jsx';
import BlogPage from './pages/BlogPage.jsx'; // 1. Import et
import SinglePostPage from './pages/SinglePostPage.jsx'; // 2. Import et
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'hakkimizda', element: <AboutPage /> },
      { path: 'ozellikler', element: <FeaturesPage /> },
      { path: 'blog', element: <BlogPage /> }, // 3. Ana blog rotası
      { path: 'blog/:slug', element: <SinglePostPage /> }, // 4. Tekil yazı rotası
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);