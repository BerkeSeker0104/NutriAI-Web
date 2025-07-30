import React from 'react';

const CtaForm = () => {
  return (
    // id'yi, diğer sayfalardaki butonların buraya link vermesi için ekliyoruz
    <section id="kayit-formu" className="bg-gradient-to-r from-brand-purple to-blue-500 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-2">
          NutriAI Ailesine İlk Adımı Sen At
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Lansmana özel %50 indirim ve erken erişim hakkı için yerini ayırt.
        </p>
        
        <form 
          // Formun gönderileceği servis (örn: Netlify, Mailchimp) ayarlandığında burası kullanılacak
          // name="pre-register" 
          // method="POST" 
          // data-netlify="true"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
            <input 
              type="text" 
              name="name"
              placeholder="Adın" 
              className="w-full md:w-1/2 p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green" 
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="E-posta Adresin" 
              className="w-full md:w-1/2 p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green" 
              required 
            />
            <button 
              type="submit" 
              className="w-full md:w-auto bg-brand-green text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              İndirimli Kaydol
            </button>
          </div>
        </form>

        <p className="text-sm mt-4 opacity-70">
          Spam yok, söz. Yalnızca değerli bilgiler ve lansman haberleri paylaşacağız.
        </p>
      </div>
    </section>
  );
}

export default CtaForm;