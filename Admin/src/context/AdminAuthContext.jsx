// import React from "react";
// import { createContext, useEffect, useState } from "react";

// export const AdminAuthContext = createContext();

// const AdminAuthProvider = ({ children }) => {
//   const [admin, setAdmin] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("adminToken"));

//   useEffect(() => {
//     if (token) {
//       const storedAdmin = localStorage.getItem("admin");
//       if (storedAdmin) {
//         setAdmin(JSON.parse(storedAdmin));
//       }
//     }
//   }, [token]);

//   const login = (data) => {
//     setAdmin(data.admin);
//     setToken(data.token);
//     localStorage.setItem("admin", JSON.stringify(data.admin));
//     localStorage.setItem("adminToken", data.token);
//   };

//   const logout = () => {
//     setAdmin(null);
//     setToken(null);
//     localStorage.removeItem("admin");
//     localStorage.removeItem("adminToken");
//   };

//   return (
//     <AdminAuthContext.Provider value={{ admin, token, login, logout }}>
//       {children}
//     </AdminAuthContext.Provider>
//   );
// };

// export default AdminAuthProvider;
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AdminAuthContext = createContext();

const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("adminToken")
  );

  // ✅ backend URL from .env
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // ✅ axios instance (BASE URL ONLY)
  const api = axios.create({
    baseURL: backendUrl, // http://localhost:4000
    withCredentials: true,
  });

  // ✅ attach token automatically
  api.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // ✅ load admin on refresh
  useEffect(() => {
    if (token) {
      const storedAdmin = localStorage.getItem("admin");
      if (storedAdmin) {
        setAdmin(JSON.parse(storedAdmin));
      }
    }
  }, [token]);

  const login = (data) => {
    setAdmin(data.admin);
    setToken(data.token);
    localStorage.setItem("admin", JSON.stringify(data.admin));
    localStorage.setItem("adminToken", data.token);
  };

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
        api,      // ✅ VERY IMPORTANT
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthProvider;
