import React from 'react';
// 1. Kendi görselimizi assets klasöründen import ettik
import appMockup from '../assets/mobil-sohbet.png'; 

const Hero = () => {
  return (
    <section className="bg-white text-brand-dark">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Sol Taraf - Metinler ve Butonlar */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-brand-purple">
            Döngünle Uyumlu Beslen,
            <br />
            İyi Hisset.
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            NutriAI; regl döngünü, ruh halini ve alışkanlıklarını analiz eden, 
            <span className="font-semibold"> diyetisyenler tarafından geliştirilmiş</span> yapay zekâ beslenme koçundur.
          </p>
          <div className="flex justify-center">
            <a href="#nasil-calisir" className="inline-flex text-white bg-brand-green border-0 py-3 px-8 focus:outline-none hover:bg-green-500 rounded-lg text-lg font-semibold">
              Hemen Keşfet
            </a>
            <a href="#kayit-formu" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-3 px-8 focus:outline-none hover:bg-gray-200 rounded-lg text-lg font-semibold">
              Kurucu Üye Ol
            </a>
          </div>
        </div>

        {/* Sağ Taraf - Görsel */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* 2. Placeholder'ı kendi görselimizle değiştirdik */}
          <img 
            className="object-cover object-center rounded-2xl shadow-2xl" 
            alt="NutriAI uygulama ekranı" 
            src={appMockup} 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;