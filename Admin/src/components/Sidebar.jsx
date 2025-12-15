import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutGrid, BarChart2, MessageSquare } from "lucide-react";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-6 py-4 cursor-pointer
     ${
       isActive
         ? "bg-green-50 text-green-600 border-r-4 border-green-600"
         : "text-gray-700 hover:bg-gray-50"
     }`;

  return (
    <aside className="w-64 h-screen bg-white border-r">
      <nav className="mt-4">

        <NavLink to="/add-product" className={linkClass}>
          <LayoutGrid size={20} />
          <span className="text-base font-medium">Add Product</span>
        </NavLink>

        <NavLink to="/list-product" className={linkClass}>
          <BarChart2 size={20} />
          <span className="text-base font-medium">List Product</span>
        </NavLink>

        <NavLink to="/orders" className={linkClass}>
          <MessageSquare size={20} />
          <span className="text-base font-medium">Orders</span>
        </NavLink>

      </nav>
    </aside>
  );
};

export default Sidebar;
