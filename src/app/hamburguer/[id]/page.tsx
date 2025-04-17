"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { products } from '../../Pages/links_hamburgueres/products';
import { Product } from '../../types/product';
import { notFound } from 'next/navigation';
import BottomNavigation from '../../components/BottomNavigation'; // ajuste o caminho conforme sua estrutura

export default function HamburguerDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === params.id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
    setIsLoading(false);
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="container mx-auto p-6 text-center">
        <p className="text-lg">Carregando...</p>
      </div>
    );
  }

  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-6 pb-24"> {/* Adicione padding inferior para o espaço do BottomNavigation */}
      <h1 className="text-3xl font-bold text-center mb-6">{product.name}</h1>

      <div className="flex justify-center">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-xl"
            priority
          />
        )}
      </div>

      <div className="mt-8 text-center">
        {product.description && (
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
        )}
        
        <p className="text-2xl font-bold text-orange-700 mt-4">
          R$ {product.price.toFixed(2)}
        </p>
        
        {product.category && (
          <p className="mt-3 text-gray-600">
            Categoria: <span className="font-medium capitalize">{product.category}</span>
          </p>
        )}

        <div className="mt-10">
          <a
            href={product.purchaseLink || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Fazer Pedido
          </a>
        </div>
      </div>

      {/* Aqui entra o BottomNavigation */}
      <div className="fixed top-[93%] left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-50 w-full"></div>
      <BottomNavigation />
    </div>
  );
}
