import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isNew = false }) => {
  return (
    <Link href={`/produto/${product.id}`} aria-label={`Ver detalhes do produto ${product.name}`}>
      <div className="bg-[#F9F3E5] rounded-lg p-4 h-full flex flex-col items-center relative transition-shadow duration-300 hover:shadow-lg">
        {isNew && (
          <div className="absolute top-2 left-2 bg-red-500 text-white rounded-full px-3 py-1 text-xs font-bold">
            NOVO
          </div>
        )}

        <div className="w-full h-40 relative mb-4">
          <Image
            src={product.image || '/placeholder.png'}
            alt={`Imagem de ${product.name}`}
            fill
            className="object-cover" // Ajuste para cobertura sem distorção
          />
        </div>

        <h3 className="text-center text-lg font-bold text-gray-800">
          {product.name}
        </h3>
      </div>
    </Link>
  );
};

export default ProductCard;
