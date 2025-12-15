// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { AdminAuthContext } from "../context/AdminAuthContext";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const AdminLogin = () => {
//   const { admin, login } = useContext(AdminAuthContext);
//   const navigate = useNavigate();

//   const [isRegister, setIsRegister] = useState(false);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   /* =========================
//      AUTO REDIRECT LOGIC
//      ========================= */
//   useEffect(() => {
//     if (admin) {
//       navigate("/");
//     }
//   }, [admin, navigate]);

//   /* =========================
//      SUBMIT HANDLER
//      ========================= */
//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const url = isRegister
//         ? "http://localhost:4000/api/admin/register"
//         : "http://localhost:4000/api/admin/login";

//       const payload = isRegister
//         ? { name, email, password }
//         : { email, password };

//       const { data } = await axios.post(url, payload, {
//         withCredentials: true,
//       });

//       if (data.success) {
//         login(data);
//         toast.success(
//           isRegister
//             ? "Admin registered successfully"
//             : "Admin logged in successfully"
//         );
//         navigate("/");
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Authentication failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <form
//         onSubmit={submitHandler}
//         className="
//           bg-white rounded-xl shadow-md
//           w-full
//           sm:w-[420px]
//           lg:w-[480px]
//           p-6 sm:p-8
//         "
//       >
//         <h2
//           className="
//             font-bold text-center text-green-600
//             text-xl sm:text-2xl
//             mb-6
//           "
//         >
//           {isRegister ? "Admin Register" : "Admin Login"}
//         </h2>

//         {/* NAME (REGISTER ONLY) */}
//         {isRegister && (
//           <input
//             type="text"
//             placeholder="Admin Name"
//             className="w-full mb-4 px-4 py-2.5 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         )}

//         {/* EMAIL */}
//         <input
//           type="email"
//           placeholder="Admin Email"
//           className="w-full mb-4 px-4 py-2.5 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         {/* PASSWORD */}
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-5 px-4 py-2.5 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         {/* BUTTON */}
//         <button
//           type="submit"
//           className="
//             w-full bg-green-600 text-white rounded
//             py-2.5
//             hover:bg-green-700 transition cursor-pointer
//           "
//         >
//           {isRegister ? "Register" : "Login"}
//         </button>

//         {/* TOGGLE */}
//         <p
//           className="
//             text-center text-gray-600 cursor-pointer
//             text-sm sm:text-base
//             mt-5
//           "
//           onClick={() => setIsRegister(!isRegister)}
//         >
//           {isRegister
//             ? "Already an admin? Login"
//             : "New admin? Register"}
//         </p>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useState, useContext } from "react";
import { AdminAuthContext } from "../context/AdminAuthContext";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { api } = useContext(AdminAuthContext);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.description ||
      !formData.category ||
      !formData.price ||
      !image
    ) {
      toast.error("All fields are required");
      return;
    }

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("category", formData.category);
      data.append("price", formData.price);
      data.append("image", image);

      const res = await api.post("/api/products", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        toast.success("Product added successfully");
        setFormData({
          name: "",
          description: "",
          category: "",
          price: "",
        });
        setImage(null);
        setPreview(null);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to add product"
      );
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-4 sm:p-8 rounded-lg space-y-6"
      >
        {/* IMAGE UPLOAD */}
        <div>
          <p className="text-base font-medium mb-2">
            Product Image
          </p>
          <label className="inline-block cursor-pointer">
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
            <img
              src={
                preview ||
                "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
              }
              alt="Upload"
              className="w-32 h-32 object-cover border rounded hover:opacity-80"
            />
          </label>
        </div>

        {/* PRODUCT NAME */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">
            Product Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* DESCRIPTION */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">
            Product Description
          </label>
          <textarea
            id="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* CATEGORY + PRICE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <select
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select Category</option>
            <option value="Salad">Salad</option>
            <option value="Rolls">Rolls</option>
            <option value="Deserts">Deserts</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Cake">Cake</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>

          <input
            id="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            className="input"
          />
        </div>

        <button
          type="submit"
          className="px-10 py-2.5 bg-green-500 text-white rounded hover:bg-green-600"
        >
          ADD PRODUCT
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
