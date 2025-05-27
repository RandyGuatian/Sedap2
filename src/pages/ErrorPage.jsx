import React from "react";
import { useParams } from "react-router-dom";

const errorMessages = {
  400: "Bad Request - Permintaan tidak valid.",
  401: "Unauthorized - Kamu harus login terlebih dahulu.",
  403: "Forbidden - Kamu tidak memiliki akses ke halaman ini.",
  404: "Not Found - Halaman tidak ditemukan.",
};

const ErrorPage = () => {
  const { code } = useParams();
  const errorCode = code || "404";
  const message = errorMessages[errorCode] || "Terjadi kesalahan yang tidak diketahui.";

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-red-600 mb-6">{errorCode}</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-4">Oops! {message}</p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Kembali ke Dashboard
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
