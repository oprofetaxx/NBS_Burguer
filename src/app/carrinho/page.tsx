"use client";

import BottomNavigation from '@/app/components/BottomNavigation';
import React, { useState } from 'react';
import { Product } from '@/app/types/product'; // Certifique-se de que o tipo Product está corretamente importado

const Cart: React.FC = () => {
  // Estado do carrinho
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Função para adicionar um item ao carrinho
  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    console.log(`Produto adicionado: ${product.name}`); // Log para identificação
  };

  // Função para remover um item do carrinho
  const removeFromCart = (productId: string) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
    console.log(`Produto removido com ID: ${productId}`); // Log para identificação
  };

  return (
    <div className="cart-container">
      <h2 className="text-2xl font-bold">Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">O carrinho está vazio</p>
      ) : (
        <ul className="cart-items-list">
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between items-center py-2">
              <span>{item.name} - R${item.price.toFixed(2)}</span>
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="text-red-500 hover:text-red-700"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <p className="font-bold">
          Total: R${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
        </p>
      </div>

      {/* Adicione o BottomNavigation fixado no rodapé */}
      <div className="fixed top-[93%] left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-50 w-full">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Cart;
