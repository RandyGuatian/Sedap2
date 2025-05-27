import { NavLink } from "react-router-dom";
import { MdDashboard, MdBorderColor } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiChiliPepper } from "react-icons/gi";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: MdDashboard, path: "/" },
  { id: "orders", label: "Orders", icon: MdBorderColor, path: "/orders" },
  { id: "menulist", label: "MenuList", icon: RiCustomerService2Fill, path: "/menulist" },
  { id: "rendang", label: "Rendang", icon: GiChiliPepper, path: "/menu/rendang" },
];

export default function ListMenu({ horizontal = false }) {
  return (
    <nav
      className={`${
        horizontal
          ? "flex gap-6 bg-white p-4 rounded-xl shadow-md"
          : "w-48 bg-white p-6 rounded-xl shadow-md"
      }`}
    >
      <ul className={horizontal ? "flex gap-6" : "flex flex-col gap-4"}>
        {menuItems.map(({ id, label, icon: Icon, path }) => (
          <li key={id} className="relative group">
            <NavLink
              to={path}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-green-400 to-green-500 text-white shadow-lg"
                    : "text-gray-700 hover:text-green-700 hover:bg-green-100"
                }`
              }
            >
              <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
              <span>{label}</span>

              {/* Underline animation for active */}
              <span
                className={`absolute bottom-0 left-0 w-full h-1 rounded-full bg-white transition-opacity duration-300
                ${
                  window.location.pathname === path
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-30"
                }`}
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
