'use client';

import Image from 'next/image';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import BottomNavigation from './components/BottomNavigation';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={0} />

      <main className="max-w-5xl mx-auto px-4 pt-44 pb-24 flex-grow"> {/* Aqui adicionamos flex-grow */}
        <HeroSection />

        {/* Sobre a Hamburgueria */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Quem Somos</h2>
          <p className="text-gray-700 leading-relaxed">
            Na NebsBurguer, servimos hambúrgueres artesanais preparados com os ingredientes mais frescos e muito carinho. Nossa missão é oferecer uma experiência saborosa, rápida e marcante para todos os nossos clientes.
          </p>
        </section>

        {/* Promoções */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Promoções da Semana</h2>
          
          <div className="bg-yellow-100 text-yellow-800 rounded-lg p-4 shadow-md flex items-center gap-4">
            <div className="flex-shrink-0">
              <Image
                src="/images/batata.png"
                alt="Promoção Combo Duplo"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
            
            <div>
              <h3 className="font-semibold text-lg">🍔 Combo Duplo</h3>
              <p className="text-sm">Hambúrguer + Fritas + Refrigerante por apenas <strong>R$29,90</strong>!</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Usando "sticky" para que o BottomNavigation se mova para o rodapé */}
      <div className="relative">
        <BottomNavigation />
      </div>
    </div>
  );
}
