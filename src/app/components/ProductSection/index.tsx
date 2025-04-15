import React, { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import HamburguerCard from '../HamburguerCard';

interface ProductSectionProps {
  title: string;
  category: string;
  onAddToCart: (product: Product) => void;  // Função para adicionar ao carrinho
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, category, onAddToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let products: Product[] = [];

    // Ajuste os produtos de acordo com a categoria selecionada
    if (category === 'Hambúrgueres') {
      products = [
        { id: '1', name: 'Burg Clássico', description: 'Pão brioche, duplo cheddar...', price: 20.9, image: '/images/clas1.png', category: 'tradicional' },
        { id: '2', name: 'Chicken cheese', description: 'Pão brioche, duplo cheddar...', price: 20.9, image: '/images/chicken2.png', category: 'tradicional' },
        { id: '3', name: 'Especial bacon', description: 'Pão brioche, duplo cheddar...', price: 20.9, image: '/images/especial_bacon2.png', category: 'tradicional' },
        { id: '4', name: 'Especial salada', description: 'Pão brioche, salada 2x...', price: 20.9, image: '/images/especial_salada2.png', category: 'tradicional' },
        { id: '5', name: 'TOURO ESTELAR', description: 'Pão brioche, maionese de bacon...', price: 29.9, image: '/images/touro_estelar.png', category: 'especial' },
        { id: '6', name: 'COSMO BACON X2', description: 'Pão brioche, maionese bacon...', price: 32.9, image: '/images/cosmo_baconx2.png', category: 'especial' },
        { id: '7', name: 'ASTRO NEBULITOS', description: 'Pão brioche, maionese bacon...', price: 31.9, image: '/images/astro_nebulitos.png', category: 'especial' },
        { id: '8', name: 'ORBITA VERDE', description: 'Pão brioche, maionese verde...', price: 27.9, image: '/images/orbita_verde.png', category: 'especial' },
        { id: '11', name: 'GALACTUS', description: 'Pão brioche, triple hambúrguer...', price: 49.9, image: '/images/galactus.png', category: 'supremos' },
        { id: '12', name: 'DORMAMMU', description: 'Pão brioche, maionese costela...', price: 49.9, image: '/images/dormammu.png', category: 'supremos' }
      ];
    } 
    else if (category === 'Bebidas') {
      products = [
        { id: '1', name: 'Coca-Cola', description: 'Refrigerante', price: 5.9, image: '/images/coca.png', category: 'Bebidas' },
        // Adicione mais produtos para bebidas
      ];
    } else if (category === 'Porções') {
      products = [
        { id: '1', name: 'Batata Frita', description: 'Porção de batatas fritas', price: 10.9, image: '/images/batata.png', category: 'Porções' },
        // Adicione mais produtos para porções
      ];
    }

    setProducts(products);  // Atualiza os produtos da categoria selecionada
  }, [category]);

  return (
    <section className="mb-20 px-2 sm:px-4 lg:px-6 bg-white">
      <div className="w-full">
        {/* Título */}
        <h2 className="text-4xl font-extrabold text-orange-600 text-center mb-4">
          {title}
        </h2>

        {/* Linha decorativa */}
        <div className="w-64 h-6 bg-gradient-to-r from-orange-600 to-yellow-400 rounded-full mx-auto my-6 shadow-2xl border-4 border-red-500" />

        {/* Círculos decorativos */}
        <div className="flex justify-center gap-8 my-10">
          <div className="w-16 h-16 bg-yellow-300 rounded-full shadow-xl" />
          <div className="w-16 h-16 bg-purple-300 rounded-full shadow-xl" />
          <div className="w-16 h-16 bg-orange-300 rounded-full shadow-xl" />
        </div>

        {/* Layout com imagem decorativa e cards */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 mt-12 px-4 sm:px-6 lg:px-8">
          <div className="grid w-full gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300"
              >
                <HamburguerCard product={product} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>

          {/* Imagem decorativa */}
          <div className="w-full max-w-[380px] h-[260px] rounded-3xl shadow-xl border-4 border-purple-800 overflow-hidden">
            <img
              src="/images/4.png"
              alt="Nível de Fome"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
