import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import appMockup from '../assets/mobil-sohbet.png';

// İkonların rengini yeni temamızdan alacak şekilde güncelledim.
// Artık daha yumuşak ve arka planla uyumlu bir tondalar.
const FloatingIcon = ({ icon, className, animation }) => (
  <motion.div
    className={`absolute z-0 text-primary/20 hidden md:block ${className}`} // 'text-brand-blue/40' yerine 'text-primary/20' kullandım.
    initial={{ y: 0, x: 0, rotate: 0 }}
    animate={animation.animate}
    transition={animation.transition}
  >
    {icon}
  </motion.div>
);

// --- İkon Bileşenleri (Değişiklik yok) ---
const AppleIcon = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M17.23,20.3c-1.07,0-2.13-0.53-2.7-1.59c-0.87-1.6-0.67-3.64,0.53-5.33c0.7-1,1.77-1.59,2.7-1.59c0.1,0,0.2,0,0.3,0c-0.5-1.7-1.9-2.8-3.5-2.8c-1.2,0-2.5,0.8-3.3,0.8s-2.1-0.8-3.3-0.8c-2.1,0-4,1.7-4,4.5c0,2.8,2.2,6.8,4.2,9.3C11.23,22.4,12.33,23,13.53,23c1.2,0,1.6-0.5,3-0.5s1.7,0.5,3,0.5c1.2,0,2.3-0.6,3-1.7c-1.1-0.7-2.4-1.5-3.8-1.5H17.23z M14.23,2.8c0.6-0.8,1-1.8,0.8-2.8c-0.8,0-1.9,0.5-2.6,1.3c-0.6,0.7-1.1,1.8-0.9,2.7C12.33,4,13.53,3.5,14.23,2.8z"/></svg>
);
const BroccoliIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6,9.1c-0.3-0.6-0.8-1-1.4-1.2c-0.9-0.3-1.8-0.1-2.7,0.3c-0.5,0.2-1,0.5-1.4,0.9c-0.3,0.3-0.6,0.6-0.8,1c-0.5,0.6-1.2,1-2,1c-0.8,0-1.5-0.4-2-1c-0.2-0.4-0.5-0.7-0.8-1c-0.4-0.4-0.9-0.7-1.4-0.9c-0.9-0.4-1.8-0.6-2.7-0.3c-0.6,0.2-1.1,0.6-1.4,1.2C2.1,10.1,2,11.2,2.4,12.2c0.3,0.8,0.8,1.4,1.5,1.9c0.5,0.3,1,0.5,1.5,0.7v3.6c0,1.1,0.9,2,2,2h7c1.1,0,2-0.9,2-2v-3.6c0.5-0.2,1-0.4,1.5-0.7c0.7-0.5,1.2-1.1,1.5-1.9C22,11.2,21.9,10.1,19.6,9.1z"/></svg>
);
const CarrotIcon = () => (
    <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5,12.5c-0.3,0-0.5-0.1-0.7-0.3l-1.8-1.8c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.8,1.8c0.4,0.4,0.4,1,0,1.4C21,12.4,20.8,12.5,20.5,12.5z M17.5,9.5c-0.3,0-0.5-0.1-0.7-0.3l-1.8-1.8c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.8,1.8c0.4,0.4,0.4,1,0,1.4C18,9.4,17.8,9.5,17.5,9.5z M4.5,21.5c-0.8,0-1.5-0.3-2.1-0.9C1.2,19.4,1.1,17.6,2,16l4-8c1.3-2.6,4-4.4,7-4.9c2.5-0.4,5,0.3,6.9,2.1c1.5,1.5,2.3,3.5,2.1,5.6c-0.3,2.5-1.7,4.7-3.8,6.2C16.5,22.5,14.5,23,12.5,23c-2.7,0-5.4-1.1-7.3-3l-0.7,1.4c-0.3,0.6-0.9,1-1.5,1H4.5z M18.1,6.9c-1.4-1.3-3.2-1.8-5.1-1.5c-2.2,0.4-4.3,1.9-5.4,4l-4,8C3,18,3,18.5,3.4,18.9c0.4,0.4,1,0.4,1.4,0l0.7-1.4c0.3-0.6,1-0.8,1.6-0.5c2.3,1.1,5,0.7,6.9-1.1c1.8-1.8,2.5-4.3,1.9-6.7c-0.1-0.3-0.1-0.6,0-0.9C16.8,6.4,17.4,6.5,18.1,6.9z"/></svg>
);
// --- İkon Bileşenleri Sonu ---


const Hero = () => {
  return (
    // Arka planı ve ana metin rengini yeni temadan alıyoruz.
    <section className="relative bg-base-100 text-base-content overflow-hidden">
      
      <FloatingIcon 
        icon={<AppleIcon />} 
        className="top-10 left-5 md:left-10"
        animation={{
          animate: { y: [0, -20, 0], rotate: [0, 10, 0] },
          transition: { duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
        }}
      />
      <FloatingIcon 
        icon={<BroccoliIcon />} 
        className="bottom-20 right-5"
        animation={{
          animate: { y: [0, 25, 0], rotate: [0, -15, 0] },
          transition: { duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
        }}
      />
       <FloatingIcon 
        icon={<CarrotIcon />} 
        className="top-1/2 -left-2"
        animation={{
          animate: { y: [0, -15, 0], rotate: [0, 20, 0] },
          transition: { duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
        }}
      />

      <div className="container relative z-10 mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <motion.h1 
            // Ana başlık rengini 'text-brand-purple' yerine 'text-primary' yaptık.
            className="title-font sm:text-5xl text-4xl mb-4 font-bold text-primary"
          >
            <Typewriter
              options={{
                strings: ['Ruh halini anlat, bırak sofranı yapay zekâ kursun.'],
                autoStart: true,
                loop: false,
                delay: 50,
                deleteSpeed: Infinity,
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
            <span className="font-semibold text-primary"> uzman diyetisyenlerin onayıyla</span> sana özel öneriler sunar.
          </motion.p>

          {/* --- YENİ RENK PALETİNE GÖRE DÜZENLENMİŞ BUTONLAR --- */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {/* Ana Buton (Primary Action) */}
            <a 
              href="#nasil-calisir" 
              className="inline-block bg-primary text-primary-content hover:bg-primary-focus focus:outline-none rounded-lg text-lg font-semibold py-3 px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Hemen Keşfet
            </a>
            {/* İkincil Buton (Secondary Action) */}
            <a 
              href="#kayit-formu" 
              className="inline-block bg-base-200 text-base-content hover:bg-base-300 focus:outline-none rounded-lg text-lg font-semibold py-3 px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Kurucu Üye Ol
            </a>
          </motion.div>
          {/* --- BUTON BÖLÜMÜ SONU --- */}
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <motion.img 
            className="object-contain object-center rounded-2xl shadow-2xl w-full h-auto max-h-[480px] md:max-h-[560px] mx-auto" 
            alt="NutriAI uygulama ekranı" 
            src={appMockup}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
