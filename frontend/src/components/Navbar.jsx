import {
  ShoppingCart,
  Menu,
  X,
  Package,
  LogOut,
  Info,
  Phone,
} from "lucide-react";
import React, { useContext, useState } from "react";
import logo from "../assets/FooterLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const {
    cartItems,
    token,
    userEmail,
    setToken,
    setUserEmail,
    setCartItems,
  } = useContext(CartContext);

  const cartCount = cartItems.reduce(
    (t, i) => t + (Number(i.qty) || 0),
    0
  );

  const logoutHandler = () => {
    setToken("");
    setUserEmail("");
    setCartItems([]);
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    navigate("/login");
    setShowDropdown(false);
    setOpen(false);
  };

  const avatarLetter = userEmail?.charAt(0)?.toUpperCase();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      {/* ================= TOP BAR ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} width={36} className="rounded-full" alt="logo" />
          <span className="text-lg sm:text-2xl font-bold">
           Quick <span className="text-green-400">Food</span>
          </span>
        </Link>

        {/* DESKTOP RIGHT */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/about-us" className="text-gray-700 hover:text-green-600">
            About
          </Link>
          <Link to="/contact-us" className="text-gray-700 hover:text-green-600">
            Contact
          </Link>

          <Link to="/cart-items" className="relative">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {!token ? (
            <button
              onClick={() => navigate("/login")}
              className="border border-green-500 text-green-600 px-4 py-1.5 rounded hover:bg-green-50"
            >
              Login
            </button>
          ) : (
            <div className="relative">
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center cursor-pointer"
              >
                {avatarLetter}
              </div>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md overflow-hidden">
                  <Link
                    to="/my-orders"
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    <Package size={16} />
                    My Orders
                  </Link>
                  <button
                    onClick={logoutHandler}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu size={26} />
        </button>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* DRAWER */}
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg flex flex-col">
            {/* HEADER */}
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <h2 className="text-base font-semibold text-gray-800">
                Menu
              </h2>
              <button onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
            </div>

            {/* BODY */}
            <div className="flex-1 px-4 py-4 space-y-4">
              <Link
                to="/cart-items"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between text-gray-700"
              >
                <div className="flex items-center gap-2">
                  <ShoppingCart size={18} />
                  Cart
                </div>
                {cartCount > 0 && (
                  <span className="bg-green-500 text-white text-xs px-2 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>

              {token && (
                <Link
                  to="/my-orders"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Package size={18} />
                  My Orders
                </Link>
              )}

              <Link
                to="/about-us"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-gray-700"
              >
                <Info size={18} />
                About
              </Link>

              <Link
                to="/contact-us"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-gray-700"
              >
                <Phone size={18} />
                Contact
              </Link>
            </div>

            {/* FOOTER */}
            <div className="border-t px-4 py-4">
              {!token ? (
                <button
                  onClick={() => {
                    navigate("/login");
                    setOpen(false);
                  }}
                  className="w-full border border-green-500 text-green-600 py-2 rounded"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={logoutHandler}
                  className="w-full flex items-center justify-center gap-2 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
