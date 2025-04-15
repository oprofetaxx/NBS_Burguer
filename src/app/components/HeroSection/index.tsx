import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-orange-500 text-white py-20 px-6 text-center rounded-3xl shadow-lg">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-6">
          <Image 
            src="/images/logo_1.png" // Troque para seu caminho da logo
            alt="Logo da NebsBurguer, o melhor hambúrguer da cidade"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          O melhor hambúrguer da cidade 🍔
        </h1>
        
        <p className="text-lg md:text-xl mb-8">
          Sabor incomparável, ingredientes frescos e entrega rápida!
        </p>

        <Link href="#produtos">
          <button 
            className="bg-white text-orange-600 font-bold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
            aria-label="Peça seu hambúrguer agora!"
          >
            Peça Agora
          </button>
        </Link>
      </div>
    </section>
  );
}
