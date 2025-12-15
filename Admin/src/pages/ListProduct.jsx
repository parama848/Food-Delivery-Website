import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH PRODUCTS
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

  // DELETE PRODUCT
  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

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

  if (loading) {
    return <p className="p-6">Loading products...</p>;
  }

  return (
    <div className="flex-1">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">All Foods</h2>

        <div className="flex flex-col items-center max-w-5xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full">
            <thead className="text-gray-900 text-sm text-left bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-semibold">Food</th>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold hidden md:block">
                  Price
                </th>
                <th className="px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>

            <tbody className="text-sm text-gray-600">
              {products.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-6">
                    No products found
                  </td>
                </tr>
              )}

              {products.map((product) => (
                <tr key={product._id} className="border-t border-gray-200">
                  <td className="px-4 py-3 flex items-center gap-3">
                    <div className="border rounded overflow-hidden">
                      <img
                        src={`http://localhost:4000${product.image}`}
                        alt={product.name}
                        className="w-16 h-16 object-cover"
                      />
                    </div>
                    <span className="truncate max-sm:hidden">
                      {product.name}
                    </span>
                  </td>

                  <td className="px-4 py-3">{product.category}</td>
                  
                  <td className="px-4 hidden md:block">₹{product.price}</td>
                  

                  <td className="px-4 py-3">
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="px-4 py-1.5 text-sm bg-red-500 cursor-pointer text-white rounded hover:bg-red-600"
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
