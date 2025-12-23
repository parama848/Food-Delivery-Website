import React from "react";
import footerlogo from "../assets/FooterLogo.png"
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16 pt-10 pb-5">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Logo + Tagline */}
        <div className="flex flex-col items-center sm:items-start gap-3">
          <div className="flex items-center gap-1 cursor-pointer">
            <img
              src={footerlogo}
              width={50}
              className="rounded-full w-14 sm:w-8 md:w-10 lg:w-14"
              alt="logo"
            />
            <h1 className="text-2xl sm:text-xl lg:text-4xl md:text-3xl font-bold text-gray-900">
              Quick <span className="text-green-400">Food</span>
            </h1>
          </div>

          <p className="text-gray-600 text-sm text-center sm:text-left">
            Delicious food delivered fresh to your doorstep.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-3 text-gray-600">
            <Facebook className="cursor-pointer hover:text-green-500" />
            <Instagram className="cursor-pointer hover:text-green-500" />
            <Twitter className="cursor-pointer hover:text-green-500" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start gap-2 text-gray-700">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <a href="#" className="hover:text-green-600 text-sm">Home</a>
          <a href="#" className="hover:text-green-600 text-sm">About</a>
          <a href="#" className="hover:text-green-600 text-sm">Contact</a>
          <a href="#" className="hover:text-green-600 text-sm">Cart</a>
        </div>

        {/* Support Section */}
        <div className="flex flex-col items-center sm:items-start gap-2 text-gray-700">
          <h3 className="font-semibold text-lg">Support</h3>
          <a href="#" className="hover:text-green-600 text-sm">Privacy Policy</a>
          <a href="#" className="hover:text-green-600 text-sm">Terms & Conditions</a>
          <a href="#" className="hover:text-green-600 text-sm">Help Center</a>
          <a href="#" className="hover:text-green-600 text-sm">Feedback</a>
        </div>

      </div>

      {/* Bottom Area */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t pt-4">
        © {new Date().getFullYear()} ByteTrekForge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
