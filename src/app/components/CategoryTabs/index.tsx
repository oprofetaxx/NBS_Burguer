// src/app/components/CategoryTabs/index.tsx

'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

const categories = ["Hambúrgueres", "Bebidas", "Porções", "Massas", "Sobremesas"];

interface CategoryTabsProps {
  activeTab?: string;
  onChange: (category: string) => void;
}

export default function CategoryTabs({ activeTab: activeTabProp, onChange }: CategoryTabsProps) {
  const [activeTab, setActiveTab] = useState(activeTabProp || "Hambúrgueres");

  useEffect(() => {
    if (activeTabProp && activeTabProp !== activeTab) {
      setActiveTab(activeTabProp);
    }
  }, [activeTabProp]);

  const handleTabClick = (category: string) => {
    setActiveTab(category);
    onChange(category);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-wrap justify-center gap-2 bg-white p-2 rounded-full shadow-md overflow-x-auto no-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleTabClick(category)}
            aria-pressed={activeTab === category}
            className={clsx(
              "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400",
              activeTab === category
                ? "bg-orange-500 text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
