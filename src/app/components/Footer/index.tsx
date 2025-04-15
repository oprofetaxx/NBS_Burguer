import React from 'react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 relative mr-2">
              <Image 
                src="/logo_2.png" 
                alt="Nebs Burguer" 
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-orange-600 font-bold text-lg">Nebs</h3>
              <h4 className="text-gray-700 text-xs">Burguer</h4>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-600 text-sm">© 2025 Nebs Delivery. Todos os direitos reservados.</p>
            <p className="text-gray-500 text-xs mt-1">Siqueira Campos - PR</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
