import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Her bir özelliği göstermek için yeniden kullanılabilir bir bileşen
// 'imageSide' prop'u ile resmin sağda mı solda mı olacağını kontrol ediyoruz
const FeatureSection = ({ title, description, imageUrl, imageAlt, imageSide = 'right' }) => {
  const imageOrder = imageSide === 'right' ? 'md:order-last' : '';

  return (
    <div className="container mx-auto flex px-5 py-16 md:py-24 md:flex-row flex-col items-center">
      <div className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ${imageOrder}`}>
        <motion.img
          className="object-cover object-center rounded-2xl shadow-xl"
          alt={imageAlt}
          src={imageUrl}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <motion.h2 
          className="title-font sm:text-4xl text-3xl mb-4 font-bold text-brand-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="mb-8 leading-relaxed text-lg text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

const FeaturesPage = () => {
  return (
    <div className="bg-white">
      {/* Sayfa Başlığı */}
      <section className="text-center py-16 md:py-24 bg-gray-50">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-brand-purple"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          NutriAI'nin Gücünü Keşfet
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Sadece bir uygulama değil, seni anlayan kişisel beslenme koçun.
        </motion.p>
      </section>

      {/* Özellikler */}
      <FeatureSection
        title="Yapay Zekâ Destekli Kişisel Analiz"
        description="NutriAI ile sohbet ederek gününü anlat. Akıllı algoritmamız, ruh halini, enerji seviyeni ve yediklerini analiz ederek sana özel, anlık geri bildirimler ve içgörüler sunar. 'Bugün biraz streslisin, magnezyum zengini bir ara öğüne ne dersin?' gibi önerilerle gününü dengeler."
        imageUrl="https://placehold.co/600x400/A2D2FF/FFFFFF?text=Sohbet+Ekranı"
        imageAlt="Yapay zeka sohbet ekranı"
        imageSide="right"
      />

      <div className="bg-gray-50">
        <FeatureSection
          title="Döngüsel Beslenme ve Ruh Hali Takibi"
          description="Regl döngünün her evresi, vücudunun farklı besinlere ihtiyaç duymasına neden olur. NutriAI, döngünü ve ruh halini takip ederek hormonal dengeni destekleyecek, enerjini yükseltecek ve semptomlarını hafifletecek kişiselleştirilmiş beslenme stratejileri oluşturur."
          imageUrl="https://placehold.co/600x400/7ED957/FFFFFF?text=Döngü+Takvimi"
          imageAlt="Regl döngüsü takip ekranı"
          imageSide="left"
        />
      </div>

      <FeatureSection
        title="Hedef ve İlerleme Grafikleri"
        description="Beslenme alışkanlıklarını somut verilerle gör. Günlük ve haftalık karbonhidrat, protein, yağ alımını anlaşılır grafiklerle takip et. Hedeflerine ne kadar yaklaştığını görerek motivasyonunu her zaman yüksek tut."
        imageUrl="https://placehold.co/600x400/A2D2FF/FFFFFF?text=Grafik+Ekranı"
        imageAlt="İlerleme grafikleri ekranı"
        imageSide="right"
      />
      
      {/* Son CTA Bölümü */}
      <section className="bg-gray-50">
        <div className="container mx-auto text-center py-20">
          <h2 className="text-3xl font-bold text-brand-dark">Değişime Hazır mısın?</h2>
          <p className="text-lg text-gray-600 my-4">Kendi bedeninin uzmanı olmak için ilk adımı at.</p>
          <Link to="/#kayit-formu" className="inline-block bg-brand-green text-white font-bold py-3 px-10 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 shadow-lg">
            Erken Erişime Katıl
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
