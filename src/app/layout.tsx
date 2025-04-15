// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './components/ProductContext/ProductContext'; // 👈 IMPORTA O PROVIDER

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
      <body className="min-h-screen bg-[#FFF7E0] m-0 p-0 pb-16">
        <CartProvider>
          <ProductProvider>
            {/* Aqui o BottomNavigation não precisa estar */}
            {children}
          </ProductProvider>
        </CartProvider>
      </body>
    </html>
  );
}
