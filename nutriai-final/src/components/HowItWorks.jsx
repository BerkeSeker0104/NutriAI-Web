import React from 'react';

const HowItWorks = () => {
  return (
    <section id="nasil-calisir" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Başlık Bölümü */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark">3 Basit Adımda Sana Özel Beslenme Planı</h2>
          <p className="text-lg text-gray-600 mt-2">NutriAI ile bedenini anlamak hiç bu kadar kolay olmamıştı.</p>
        </div>

        {/* 3 Adım Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Adım 1 Kartı */}
          <div className="text-center p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-brand-purple text-white text-3xl font-bold">
                1
              </div>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-2">Anlat & Paylaş</h3>
            <p className="leading-relaxed text-base text-gray-700">
              Günün nasıl geçti? Ne yedin, ruh halin nasıldı ve döngünün hangi evresindesin? Birkaç saniyede günlüğünü doldur.
            </p>
          </div>

          {/* Adım 2 Kartı */}
          <div className="text-center p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-brand-purple text-white text-3xl font-bold">
                2
              </div>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-2">Dinle & Analiz Et</h3>
            <p className="leading-relaxed text-base text-gray-700">
              Yapay zekâmız, diyetisyen bilgileriyle eğitilmiş algoritması sayesinde verilerini anında yorumlasın ve sana özel içgörüler sunsun.
            </p>
          </div>

          {/* Adım 3 Kartı */}
          <div className="text-center p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-brand-purple text-white text-3xl font-bold">
                3
              </div>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-2">Dengele & İyi Hisset</h3>
            <p className="leading-relaxed text-base text-gray-700">
              Vücudunun o anki ihtiyacına özel, pratik ve lezzetli öğün önerileri al. Beslenme alışkanlığı kazanmak artık çok kolay.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;