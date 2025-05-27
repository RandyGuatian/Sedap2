import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gambar background */}
      <img
        src="/img/rendang.jpg"
        alt="Rendang Background"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Lapisan semi-transparan gelap agar gambar lebih jelas */}
      <div className="absolute inset-0 bg-black/30 -z-10" />

      {/* Konten utama */}
      <div className="max-w-7xl mx-auto p-6 space-y-8 text-white">
        {/* Header tanpa background putih */}
        <div className="p-6 rounded-2xl text-center">
          <h1 className="text-5xl font-bold text-red-600 drop-shadow-lg">
            🍽️ Selamat Datang
          </h1>
          <p className="text-white text-lg mt-2 drop-shadow-md max-w-xl mx-auto">
            Nikmati pengalaman memesan makanan dengan cita rasa nusantara terbaik.
          </p>
          <button
            onClick={() => navigate("/menulist")}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 shadow-lg transition"
          >
            Lihat Menu
          </button>
        </div>

        {/* Komentar dan Lokasi */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Komentar */}
          <div className="bg-black/30 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm border border-green-400 text-sm">
            <h2 className="text-2xl font-semibold text-green-300 mb-4 flex items-center gap-3">
              <span>💬</span> Komentar Pelanggan
            </h2>
            <ul className="space-y-4">
              {[
                { name: "Andi", comment: "Rendangnya enak banget, recommended!", rating: 5 },
                { name: "Sari", comment: "Pelayanan cepat dan ramah.", rating: 4 },
                { name: "Budi", comment: "Menu lengkap, rasa autentik!", rating: 5 },
              ].map(({ name, comment, rating }) => (
                <li
                  key={name}
                  className="flex items-start gap-3 bg-green-900/30 p-3 rounded-xl border border-green-300 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-green-700 rounded-full text-white font-bold text-lg shadow">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <strong className="block text-green-300">{name}</strong>
                    <p className="mt-1 text-green-100">{comment}</p>
                    <p className="mt-1 text-yellow-400 text-sm">
                      {"⭐".repeat(rating) + "☆".repeat(5 - rating)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Lokasi */}
          <div className="bg-black/30 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm border border-green-400 text-sm">
            <h2 className="text-2xl font-semibold text-green-300 mb-4 flex items-center gap-3">
              <span>📍</span> Lokasi Restoran
            </h2>
            <div className="space-y-3 text-green-100">
              <div className="flex items-center gap-2">
                <span className="text-red-500 text-xl">🏠</span>
                <p>Jl. Merdeka No. 45, Jakarta Selatan</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500 text-xl">⏰</span>
                <p>Jam Operasional: 10.00 - 22.00 WIB</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-500 text-xl">📞</span>
                <p>Telp: (021) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
