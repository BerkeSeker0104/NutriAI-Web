import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Açılır-kapanır SSS bileşeni
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-2 flex justify-between items-center focus:outline-none"
      >
        <span className="text-lg font-semibold text-brand-dark">{question}</span>
        <span className="transform transition-transform duration-300">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          )}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="p-4 pt-0 text-gray-700">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

const FaqPage = () => {
  const faqs = [
    {
      question: 'NutriAI tam olarak ne işe yarar?',
      answer: 'NutriAI, ruh halinizi, regl döngünüzü ve beslenme alışkanlıklarınızı analiz eden, yapay zekâ destekli kişisel bir beslenme koçudur. Size ne yemeniz gerektiği konusunda diyetisyen onaylı, kişiselleştirilmiş ve gerçekçi öneriler sunar.',
    },
    {
      question: 'Uygulama ücretli mi? Fiyatlandırma nasıl olacak?',
      answer: 'Evet, NutriAI abonelik modeliyle çalışacaktır. Lansmana özel olarak, "Kurucu Üye" programına katılan ilk kullanıcılarımız için çok avantajlı ve indirimli bir başlangıç fiyatı sunulacaktır.',
    },
    {
        question: 'Verilerim güvende mi?',
        answer: 'Kesinlikle. Kullanıcı verilerinin güvenliği ve gizliliği en büyük önceliğimizdir. Tüm verileriniz şifrelenmiş sunucularda saklanır ve asla üçüncü partilerle paylaşılmaz. Detaylı bilgi için Gizlilik Politikamızı inceleyebilirsiniz.',
    },
    {
        question: 'Hangi diyetisyenlerle çalışıyorsunuz?',
        answer: 'NutriAI\'nin arkasındaki tüm beslenme bilgileri ve algoritmalar, alanında uzman ve lisanslı diyetisyenler olan Selin Küçükyıldız ve Aylin Şaşmaz tarafından geliştirilmiş ve onaylanmıştır.',
    },
    {
        question: 'Aboneliğimi istediğim zaman iptal edebilir miyim?',
        answer: 'Evet, aboneliğinizi herhangi bir taahhüt olmadan, dilediğiniz zaman uygulama içerisinden kolayca iptal edebilirsiniz.',
    }
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-brand-purple">Sıkça Sorulan Sorular</h1>
          <p className="text-lg text-gray-600 mt-4">Aklınızdaki soruların cevaplarını burada bulabilirsiniz.</p>
        </motion.div>

        <div className="bg-gray-50 rounded-lg shadow-md">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;