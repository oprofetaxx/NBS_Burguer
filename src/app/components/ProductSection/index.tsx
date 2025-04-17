import React, { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import HamburguerCard from '../HamburguerCard';

interface ProductSectionProps {
  title: string;
  category: string;
  onAddToCart: (product: Product) => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, category, onAddToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let products: Product[] = [];

    if (category === 'Hambúrgueres') {
      products = [
        { id: '1', name: 'Burg Clássico', description: '', price: 20.9, image: '/images/burg_classico.png', category: 'tradicional' },
        { id: '2', name: 'Chicken cheese', description: '', price: 20.9, image: '/images/chicken_cheese.png', category: 'tradicional' },
        { id: '3', name: 'Especial bacon', description: '', price: 20.9, image: '/images/especial_bacon.png', category: 'tradicional' },
        { id: '4', name: 'Especial salada', description: '', price: 20.9, image: '/images/especial_salada.png', category: 'tradicional' },
        { id: '5', name: 'TOURO ESTELAR', description: '', price: 29.9, image: '/images/touro_estelar.png', category: 'especial' },
        { id: '6', name: 'COSMO BACON X2', description: '', price: 32.9, image: '/images/cosmo_baconx2.png', category: 'especial' },
        { id: '7', name: 'ASTRO NEBULITOS', description: '', price: 31.9, image: '/images/astro_nebulitos.png', category: 'especial' },
        { id: '8', name: 'ORBITA VERDE', description: '', price: 27.9, image: '/images/orbita_verde.png', category: 'especial' },
        { id: '9', name: 'GALACTUS', description: '', price: 49.9, image: '/images/galactus.png', category: 'supremos' },
        { id: '10', name: 'DORMAMMU', description: '', price: 49.9, image: '/images/dormammu.png', category: 'supremos' }
      ];
    }

    setProducts(products); 
  }, [category]);

  return (
    <section className="mb-20 px-2 sm:px-4 lg:px-6 bg-white">
      <div className="w-full">
        <h2 className="text-4xl font-extrabold text-orange-600 text-center mb-4">{title}</h2>

        <div className="w-64 h-6 bg-gradient-to-r from-orange-600 to-yellow-400 rounded-full mx-auto my-6 shadow-2xl border-4 border-red-500" />

        {/* Seções de categorias */}
        <div className="mt-10">
          <h3 className="text-3xl font-semibold text-center text-orange-600 mb-4">Hambúrgueres Tradicionais</h3>
          <div className="w-full bg-gray-300 h-px mb-6" /> {/* Linha de separação */}

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.filter(product => product.category === 'tradicional').map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300">
                <HamburguerCard product={product} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>
        </div>

        {/* Repita para outras categorias, caso necessário */}
        <div className="mt-10">
          <h3 className="text-3xl font-semibold text-center text-orange-600 mb-4">Hambúrgueres Especiais</h3>
          <div className="w-full bg-gray-300 h-px mb-6" /> {/* Linha de separação */}

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.filter(product => product.category === 'especial').map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300">
                <HamburguerCard product={product} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-3xl font-semibold text-center text-orange-600 mb-4">Hambúrgueres Supremos</h3>
          <div className="w-full bg-gray-300 h-px mb-6" /> {/* Linha de separação */}

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.filter(product => product.category === 'supremos').map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300">
                <HamburguerCard product={product} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
