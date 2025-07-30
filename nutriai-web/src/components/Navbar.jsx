import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={logo} alt="NutriAI Logosu" className="h-8 w-auto mr-2" />
            <span className="font-bold text-xl text-brand-purple">NutriAI</span>
          </a>
          {/* Diğer navbar öğeleri buraya gelebilir */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;