// app/page.tsx (Next.js 14 - App Router)

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-500">BurgerHouse</h1>
        <nav>
          <ul className="flex gap-6 text-gray-700 font-semibold">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">Cardápio</li>
            <li className="hover:text-orange-500 cursor-pointer">Contato</li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Nossos Hambúrgueres</h2>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card Produto */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <Image
              src="/burger1.jpg" // coloque suas imagens na pasta public/
              alt="Burger 1"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Cheese Burger</h3>
              <p className="text-gray-500 mt-2">Pão artesanal, carne 180g, queijo cheddar e molho especial.</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-orange-500">R$ 25,90</span>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
                  Comprar
                </button>
              </div>
            </div>
          </div>

          {/* Duplicar outros produtos */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <Image
              src="/burger2.jpg"
              alt="Burger 2"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Double Smash</h3>
              <p className="text-gray-500 mt-2">Dois burgers smash, queijo duplo e cebola caramelizada.</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-orange-500">R$ 29,90</span>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
                  Comprar
                </button>
              </div>
            </div>
          </div>

          {/* E assim por diante */}
        </div>
      </main>
    </div>
  );
}
