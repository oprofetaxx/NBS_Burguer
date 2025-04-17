// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './components/ProductContext/ProductContext'; // 👈 IMPORTA O PROVIDER
import Footer from './components/Footer'; // Importe o Footer

export const metadata: Metadata = {
  title: "O Melhor Hambúrguer da Cidade",
  description: "Delivery de hambúrgueres premium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen bg-[#FFF7E0] m-0 p-0">
        <CartProvider>
          <ProductProvider>
            {/* Aqui o conteúdo da página */}
            <div className="flex-grow">{children}</div> {/* Garantir que o conteúdo ocupe o espaço disponível */}
          </ProductProvider>
        </CartProvider>

        {/* Rodapé será renderizado em todas as páginas */}
        <Footer />
      </body>
    </html>
  );
}
