import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Örnek blog yazıları verisi. İleride bu bir API'den veya CMS'ten gelebilir.
const posts = [
  {
    slug: 'regl-doneminde-tatli-krizleri',
    title: 'Regl Döneminde Tatlı Krizleriyle Başa Çıkmanın Sağlıklı Yolları',
    excerpt: 'Tatlı krizleri kader değil! Hormonel dalgalanmaların neden olduğu bu isteği, vücudunuza iyi gelecek sağlıklı alternatiflerle nasıl yönetebileceğinizi keşfedin.',
    imageUrl: 'https://placehold.co/600x400/A2D2FF/FFFFFF?text=Sağlıklı+Tatlılar',
    category: 'Hormon Sağlığı',
    date: '30 Temmuz 2025',
  },
  {
    slug: 'enerjinizi-yukseltecek-kahvalti',
    title: 'Güne Başlarken: Enerjinizi Tavan Yaptıracak 5 Kahvaltı Tarifi',
    excerpt: 'Sabahları yorgun mu uyanıyorsunuz? Doğru besinlerle güne başlamak fark yaratır. İşte size gün boyu enerji verecek, pratik ve lezzetli kahvaltı önerileri.',
    imageUrl: 'https://placehold.co/600x400/7ED957/FFFFFF?text=Enerjik+Kahvaltı',
    category: 'Tarifler',
    date: '28 Temmuz 2025',
  },
   {
    slug: 'duygusal-aclik-nedir',
    title: 'Duygusal Açlık mı, Fiziksel Açlık mı? Farkı Anlamanın Yolları',
    excerpt: 'Stresli anlarda kendinizi buzdolabının önünde mi buluyorsunuz? Duygusal açlığın ne olduğunu ve onunla nasıl başa çıkabileceğinizi öğrenin.',
    imageUrl: 'https://placehold.co/600x400/5E60CE/FFFFFF?text=Farkındalık',
    category: 'Stres ve Beslenme',
    date: '25 Temmuz 2025',
  },
];

const BlogPage = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Sayfa Başlığı */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-brand-purple">NutriAI Blog</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Kadın sağlığı, beslenme ve iyi yaşam üzerine diyetisyen onaylı yazılar.
          </p>
        </motion.div>

        {/* Blog Yazıları Listesi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="block bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full">
                <img className="w-full h-48 object-cover" src={post.imageUrl} alt={post.title} />
                <div className="p-6">
                  <p className="text-sm text-brand-purple font-semibold">{post.category}</p>
                  <h2 className="text-xl font-bold text-brand-dark my-2">{post.title}</h2>
                  <p className="text-gray-700 text-base mb-4">{post.excerpt}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;