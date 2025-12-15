import React from "react";
import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <header className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
            <img src={logo} alt="logo" className="rounded-full" />
          </div>
         <span className="text-2xl font-bold text-green-500">
            Byte<span className="text-gray-900">Trek</span>Forge
          </span>
        </div>

        {/* Right: Admin + Logout */}
        <div className="flex items-center gap-4">
          <span className="text-gray-600 text-sm">
            {/* Hi! <span className="font-medium">Admin</span> */}
          </span>

          <button
            className="px-4 py-1.5 rounded-full border border-gray-400 text-gray-700 text-sm hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
