export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold text-green-500">
          TaxiZaan075
        </h1>

        <div className="flex gap-6 text-white">
          <a href="#diensten" className="hover:text-green-400">Diensten</a>
          <a href="#tarieven" className="hover:text-green-400">Tarieven</a>
          <a href="#boeken" className="hover:text-green-400">Boeken</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}