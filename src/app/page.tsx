'use client';

import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import CategoryTabs from './components/CategoryTabs';
import { Product } from './types/product';

interface CartItem {
  product: Product;
  quantity: number;
}

const categoryMap: Record<string, string> = {
  "Hambúrgueres": "tradicional",
  "Bebidas": "bebidas",
  "Porções": "porcoes",
  "Massas": "massas",
  "Sobremesas": "sobremesas",
};

export default function Home() {
  const categories = ['Hambúrgueres', 'Bebidas', 'Porções', 'Massas', 'Sobremesas'];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product, quantity: number) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.product.id === product.id);
      
      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { product, quantity }];
      }
    });

    alert(`${quantity} ${product.name} adicionado ao carrinho!`);
  };

  return (
    <div className="min-h-screen">
      <Header cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      
      <main className="max-w-5xl mx-auto px-4 pt-44 pb-10">
        <HeroSection />

        <CategoryTabs
          activeTab={selectedCategory}
          onChange={(category) => setSelectedCategory(category)}
        />

        {/* Renderizar produtos de acordo com a categoria selecionada */}
        {selectedCategory === 'Hambúrgueres' && (
          <>
            <ProductSection 
              title="Hambúrgueres Tradicionais" 
              category="tradicional"
              onAddToCart={handleAddToCart} 
            />
            <ProductSection 
              title="Hambúrgueres Especiais" 
              category="especial"
              onAddToCart={handleAddToCart} 
            />
            <ProductSection 
              title="Hambúrgueres Supremos" 
              category="supremos"
              onAddToCart={handleAddToCart} 
            />
          </>
        )}

        {selectedCategory === 'Bebidas' && (
          <ProductSection 
            title="Bebidas Geladas" 
            category="bebidas"
            onAddToCart={handleAddToCart} 
          />
        )}

        {selectedCategory === 'Porções' && (
          <ProductSection 
            title="Porções Deliciosas" 
            category="porcoes"
            onAddToCart={handleAddToCart} 
          />
        )}

        {selectedCategory === 'Massas' && (
          <ProductSection 
            title="Massas Artesanais" 
            category="massas"
            onAddToCart={handleAddToCart} 
          />
        )}

        {selectedCategory === 'Sobremesas' && (
          <ProductSection 
            title="Sobremesas Irresistíveis" 
            category="sobremesas"
            onAddToCart={handleAddToCart} 
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
