import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Bu, BlogPage'deki veriyle aynı olmalı. Gerçek bir uygulamada bu veri tek bir yerden yönetilir.
const posts = [
  {
    slug: 'regl-doneminde-tatli-krizleri',
    title: 'Regl Döneminde Tatlı Krizleriyle Başa Çıkmanın Sağlıklı Yolları',
    content: '<p>Regl dönemi, birçok kadın için hormonal dalgalanmaların getirdiği çeşitli fiziksel ve duygusal semptomlarla geçer. Bu semptomların en bilinenlerinden biri de tatlı krizleridir. Peki, bu istek neden olur ve onu nasıl sağlıklı bir şekilde yönetebiliriz?</p><h3>Neden Tatlı İsteriz?</h3><p>Bu dönemde serotonin (mutluluk hormonu) seviyelerindeki düşüş, vücudun hızlı bir enerji ve mutluluk kaynağı olarak şekerli gıdalara yönelmesine neden olur. Ancak bu geçici bir çözümdür ve kan şekerinde ani dalgalanmalara yol açarak durumu daha da kötüleştirebilir.</p><h3>Sağlıklı Alternatifler Nelerdir?</h3><ul><li><strong>Bitter Çikolata:</strong> %70 ve üzeri kakao içeren bitter çikolata, magnezyum açısından zengindir ve serotonin seviyelerini destekler.</li><li><strong>Taze Meyveler:</strong> Muz, hurma veya incir gibi doğal şeker içeren meyveler, tatlı isteğinizi lifli ve besleyici bir şekilde karşılar.</li><li><strong>Kuruyemiş ve Tohumlar:</strong> Badem, ceviz veya chia tohumu gibi sağlıklı yağlar ve protein içeren gıdalar, kan şekerinizi dengeleyerek tokluk hissini artırır.</li></ul>',
    imageUrl: 'https://placehold.co/800x400/A2D2FF/FFFFFF?text=Sağlıklı+Tatlılar',
    category: 'Hormon Sağlığı',
    date: '30 Temmuz 2025',
  },
  // Diğer postların tam içerikleri de buraya eklenebilir.
];

const SinglePostPage = () => {
  const { slug } = useParams(); // URL'den 'slug' parametresini alır.
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Yazı Bulunamadı</h1>
        <Link to="/blog" className="text-brand-purple hover:underline mt-4 inline-block">Tüm yazılara geri dön</Link>
      </div>
    );
  }

  return (
    <motion.div 
      className="bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
        <p className="text-brand-purple font-semibold">{post.category}</p>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark my-4">{post.title}</h1>
        <p className="text-gray-500 mb-8">{post.date}</p>
        
        <img src={post.imageUrl} alt={post.title} className="w-full rounded-lg shadow-lg mb-8" />
        
        {/* Makale içeriğini HTML olarak basmak için */}
        <div 
          className="prose lg:prose-xl max-w-none" 
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>
    </motion.div>
  );
};

export default SinglePostPage;