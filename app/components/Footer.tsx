export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 text-white py-12 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-2xl font-bold text-green-500">
            TaxiZaan075
          </h3>
          <p className="mt-4 text-gray-300">
            24/7 Taxi • Schiphol • Luxe Vervoer
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Contact</h4>

          <p>📞 +31 6 12349144</p>
          <p>📧 jmbenjamins@outlook.com</p>
          <p>📍 Zaandam</p>
          <p>KvK: 74488074</p>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Betaalmethoden</h4>

          <p>💳 Pin</p>
          <p>💶 Contant</p>
          <p>🌐 Online betalen</p>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} TaxiZaan075. Alle rechten voorbehouden.
      </p>
    </footer>
  );
}