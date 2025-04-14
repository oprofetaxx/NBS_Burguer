import { ShoppingCart, Minus, Plus } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Product } from '../types';

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
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-row items-center gap-6 text-left">
      {/* Imagem do hambúrguer (esquerda com espaço) */}
      <div className="w-36 h-36 flex-shrink-0 ml-2">
        <Image
          src={product.image}
          alt={product.name}
          width={144}
          height={144}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Conteúdo à direita mais centralizado */}
      <div className="flex-1 flex flex-col justify-center items-start gap-2 px-2">
        {/* Badge de categoria */}
        {product.tag && (
          <span className="text-xs px-3 py-1 bg-yellow-500 text-white rounded-full uppercase font-semibold">
            {product.tag}
          </span>
        )}

        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-lg font-bold mt-1">R$ {product.price.toFixed(2)}</p>

        {/* Controles de quantidade e botão */}
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          <button
            onClick={decrease}
            className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full"
          >
            <Minus size={16} />
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={increase}
            className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full"
          >
            <Plus size={16} />
          </button>
          <button
            onClick={handleAddToCart}
            className="ml-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl transition flex items-center gap-2"
          >
            <ShoppingCart size={16} /> Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
