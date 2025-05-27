export default function RendangPage() {
  return (
    <div className="p-6">
      <div className="relative mb-6">
        <img
          src="/img/rendang.jpg"
          alt="Rendang"
          className="w-full h-[400px] object-cover rounded-xl shadow-md"
        />
        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-bold rounded">
          Menu Andalan
        </div>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">Rendang Asli Padang</h1>
      <p className="text-gray-600 text-lg mb-4 leading-relaxed">
        Rendang adalah masakan khas Minangkabau yang terkenal dengan rasa gurih, pedas, dan kaya rempah.
        Dibuat dari daging sapi pilihan yang dimasak perlahan dengan santan dan bumbu selama berjam-jam hingga empuk.
      </p>

      <div className="flex items-center justify-between mt-6">
        <span className="text-xl font-semibold text-green-700">Rp 55.000</span>
        <button className="bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition">
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
}
