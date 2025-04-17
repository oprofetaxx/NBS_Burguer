'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Home, Ticket, Menu, Store, AlignJustify } from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const BottomNavigation: React.FC = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(true);

  const navItems = [
    { name: 'Início', href: '/', icon: Home },
    { name: 'Cupons', href: '/cupons', icon: Ticket },
    { name: 'Cardápio', href: '/cardapio', icon: Menu },
    { name: 'Lojas', href: '/lojas', icon: Store },
    { name: 'Carrinho', href: '/carrinho', icon: AlignJustify }
  ];

  useEffect(() => {
    const footer = document.getElementById('footer');
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Verifica quando o footer aparece na tela e define a visibilidade
        setIsSticky(!entry.isIntersecting);
      },
      { rootMargin: '0px', threshold: 1.0 }
    );

    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={clsx(
        'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#F54601] border border-[#460800] flex justify-around items-center w-full h-[60px] rounded-2xl z-50 shadow-lg text-white',
        isSticky ? '' : 'translate-y-full' // Se não for sticky, o menu se moverá para fora da tela
      )}
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            aria-label={`Ir para ${item.name}`}
            className={clsx(
              'flex flex-col items-center justify-center w-full h-full transition-colors text-white'
            )}
          >
            <Icon size={24} />
            <span className="text-xs mt-1 font-medium">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;
