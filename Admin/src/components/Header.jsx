import React, { useContext, useEffect } from "react";
import { AdminAuthContext } from "../context/AdminAuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { admin, logout } = useContext(AdminAuthContext);
  const navigate = useNavigate();

  /* =========================
     AUTO REDIRECT IF LOGGED OUT
     ========================= */
  useEffect(() => {
    if (!admin) {
      navigate("/admin/login", { replace: true });
    }
  }, [admin, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div
        className="
          h-14
          px-4 sm:px-6
          flex items-center justify-between
        "
      >
        {/* LEFT SIDE (SPACE FOR HAMBURGER) */}
        <div className="flex items-center gap-3">
          {/* Spacer for mobile sidebar button */}
          <div className="w-9 sm:hidden" />

          <h1
            className="
              font-semibold text-green-600
              text-base sm:text-lg lg:text-xl
              whitespace-nowrap
            "
          >
            Admin Panel
          </h1>
        </div>

        {/* RIGHT SIDE */}
        {admin && (
          <button
            onClick={handleLogout}
            className="
              px-4 py-1.5
              cursor-pointer
              text-sm
              rounded-md
              border border-gray-300
              bg-gray-50
              text-gray-600
              hover:bg-gray-100
              hover:text-gray-800
              transition
              focus:outline-none
              focus:ring-2 focus:ring-green-400
            "
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
