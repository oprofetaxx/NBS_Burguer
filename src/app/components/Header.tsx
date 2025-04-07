import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <div className="w-10 h-10 relative mr-2">
              <Image 
                src="/logo.png" 
                alt="Coffee Delivery" 
                width={40}
                height={40}
                objectFit="contain"
              />
            </div>
            <div>
              <h1 className="text-blue-900 font-bold text-xl">Coffee</h1>
              <h2 className="text-gray-700 text-sm">Delivery</h2>
            </div>
          </div>
        </Link>
        
        <div className="flex items-center">
          <div className="bg-purple-100 text-purple-700 py-2 px-4 rounded-md flex items-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Siqueira Campos PR</span>
          </div>
          
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;