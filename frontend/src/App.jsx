// import React from "react";
// import Navbar from "./components/Navbar";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Cart from "./pages/Cart";
// import Footer from "./components/Footer";
// import Login from "./pages/Login";



// const App = () => {
  
//   return (
//     <>
      
//         <Navbar />
//         <div className="mx-10">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about-us" element={<About />} />
//             <Route path="/contact-us" element={<Contact />} />
//             <Route path="/cart-items" element={<Cart />} />
//               <Route path="/login" element={<Login />} />
//           </Routes>
//         </div>
//         <Footer />
      
//     </>
//   );
// };

// export default App;
import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder"
import MyOrders from "./pages/MyOrders";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="mx-2">
        <Routes>
          {/* 🔓 Public Route */}
          <Route path="/login" element={<Login />} />

          {/* 🔐 Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/about-us"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />

          <Route
            path="/contact-us"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart-items"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/place-order"
            element={
              <ProtectedRoute>
                <PlaceOrder />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-orders"
            element={
              <ProtectedRoute>
                <MyOrders />
              </ProtectedRoute>
            }
          />

        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
