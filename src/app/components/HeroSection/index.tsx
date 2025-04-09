import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const benefits = [
  {
    iconBg: 'bg-orange-500',
    iconPath: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    text: 'Compra simples e segura',
  },
  {
    iconBg: 'bg-gray-700',
    iconPath: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
    text: 'Embalagem mantém o hamburguer quente',
  },
  {
    iconBg: 'bg-yellow-500',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    text: 'Entrega rápida e confiável',
  },
  {
    iconBg: 'bg-purple-700',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    text: 'O hambúrguer chega quente até você',
  },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="py-8 mb-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        {/* Texto e benefícios */}
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            O MELHOR HAMBÚRGUER DA CIDADE
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Só fazer seu pedido e aproveitar!!!
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className={`${benefit.iconBg} p-2 rounded-full mr-3`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.iconPath} />
                  </svg>
                </div>
                <span className="text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Imagem */}
        <motion.div 
          className="md:w-5/12 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full h-80 relative bg-yellow-100 rounded-full overflow-hidden">
            <Image 
              src="/logo_2.png" 
              alt="Imagem de um delicioso hambúrguer suculento" 
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
