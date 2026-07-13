export default function Fleet() {
  const cars = [
    {
      name: "Mercedes C-Klasse Sedan",
      seats: "4 passagiers",
      luggage: "2 koffers",
      type: "Comfort",
    },
    {
      name: "Mercedes C-Klasse Station",
      seats: "4 passagiers",
      luggage: "4 koffers",
      type: "Comfort",
    },
    {
      name: "Mercedes E-Klasse Sedan",
      seats: "4 passagiers",
      luggage: "3 koffers",
      type: "Business",
    },
    {
      name: "Mercedes E-Klasse Station",
      seats: "4 passagiers",
      luggage: "5 koffers",
      type: "Business",
    },
    {
      name: "Mercedes S-Klasse",
      seats: "3 passagiers",
      luggage: "3 koffers",
      type: "Luxury",
    },
    {
      name: "Mercedes V-Klasse",
      seats: "7 passagiers",
      luggage: "7 koffers",
      type: "VIP Van",
    },
    {
      name: "Reguliere Taxi",
      seats: "4 passagiers",
      luggage: "3 koffers",
      type: "Economy",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-500 mb-12">
          Ons Wagenpark
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.name}
              className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="h-52 bg-zinc-800 flex items-center justify-center text-6xl">
                🚖
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{car.name}</h3>

                <p className="mt-3 text-gray-300">
                  👥 {car.seats}
                </p>

                <p className="text-gray-300">
                  🧳 {car.luggage}
                </p>

                <span className="inline-block mt-4 bg-green-600 px-4 py-2 rounded-full">
                  {car.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}