import React from 'react';

const Trust = () => {
  return (
    <section id="hakkimizda" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-dark">Seni Gerçekten Anlayan Bir Deneyim</h2>
          <p className="text-lg text-gray-600 mt-2">Çünkü kadın vücudu ve ihtiyaçları benzersizdir.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Kutu 1: Sadece Kadınlara Özel */}
          <div className="bg-brand-blue bg-opacity-20 p-8 rounded-2xl text-center">
            {/* SVG İkonu eklenebilir */}
            <h3 className="text-2xl font-bold text-brand-purple mb-4">Sadece Kadınlara Özel</h3>
            <p className="text-brand-dark">
              Kadın metabolizması ve hormonal döngüler standart çözümlerle anlaşılamaz. NutriAI, doğrudan kadın vücudunun ihtiyaçlarına odaklanarak tasarlandı ve regl döngünü analizine dahil eder.
            </p>
          </div>

          {/* Kutu 2: Diyetisyenler Tarafından Geliştirildi */}
          <div className="bg-brand-green bg-opacity-20 p-8 rounded-2xl text-center">
            {/* SVG İkonu eklenebilir */}
            <h3 className="text-2xl font-bold text-brand-purple mb-4">Diyetisyenler Tarafından Geliştirildi</h3>
            <p className="text-brand-dark">
              Uygulamamızın arkasındaki akıl, uzman diyetisyenlerin bilgisiyle eğitildi. Size sunulan her öneri, bilimsel temellere ve profesyonel deneyime dayanır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trust;