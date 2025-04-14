import React from 'react';
import HamburguerCard from '../HamburguerCard';
import { Product } from '../../types/product';

interface ProductSectionProps {
  title: string;
  category: string;
  onAddToCart?: (product: Product, quantity: number) => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  category,
  onAddToCart
}) => {
  let products: Product[] = [];

  ///linhas pag - definição dos produtos por categoria
  if (category === 'tradicional') {
    products = [
      {
        id: '1',
        name: 'Burg Clássico',
        description: 'Pão brioche, duplo cheddar, hamburguer 120g, salada, molho',
        price: 20.9,
        image: '/images/clas1.png',
        category: 'tradicional',
        tag: 'TRADICIONAL'
      },
      {
        id: '2',
        name: 'Chicken cheese',
        description: 'Pão brioche, duplo cheddar, filé de frango empanado, salada, maionese tomate.',
        price: 20.9,
        image: '/images/chicken2.png',
        category: 'tradicional',
        tag: 'TRADICIONAL'
      },
      {
        id: '3',
        name: 'Especial bacon',
        description: 'Pão brioche, duplo cheddar, hamburguer 120g, bacon, maionese bacon',
        price: 20.9,
        image: '/images/especial_bacon2.png',
        category: 'tradicional',
        tag: 'TRADICIONAL'
      },
      {
        id: '4',
        name: 'Especial salada',
        description: 'Pão brioche, salada 2x, hamburguer, duplo cheddar, maionese tomate.',
        price: 20.9,
        image: '/images/especial_salada2.png',
        category: 'tradicional',
        tag: 'TRADICIONAL'
      }
    ];
  } else if (category === 'especial') {
    products = [
      {
        id: '5',
        name: 'TOURO ESTELAR',
        description: 'Pão brioche, maionese de bacon, picles, cheddar 2x, hamburguer 120g 2x, bacon, cebola caramelizada.',
        price: 29.9,
        image: '/images/touro_estelar.png',
        category: 'especial',
        tag: 'ESPECIAL'
      },
      {
        id: '6',
        name: 'COSMO BACON X2',
        description: 'Pão brioche, maionese bacon, hamburguer 120g 2x, bacon 2x, cheddar 2x',
        price: 32.9,
        image: '/images/cosmo_baconx2.png',
        category: 'especial',
        tag: 'ESPECIAL'
      },
      {
        id: '7',
        name: 'ASTRO NEBULITOS',
        description: 'Pão brioche, maionese bacon, doritos 2x, hamburguer 120g 2x, bacon, cheddar 2x',
        price: 31.9,
        image: '/images/astro_nebulitos.png',
        category: 'especial',
        tag: 'ESPECIAL'
      },
      {
        id: '8',
        name: 'ORBITA VERDE',
        description: 'Pão brioche, maionese verde especial, picles, tomate cereja, hamburguer 120g 2x, cheddar 2x',
        price: 27.9,
        image: '/images/orbita_verde.png',
        category: 'especial',
        tag: 'ESPECIAL'
      },
      {
        id: '9',
        name: 'PORCUS PRIME',
        description: 'Calabresa, lombo, hamburguer suíno 2x, bacon, mussarela 2x',
        price: 35.9,
        image: '/images/porcus_prime.png',
        category: 'especial',
        tag: 'ESPECIAL'
      },
      {
        id: '10',
        name: 'COSTELA ESPACIAL',
        description: 'Pão brioche, hamburguer de costela 120g 2x, cheddar 2x, costela desfiada, salada, maionese costela',
        price: 34.9,
        image: '/images/costela_espacial.png',
        category: 'especial',
        tag: 'ESPECIAL'
      }
    ];
  } else if (category === 'supremos') {
    products = [
      {
        id: '11',
        name: 'GALACTUS',
        description: 'Pão brioche, triple hamburguer 3x 200g, triple cheddar, triple bacon, maionese costela',
        price: 49.9,
        image: '/images/galactus.png',
        category: 'supremos',
        tag: 'SUPREMOS'
      },
      {
        id: '12',
        name: 'DORMAMMU',
        description: 'Pão brioche, maionese costela, mignon fatiado empanado 2x, hamburguer 200g, bacon, maionese tomate, cebola roxa, cheddar, bomba de mussarela',
        price: 49.9,
        image: '/images/dormammu.png',
        category: 'supremos',
        tag: 'SUPREMOS'
      }
    ];
  }

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

        {/* ///linhas pag - layout com imagem decorativa e cards */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 mt-12 px-4 sm:px-6 lg:px-8">
          {/* Hambúrgueres */}
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

        {/* ///linhas pag - bloco opcional com layout alternativo */}
        <div className={""}>
          <div className={""}>
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border-4 border-gray-200 rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
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
