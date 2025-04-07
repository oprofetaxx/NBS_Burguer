"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '../../types/product';

interface HamburguerCardProps {
  product: Product;
}

export const HamburguerCard: React.FC<HamburguerCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg p-5 flex flex-col">
      {product.tag && (
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded self-start mb-2">
          {product.tag}
        </span>
      )}
      
      <div className="relative w-full h-40 mb-4">
        <Image 
          src={product.image || '/placeholder-burger.png'} 
          alt={product.name} 
          fill
          className="object-contain"
        />
      </div>
      
      <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
      
      {product.description && (
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
      )}
      
      <div className="flex items-center justify-between mt-2">
        <span className="text-gray-900 font-bold">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </span>
        
        <div className="flex items-center">
          <div className="flex items-center border rounded-md mr-2">
            <button 
              onClick={decreaseQuantity}
              className="px-2 py-1 text-gray-600 hover:text-gray-800"
            >
              -
            </button>
            <span className="px-2">{quantity}</span>
            <button 
              onClick={increaseQuantity}
              className="px-2 py-1 text-gray-600 hover:text-gray-800"
            >
              +
            </button>
          </div>
          
          <button className="bg-purple-900 hover:bg-purple-800 text-white p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HamburguerCard;