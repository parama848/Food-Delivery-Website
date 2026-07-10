import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import ListProduct from "./pages/ListProduct";
import Orders from "./pages/Orders";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AdminLogin from "./pages/AdminLogin";
import UpdateProduct from "./pages/UpdateProduct";

const App = () => {
  return (
    <>
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<CreateProduct />} />
            <Route path="/list-product" element={<ListProduct />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/update-product/:id" element={<UpdateProduct />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
