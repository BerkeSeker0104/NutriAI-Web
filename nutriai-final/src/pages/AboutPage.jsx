import React from 'react';
import { motion } from 'framer-motion';

const TeamMemberCard = ({ name, role, imageUrl, bio }) => (
  <motion.div 
    className="text-center bg-white p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <img 
      src={imageUrl} 
      alt={`Fotoğraf: ${name}`} 
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-xl font-bold text-brand-purple">{name}</h3>
    <p className="text-md text-gray-500 mb-2">{role}</p>
    <p className="text-sm text-gray-700">{bio}</p>
  </motion.div>
);

const AboutPage = () => {
  return (
    <div className="py-16 md:py-24">
      {/* Hikaye Bölümü */}
      <section className="container mx-auto px-6 text-center mb-20">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-brand-dark mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Bu Yolculuğa Neden Çıktık?
        </motion.h1>
        <motion.p 
          className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          "Keşke ruh halimi ve günlük ihtiyaçlarımı anlayıp bana gerçekçi öneriler sunan bir uygulama olsa..." Bu basit düşünce, NutriAI'nin doğuş kıvılcımı oldu. Yoğun tempoda sağlıklı beslenmenin zorluğunu ve diyetisyen desteğine ulaşmanın maliyetini biliyoruz. Amacımız, yapay zekayı empatiyle birleştirerek her kadının kendi bedenini daha iyi anlamasını ve iyi hissettiren besinleri kolayca hayatına dahil etmesini sağlamak.
        </motion.p>
      </section>

      {/* Ekip Bölümü */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-brand-dark mb-12">Ekibimizle Tanışın</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMemberCard 
              name="Damla Kaya" 
              role="İş Geliştirme" 
              imageUrl="https://placehold.co/200x200/A2D2FF/FFFFFF?text=DK"
              bio="Stratejik vizyonuyla NutriAI'nin büyüme yolculuğuna liderlik ediyor."
            />
            <TeamMemberCard 
              name="Berke Şeker" 
              role="Full Stack Geliştirici" 
              imageUrl="https://placehold.co/200x200/7ED957/FFFFFF?text=BŞ"
              bio="Fikirleri koda dökerek, kullanıcı dostu ve sağlam bir platform inşa ediyor."
            />
            <TeamMemberCard 
              name="Gamze Kaya" 
              role="Pazarlama" 
              imageUrl="https://placehold.co/200x200/A2D2FF/FFFFFF?text=GK"
              bio="NutriAI'nin hikayesini ve değerini doğru kitlelere ulaştırıyor."
            />
            <TeamMemberCard 
              name="Efehan Hüsrevoğlu" 
              role="Yapay Zekâ & Backend" 
              imageUrl="https://placehold.co/200x200/7ED957/FFFFFF?text=EH"
              bio="Uygulamanın beynini oluşturan akıllı algoritmaları ve altyapıyı geliştiriyor."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;