/*"use client";

import BottomNavigation from '@/app/components/BottomNavigation'; // Importe o BottomNavigation
import ProductSection from '@/app/components/ProductSection'; // Importe o ProductSection
import { useState } from 'react';
import { Product } from '@/app/types/product'; // Certifique-se de que o tipo Product está corretamente importado

export default function CardapioPage() {
  const [selectedCategory, setSelectedCategory] = useState('Hambúrgueres'); // Estado para a categoria selecionada

  const handleAddToCart = (product: Product) => {
    // Função para adicionar o produto ao carrinho
    console.log('Produto adicionado ao carrinho:', product);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold text-orange-600">Cardápio</h1>
        <p className="mt-4 text-gray-700">Aqui vai o cardápio completo.</p>

         Aqui você vai passar a categoria selecionada e a função de adicionar ao carrinho 
        <section className="mt-10">
          <ProductSection 
            title="Produtos" 
            category={selectedCategory} 
            onAddToCart={handleAddToCart} // Passando a função para adicionar ao carrinho
          />
        </section>
      </div>

      {/* Adicionando o BottomNavigation fixado no rodapé *
      
      <BottomNavigation />
    </div>
  );
}
*/