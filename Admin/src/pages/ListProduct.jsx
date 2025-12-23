import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ======================
     FETCH PRODUCTS
  ====================== */
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/products");
      if (res.data.success) {
        setProducts(res.data.products);
      }
    } catch (error) {
      toast.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  /* ======================
     DELETE PRODUCT
  ====================== */
  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await axios.delete(
        `http://localhost:4000/api/products/${id}`
      );

      if (res.data.success) {
        toast.success("Product deleted");
        setProducts(products.filter((item) => item._id !== id));
      }
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* ======================
     LOADING
  ====================== */
  if (loading) {
    return (
      <div className="p-6 text-gray-500 text-sm">
        Loading products...
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          All Products
        </h2>

        {/* TABLE WRAPPER */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left font-medium">
                  Product
                </th>
                <th className="px-4 py-3 text-left font-medium">
                  Category
                </th>
                {/* PRICE HEADER (HIDDEN ON MOBILE) */}
                <th className="px-4 py-3 text-left font-medium hidden sm:table-cell">
                  Price
                </th>
                <th className="px-4 py-3 text-right font-medium">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {products.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="py-8 text-center text-gray-500"
                  >
                    No products found
                  </td>
                </tr>
              )}

              {products.map((product) => (
                <tr
                  key={product._id}
                  className="hover:bg-gray-50 transition"
                >
                  {/* PRODUCT */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={`http://localhost:4000${product.image}`}
                        alt={product.name}
                        className="w-14 h-14 rounded border object-cover"
                      />

                      <div className="flex flex-col">
                        <span className="font-medium text-gray-700 truncate max-w-[160px]">
                          {product.name}
                        </span>

                        {/* PRICE — MOBILE ONLY */}
                        <span className="text-sm text-gray-500 sm:hidden">
                          ₹{product.price}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* CATEGORY */}
                  <td className="px-4 py-3 text-gray-600">
                    {product.category}
                  </td>

                  {/* PRICE — DESKTOP ONLY */}
                  <td className="px-4 py-3 text-gray-700 hidden sm:table-cell">
                    ₹{product.price}
                  </td>

                  {/* ACTION */}
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="
                        px-4 py-1.5
                        text-sm
                        rounded-md
                        border border-red-300
                        text-red-600
                        hover:bg-red-50
                        transition
                      "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
