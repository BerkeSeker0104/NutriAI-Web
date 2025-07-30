import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              © {currentYear} NutriAI. Tüm Hakları Saklıdır.
            </p>
            <div className="mt-2">
              <a href="#" className="text-sm text-gray-500 hover:text-brand-purple mr-4">Gizlilik Politikası</a>
              <a href="#" className="text-sm text-gray-500 hover:text-brand-purple">KVKK</a>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            {/* Instagram İkonu */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-purple">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c-4.068 0-5.158.016-6.958.1-1.8.083-3.003.32-4.043.725a5.525 5.525 0 00-2.02 1.43A5.525 5.525 0 00.2 6.275c-.405 1.04-.642 2.243-.725 4.043C.39 12.115.375 13.205.375 17.275s.016 5.158.1 6.958c.083 1.8.32 3.003.725 4.043a5.525 5.525 0 001.43 2.02 5.525 5.525 0 002.02 1.43c1.04.405 2.243.642 4.043.725 1.799.085 2.89.1 6.958.1s5.158-.016 6.958-.1c1.8-.083 3.003-.32 4.043-.725a5.525 5.525 0 01-2.02-1.43 5.525 5.525 0 011.43-2.02c.405-1.04.642-2.243.725-4.043.085-1.799.1-2.89.1-6.958s-.016-5.158-.1-6.958c-.083-1.8-.32-3.003-.725-4.043a5.525 5.525 0 01-1.43-2.02A5.525 5.525 0 0119.23.2c-1.04-.405-2.243-.642-4.043-.725C13.205.39 12.115.375 8.045.375h4.27zM8.045 21.625c-4.068 0-5.158-.016-6.958-.1-1.8-.083-3.003-.32-4.043-.725a5.525 5.525 0 01-2.02-1.43 5.525 5.525 0 01-1.43-2.02c-.405-1.04-.642-2.243-.725-4.043C.39 12.115.375 13.205.375 17.275s.016 5.158.1 6.958c.083 1.8.32 3.003.725 4.043a5.525 5.525 0 011.43 2.02 5.525 5.525 0 012.02 1.43c1.04.405 2.243.642 4.043.725 1.799.085 2.89.1 6.958.1s5.158-.016 6.958-.1c1.8-.083 3.003-.32 4.043-.725a5.525 5.525 0 012.02-1.43 5.525 5.525 0 011.43-2.02c.405-1.04.642-2.243.725-4.043.085-1.799.1-2.89.1-6.958s-.016-5.158-.1-6.958c-.083-1.8-.32-3.003-.725-4.043a5.525 5.525 0 01-1.43-2.02A5.525 5.525 0 0119.23.2c-1.04-.405-2.243-.642-4.043-.725C13.205.39 12.115.375 8.045.375z" clipRule="evenodd" /><path d="M12 6.875a5.125 5.125 0 100 10.25 5.125 5.125 0 000-10.25zM12 15a3 3 0 110-6 3 3 0 010 6z" /><path d="M16.812 7.188a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" /></svg>
              <span className="sr-only">Instagram</span>
            </a>
            {/* TikTok İkonu - DÜZELTİLDİ */}
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-purple">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.08.48.3.91.66 1.23.41.36.9.57 1.4.61.64.07 1.25-.09 1.76-.48.57-.45 1-1.1 1.16-1.8.06-.28.07-.56.08-.84.07-2.2-.04-4.41-.03-6.61z" /></svg>
              <span className="sr-only">TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;