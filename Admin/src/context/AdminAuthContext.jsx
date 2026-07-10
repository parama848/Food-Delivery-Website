import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AdminAuthContext = createContext(null);

const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("adminToken")
  );

  // 🔥 MUST MATCH YOUR VERCEL BACKEND URL
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  // example:
  // VITE_BACKEND_URL=https://food-delivery-website-backend-opal.vercel.app

  // ✅ axios instance
  const api = axios.create({
    baseURL: backendUrl,
  });

  // ✅ attach admin token automatically
  api.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // ✅ restore admin on refresh
  useEffect(() => {
    if (token) {
      const storedAdmin = localStorage.getItem("admin");
      if (storedAdmin) {
        setAdmin(JSON.parse(storedAdmin));
      }
    }
  }, [token]);

  // ✅ login handler
  const login = (data) => {
    setAdmin(data.admin);
    setToken(data.token);
    localStorage.setItem("admin", JSON.stringify(data.admin));
    localStorage.setItem("adminToken", data.token);
  };

  // ✅ logout handler
  const logout = () => {
    setAdmin(null);
    setToken(null);
    localStorage.removeItem("admin");
    localStorage.removeItem("adminToken");
  };

  return (
    <AdminAuthContext.Provider
      value={{
        admin,
        token,
        api,     // 🔑 THIS is what AddProduct uses
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthProvider;
