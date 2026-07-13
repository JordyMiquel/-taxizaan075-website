import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">

      <h1 className="text-6xl font-extrabold text-green-500">
        TaxiZaan075
      </h1>

      <p className="text-2xl mt-6">
        24/7 Taxi • Schiphol • Luxe Vervoer
      </p>

      <p className="text-lg text-gray-300 mt-3">
        Zaandam • Zaanstreek • Heel Nederland
      </p>

      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <a
          href="tel:+31612349144"
          className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-bold"
        >
          📞 Bel Direct
        </a>

        <a
          href="https://wa.me/31612349144"
          className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-xl font-bold"
        >
          💬 WhatsApp
        </a>
      
      </div>

    </section>
  );
}
