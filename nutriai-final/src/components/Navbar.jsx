import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src={logo} alt="NutriAI Logosu" className="h-8 w-auto" />
          <span className="font-bold text-2xl text-brand-purple">NutriAI</span>
        </a>
        
        {/* İleride eklenecek menü linkleri için placeholder */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#nasil-calisir" className="text-gray-600 hover:text-brand-purple">Nasıl Çalışır?</a>
          <a href="#hakkimizda" className="text-gray-600 hover:text-brand-purple">Hakkımızda</a>
          <a href="#kayit-formu" className="bg-brand-purple text-white py-2 px-4 rounded-lg hover:opacity-90">
            Erken Erişim
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;