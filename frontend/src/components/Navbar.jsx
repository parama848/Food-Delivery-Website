// // // // import { ShoppingCart, Menu, X } from "lucide-react";
// // // // import React, { useContext, useState } from "react";
// // // // import logo from "../assets/logo.jpg";
// // // // import { Link } from "react-router-dom";
// // // // import { CartContext } from "../context/CartContext";

// // // // const Navbar = () => {
// // // //   const [open, setOpen] = useState(false);
// // // //   const { cartItems } = useContext(CartContext);

// // // //   // -------------------------
// // // //   // SAFE CART COUNT FUNCTION
// // // //   // -------------------------
// // // //   const getCartCount = () => {
// // // //     if (!cartItems) return 0;

// // // //     // If cartItems is an array (recommended structure)
// // // //     if (Array.isArray(cartItems)) {
// // // //       return cartItems.reduce(
// // // //         (total, item) => total + (Number(item.qty) || 0),
// // // //         0
// // // //       );
// // // //     }

// // // //     // If cartItems is an object: {id: {qty: 2}, id2: {qty: 1}}
// // // //     if (typeof cartItems === "object") {
// // // //       return Object.values(cartItems).reduce(
// // // //         (total, item) => total + (Number(item?.qty) || 0),
// // // //         0
// // // //       );
// // // //     }

// // // //     return 0;
// // // //   };

// // // //   const cartCount = getCartCount();

// // // //   return (
// // // //     <>
// // // //       <nav className="shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-full sticky top-0 bg-white z-50">
// // // //         <div className="py-4 px-6 md:px-20 flex justify-between items-center">
          
// // // //           {/* Logo */}
// // // //           <div className="flex cursor-pointer items-center gap-2 text-green-400">
// // // //             <img src={logo} width={45} height={"auto"} className="rounded-full" />
// // // //             <span className="text-2xl sm:text-xl font-bold">
// // // //               Byte<span className="text-gray-900">Trek</span>Forge
// // // //             </span>
// // // //           </div>

// // // //           {/* Desktop Menu */}
// // // //           <ul className="hidden md:flex gap-10 items-center text-gray-700 font-semibold">
// // // //             <li><Link to="/">Home</Link></li>
// // // //             <li><Link to="/about-us">About</Link></li>
// // // //             <li><Link to="/contact-us">Contact</Link></li>
// // // //           </ul>

// // // //           {/* Cart + Login + Hamburger */}
// // // //           <div className="flex items-center gap-5 text-gray-700 font-semibold relative">
            
// // // //             {/* Cart */}
// // // //             <Link to="/cart-items" className="relative">
// // // //               <ShoppingCart size={25} className="cursor-pointer" />

// // // //               {/* Cart Count */}
// // // //               <span
// // // //                 className="w-4 text-[10px] h-auto absolute top-[-6px] right-[-10px]
// // // //                 text-center bg-green-700 text-white rounded-full px-[1px]"
// // // //               >
// // // //                 {cartCount}
// // // //               </span>
// // // //             </Link>

// // // //             {/* Login Button */}
// // // //             <Link to="/" className="cursor-pointer border-2  border-green-500 rounded-xl text-sm px-3 py-1">Login</Link>

// // // //             {/* Hamburger Menu */}
// // // //             <button className="md:hidden" onClick={() => setOpen(!open)}>
// // // //               {open ? <X size={32} /> : <Menu size={32} />}
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Mobile Menu */}
// // // //         {open && (
// // // //           <div className="md:hidden bg-white shadow-xl">
// // // //             <ul className="flex flex-col gap-6 px-10 py-3 mb-2">
// // // //               <Link className="text-xl" onClick={() => setOpen(false)} to="/">
// // // //                 <li>Home</li>
// // // //               </Link>
// // // //               <Link className="text-xl" onClick={() => setOpen(false)} to="/about-us">
// // // //                 <li>About</li>
// // // //               </Link>
// // // //               <Link className="text-xl" onClick={() => setOpen(false)} to="/cart-items">
// // // //                 <li>Cart</li>
// // // //               </Link>
// // // //             </ul>
// // // //           </div>
// // // //         )}
// // // //       </nav>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // import { ShoppingCart, Menu, X } from "lucide-react";
// // // import React, { useContext, useState } from "react";
// // // import logo from "../assets/logo.jpg";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { CartContext } from "../context/CartContext";

// // // const Navbar = () => {
// // //   const [open, setOpen] = useState(false);
// // //   const navigate = useNavigate();

// // //   // ✅ READ CONTEXT PROPERLY
// // //   const { cartItems, token, setToken, setCartItems } =
// // //     useContext(CartContext);

// // //   // 🛒 CART COUNT
// // //   const cartCount = Array.isArray(cartItems)
// // //     ? cartItems.reduce((t, i) => t + (Number(i.qty) || 0), 0)
// // //     : 0;

// // //   // 🔐 LOGOUT
// // //   const logoutHandler = () => {
// // //     localStorage.removeItem("token");
// // //     setToken("");
// // //     setCartItems([]);
// // //     navigate("/login");
// // //   };

// // //   return (
// // //     <nav className="shadow w-full sticky top-0 bg-white z-50">
// // //       <div className="py-4 px-6 md:px-20 flex justify-between items-center">

// // //         {/* Logo */}
// // //         <Link to="/" className="flex items-center gap-2 text-green-500">
// // //           <img src={logo} width={45} className="rounded-full" />
// // //           <span className="text-2xl font-bold">
// // //             Byte<span className="text-gray-900">Trek</span>Forge
// // //           </span>
// // //         </Link>

// // //         {/* Desktop Menu */}
// // //         <ul className="hidden md:flex gap-10 font-semibold">
// // //           <li><Link to="/">Home</Link></li>
// // //           <li><Link to="/about-us">About</Link></li>
// // //           <li><Link to="/contact-us">Contact</Link></li>
// // //         </ul>

// // //         {/* Right Section */}
// // //         <div className="flex items-center gap-5">

// // //           {/* Cart */}
// // //           <Link to="/cart-items" className="relative">
// // //             <ShoppingCart size={25} />
// // //             <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs px-1 rounded-full">
// // //               {cartCount}
// // //             </span>
// // //           </Link>

// // //           {/* LOGIN / LOGOUT */}
// // //           {!token ? (
// // //             <button
// // //               onClick={() => navigate("/login")}
// // //               className="border border-green-500 px-3 py-1 rounded"
// // //             >
// // //               Login
// // //             </button>
// // //           ) : (
// // //             <button
// // //               onClick={logoutHandler}
// // //               className="border border-red-400 text-red-500 px-3 py-1 rounded"
// // //             >
// // //               Logout
// // //             </button>
// // //           )}

// // //           {/* Mobile */}
// // //           <button className="md:hidden" onClick={() => setOpen(!open)}>
// // //             {open ? <X /> : <Menu />}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;
// // import { ShoppingCart, Menu, X } from "lucide-react";
// // import React, { useContext, useState } from "react";
// // import logo from "../assets/logo.jpg";
// // import { Link, useNavigate } from "react-router-dom";
// // import { CartContext } from "../context/CartContext";

// // const Navbar = () => {
// //   const [open, setOpen] = useState(false);
// //   const [showDropdown, setShowDropdown] = useState(false);
// //   const navigate = useNavigate();

// //   // ✅ READ AUTH + CART STATE
// //   const {
// //     cartItems,
// //     token,
// //     userEmail,
// //     setToken,
// //     setUserEmail,
// //     setCartItems,
// //   } = useContext(CartContext);

// //   // 🛒 Cart count
// //   const cartCount = Array.isArray(cartItems)
// //     ? cartItems.reduce((t, i) => t + (Number(i.qty) || 0), 0)
// //     : 0;

// //   // 🔐 Logout
// //   const logoutHandler = () => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("userEmail");

// //     setToken("");
// //     setUserEmail("");
// //     setCartItems([]);

// //     navigate("/login");
// //   };

// //   // 🟢 First letter of email
// //   const avatarLetter = userEmail
// //     ? userEmail.charAt(0).toUpperCase()
// //     : "";

// //   return (
// //     <nav className="shadow w-full sticky top-0 bg-white z-50">
// //       <div className="py-4 px-6 md:px-20 flex justify-between items-center">

// //         {/* Logo */}
// //         <Link to="/" className="flex items-center gap-2 text-green-500">
// //           <img src={logo} width={45} className="rounded-full" />
// //           <span className="text-2xl font-bold">
// //             Byte<span className="text-gray-900">Trek</span>Forge
// //           </span>
// //         </Link>

// //         {/* Desktop Menu */}
// //         <ul className="hidden md:flex gap-10 font-semibold">
// //           <li><Link to="/">Home</Link></li>
// //           <li><Link to="/about-us">About</Link></li>
// //           <li><Link to="/contact-us">Contact</Link></li>
// //         </ul>

// //         {/* Right Section */}
// //         <div className="flex items-center gap-5 relative">

// //           {/* Cart */}
// //           <Link to="/cart-items" className="relative">
// //             <ShoppingCart size={25} />
// //             <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs px-1 rounded-full">
// //               {cartCount}
// //             </span>
// //           </Link>

// //           {/* LOGIN / AVATAR */}
// //           {!token ? (
// //             // ❌ Not logged in
// //             <button
// //               onClick={() => navigate("/login")}
// //               className="border border-green-500 px-3 py-1 rounded"
// //             >
// //               Login
// //             </button>
// //           ) : (
// //             // ✅ Logged in
// //             <div
// //               className="relative"
// //               onMouseEnter={() => setShowDropdown(true)}
// //               onMouseLeave={() => setShowDropdown(false)}
// //             >
// //               {/* Avatar */}
// //               <div className="w-9 h-9 rounded-full bg-green-600 text-white font-bold flex items-center justify-center cursor-pointer">
// //                 {avatarLetter}
// //               </div>

// //               {/* Dropdown */}
// //               {showDropdown && (
// //                 <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md">
// //                   <div className="px-4 py-2 text-sm border-b truncate">
// //                     {userEmail}
// //                   </div>
// //                   <p
// //                     onClick={logoutHandler}
// //                     className="px-4 py-2 text-sm text-red-600 cursor-pointer hover:bg-red-50"
// //                   >
// //                     Logout
// //                   </p>
// //                 </div>
// //               )}
// //             </div>
// //           )}

// //           {/* Mobile */}
// //           <button className="md:hidden" onClick={() => setOpen(!open)}>
// //             {open ? <X /> : <Menu />}
// //           </button>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import { ShoppingCart, Menu, X } from "lucide-react";
// import React, { useContext, useState } from "react";
// import logo from "../assets/logo.jpg";
// import { Link, useNavigate } from "react-router-dom";
// import { CartContext } from "../context/CartContext";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const navigate = useNavigate();

//   const {
//     cartItems,
//     token,
//     userEmail,
//     setToken,
//     setUserEmail,
//     setCartItems,
//   } = useContext(CartContext);

//   // 🛒 Cart count
//   const cartCount = Array.isArray(cartItems)
//     ? cartItems.reduce((t, i) => t + (Number(i.qty) || 0), 0)
//     : 0;

//   // 🔐 Logout
//   const logoutHandler = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userEmail");

//     setToken("");
//     setUserEmail("");
//     setCartItems([]);

//     navigate("/login");
//   };

//   // 🟢 First letter of email
//   const avatarLetter = userEmail
//     ? userEmail.charAt(0).toUpperCase()
//     : "";

//   return (
//     <nav className="shadow w-full sticky top-0 bg-white z-50">
//       <div className="py-4 px-6 md:px-20 flex justify-between items-center">

//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 text-green-500">
//           <img src={logo} width={45} className="rounded-full" />
//           <span className="text-2xl font-bold">
//             Byte<span className="text-gray-900">Trek</span>Forge
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-10 font-semibold">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about-us">About</Link></li>
//           <li><Link to="/contact-us">Contact</Link></li>
//         </ul>

//         {/* Right Section */}
//         <div className="flex items-center gap-5 relative">

//           {/* Cart */}
//           <Link to="/cart-items" className="relative">
//             <ShoppingCart size={25} />
//             <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs px-1 rounded-full">
//               {cartCount}
//             </span>
//           </Link>

//           {/* LOGIN / AVATAR */}
//           {!token ? (
//             <button
//               onClick={() => navigate("/login")}
//               className="border border-green-500 px-3 py-1 rounded"
//             >
//               Login
//             </button>
//           ) : (
//             <div
//               className="relative"
//               onMouseEnter={() => setShowDropdown(true)}
//               onMouseLeave={() => setShowDropdown(false)}
//             >
//               {/* Avatar */}
//               <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-green-100  text-white  flex items-center justify-center cursor-pointer">
//                 {avatarLetter}
//               </div>

//               {/* Dropdown */}
//               {showDropdown && (
//                 <div className="absolute right-0 w-40 bg-white shadow-lg rounded-md">
//                   <p
//                     onClick={logoutHandler}
//                     className="px-4 py-2 text-sm text-red-600 cursor-pointer hover:bg-red-50"
//                   >
//                     Logout
//                   </p>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Mobile */}
//           <button className="md:hidden" onClick={() => setOpen(!open)}>
//             {open ? <X /> : <Menu />}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { ShoppingCart, Menu, X } from "lucide-react";
import React, { useContext, useState } from "react";
import logo from "../assets/logo.jpg";
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
  };

  const avatarLetter = userEmail?.charAt(0).toUpperCase();

  return (
    <nav className="shadow sticky top-0 bg-white z-50">
      <div className="py-4 px-6 md:px-20 flex justify-between items-center">

        <Link to="/" className="flex items-center gap-2 text-green-500">
          <img src={logo} width={45} className="rounded-full" />
          <span className="text-2xl font-bold">
            Byte<span className="text-gray-900">Trek</span>Forge
          </span>
        </Link>

        <div className="flex items-center gap-5 relative">
          <Link to="/cart-items" className="relative">
            <ShoppingCart size={25} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {!token ? (
            <button
              onClick={() => navigate("/login")}
              className="border border-green-500 px-3 py-1 rounded"
            >
              Login
            </button>
          ) : (
            <div
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              className="relative"
            >
              <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center cursor-pointer">
                {avatarLetter}
              </div>

              {showDropdown && (
                <div className="absolute right-0 bg-white shadow rounded">
                  <p
                    onClick={logoutHandler}
                    className="px-4 py-2 text-sm text-red-600 cursor-pointer hover:bg-red-50"
                  >
                    Logout
                  </p>
                 <Link to="/my-orders">
                  <p
                    
                    className="px-4 py-2 text-sm  cursor-pointer hover:bg-red-50"
                  >
                    Orders
                  </p>
                 </Link>
                </div>
              )}
            </div>
          )}

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
