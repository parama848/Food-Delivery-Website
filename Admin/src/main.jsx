// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {BrowserRouter} from 'react-router-dom'
// import {ToastContainer} from 'react-toastify'
// import AdminAuthProvider from "./context/AdminAuthContext";

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//    <ToastContainer position="top-right" autoClose={3000} />
//     <App />
//   </BrowserRouter>
// )
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AdminAuthProvider from "./context/AdminAuthContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminAuthProvider>
        <ToastContainer position="top-right" autoClose={3000} />
        <App />
      </AdminAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
