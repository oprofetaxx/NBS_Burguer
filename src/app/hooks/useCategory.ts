'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useCategory(defaultCategory = 'Hambúrgueres') {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [category, setCategory] = useState(defaultCategory);

  useEffect(() => {
    const urlCategory = searchParams.get('category');
    if (urlCategory) {
      setCategory(urlCategory);
    }
  }, [searchParams]);

  const updateCategory = (newCategory: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('category', newCategory);
    router.push(`?${newSearchParams.toString()}`);
    setCategory(newCategory);
  };

  return { category, setCategory: updateCategory };
}
