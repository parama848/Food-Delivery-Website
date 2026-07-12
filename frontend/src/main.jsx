import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />

        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable={false}
          theme="dark"
          toastStyle={{
            background: "white",
            color: "black",
            borderRadius: "14px",
            minHeight: "56px",
            padding: "12px 15px",
            fontSize: "15px",
            fontWeight: "500",
            boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
            width: "fit-content",
            marginTop: "12px",
          }}
        />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
