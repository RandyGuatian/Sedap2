import React, { useState } from "react";

// Menu lengkap dengan stok
const allMenuItems = [
  { id: 1, name: "Rendang", price: 10, stock: 5, image: "/img/rendang.jpg" },
  { id: 2, name: "Nasi Goreng", price: 8, stock: 6, image: "/img/Nasi-Goreng-Spesial.jpg" },
  { id: 3, name: "Mie Goreng", price: 7, stock: 4, image: "/img/mie.jpg" },
  { id: 4, name: "Sate Ayam", price: 6, stock: 5, image: "/img/sate2.jpg" },
  { id: 5, name: "Gado-Gado", price: 5, stock: 6, image: "/img/gado.jpg" },
  { id: 6, name: "Ayam Geprek", price: 9, stock: 3, image: "/img/geprek.jpg" },
  { id: 7, name: "Bakso", price: 6, stock: 5, image: "/img/bakso.jpg" },
  { id: 8, name: "Soto Ayam", price: 7, stock: 4, image: "/img/soto.jpg" },
  { id: 9, name: "Nasi Uduk", price: 8, stock: 6, image: "/img/nasiuduk.jpg" },
  { id: 10, name: "Es Teh Manis", price: 3, stock: 10, image: "/img/te.jpg" },
  { id: 11, name: "Kopi Hitam", price: 4, stock: 6, image: "/img/kopi.jpg" },
  { id: 12, name: "Teh Tarik", price: 4, stock: 6, image: "/img/tarik.jpg" },
  { id: 13, name: "Cappuccino", price: 6, stock: 5, image: "/img/capucino.jpg" },
  { id: 14, name: "Milk Shake", price: 6, stock: 4, image: "/img/milk.jpg" },
  { id: 15, name: "Wedang Jahe", price: 4, stock: 5, image: "/img/wedang.jpg" },
  { id: 16, name: "Jus Alpukat", price: 5, stock: 4, image: "/img/pokat.jpg" },
  { id: 17, name: "Es Jeruk", price: 4, stock: 6, image: "/img/jeruk.jpg" },
  { id: 18, name: "Es Campur", price: 6, stock: 3, image: "/img/campur.jpg" },
  { id: 19, name: "Jus Mangga", price: 5, stock: 5, image: "/img/mangga.jpg" },
];

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [menuStock, setMenuStock] = useState(allMenuItems);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchMenuTerm, setSearchMenuTerm] = useState("");

  const [newOrder, setNewOrder] = useState({
    id: "",
    customerName: "",
    status: "Pending",
    totalPrice: 0,
    orderDate: "",
    menuItems: [],
  });

  const handleAddOrder = () => {
    if (!newOrder.customerName.trim()) {
      setErrorMessage("Nama pelanggan wajib diisi.");
      return;
    }
    if (newOrder.menuItems.length === 0) {
      setErrorMessage("Harap pilih minimal satu menu.");
      return;
    }

    const newId = orders.length > 0 ? orders[orders.length - 1].id + 1 : 1;
    const today = new Date().toISOString().split("T")[0];
    const orderToAdd = {
      ...newOrder,
      id: newId,
      orderDate: today,
    };

    // Update stok setelah pemesanan
    const updatedStock = menuStock.map((item) => {
      const count = newOrder.menuItems.filter((m) => m.id === item.id).length;
      return { ...item, stock: item.stock - count };
    });

    setMenuStock(updatedStock);
    setOrders([...orders, orderToAdd]);

    // Reset order baru dan close modal
    setNewOrder({
      id: "",
      customerName: "",
      status: "Pending",
      totalPrice: 0,
      orderDate: "",
      menuItems: [],
    });

    setSearchMenuTerm("");
    setShowModal(false);
    setErrorMessage("");
  };

  const handleMenuSelection = (menu) => {
    const stockItem = menuStock.find((item) => item.id === menu.id);
    const currentCount = newOrder.menuItems.filter((m) => m.id === menu.id).length;

    if (stockItem.stock <= currentCount) {
      setErrorMessage(`Stok untuk "${menu.name}" sudah habis.`);
      return;
    }

    setNewOrder((prevOrder) => ({
      ...prevOrder,
      menuItems: [...prevOrder.menuItems, menu],
      totalPrice: prevOrder.totalPrice + menu.price,
    }));

    setErrorMessage("");
  };

  const handleRemoveMenuItem = (menuId) => {
    setNewOrder((prevOrder) => {
      const updatedMenuItems = [...prevOrder.menuItems];
      const indexToRemove = updatedMenuItems.findIndex((item) => item.id === menuId);

      if (indexToRemove !== -1) {
        updatedMenuItems.splice(indexToRemove, 1);
        const updatedTotalPrice = updatedMenuItems.reduce((total, item) => total + item.price, 0);
        return {
          ...prevOrder,
          menuItems: updatedMenuItems,
          totalPrice: updatedTotalPrice,
        };
      }
      return prevOrder;
    });
  };

  const filteredOrders = orders.filter((order) =>
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Daftar Pesanan</h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + Tambah Pesanan
          </button>
        </div>

        <input
          type="text"
          placeholder="Cari berdasarkan nama pelanggan..."
          className="w-full p-3 rounded-lg border mb-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filteredOrders.length === 0 ? (
          <p className="text-gray-500">Belum ada pesanan.</p>
        ) : (
          <ul className="bg-white rounded-lg shadow-md divide-y">
            {filteredOrders.map((order) => (
              <li key={order.id} className="p-4">
                <p className="font-semibold">{order.customerName}</p>
                <p>
                  Status: <span className="font-medium">{order.status}</span>
                </p>
                <p>Total: ${order.totalPrice.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4">Tambah Pesanan</h2>

              <input
                type="text"
                placeholder="Nama Pelanggan"
                className="w-full p-3 border rounded mb-4"
                value={newOrder.customerName}
                onChange={(e) =>
                  setNewOrder({ ...newOrder, customerName: e.target.value })
                }
              />

              {/* Input pencarian menu */}
              <input
                type="text"
                placeholder="Cari menu..."
                className="w-full p-3 border rounded mb-4"
                value={searchMenuTerm}
                onChange={(e) => setSearchMenuTerm(e.target.value)}
              />

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 max-h-96 overflow-y-auto">
                {menuStock
                  .filter((menu) =>
                    menu.name.toLowerCase().includes(searchMenuTerm.toLowerCase())
                  )
                  .map((menu) => (
                    <div
                      key={menu.id}
                      className={`border rounded p-3 shadow-md flex flex-col items-center ${menu.stock === 0
                          ? "opacity-50 cursor-not-allowed"
                          : "cursor-pointer hover:bg-gray-100"
                        }`}
                      onClick={() => menu.stock > 0 && handleMenuSelection(menu)}
                    >
                      <img
                        src={menu.image}
                        alt={menu.name}
                        className="w-full h-24 object-cover rounded mb-2"
                      />
                      <h3 className="font-bold">{menu.name}</h3>
                      <p className="text-sm text-gray-600">
                        ${menu.price} | Stok: {menu.stock}
                      </p>
                    </div>
                  ))}
              </div>

              {errorMessage && (
                <p className="text-red-600 font-semibold mb-3">{errorMessage}</p>
              )}

              <h3 className="text-lg font-semibold mt-4 mb-2">Item Pesanan:</h3>
              {newOrder.menuItems.length === 0 ? (
                <p className="text-gray-500 mb-3">Belum ada item dipilih.</p>
              ) : (
                <ul className="mb-3 max-h-40 overflow-y-auto border rounded p-2">
                  {newOrder.menuItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between border-b py-1 last:border-b-0"
                    >
                      <span>{item.name}</span>
                      <button
                        className="text-red-500 hover:underline text-sm"
                        onClick={() => handleRemoveMenuItem(item.id)}
                      >
                        Hapus
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <p className="font-bold mb-4">
                Total Harga: ${newOrder.totalPrice.toFixed(2)}
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setErrorMessage("");
                    setSearchMenuTerm("");
                    setNewOrder({
                      id: "",
                      customerName: "",
                      status: "Pending",
                      totalPrice: 0,
                      orderDate: "",
                      menuItems: [],
                    });
                  }}
                  className="px-4 py-2 rounded border"
                >
                  Batal
                </button>
                <button
                  onClick={handleAddOrder}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Simpan Pesanan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
