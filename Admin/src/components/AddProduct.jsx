// import React, { useContext, useState } from "react";
// import { AdminAuthContext } from "../context/AdminAuthContext";
// import { toast } from "react-toastify";

// const AddProduct = () => {
//   const { api } = useContext(AdminAuthContext); 
  

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     category: "",
//     price: "",
//   });

//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);

  
//   /* ======================
//      FORM HANDLERS
//   ====================== */
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   /* ======================
//      SUBMIT PRODUCT
//   ====================== */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !formData.name ||
//       !formData.description ||
//       !formData.category ||
//       !formData.price ||
//       !image
//     ) {
//       toast.error("All fields are required");
//       return;
//     }

//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("description", formData.description);
//       data.append("category", formData.category);
//       data.append("price", formData.price);
//       data.append("image", image);

//       const res = await api.post("/api/products", data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       if (res.data.success) {
//         toast.success("Product added successfully");
//         setFormData({
//           name: "",
//           description: "",
//           category: "",
//           price: "",
//         });
//         setImage(null);
//         setPreview(null);
//       }
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message || "Failed to add product"
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white flex justify-center px-4 py-8">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-2xl bg-white sm:p-8 p-4 rounded-lg space-y-6"
//       >
//         {/* IMAGE UPLOAD */}
//         <div>
//           <p className="text-base font-medium mb-2">Product Image</p>
//           <label className="inline-block cursor-pointer">
//             <input
//               type="file"
//               accept="image/*"
//               hidden
//               onChange={handleImageChange}
//             />
//             <img
//               src={
//                 preview ||
//                 "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
//               }
//               alt="Upload"
//               className="w-32 h-32 object-cover border rounded hover:opacity-80"
//             />
//           </label>
//         </div>

//         {/* PRODUCT NAME */}
//         <div className="flex flex-col gap-1">
//           <label className="text-base font-medium">
//             Product Name
//           </label>
//           <input
//             id="name"
//             type="text"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Type here"
//             className="outline-none py-2.5 px-3 rounded border border-gray-400 focus:ring-2 focus:ring-green-500"
//           />
//         </div>

//         {/* DESCRIPTION */}
//         <div className="flex flex-col gap-1">
//           <label className="text-base font-medium">
//             Product Description
//           </label>
//           <textarea
//             id="description"
//             rows={4}
//             value={formData.description}
//             onChange={handleChange}
//             className="outline-none py-2.5 px-3 rounded border border-gray-400 resize-none focus:ring-2 focus:ring-green-500"
//           />
//         </div>

//         {/* CATEGORY + PRICE */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//           <div className="flex flex-col gap-1">
//             <label className="text-base font-medium">
//               Category
//             </label>
//             <select
//               id="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="outline-none py-2.5 px-3 rounded border border-gray-400 focus:ring-2 focus:ring-green-500"
//             >
//               <option value="">Select Category</option>
//               <option value="Salad">Salad</option>
//               <option value="Rolls">Rolls</option>
//               <option value="Deserts">Deserts</option>
//               <option value="Sandwich">Sandwich</option>
//               <option value="Cake">Cake</option>
//               <option value="Pure Veg">Pure Veg</option>
//               <option value="Pasta">Pasta</option>
//               <option value="Noodles">Noodles</option>
//             </select>
//           </div>

//           <div className="flex flex-col gap-1">
//             <label className="text-base font-medium">
//               Price
//             </label>
//             <input
//               id="price"
//               type="number"
//               value={formData.price}
//               onChange={handleChange}
//               placeholder="0"
//               className="outline-none py-2.5 px-3 rounded border border-gray-400 focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//         </div>

//         {/* SUBMIT BUTTON */}
//         <button
//           type="submit"
//           className="w-full sm:w-fit px-10 py-2.5 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition"
//         >
//           ADD PRODUCT
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;
import React, { useContext, useState } from "react";
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

  /* ======================
     FORM HANDLERS
  ====================== */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  /* ======================
     SUBMIT PRODUCT
  ====================== */
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

      // ✅ CORRECT ENDPOINT
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
        error?.response?.data?.message ||
          "Failed to add product"
      );
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white sm:p-8 p-4 rounded-lg space-y-6"
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
            placeholder="Type here"
            className="outline-none py-2.5 px-3 rounded border border-gray-400 focus:ring-2 focus:ring-green-500"
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
            className="outline-none py-2.5 px-3 rounded border border-gray-400 resize-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* CATEGORY + PRICE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium">
              Category
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="outline-none py-2.5 px-3 rounded border border-gray-400 focus:ring-2 focus:ring-green-500"
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
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-base font-medium">
              Price
            </label>
            <input
              id="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="0"
              className="outline-none py-2.5 px-3 rounded border border-gray-400 focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full sm:w-fit px-10 py-2.5 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition"
        >
          ADD PRODUCT
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
