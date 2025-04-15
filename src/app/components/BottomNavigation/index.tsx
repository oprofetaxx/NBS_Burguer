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
    { name: 'Mais', href: '/menu', icon: AlignJustify }
  ];

  useEffect(() => {
    const footer = document.getElementById('footer');
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.isIntersecting);
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
        'fixed bottom-0 left-0 right-0 w-full bg-[#F54601] border-t border-[#460800] flex justify-around items-center h-20 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.2)] text-white',
        isSticky ? 'sticky' : 'absolute bottom-0' // Controlando o sticky
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
