import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main>
        {/* URL'e göre ilgili sayfa (HomePage, AboutPage vb.) burada gösterilecek */}
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;