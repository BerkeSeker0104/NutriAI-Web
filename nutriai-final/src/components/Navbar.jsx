import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="NutriAI Logosu" className="h-8 w-auto" />
          <span className="font-bold text-2xl text-brand-purple">NutriAI</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-brand-purple font-semibold" : "text-gray-600 hover:text-brand-purple"}
          >
            Ana Sayfa
          </NavLink>
          <NavLink 
            to="/ozellikler" // Yeni linki ekledik
            className={({ isActive }) => isActive ? "text-brand-purple font-semibold" : "text-gray-600 hover:text-brand-purple"}
          >
            Özellikler
          </NavLink>
          <NavLink 
            to="/hakkimizda" 
            className={({ isActive }) => isActive ? "text-brand-purple font-semibold" : "text-gray-600 hover:text-brand-purple"}
          >
            Hakkımızda
          </NavLink>
          
          <Link to="/#kayit-formu" className="bg-brand-purple text-white py-2 px-4 rounded-lg hover:opacity-90">
            Erken Erişim
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;