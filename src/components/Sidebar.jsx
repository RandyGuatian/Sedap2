import ListMenu from "./ListMenu";  // Komponen navigasi sidebar

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-64 bg-white shadow-md flex flex-col justify-between p-6">
      {/* ===== Logo Section ===== */}
      <div>
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 font-poppins">
            ~Sedap<span className="text-green-500">.</span>
          </h1>
          <p className="text-sm text-gray-400 font-medium mt-1">
            Cita rasa masakan nusantara
          </p>
        </div>

        {/* ===== Navigation / List Menu ===== */}
        <nav className="space-y-2">
          <ListMenu />
        </nav>
      </div>

      {/* ===== Footer Section ===== */}
      <div className="text-xs text-gray-400 border-t pt-4 mt-10">
        <p className="font-semibold">Sedap Restaurant Dashboard</p>
        <p className="font-light">&copy; 2025 All Rights Reserved</p>
      </div>
    </aside>
  );
}
