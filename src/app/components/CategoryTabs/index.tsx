'use client';

import clsx from 'clsx';

const categories = ["Hambúrgueres", "Bebidas", "Porções", "Massas", "Sobremesas"];

interface CategoryTabsProps {
  onSelectCategory: (category: string) => void;
}

export default function CategoryTabs({ onSelectCategory }: CategoryTabsProps) {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-wrap justify-center gap-2 bg-white p-2 rounded-full shadow-md overflow-x-auto no-scrollbar w-full max-w-xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)} // Altera a categoria
            className={clsx(
              "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400",
              cat === "Hambúrgueres"
                ? "bg-orange-500 text-white shadow" // Exemplo para destacar a categoria "Hambúrgueres"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
