import React from 'react';
import HamburguerCard from '../HamburguerCard';
import { Product } from '../../types/product';

interface ProductSectionProps {
  title: string;
  category: string;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ title, category }) => {
  // Normalmente você buscaria esses dados de uma API
  const products: Product[] = category === 'tradicional' ? [
    {
      id: '1',
      name: 'Tradicional',
      description: 'Hambúrguer tradicional com queijo, alface e tomate',
      price: 20.90,
      image: '/burger-tradicional.png',
      category: 'tradicional'
    },
    {
      id: '2',
      name: 'Tradicional',
      description: 'Hambúrguer tradicional com queijo, alface e tomate',
      price: 20.90,
      image: '/burger-tradicional.png',
      category: 'tradicional'
    },
    {
      id: '3',
      name: 'Tradicional',
      description: 'Hambúrguer tradicional com queijo, alface e tomate',
      price: 20.90,
      image: '/burger-tradicional.png',
      category: 'tradicional'
    },
    {
      id: '4',
      name: 'Tradicional',
      description: 'Hambúrguer tradicional com queijo, alface e tomate',
      price: 20.90,
      image: '/burger-tradicional.png',
      category: 'tradicional'
    }
  ] : [
    {
      id: '5',
      name: 'TOURO ESTELAR',
      description: 'Pão brioche, Maionese de bacon, Picles, Cheddar 2x, Hamburguer 120g 2x, Bacon, Cebola Caramelizada.',
      price: 29.90,
      image: '/touro-estelar.png',
      category: 'especial',
      tag: 'ESPECIAL'
    },
    {
      id: '6',
      name: 'COSMO BACON X2',
      description: 'Pão brioche, Maionese bacon, Hambúrguer 120g 2x, Bacon 2x, Cheddar 2x',
      price: 32.90,
      image: '/cosmo-bacon.png',
      category: 'especial',
      tag: 'ESPECIAL'
    },
    {
      id: '7',
      name: 'ASTRO NEBULITOS',
      description: 'Pão brioche, Maionese bacon, Doritos 2x, Hamburguer 120g 2x, Bacon, Cheddar 2x',
      price: 31.90,
      image: '/astro-nebulitos.png',
      category: 'especial',
      tag: 'ESPECIAL'
    },
    {
      id: '8',
      name: 'ORBITA VERDE',
      description: 'Pão brioche, Maionese verde especial, Picles, Tomate cereja, Hamburguer 120g 2x, Cheddar 2x',
      price: 27.90,
      image: '/orbita-verde.png',
      category: 'especial',
      tag: 'ESPECIAL'
    },
    {
      id: '9',
      name: 'PORCUS PRIME',
      description: 'Calabresa, Lombo, Hamburguer suíno 2x, Bacon, Mussarela 2x',
      price: 35.90,
      image: '/porcus-prime.png',
      category: 'especial',
      tag: 'ESPECIAL'
    },
    {
      id: '10',
      name: 'COSTELA ESPACIAL',
      description: 'Pão brioche, Hambúrguer de costela 120g 2x, Cheddar 2x, Costela desfiada, Salada, Maionese costela',
      price: 34.90,
      image: '/costela-espacial.png',
      category: 'especial',
      tag: 'ESPECIAL'
    },
    {
      id: '11',
      name: 'GALACTUS',
      description: 'Pão brioche, Triple hamburguer 3x 200g, triple cheddar, triple bacon, maionese costela',
      price: 49.90,
      image: '/galactus.png',
      category: 'especial',
      tag: 'SUPREMOS'
    },
    {
      id: '12',
      name: 'DORMAMMU',
      description: 'Pão brioche, maionese costela, mignon fatiado empanado 2x, hamburguer 200g, bacon, maionese tomate, cebola roxa, cheddar, bomba de mussarela',
      price: 49.90,
      image: '/public/DORMAMU.png',
      category: 'especial',
      tag: 'SUPREMOS'
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <HamburguerCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;