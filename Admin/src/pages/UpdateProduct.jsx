import React, { useContext, useEffect, useState } from "react";
import { AdminAuthContext } from "../context/AdminAuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const { api } = useContext(AdminAuthContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  /* ======================
     FETCH PRODUCT
  ====================== */

  const fetchProduct = async () => {
    try {
      const res = await api.get(`/api/products/${id}`);

      if (res.data.success) {
        const product = res.data.product;

        setFormData({
          name: product.name,
          description: product.description,
          category: product.category,
          price: product.price,
        });

        setPreview(product.image);
      }
    } catch (error) {
      toast.error("Failed to fetch product");
      navigate("/list-product");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  /* ======================
     HANDLE CHANGE
  ====================== */

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  /* ======================
     HANDLE IMAGE
  ====================== */

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  /* ======================
     UPDATE PRODUCT
  ====================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("category", formData.category);
      data.append("price", formData.price);

      if (image) {
        data.append("image", image);
      }

      const res = await api.put(`/api/products/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        toast.success("Product updated successfully");
        navigate("/list-product");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to update product"
      );
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-gray-500">
        Loading product...
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-screen bg-[#f5f5f5] px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* IMAGE */}

        <div>
          <p className="text-xl font-semibold mb-4">
            Product Image
          </p>

          <label className="cursor-pointer inline-block">
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
              alt="preview"
              className="w-40 h-40 object-cover border border-gray-300 rounded-lg"
            />
          </label>
        </div>

        {/* PRODUCT NAME */}

        <div>
          <label className="block text-xl font-semibold mb-3">
            Product Name
          </label>

          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Type here"
            className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* DESCRIPTION */}

        <div>
          <label className="block text-xl font-semibold mb-3">
            Product Description
          </label>

          <textarea
            id="description"
            rows="6"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* CATEGORY + PRICE */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xl font-semibold mb-3">
              Category
            </label>

            <select
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
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

          <div>
            <label className="block text-xl font-semibold mb-3">
              Price
            </label>

            <input
              id="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="0"
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* BUTTONS */}

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-10 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            UPDATE PRODUCT
          </button>

          <button
            type="button"
            onClick={() => navigate("/list-product")}
            className="px-10 py-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;