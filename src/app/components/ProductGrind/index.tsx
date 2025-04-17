// ProductGrid: Um layout em grade para exibir os produtos de maneira organizada, similar à interface do Burger King.
import React from 'react';
import ProductCard from '../ProductCard';
import { Product } from '../../../types/product';

interface ProductGridProps {
  category: string;
  products: Product[];
  onCloseCategory?: () => void; // Permite passar uma função de fechamento, caso necessário
}

const ProductGrid: React.FC<ProductGridProps> = ({ category, products, onCloseCategory }) => {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 px-4 border-b-2 pb-2 flex justify-between items-center">
        {category}
        {onCloseCategory && (
          <button
            onClick={onCloseCategory}
            className="text-sm text-gray-500"
            aria-label={`Fechar a categoria ${category}`}
          >
            ×
          </button>
        )}
      </h2>

      {/* Exibindo um estado caso não haja produtos */}
      {products.length === 0 ? (
        <p className="text-center text-gray-500">Não há produtos disponíveis nesta categoria.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              isNew={index % 3 === 0} // Exemplo de marcação de produtos como novos
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
