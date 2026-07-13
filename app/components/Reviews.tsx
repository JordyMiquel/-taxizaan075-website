export default function Reviews() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-500 mb-12">
          Wat onze klanten zeggen
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 rounded-2xl p-6">
            <div className="text-yellow-400 text-2xl">★★★★★</div>
            <p className="mt-4 text-gray-300">
              "Altijd op tijd en zeer vriendelijk. Mijn vaste taxi!"
            </p>
            <p className="mt-4 font-bold text-green-400">
              — Mohammed
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <div className="text-yellow-400 text-2xl">★★★★★</div>
            <p className="mt-4 text-gray-300">
              "Goede prijs naar Schiphol en een nette auto."
            </p>
            <p className="mt-4 font-bold text-green-400">
              — Lisa
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <div className="text-yellow-400 text-2xl">★★★★★</div>
            <p className="mt-4 text-gray-300">
              "24/7 bereikbaar en altijd betrouwbaar."
            </p>
            <p className="mt-4 font-bold text-green-400">
              — Peter
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}