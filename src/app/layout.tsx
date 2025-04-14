import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from './contexts/CartContext';

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
      <body className="min-h-screen bg-[#FFF7E0] m-0 p-0">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
