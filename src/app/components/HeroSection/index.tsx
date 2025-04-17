import Image from "next/image";
import Link from "next/link";
//import BottomNavigation from '../../components/BottomNavigation';

export default function HeroSection() {
  return (
    <section className="relative bg-orange-500 text-white py-20 px-6 text-center rounded-3xl shadow-lg">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-6">
          <Image 
            src="/images/logo_1.png"
            alt="Logo da NebsBurguer, o melhor hambúrguer da cidade"
            width={160}
            height={150}
            className="rounded-full"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          O melhor hambúrguer da cidade 🍔
        </h1>
        
        <p className="text-lg md:text-xl mb-8">
          Sabor incomparável, ingredientes frescos e entrega rápida!
        </p>
      </div>

      {/* Aqui sim vai funcionar */}
      {/*<BottomNavigation />*/}
    </section>
  );
}
