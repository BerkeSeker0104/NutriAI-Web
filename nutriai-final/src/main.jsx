import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import './index.css';

// Hangi URL'de hangi sayfanın gösterileceğini belirleyen yapı
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Ana layout (Navbar ve Footer'ı içerir)
    children: [
      {
        index: true, // Ana sayfa (/)
        element: <HomePage />,
      },
      {
        path: 'hakkimizda', // "/hakkimizda" URL'i
        element: <AboutPage />,
      },
      // İleride buraya /ozellikler, /blog gibi yeni sayfalar eklenecek
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);