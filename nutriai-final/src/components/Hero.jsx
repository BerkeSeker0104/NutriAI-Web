// src/components/Hero.jsx 

import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import appMockup from '../assets/mobil-sohbet.png'; 

const Hero = () => {
  return (
    <motion.section 
      className="bg-white text-brand-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Sol Taraf - Metinler ve Butonlar */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          
          <motion.h1 
            className="title-font sm:text-5xl text-4xl mb-4 font-bold text-brand-purple"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Typewriter
              options={{
                strings: ['Ruh halini anlat, bırak sofranı yapay zekâ kursun.'],
                autoStart: true,
                loop: false,
                delay: 50,
                cursor: '_',
              }}
            />
          </motion.h1>

          <motion.p 
            className="mb-8 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Yoğun tempoda ne yiyeceğini düşünme. NutriAI, ruh halini ve döngünü analiz eder, 
            <span className="font-semibold"> uzman diyetisyenlerin onayıyla</span> sana özel öneriler sunar.
          </motion.p>

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <a href="#nasil-calisir" className="inline-flex text-white bg-brand-green border-0 py-3 px-8 focus:outline-none hover:bg-green-500 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow">
              Hemen Keşfet
            </a>
            <a href="#kayit-formu" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-3 px-8 focus:outline-none hover:bg-gray-200 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow">
              Kurucu Üye Ol
            </a>
          </motion.div>
        </div>

        {/* Sağ Taraf - Görsel */}
        <motion.div 
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
        >
          <img 
            className="object-cover object-center rounded-2xl shadow-2xl" 
            alt="NutriAI uygulama ekranı" 
            src={appMockup} 
          />
        </motion.div>
      </div>
    </motion.section>
  );
}


export default Hero;