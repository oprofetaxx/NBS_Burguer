import { ShoppingCart, Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Product } from '../../types/product';
import Link from 'next/link';

interface Props {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function HamburguerCard({ product, onAddToCart }: Props) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(q => q + 1);
  const decrease = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center gap-4 transition-transform hover:scale-105 relative">
      {/* Link para a página do hambúrguer */}
      <Link href={`/hamburguer/${product.id}`} className="block text-center w-full">
        <div className="flex justify-center mb-4">
          <Image
            src={product.image}
            alt={product.name}
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        {/* Nome, descrição e preço */}
        <div className="text-center">
          {product.tag && (
            <span className="text-xs px-3 py-1 bg-yellow-500 text-white rounded-full uppercase font-semibold absolute top-3 left-3 z-10">
              {product.tag}
            </span>
          )}
          <h3 className="text-xl font-semibold text-orange-600 mt-2">{product.name}</h3>
          {product.description && <p className="text-sm text-gray-600 mt-1">{product.description}</p>}
          <p className="text-lg font-bold text-orange-700 mt-2">R$ {product.price.toFixed(2)}</p>
        </div>
      </Link>

      {/* Quantidade e botão de adicionar */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          onClick={decrease}
          aria-label="Diminuir quantidade"
          disabled={quantity <= 1}
          className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full disabled:opacity-50"
        >
          <Minus size={16} />
        </button>
        <span className="text-lg font-semibold">{quantity}</span>
        <button
          onClick={increase}
          aria-label="Aumentar quantidade"
          className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full"
        >
          <Plus size={16} />
        </button>
        <button
          onClick={handleAddToCart}
          aria-label="Adicionar ao carrinho"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl transition duration-300 flex items-center gap-2 mt-4"
        >
          <ShoppingCart size={16} /> Adicionar
        </button>
      </div>
    </div>
  );
}
