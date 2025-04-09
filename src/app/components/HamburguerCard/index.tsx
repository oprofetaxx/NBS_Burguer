"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "../../types/product";
import { ShoppingCart, Plus, Minus } from "lucide-react";

interface HamburguerCardProps {
  product: Product;
  onAddToCart?: (product: Product, quantity: number) => void;
}

export const HamburguerCard: React.FC<HamburguerCardProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : prev));

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
  };

  return (
    <div className="bg-[#FFF7E0] rounded-2xl p-6 flex flex-col shadow-md hover:shadow-xl transition-all transform hover:scale-105">
      
      {product.tag && (
        <span className="bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-3">
          {product.tag}
        </span>
      )}
      
      <div className="relative w-full h-48 mb-4 flex justify-center items-center">
        <Image 
          src={product.image}
          alt={product.name}
          width={250}
          height={250}
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
        />
      </div>

      <h3 className="font-bold text-xl text-gray-900 mb-2 text-center">{product.name}</h3>

      {product.description && (
        <p className="text-gray-600 text-sm mb-4 text-center">{product.description}</p>
      )}

      <div className="flex items-center justify-between mt-auto">
        <span className="text-gray-900 font-bold text-lg">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </span>

        <div className="flex flex-col items-center">
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-sm mb-2">
            <button 
              onClick={decreaseQuantity}
              className="px-3 py-1 text-purple-800 hover:text-purple-900 disabled:opacity-50"
              disabled={quantity === 1}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 text-gray-800 font-semibold">{quantity}</span>
            <button 
              onClick={increaseQuantity}
              className="px-3 py-1 text-purple-800 hover:text-purple-900"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button 
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-purple-800 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default HamburguerCard;
