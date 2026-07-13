export default function Pricing() {
  return (
    <section id="tarieven" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-500 mb-12">
          Vaste Schiphol Tarieven
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-zinc-900 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold">Zaandam</h3>
            <p className="text-5xl font-bold text-yellow-400 mt-4">€55</p>
            <p className="text-gray-400 mt-2">Naar Schiphol</p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold">Wormerveer</h3>
            <p className="text-5xl font-bold text-yellow-400 mt-4">€60</p>
            <p className="text-gray-400 mt-2">Naar Schiphol</p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold">Krommenie</h3>
            <p className="text-5xl font-bold text-yellow-400 mt-4">€60</p>
            <p className="text-gray-400 mt-2">Naar Schiphol</p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold">Assendelft</h3>
            <p className="text-5xl font-bold text-yellow-400 mt-4">€65</p>
            <p className="text-gray-400 mt-2">Naar Schiphol</p>
          </div>

        </div>

        <p className="text-center text-green-400 mt-8">
          ✅ Vaste prijs • ✅ Geen verrassingen • ✅ 24/7 Beschikbaar
        </p>

      </div>
    </section>
  );
}

