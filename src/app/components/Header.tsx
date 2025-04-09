import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  cartItemCount?: number;
}

const Header = ({ cartItemCount = 0 }: HeaderProps) => {
  return (
    <>
      {/* Header fixo com faixa colorida e sombra */}
      <header className="fixed top-0 left-0 w-full z-50 shadow-lg">
        {/* Faixa colorida */}
        <div className="bg-purple-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-8 h-24">
            {/* Logo e nome */}
            <div className="flex items-center gap-4">
              <Image src="/images/logo.png" alt="Logo" width={50} height={50} priority />
              <h1 className="text-2xl font-extrabold text-white">NebsBurguer</h1>
            </div>
            
            {/* Menu de Navegação */}
            <nav className="flex gap-6 items-center">
              <Link href="/" className="bg-white text-purple-800 font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors">
                Home
              </Link>
              <Link href="/produtos" className="bg-white text-purple-800 font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors">
                Produtos
              </Link>
              <Link href="/contato" className="bg-white text-purple-800 font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors">
                Contato
              </Link>
              
              {/* Ícone do carrinho com contador */}
              <div className="relative">
                <Link href="/carrinho" className="text-white hover:text-yellow-300 transition-colors">
                  <svg aria-label="Carrinho de compras" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </Link>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-purple-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                    {cartItemCount}
                  </span>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Espaço reservado para não esconder conteúdo */}
      <div className="pt-32"></div>
    </>
  );
};

export default Header;
