import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AdminAuthContext } from "../context/AdminAuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const { admin, login } = useContext(AdminAuthContext);
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    if (admin) navigate("/");
  }, [admin, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const url = isRegister
        ? `${backendUrl}/api/admin/register`
        : `${backendUrl}/api/admin/login`;

      const payload = isRegister
        ? { name, email, password }
        : { email, password };

      const { data } = await axios.post(url, payload, {
        withCredentials: true,
      });

      if (data.success) {
        login(data);
        toast.success(isRegister ? "Admin registered" : "Admin logged in");
        navigate("/");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Authentication failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-gray-100 px-4">
      <form
        onSubmit={submitHandler}
        className="
          bg-white rounded-2xl shadow-xl
          w-full max-w-md lg:max-w-lg
          p-6 sm:p-8 lg:p-10
        "
      >
        <h2 className="text-center text-2xl lg:text-3xl font-bold text-green-600 mb-8">
          {isRegister ? "Admin Register" : "Admin Login"}
        </h2>

        {/* NAME */}
        {isRegister && (
          <input
            type="text"
            placeholder="Admin Name"
            className="w-full mb-5 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Admin Email"
          className="w-full mb-5 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white rounded-lg font-medium text-lg hover:bg-green-700 transition"
        >
          {isRegister ? "Register" : "Login"}
        </button>

        {/* TOGGLE */}
        <p
          className="text-center text-gray-600 mt-6 cursor-pointer hover:text-green-600 transition"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? "Already an admin? Login"
            : "New admin? Register"}
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;
