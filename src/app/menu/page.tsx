'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

import CategoryTabs from '../components/CategoryTabs';
import ProductSection from '../components/ProductSection';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Hambúrgueres');

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header cartItemCount={0} />

      <main className="max-w-5xl mx-auto px-4 pt-44 pb-28 flex-grow">
        <HeroSection />

        

       

        <section className="mt-10">
          <CategoryTabs onSelectCategory={setSelectedCategory} />
          <ProductSection title="Produtos" category={selectedCategory} />
        </section>
      </main>

      <Footer id="footer" />

      {/* BottomNavigation fixo na parte de baixo da tela */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        
      </div>
    </div>
  );
}
