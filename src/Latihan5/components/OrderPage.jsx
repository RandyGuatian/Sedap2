import PageHeader from "../components/PageHeader";

export default function OrdersPage() {
  return (
    <div>
      <PageHeader title="Orders" breadcrumb={["Dashboard", "Orders"]}>
        <button className="bg-hijau text-white px-4 py-2 rounded-md">
          Add
        </button>
        <button className="bg-orange-400 text-white px-4 py-2 rounded-md">
          Export
        </button>
        <button className="bg-gray-400 text-white px-4 py-2 rounded-md">
          Kembali
        </button>
      </PageHeader>

      {/* Konten Orders lainnya di bawah sini */}
    </div>
  );
}
