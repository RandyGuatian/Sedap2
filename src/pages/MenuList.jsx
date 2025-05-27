import React from "react";

const menuItems = [
  { id: 1, name: "Rendang", price: 10, description: "Semur daging sapi pedas dengan santan.", image: "/img/rendang.jpg" },
  { id: 2, name: "Nasi Goreng", price: 8, description: "Nasi yang digoreng dengan sayur dan ayam.", image: "/img/Nasi-Goreng-Spesial.jpg" },
  { id: 3, name: "Mie Goreng", price: 7, description: "Mie dengan sayuran dan telur.", image: "/img/mie.jpg" },
  { id: 4, name: "Sate Ayam", price: 6, description: "Ayam panggang dengan saus kacang.", image: "/img/sate2.jpg" },
  { id: 5, name: "Gado-Gado", price: 5, description: "Sayuran dengan bumbu kacang.", image: "/img/gado.jpg" },
  { id: 6, name: "Ayam Geprek", price: 9, description: "Ayam goreng pedas dengan sambal.", image: "/img/geprek.jpg" },
  { id: 7, name: "Bakso", price: 6, description: "Bakso sapi dengan kuah kaldu.", image: "/img/bakso.jpg" },
  { id: 8, name: "Soto Ayam", price: 7, description: "Sup ayam dengan bumbu khas Indonesia.", image: "/img/soto.jpg" },
  { id: 9, name: "Nasi Uduk", price: 8, description: "Nasi dengan santan dan lauk pauk.", image: "/img/nasiuduk.jpg" },
];

const drinkItems = [
  { id: 1, name: "Es Teh Manis", price: 3, description: "Teh manis dingin yang menyegarkan.", image: "/img/te.jpg" },
  { id: 2, name: "Kopi Hitam", price: 4, description: "Kopi hitam panas khas Indonesia.", image: "/img/kopi.jpg" },
  { id: 3, name: "Teh Tarik", price: 4, description: "Teh tarik khas Melayu yang creamy dan manis.", image: "/img/tarik.jpg" },
  { id: 4, name: "Cappuccino", price: 6, description: "Minuman kopi susu berbusa ala Italia.", image: "/img/capucino.jpg" },
  { id: 5, name: "Milk Shake", price: 6, description: "Milk shake dingin dengan rasa vanila, coklat, atau stroberi.", image: "/img/milk.jpg" },
  { id: 6, name: "Wedang Jahe", price: 4, description: "Minuman tradisional hangat dari jahe segar.", image: "/img/wedang.jpg" },
  { id: 7, name: "Jus Alpukat", price: 5, description: "Jus alpukat segar dengan coklat kental manis.", image: "/img/pokat.jpg" },
  { id: 8, name: "Es Jeruk", price: 4, description: "Minuman jeruk segar dingin.", image: "/img/jeruk.jpg" },
  { id: 9, name: "Es Campur", price: 6, description: "Minuman es dengan campuran buah, sirup, dan susu.", image: "/img/campur.jpg" },
  { id: 10, name: "Jus Mangga", price: 5, description: "Jus mangga segar dan manis alami.", image: "/img/mangga.jpg" },
];

export default function MenuList() {
  return (
    <div
      className="min-h-screen bg-[url('/img/bg.jpg')] bg-cover bg-center bg-no-repeat relative"
    >
      {/* Overlay hitam transparan agar background tidak terlalu terang */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto p-6">
        <h1 className="text-5xl font-bold mb-10 text-center text-white drop-shadow-lg">
          Menu Makanan
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {menuItems.map((menu) => (
            <div
              key={menu.id}
              className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition transform duration-300"
            >
              <img
                src={menu.image}
                alt={menu.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 text-white">
                <h2 className="text-2xl font-semibold">{menu.name}</h2>
                <p className="text-amber-300 font-bold mb-2">
                  Rp. {menu.price * 1000}
                </p>
                <p className="text-sm text-gray-100">{menu.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-5xl font-bold mb-10 text-center text-white drop-shadow-lg">
          Menu Minuman
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {drinkItems.map((drink) => (
            <div
              key={drink.id}
              className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition transform duration-300"
            >
              <img
                src={drink.image}
                alt={drink.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 text-white">
                <h2 className="text-2xl font-semibold">{drink.name}</h2>
                <p className="text-sky-300 font-bold mb-2">
                  Rp. {drink.price * 1000}
                </p>
                <p className="text-sm text-gray-100">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
