"use client" 
 
 import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '../../Pages/links_hamburgueres/products';
import { Product } from '../../types/product';

// Componente principal da página
export default function HamburguerPage({ params }: { params: { id: string } }) {
  const product: Product | undefined = products.find((p) => p.id === params.id);

  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">{product.name}</h1>

      <div className="flex justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-xl"
          priority
        />
      </div>

      <div className="mt-6 text-center">
        <p className="text-lg">{product.description}</p>
        <p className="mt-4 text-xl font-semibold">Preço: R$ {product.price.toFixed(2)}</p>
        
        {product.category && (
          <p className="mt-2 text-sm text-gray-600">
            Categoria: <span className="font-medium capitalize">{product.category}</span>
          </p>
        )}

        <div className="mt-8">
          <a
            href={product.purchaseLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300"
          >
            Fazer Pedido
          </a>
        </div>
      </div>
    </div>
  );
}

// Esta função gera todas as rotas estáticas na build
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}