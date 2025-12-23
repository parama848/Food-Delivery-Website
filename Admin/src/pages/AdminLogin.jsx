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

  /* =========================
     AUTO REDIRECT LOGIC
     ========================= */
  useEffect(() => {
    if (admin) {
      navigate("/");
    }
  }, [admin, navigate]);

  /* =========================
     SUBMIT HANDLER
     ========================= */
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const url = isRegister
        ? "http://localhost:4000/api/admin/register"
        : "http://localhost:4000/api/admin/login";

      const payload = isRegister
        ? { name, email, password }
        : { email, password };

      const { data } = await axios.post(url, payload, {
        withCredentials: true,
      });

      if (data.success) {
        login(data);
        toast.success(
          isRegister
            ? "Admin registered successfully"
            : "Admin logged in successfully"
        );
        navigate("/");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Authentication failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={submitHandler}
        className="
          bg-white rounded-xl shadow-md
          w-full
          sm:w-[420px]
          lg:w-[480px]
          p-6 sm:p-8
        "
      >
        <h2
          className="
            font-bold text-center text-green-600
            text-xl sm:text-2xl
            mb-6
          "
        >
          {isRegister ? "Admin Register" : "Admin Login"}
        </h2>

        {/* NAME (REGISTER ONLY) */}
        {isRegister && (
          <input
            type="text"
            placeholder="Admin Name"
            className="w-full mb-4 px-4 py-2.5 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Admin Email"
          className="w-full mb-4 px-4 py-2.5 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-5 px-4 py-2.5 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="
            w-full bg-green-600 text-white rounded
            py-2.5
            hover:bg-green-700 transition cursor-pointer
          "
        >
          {isRegister ? "Register" : "Login"}
        </button>

        {/* TOGGLE */}
        <p
          className="
            text-center text-gray-600 cursor-pointer
            text-sm sm:text-base
            mt-5
          "
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
