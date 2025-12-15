// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const statusColor = {
//   PLACED: "bg-blue-100 text-blue-600",
//   PROCESSING: "bg-yellow-100 text-yellow-600",
//   SHIPPED: "bg-purple-100 text-purple-600",
//   DELIVERED: "bg-green-100 text-green-600",
// };

// const AdminOrders = () => {
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     const res = await axios.get("http://localhost:4000/api/orders/admin");
//     if (res.data.success) {
//       setOrders(res.data.orders);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const updateStatus = async (id, status) => {
//     await axios.put(
//       `http://localhost:4000/api/orders/${id}/status`,
//       { status }
//     );
//     fetchOrders();
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8">📦 Orders Management</h2>

//         {orders.map((order) => (
//           <div
//             key={order._id}
//             className="bg-white rounded-xl shadow-md p-6 mb-6"
//           >
//             {/* TOP ROW */}
//             <div className="flex justify-between items-center mb-4">
//               <div>
//                 <p className="text-sm text-gray-500">
//                   Order ID
//                 </p>
//                 <p className="font-semibold text-gray-800">
//                   {order._id}
//                 </p>
//               </div>

//               <span
//                 className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor[order.orderStatus]}`}
//               >
//                 {order.orderStatus}
//               </span>
//             </div>

//             <hr className="mb-4" />

//             {/* MAIN CONTENT */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
//               {/* PRODUCTS */}
//               <div>
//                 <p className="font-semibold mb-2">Products</p>
//                 {order.items.map((item, idx) => (
//                   <p key={idx} className="text-sm text-gray-700">
//                     {item.name} × {item.quantity}
//                   </p>
//                 ))}
//               </div>

//               {/* CUSTOMER */}
//               <div>
//                 <p className="font-semibold mb-2">Customer</p>
//                 <p className="text-sm">{order.shippingAddress.firstName} {order.shippingAddress.lastName}</p>
//                 <p className="text-sm text-gray-600">{order.userEmail}</p>
//               </div>

//               {/* ADDRESS */}
//               <div>
//                 <p className="font-semibold mb-2">Shipping Address</p>
//                 <p className="text-sm text-gray-700">
//                   {order.shippingAddress.street},
//                   {order.shippingAddress.city},
//                   {order.shippingAddress.state}
//                 </p>
//                 <p className="text-sm text-gray-700">
//                   {order.shippingAddress.country} - {order.shippingAddress.zipcode}
//                 </p>
//               </div>

//               {/* PAYMENT */}
//               <div>
//                 <p className="font-semibold mb-2">Payment</p>
//                 <p className="text-sm">
//                   Method: <span className="font-medium">{order.paymentMethod}</span>
//                 </p>
//                 <p className="text-sm">
//                   Status:{" "}
//                   <span
//                     className={`font-semibold ${
//                       order.paymentStatus === "PAID"
//                         ? "text-green-600"
//                         : "text-orange-500"
//                     }`}
//                   >
//                     {order.paymentStatus}
//                   </span>
//                 </p>
//                 <p className="font-bold text-lg mt-1">
//                   ₹{order.totalAmount}
//                 </p>
//               </div>
//             </div>

//             {/* FOOTER */}
//             <div className="flex justify-between items-center mt-6">
//               <p className="text-sm text-gray-500">
//                 Ordered on{" "}
//                 {new Date(order.createdAt).toLocaleDateString()}
//               </p>

//               <select
//                 value={order.orderStatus}
//                 onChange={(e) =>
//                   updateStatus(order._id, e.target.value)
//                 }
//                 className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               >
//                 <option value="PLACED">Placed</option>
//                 <option value="PROCESSING">Processing</option>
//                 <option value="SHIPPED">Shipped</option>
//                 <option value="DELIVERED">Delivered</option>
//               </select>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminOrders;

import React, { useEffect, useState, useContext } from "react";
import { AdminAuthContext } from "../context/AdminAuthContext";

const statusColor = {
  PLACED: "bg-blue-100 text-blue-600",
  PROCESSING: "bg-yellow-100 text-yellow-600",
  SHIPPED: "bg-purple-100 text-purple-600",
  DELIVERED: "bg-green-100 text-green-600",
};

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  // ✅ use shared axios instance
  const { api } = useContext(AdminAuthContext);

  /* ======================
     FETCH ALL ORDERS
  ====================== */
  const fetchOrders = async () => {
    try {
      const res = await api.get("/api/orders/admin");
      if (res.data?.success) {
        setOrders(res.data.orders);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  /* ======================
     UPDATE ORDER STATUS
  ====================== */
  const updateStatus = async (id, status) => {
    try {
      await api.put(`/api/orders/${id}/status`, { status });
      fetchOrders();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          📦 Orders Management
        </h2>

        {orders.length === 0 && (
          <p className="text-gray-500">
            No orders found
          </p>
        )}

        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-xl shadow-md p-6 mb-6"
          >
            {/* ===== TOP ROW ===== */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-500">
                  Order ID
                </p>
                <p className="font-semibold text-gray-800">
                  {order._id}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  statusColor[order.orderStatus]
                }`}
              >
                {order.orderStatus}
              </span>
            </div>

            <hr className="mb-4" />

            {/* ===== MAIN CONTENT ===== */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* PRODUCTS */}
              <div>
                <p className="font-semibold mb-2">
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
                <p className="font-semibold mb-2">
                  Customer
                </p>
                <p className="text-sm">
                  {order.shippingAddress.firstName}{" "}
                  {order.shippingAddress.lastName}
                </p>
                <p className="text-sm text-gray-600">
                  {order.userEmail}
                </p>
              </div>

              {/* ADDRESS */}
              <div>
                <p className="font-semibold mb-2">
                  Shipping Address
                </p>
                <p className="text-sm text-gray-700">
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
                <p className="font-semibold mb-2">
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

            {/* ===== FOOTER ===== */}
            <div className="flex justify-between items-center mt-6">
              <p className="text-sm text-gray-500">
                Ordered on{" "}
                {new Date(
                  order.createdAt
                ).toLocaleDateString()}
              </p>

              <select
                value={order.orderStatus}
                onChange={(e) =>
                  updateStatus(order._id, e.target.value)
                }
                className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
