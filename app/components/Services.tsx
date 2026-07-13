export default function Services() {
  return (
    <section id="diensten" className="py-20 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-500 mb-12">
          Onze Diensten
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-zinc-900 rounded-2xl p-6 text-center">
            <div className="text-5xl mb-4">🚖</div>
            <h3 className="text-xl font-bold">Straattaxi</h3>
            <p className="text-gray-300 mt-2">
              Snel en veilig vervoer binnen Zaandam.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 text-center">
            <div className="text-5xl mb-4">✈️</div>
            <h3 className="text-xl font-bold">Schiphol Taxi</h3>
            <p className="text-gray-300 mt-2">
              Vaste prijs naar Schiphol.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 text-center">
            <div className="text-5xl mb-4">💼</div>
            <h3 className="text-xl font-bold">Zakelijk</h3>
            <p className="text-gray-300 mt-2">
              Luxe vervoer voor bedrijven.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-bold">Evenementen</h3>
            <p className="text-gray-300 mt-2">
              Vervoer naar feesten en festivals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}