import React, { useEffect, useState } from "react";
import axios from "axios";

const statusColor = {
  PLACED: "bg-blue-100 text-blue-600",
  PROCESSING: "bg-yellow-100 text-yellow-600",
  SHIPPED: "bg-purple-100 text-purple-600",
  DELIVERED: "bg-green-100 text-green-600",
};

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchOrders = async () => {
    const res = await axios.get(`${backendUrl}/api/orders/admin`);
    if (res.data.success) {
      setOrders(res.data.orders);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(
      `${backendUrl}/api/orders/${id}/status`,
      { status }
    );
    fetchOrders();
  };

  return (
    <div className="min-h-screen bg-gray-100 px-3 py-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          📦 Orders Management
        </h2>

        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 w-full"
          >
            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
              <div className="break-all">
                <p className="text-xs text-gray-500">Order ID</p>
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  {order._id}
                </p>
              </div>

              <span
                className={`inline-block w-fit px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${statusColor[order.orderStatus]}`}
              >
                {order.orderStatus}
              </span>
            </div>

            <hr className="mb-4" />

            {/* CONTENT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* PRODUCTS */}
              <div>
                <p className="font-semibold mb-1 text-sm">
                  Products
                </p>
                {order.items.map((item, idx) => (
                  <p
                    key={idx}
                    className="text-sm text-gray-700"
                  >
                    {item.name} × {item.quantity}
                  </p>
                ))}
              </div>

              {/* CUSTOMER */}
              <div>
                <p className="font-semibold mb-1 text-sm">
                  Customer
                </p>
                <p className="text-sm">
                  {order.shippingAddress.firstName}{" "}
                  {order.shippingAddress.lastName}
                </p>
                <p className="text-sm text-gray-600 break-all">
                  {order.userEmail}
                </p>
              </div>

              {/* ADDRESS */}
              <div>
                <p className="font-semibold mb-1 text-sm">
                  Shipping Address
                </p>
                <p className="text-sm text-gray-700 break-words">
                  {order.shippingAddress.street},{" "}
                  {order.shippingAddress.city},{" "}
                  {order.shippingAddress.state}
                </p>
                <p className="text-sm text-gray-700">
                  {order.shippingAddress.country} -{" "}
                  {order.shippingAddress.zipcode}
                </p>
              </div>

              {/* PAYMENT */}
              <div>
                <p className="font-semibold mb-1 text-sm">
                  Payment
                </p>
                <p className="text-sm">
                  Method:{" "}
                  <span className="font-medium">
                    {order.paymentMethod}
                  </span>
                </p>
                <p className="text-sm">
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      order.paymentStatus === "PAID"
                        ? "text-green-600"
                        : "text-orange-500"
                    }`}
                  >
                    {order.paymentStatus}
                  </span>
                </p>
                <p className="font-bold text-lg mt-1">
                  ₹{order.totalAmount}
                </p>
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-6">
              <p className="text-xs sm:text-sm text-gray-500">
                Ordered on{" "}
                {new Date(order.createdAt).toLocaleDateString()}
              </p>

              <select
                value={order.orderStatus}
                onChange={(e) =>
                  updateStatus(order._id, e.target.value)
                }
                className="w-full sm:w-auto border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="PLACED">Placed</option>
                <option value="PROCESSING">Processing</option>
                <option value="SHIPPED">Shipped</option>
                <option value="DELIVERED">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;
