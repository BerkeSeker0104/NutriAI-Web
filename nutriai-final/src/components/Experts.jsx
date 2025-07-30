// src/components/Experts.jsx - DÜZELTİLMİŞ KOD

import React from 'react';
import { motion } from 'framer-motion'; 

const CheckIcon = () => (
  <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const Experts = () => {
  return (
    // 'section' etiketini 'motion.section' olarak değiştirdik ve animasyonları ekledik
    <motion.section 
      className="bg-white py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-brand-dark">Bilim ve Teknolojinin Buluştuğu Yer</h2>
        <p className="text-lg text-gray-600 mt-2 mb-12">
          NutriAI'nin arkasındaki her öneri, alanında uzman diyetisyenlerin bilgisiyle şekillendirildi.
        </p>
        <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          <div className="flex items-center gap-3">
            <CheckIcon />
            <span className="text-xl font-semibold text-gray-700">Dyt. Selin Küçükyıldız</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckIcon />
            <span className="text-xl font-semibold text-gray-700">Dyt. Aylin Şaşmaz</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Experts;