// src/app/utils/productUtils.ts
import { Product } from '../types/product';

// This is a mock function - in a real app you'd fetch from API or database
export function getAllProducts(): Product[] {
  return [
    // Tradicionais
    {
      id: '1',
      name: 'BK Taste',
      description: 'Pão brioche, duplo cheddar, hamburguer 120g, salada, molho',
      price: 20.9,
      image: '/images/clas1.png',
      category: 'tradicional',
      tag: 'TRADICIONAL'
    },
    {
      id: '2',
      name: 'BK Taste 2',
      description: 'Pão brioche, duplo cheddar, filé de frango empanado, salada, maionese tomate.',
      price: 20.9,
      image: '/images/chicken2.png',
      category: 'tradicional',
      tag: 'TRADICIONAL'
    },
    {
      id: '3',
      name: 'BK Taste 3.0',
      description: 'Pão brioche, duplo cheddar, hamburguer 120g, bacon, maionese bacon',
      price: 20.9,
      image: '/images/especial_bacon2.png',
      category: 'tradicional',
      tag: 'TRADICIONAL'
    },
    {
      id: '4',
      name: 'Mega Stack',
      description: 'Pão brioche, salada 2x, hamburguer, duplo cheddar, maionese tomate.',
      price: 20.9,
      image: '/images/especial_salada2.png',
      category: 'tradicional',
      tag: 'TRADICIONAL'
    },
    // Especiais
    {
      id: '5',
      name: 'TOURO ESTELAR',
      description: 'Pão brioche, maionese de bacon, picles, cheddar 2x, hamburguer 120g 2x, bacon, cebola caramelizada.',
      price: 29.9,
      image: '/images/touro_estelar.png',
      category: 'especial',
      tag: 'ESPECIAL'
    },
    // Add more products as needed
  ];
}

export function getProductsByCategory(category: string): Product[] {
  return getAllProducts().filter(product => product.category === category);
}