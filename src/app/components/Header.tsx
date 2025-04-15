'use client';

import Image from 'next/image';
import Link from 'next/link';
// Importando o BottomNavigation

interface HeaderProps {
  cartItemCount?: number;
}

const Header = ({ cartItemCount = 0 }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-lg bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 md:py-6 gap-2">
        {/* Navegação à esquerda */}
        
        {/* Carrinho com contador */}
        <div className="relative">
          <Link href="/carrinho" className="hover:text-yellow-300 transition-transform hover:scale-110">
            <svg aria-label="Carrinho de compras" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-orange-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
              {cartItemCount}
            </span>
          )}
        </div>

        {/* Info adicional (antes no Footer) */}
        <div className="hidden md:flex items-center gap-2 text-right">
          <Image src="/logo_2.png" alt="Logo secundário" width={32} height={32} />
          <div>
            <p className="text-white text-sm font-bold leading-none">NEBS BURGUER</p>
            <p className="text-white text-xs leading-none">Siqueira Campos - PR</p>
          </div>
        </div>
      </div>

      {/* Adicionando o BottomNavigation */}
      
    </header>
  );
};

export default Header;
