import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = () => {
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

      const res = await axios.post(
        "http://localhost:4000/api/products",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

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
    <div className="py-10 bg-white">
      <form
        onSubmit={handleSubmit}
        className="md:p-10 p-4 space-y-5 max-w-lg"
      >
        {/* IMAGE UPLOAD */}
        <div>
          <p className="text-base font-medium">Product Image</p>
          <label className="inline-block mt-2 cursor-pointer">
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
              className="w-32 border rounded"
            />
          </label>
        </div>

        {/* NAME */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Product Name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Type here"
            className="outline-none py-2 px-3 rounded border border-gray-500/40"
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
            className="outline-none py-2 px-3 rounded border border-gray-500/40 resize-none"
          />
        </div>

        {/* CATEGORY */}
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium">Category</label>
          <select
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="outline-none py-2 px-3 rounded border border-gray-500/40"
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

        {/* PRICE */}
        <div className="flex flex-col gap-1 w-40">
          <label className="text-base font-medium">Price</label>
          <input
            id="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="0"
            className="outline-none py-2 px-3 rounded border border-gray-500/40"
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="px-8 py-2.5 bg-green-400 text-white font-medium rounded cursor-pointer hover:bg-green-600"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
