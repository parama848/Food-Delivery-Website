import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import ListProduct from "./pages/ListProduct";
import Orders from "./pages/Orders";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


const App = () => {
  return (
    <>
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/add-product" element={<CreateProduct />} />
            <Route path="/list-product" element={<ListProduct />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
