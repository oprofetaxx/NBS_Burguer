import BottomNavigation from '@/app/components/BottomNavigation'; // Importe o BottomNavigation

export default function CardapioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-6">
        <h1 className="text-3xl font-bold text-orange-600">Cardápio</h1>
        <p className="mt-4 text-gray-700">Aqui vai o cardápio completo.</p>
      </div>

      {/* Adicione o BottomNavigation fixado no rodapé */}
      <BottomNavigation />
    </div>
  );
}