import React from 'react';

const LegalPage = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-3xl prose lg:prose-lg">
        <h1>Yasal Bilgilendirme</h1>
        
        <h2>Gizlilik Politikası</h2>
        <p>
          <strong>Son Güncelleme: 30 Temmuz 2025</strong>
        </p>
        <p>
          NutriAI olarak gizliliğinize saygı duyuyoruz. Bu politika, hangi verileri topladığımızı, bu verileri nasıl kullandığımızı ve haklarınızın neler olduğunu açıklamaktadır.
        </p>
        <p>
          [Buraya detaylı gizlilik politikası metni eklenecektir. Bir hukuk danışmanından destek almanız önerilir.]
        </p>
        
        <hr className="my-8" />

        <h2>Kullanım Koşulları ve KVKK Aydınlatma Metni</h2>
        <p>
          NutriAI uygulamasını ve web sitesini kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız. Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca hazırlanan aydınlatma metnimiz, kişisel verilerinizin işlenme süreçleri hakkında sizi bilgilendirir.
        </p>
        <p>
          [Buraya detaylı kullanım koşulları ve KVKK metni eklenecektir. Bir hukuk danışmanından destek almanız önerilir.]
        </p>
      </div>
    </div>
  );
};

export default LegalPage;