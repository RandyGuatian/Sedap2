import frameworkData from "./framework.json"; // Import data framework dari file JSON
import { useState } from "react"; // Import useState untuk state management

export default function FrameworkList() {
  // State untuk menyimpan input pencarian
  const [searchTerm, setSearchTerm] = useState("");
  // State untuk menyimpan tag yang dipilih
  const [selectedTag, setSelectedTag] = useState("");
  // Mengubah input pencarian menjadi huruf kecil agar pencarian tidak case-sensitive
  const _searchTerm = searchTerm.toLowerCase();
  // Filter data framework berdasarkan input pencarian dan tag yang dipilih
  const filteredFrameworks = frameworkData.filter((framework) => {
    // Cek apakah nama atau deskripsi framework mengandung kata kunci pencarian

    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    // Cek apakah framework memiliki tag yang dipilih (jika ada)
    const matchesTag = selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag; // Hanya return framework yang cocok dengan pencarian & tag
  });

  // Mengambil semua tag unik dari data framework untuk ditampilkan di dropdown
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8">
      {/* Input pencarian */}
      <input
        type="text"
        name="searchTerm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update state saat user mengetik
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      {/* Dropdown untuk memilih tag */}
      <select
        name="selectedTag"
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)} // Update state saat user memilih tag
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">All Tags</option>{" "}
        {/* Opsi default: menampilkan semua framework */}
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {" "}
            {/* Menampilkan semua tag unik */}
            {tag}
          </option>
        ))}
      </select>

      {/* Menampilkan framework yang sudah difilter */}
      {filteredFrameworks.length > 0 ? (
        filteredFrameworks.map((item) => (
          <div
            key={item.id}
            className="border p-4 mb-4 rounded-lg shadow-md bg-white"
          >
            {/* Menampilkan nama framework */}
            <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>

            {/* Menampilkan deskripsi framework & informasi developer */}
            <p className="text-gray-600">
              {item.description}
              <br />
              Developer by:{" "}
              <strong className="text-gray-900">
                {item.details.developer}, {item.details.releaseYear}
              </strong>
            </p>

            {/* Link ke website resmi framework */}
            <a
              href={item.details.officialWebsite}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.details.officialWebsite}
            </a>
            <br />

            {/* Menampilkan tag yang dimiliki framework */}
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No results found.</p> // Tampilkan pesan jika tidak ada hasil
      )}
    </div>
  );
}
