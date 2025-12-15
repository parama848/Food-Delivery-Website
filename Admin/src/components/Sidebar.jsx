import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LayoutGrid, BarChart2, MessageSquare, Menu, X } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-6 py-4 cursor-pointer transition
     ${
       isActive
         ? "bg-green-50 text-green-600 border-r-4 border-green-600"
         : "text-gray-700 hover:bg-gray-50"
     }`;

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        className="
          sm:hidden fixed top-4 left-4 z-50
          bg-green-600 text-white p-2 rounded
        "
        onClick={() => setOpen(true)}
      >
        <Menu size={20} />
      </button>

      {/* OVERLAY (MOBILE) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed sm:static top-0 left-0 z-50
          h-screen bg-white border-r
          w-64
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0
        `}
      >
        {/* MOBILE HEADER */}
        <div className="flex items-center justify-between px-6 py-4 sm:hidden border-b">
          <h2 className="text-lg font-bold text-green-600">Admin</h2>
          <button onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="mt-4">
          <NavLink
            to="/"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            <LayoutGrid size={20} />
            <span className="text-base font-medium">Add Product</span>
          </NavLink>

          <NavLink
            to="/list-product"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            <BarChart2 size={20} />
            <span className="text-base font-medium">List Product</span>
          </NavLink>

          <NavLink
            to="/orders"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            <MessageSquare size={20} />
            <span className="text-base font-medium">Orders</span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
