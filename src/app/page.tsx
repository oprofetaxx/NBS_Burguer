"use client";

import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import { Product } from './types/product';

interface CartItem {
  product: Product;
  quantity: number;
}

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const handleAddToCart = (product: Product, quantity: number) => {
    setCart(prevCart => {
      // Verificar se o produto já está no carrinho
      const existingItemIndex = prevCart.findIndex(item => item.product.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Se o produto já existe, atualize a quantidade
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Se não existe, adicione ao carrinho
        return [...prevCart, { product, quantity }];
      }
    });
    
    // Você pode adicionar uma notificação ou toast aqui para confirmar
    alert(`${quantity} ${product.name} adicionado ao carrinho!`);
  };

  return (
    <>
      <Header cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      
      <main className="container mx-auto px-4 py-6">
        <HeroSection />
        <ProductSection 
          title="Nossos Hamburgueres" 
          category="tradicional"
          onAddToCart={handleAddToCart} 
        />
        <ProductSection 
          title="Hamburgueres Especiais" 
          category="especial"
          onAddToCart={handleAddToCart} 
        />
      </main>

      <Footer />
    </>
  );
}