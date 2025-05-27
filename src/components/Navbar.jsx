import ListMenu from "./ListMenu";

export default function Navbar() {
  return (
    <header className="w-full bg-white/20 backdrop-blur-md shadow-md border-b border-white/30 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-extrabold text-gray-900 font-poppins tracking-wide">
            ~Sedap<span className="text-green-500">.</span>
          </h1>
          <p className="text-xs text-gray-600 font-medium">
            Cita rasa masakan nusantara
          </p>
        </div>

        {/* Menu */}
        <nav className="flex gap-6 items-center">
          <ListMenu horizontal />
        </nav>
      </div>
    </header>
  );
} 