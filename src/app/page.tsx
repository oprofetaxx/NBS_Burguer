import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <HeroSection />
        <ProductSection title="Nóssos Hamburgueres" category="tradicional" />
        <ProductSection title="Hamburgueres Especiais" category="especial" />
      </main>

      <Footer />
    </>
  );
}