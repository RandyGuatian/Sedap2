import { MdDashboardCustomize } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

export default function SidebarMenu() {
  const menuItems = [
    { id: 1, icon: <MdDashboardCustomize />, label: "Dashboard" },
    { id: 2, icon: <AiOutlineShoppingCart />, label: "Orders" },
    { id: 3, icon: <BsFillPeopleFill />, label: "Customers" },
  ];

  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        {menuItems.map((item) => (
          <li key={item.id}>
            <div
              id={`menu-${item.id}`}
              className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
            >
              <div className="mr-4 text-xl">{item.icon}</div>
              {item.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
