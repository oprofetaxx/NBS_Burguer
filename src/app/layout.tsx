import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from './contexts/CartContext'; // <- Importa certinho

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
      <body className="min-h-screen bg-gray-50">
        <CartProvider> {/* <- Envolve o app inteiro */}
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
