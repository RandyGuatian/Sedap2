import { Drumstick } from "lucide-react"; // pastikan lucide-react sudah terpasang

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-white to-green-50">
      {/* Icon Ayam Goreng */}
      <div className="mb-4 animate-bounce">
        <Drumstick className="w-16 h-16 text-orange-500 drop-shadow-lg" />
      </div>

      {/* Spinner Ganda */}
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-green-300 border-t-transparent rounded-full animate-spin-slow"></div>
        <div className="absolute inset-4 bg-green-500 rounded-full shadow-inner shadow-green-700"></div>
      </div>

      {/* Teks */}
      <p className="text-green-700 text-xl font-semibold animate-pulse">
        Sabaryaaa...
      </p>
    </div>
  );
}
