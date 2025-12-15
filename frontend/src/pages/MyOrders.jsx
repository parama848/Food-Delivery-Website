// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";

// // // // const MyOrders = () => {
// // // //   const [orders, setOrders] = useState([]);
// // // //   const [loading, setLoading] = useState(true);

// // // //   const userEmail = localStorage.getItem("userEmail");

// // // //   useEffect(() => {
// // // //     if (!userEmail) {
// // // //       setLoading(false);
// // // //       return;
// // // //     }

// // // //     const fetchOrders = async () => {
// // // //       try {
// // // //         const res = await axios.get(
// // // //           "http://localhost:4000/api/orders/my-orders",
// // // //           { params: { email: userEmail } }
// // // //         );

// // // //         if (res.data.success) {
// // // //           setOrders(res.data.orders);
// // // //         } else {
// // // //           setOrders([]);
// // // //         }
// // // //       } catch (err) {
// // // //         console.error("Failed to fetch orders", err);
// // // //         setOrders([]);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchOrders();
// // // //   }, [userEmail]);

// // // //   if (loading) {
// // // //     return <p className="text-center mt-10">Loading orders...</p>;
// // // //   }

// // // //   if (!orders.length) {
// // // //     return (
// // // //       <p className="text-center mt-10 text-gray-500">
// // // //         No orders found
// // // //       </p>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="max-w-5xl mx-auto p-6">
// // // //       <h2 className="text-2xl font-semibold mb-6">Orders List</h2>

// // // //       {orders.map((order) => (
// // // //         <div
// // // //           key={order._id}
// // // //           className="border rounded-lg p-5 mb-4 flex justify-between items-center"
// // // //         >
// // // //           {/* LEFT */}
// // // //           <div className="flex gap-4">
// // // //             <img
// // // //               src={`http://localhost:4000${order.items[0].image}`}
// // // //               className="w-14 h-14 object-cover rounded"
// // // //               alt="product"
// // // //             />

// // // //             <div>
// // // //               <h3 className="font-semibold">
// // // //                 {order.items.map((i) => i.name).join(", ")}
// // // //               </h3>

// // // //               <p className="text-sm text-gray-600">
// // // //                 {order.shippingAddress.street},{" "}
// // // //                 {order.shippingAddress.city}
// // // //               </p>
// // // //             </div>
// // // //           </div>

// // // //           {/* AMOUNT */}
// // // //           <div className="font-semibold text-lg">
// // // //             ₹{order.totalAmount}
// // // //           </div>

// // // //           {/* RIGHT */}
// // // //           <div className="text-sm text-gray-700">
// // // //             <p>Method: {order.paymentMethod}</p>
// // // //             <p>Status: {order.orderStatus}</p>
// // // //           </div>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MyOrders;

// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";

// // // const MyOrders = () => {
// // //   const [orders, setOrders] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   const userEmail = localStorage.getItem("userEmail");

// // //   useEffect(() => {
// // //     if (!userEmail) {
// // //       setLoading(false);
// // //       return;
// // //     }

// // //     const fetchOrders = async () => {
// // //       try {
// // //         const res = await axios.get(
// // //           "http://localhost:4000/api/orders/my-orders",
// // //           {
// // //             params: { email: userEmail },
// // //           }
// // //         );

// // //         if (res.data?.success) {
// // //           setOrders(res.data.orders);
// // //         } else {
// // //           setOrders([]);
// // //         }
// // //       } catch (error) {
// // //         console.error("Failed to fetch orders", error);
// // //         setOrders([]);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchOrders();
// // //   }, [userEmail]);

// // //   /* =====================
// // //         UI STATES
// // //   ===================== */
// // //   if (loading) {
// // //     return <p className="text-center mt-10 text-gray-500">Loading orders...</p>;
// // //   }

// // //   if (!orders.length) {
// // //     return <p className="text-center mt-10 text-gray-500">No orders found</p>;
// // //   }

// // //   /* =====================
// // //         RENDER
// // //   ===================== */
// // //   return (
// // //     <div className="max-w-5xl mx-auto p-6">
// // //       <h2 className="text-2xl font-semibold mb-6">Orders List</h2>

// // //       {orders.map((order) => (
// // //         <div
// // //           key={order._id}
// // //           className="border rounded-lg p-5 mb-4 flex justify-between items-center"
// // //         >
// // //           {/* LEFT */}
// // //           <div className="flex gap-4">
// // //             <img
// // //               src={
// // //                 order.items[0]?.image
// // //                   ? `http://localhost:4000${order.items[0].image}`
// // //                   : "/placeholder.png"
// // //               }
// // //               alt="product"
// // //               className="w-14 h-14 object-cover rounded"
// // //             />

// // //             <div>
// // //               <h3 className="font-semibold">
// // //                 {order.items.map((i) => i.name).join(", ")}
// // //               </h3>

// // //               <p className="text-sm text-gray-600">
// // //                 {order.shippingAddress.street}, {order.shippingAddress.city}
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* AMOUNT */}
// // //           <div className="font-semibold text-lg">₹{order.totalAmount}</div>

// // //           {/* RIGHT */}
// // //           <div className="text-sm text-gray-700">
// // //             <p>
// // //               <span className="font-medium">Method:</span> {order.paymentMethod}
// // //             </p>
// // //             <p>
// // //               <span className="font-medium">Status:</span>{" "}
// // //               <span
// // //                 className={`font-semibold ${
// // //                   order.orderStatus === "DELIVERED"
// // //                     ? "text-green-500"
// // //                     : "text-gray-600"
// // //                 }`}
// // //               >
// // //                 {order.orderStatus}
// // //               </span>
// // //             </p>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default MyOrders;
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // /* =====================
// //    ORDER STATUS STEPS
// // ===================== */
// // const STATUS_STEPS = ["PLACED", "PROCESSING", "SHIPPED", "DELIVERED"];

// // const MyOrders = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const userEmail = localStorage.getItem("userEmail");

// //   useEffect(() => {
// //     if (!userEmail) {
// //       setLoading(false);
// //       return;
// //     }

// //     const fetchOrders = async () => {
// //       try {
// //         const res = await axios.get(
// //           "http://localhost:4000/api/orders/my-orders",
// //           { params: { email: userEmail } }
// //         );

// //         if (res.data?.success) {
// //           setOrders(res.data.orders);
// //         } else {
// //           setOrders([]);
// //         }
// //       } catch (error) {
// //         console.error("Failed to fetch orders", error);
// //         setOrders([]);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchOrders();
// //   }, [userEmail]);

// //   if (loading) {
// //     return (
// //       <p className="text-center mt-10 text-gray-500">Loading orders...</p>
// //     );
// //   }

// //   if (!orders.length) {
// //     return (
// //       <p className="text-center mt-10 text-gray-500">
// //         No orders found
// //       </p>
// //     );
// //   }

// //   return (
// //     <div className="max-w-5xl mx-auto p-6">
// //       <h2 className="text-2xl font-semibold mb-6">My Orders</h2>

// //       {orders.map((order) => {
// //         const currentStep = STATUS_STEPS.indexOf(order.orderStatus);

// //         return (
// //           <div
// //             key={order._id}
// //             className="border rounded-lg p-5 mb-6 bg-white"
// //           >
// //             {/* TOP INFO */}
// //             <div className="flex justify-between items-center mb-4">
// //               <div className="flex gap-4">
// //                 <img
// //                   src={
// //                     order.items[0]?.image
// //                       ? `http://localhost:4000${order.items[0].image}`
// //                       : "https://via.placeholder.com/60"
// //                   }
// //                   alt="product"
// //                   className="w-14 h-14 object-cover rounded"
// //                 />

// //                 <div>
// //                   <h3 className="font-semibold">
// //                     {order.items.map((i) => i.name).join(", ")}
// //                   </h3>
// //                   <p className="text-sm text-gray-600">
// //                     {order.shippingAddress.street},{" "}
// //                     {order.shippingAddress.city}
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="text-right">
// //                 <p className="font-semibold text-lg">
// //                   ₹{order.totalAmount}
// //                 </p>
// //                 <p className="text-sm text-gray-500">
// //                   Payment: {order.paymentMethod}
// //                 </p>
// //               </div>
// //             </div>

// //             {/* ORDER TRACKING */}
// //             <div className="mt-6">
// //               <div className="flex items-center justify-between relative">
// //                 {/* LINE */}
// //                 <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200"></div>
// //                 <div
// //                   className="absolute top-1/2 left-0 h-1 bg-green-500 transition-all"
// //                   style={{
// //                     width: `${(currentStep / (STATUS_STEPS.length - 1)) * 100}%`,
// //                   }}
// //                 ></div>

// //                 {/* STEPS */}
// //                 {STATUS_STEPS.map((step, index) => {
// //                   const isCompleted = index <= currentStep;

// //                   return (
// //                     <div
// //                       key={step}
// //                       className="relative z-10 flex flex-col items-center"
// //                     >
// //                       <div
// //                         className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
// //                           ${
// //                             isCompleted
// //                               ? "bg-green-500 text-white"
// //                               : "bg-gray-300 text-gray-600"
// //                           }`}
// //                       >
// //                         ✓
// //                       </div>
// //                       <span
// //                         className={`mt-2 text-xs font-medium ${
// //                           isCompleted
// //                             ? "text-green-600"
// //                             : "text-gray-500"
// //                         }`}
// //                       >
// //                         {step}
// //                       </span>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>

// //             {/* STATUS TEXT */}
// //             <p className="mt-4 text-sm">
// //               <span className="font-medium">Current Status:</span>{" "}
// //               <span
// //                 className={`font-semibold ${
// //                   order.orderStatus === "DELIVERED"
// //                     ? "text-green-600"
// //                     : "text-blue-600"
// //                 }`}
// //               >
// //                 {order.orderStatus}
// //               </span>
// //             </p>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default MyOrders;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// /* =====================
//    ORDER STATUS STEPS
// ===================== */
// const STATUS_STEPS = ["PLACED", "PROCESSING", "SHIPPED", "DELIVERED"];

// const MyOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [openTrack, setOpenTrack] = useState(null); // 👈 toggle

//   const userEmail = localStorage.getItem("userEmail");

//   useEffect(() => {
//     if (!userEmail) {
//       setLoading(false);
//       return;
//     }

//     const fetchOrders = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:4000/api/orders/my-orders",
//           { params: { email: userEmail } }
//         );

//         if (res.data?.success) {
//           setOrders(res.data.orders);
//         }
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [userEmail]);

//   if (loading) {
//     return <p className="text-center mt-10 text-gray-500">Loading orders...</p>;
//   }

//   if (!orders.length) {
//     return <p className="text-center mt-10 text-gray-500">No orders found</p>;
//   }

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <h2 className="text-2xl font-semibold mb-6">My Orders</h2>

//       {orders.map((order) => {
//         const currentStep = STATUS_STEPS.indexOf(order.orderStatus);

//         return (
//           <div
//             key={order._id}
//             className="bg-white border rounded-lg p-5 mb-6"
//           >
//             {/* ================= TOP INFO ================= */}
//             <div className="flex justify-between items-center">
//               <div className="flex gap-4">
//                 <img
//                   src={
//                     order.items[0]?.image
//                       ? `http://localhost:4000${order.items[0].image}`
//                       : "https://via.placeholder.com/60"
//                   }
//                   alt="product"
//                   className="w-14 h-14 rounded object-cover"
//                 />

//                 <div>
//                   <h3 className="font-semibold">
//                     {order.items.map((i) => i.name).join(", ")}
//                   </h3>
//                   <p className="text-sm text-gray-600">
//                     ₹{order.totalAmount} • {order.paymentMethod}
//                   </p>
//                 </div>
//               </div>

//               <button
//                 onClick={() =>
//                   setOpenTrack(openTrack === order._id ? null : order._id)
//                 }
//                 className="text-blue-600 font-medium text-sm"
//               >
//                 {openTrack === order._id ? "Hide Tracking" : "Track Order"}
//               </button>
//             </div>

//             {/* ================= TRACKING (VERTICAL) ================= */}
//             {openTrack === order._id && (
//               <div className="mt-6 pl-6 border-l-2 border-gray-300">
//                 {STATUS_STEPS.map((step, index) => {
//                   const isCompleted = index <= currentStep;

//                   return (
//                     <div
//                       key={step}
//                       className="flex items-start gap-4 mb-6 relative"
//                     >
//                       {/* DOT */}
//                       <div
//                         className={`w-4 h-4 rounded-full mt-1
//                           ${
//                             isCompleted
//                               ? "bg-green-500"
//                               : "bg-gray-300"
//                           }`}
//                       ></div>

//                       {/* TEXT */}
//                       <div>
//                         <p
//                           className={`font-medium ${
//                             isCompleted
//                               ? "text-green-600"
//                               : "text-gray-500"
//                           }`}
//                         >
//                           {step}
//                         </p>

//                         {index === currentStep && (
//                           <p className="text-xs text-gray-500">
//                             Current status
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default MyOrders;

import React, { useEffect, useState } from "react";
import axios from "axios";

const STATUS_STEPS = ["PLACED", "PROCESSING", "SHIPPED", "DELIVERED"];

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openTrack, setOpenTrack] = useState(null);

  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    if (!userEmail) {
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/orders/my-orders",
          { params: { email: userEmail } }
        );

        if (res.data?.success) {
          setOrders(res.data.orders);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userEmail]);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading orders...</p>;
  }

  if (!orders.length) {
    return <p className="text-center mt-10 text-gray-500">No orders found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>

      {orders.map((order) => {
        const currentStep = STATUS_STEPS.indexOf(order.orderStatus);

        return (
          <div
            key={order._id}
            className="bg-white border rounded-lg p-5 mb-6"
          >
            {/* ===== TOP INFO ===== */}
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <img
                  src={
                    order.items[0]?.image
                      ? `http://localhost:4000${order.items[0].image}`
                      : "https://via.placeholder.com/60"
                  }
                  alt="product"
                  className="w-14 h-14 rounded object-cover"
                />

                <div>
                  <h3 className="font-semibold">
                    {order.items.map((i) => i.name).join(", ")} <span className="text-gray-600">({order.paymentMethod})</span> 
                  </h3>
                  <p className="text-sm text-gray-600">
                    ₹{order.totalAmount} <br /> 
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  setOpenTrack(openTrack === order._id ? null : order._id)
                }
                className="text-green-600 font-medium text-sm"
              >
                {openTrack === order._id ? "Hide Tracking" : "Track Order"}
              </button>
            </div>

            {/* ===== TRACKING TIMELINE ===== */}
            {openTrack === order._id && (
              <div className="mt-6 pl-6 relative">
                {/* FULL GRAY LINE */}
                <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gray-300"></div>

                {/* ACTIVE GREEN LINE */}
                <div
                  className="absolute left-2 top-0 w-[2px] bg-green-500 transition-all duration-700"
                  style={{
                    height: `${((currentStep + 1) / STATUS_STEPS.length) * 100}%`,
                  }}
                ></div>

                {STATUS_STEPS.map((step, index) => {
                  const isCompleted = index <= currentStep;

                  return (
                    <div
                      key={step}
                      className="flex items-start gap-4 mb-8 relative"
                    >
                      {/* DOT */}
                      <div
                        className={`w-4 h-4 rounded-full z-10 transition-colors duration-500
                          ${
                            isCompleted
                              ? "bg-green-500"
                              : "bg-gray-300"
                          }`}
                      ></div>

                      {/* TEXT */}
                      <div>
                        <p
                          className={`font-medium ${
                            isCompleted
                              ? "text-green-600"
                              : "text-gray-500"
                          }`}
                        >
                          {step}
                        </p>

                        {index === currentStep && (
                          <p className="text-xs text-gray-500">
                            Current status
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MyOrders;
