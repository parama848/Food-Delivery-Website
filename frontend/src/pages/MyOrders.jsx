// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const STATUS_STEPS = ["PLACED", "PROCESSING", "SHIPPED", "DELIVERED"];

// const MyOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [openTrack, setOpenTrack] = useState(null);

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
//     return (
//       <p className="text-center mt-10 text-gray-500">
//         Loading orders...
//       </p>
//     );
//   }

//   if (!orders.length) {
//     return (
//       <p className="text-center mt-10 text-gray-500">
//         No orders found
//       </p>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
//       <h2 className="text-2xl font-semibold mb-6">
//         My Orders
//       </h2>

//       {orders.map((order) => {
//         const currentStep = STATUS_STEPS.indexOf(order.orderStatus);

//         return (
//           <div
//             key={order._id}
//             className="bg-white border rounded-lg p-4 sm:p-5 mb-6"
//           >
//             {/* ===== TOP INFO ===== */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//               {/* LEFT */}
//               <div className="flex gap-4">
//                 <img
//                   src={
//                     order.items[0]?.image
//                       ? `http://localhost:4000${order.items[0].image}`
//                       : "https://via.placeholder.com/60"
//                   }
//                   alt="product"
//                   className="w-16 h-16 rounded object-cover"
//                 />

//                 <div>
//                   <h3 className="font-semibold text-sm sm:text-base">
//                     {order.items.map((i) => i.name).join(", ")}{" "}
//                     <span className="text-gray-500 text-xs sm:text-sm">
//                       ({order.paymentMethod})
//                     </span>
//                   </h3>

//                   <p className="text-sm text-gray-600 mt-1">
//                     ₹{order.totalAmount}
//                   </p>
//                 </div>
//               </div>

//               {/* RIGHT */}
//               <button
//                 onClick={() =>
//                   setOpenTrack(
//                     openTrack === order._id ? null : order._id
//                   )
//                 }
//                 className="
//                   text-green-600
//                   font-medium
//                   text-sm
//                   self-start sm:self-auto
//                 "
//               >
//                 {openTrack === order._id
//                   ? "Hide Tracking"
//                   : "Track Order"}
//               </button>
//             </div>

//             {/* ===== TRACKING TIMELINE ===== */}
//             {openTrack === order._id && (
//               <div className="mt-6 pl-6 relative">
//                 {/* FULL LINE */}
//                 <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gray-300"></div>

//                 {/* ACTIVE LINE */}
//                 <div
//                   className="absolute left-2 top-0 w-[2px] bg-green-500 transition-all duration-700"
//                   style={{
//                     height: `${
//                       ((currentStep + 1) / STATUS_STEPS.length) *
//                       100
//                     }%`,
//                   }}
//                 ></div>

//                 {STATUS_STEPS.map((step, index) => {
//                   const isCompleted = index <= currentStep;

//                   return (
//                     <div
//                       key={step}
//                       className="flex items-start gap-4 mb-8 relative"
//                     >
//                       {/* DOT */}
//                       <div
//                         className={`w-4 h-4 rounded-full z-10
//                           ${
//                             isCompleted
//                               ? "bg-green-500"
//                               : "bg-gray-300"
//                           }`}
//                       ></div>

//                       {/* TEXT */}
//                       <div>
//                         <p
//                           className={`font-medium text-sm sm:text-base
//                             ${
//                               isCompleted
//                                 ? "text-green-600"
//                                 : "text-gray-500"
//                             }`}
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

import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const STATUS_STEPS = ["PLACED", "PROCESSING", "SHIPPED", "DELIVERED"];

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openTrack, setOpenTrack] = useState(null);

  const { api, backendUrl } = useContext(CartContext);

  const userEmail = localStorage.getItem("userEmail");

  /* ======================
     🔁 FETCH ORDERS
  ====================== */
  useEffect(() => {
    if (!userEmail) {
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await api.get("/api/orders/my-orders", {
          params: { email: userEmail },
        });

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
  }, [userEmail, api]);

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading orders...
      </p>
    );
  }

  if (!orders.length) {
    return (
      <p className="text-center mt-10 text-gray-500">
        No orders found
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <h2 className="text-2xl font-semibold mb-6">
        My Orders
      </h2>

      {orders.map((order) => {
        const currentStep = STATUS_STEPS.indexOf(
          order.orderStatus
        );

        return (
          <div
            key={order._id}
            className="bg-white border rounded-lg p-4 sm:p-5 mb-6"
          >
            {/* ===== TOP INFO ===== */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* LEFT */}
              <div className="flex gap-4">
                <img
                  src={
                    order.items[0]?.image
                      ? `${backendUrl}${order.items[0].image}`
                      : "https://via.placeholder.com/60"
                  }
                  alt="product"
                  className="w-16 h-16 rounded object-cover"
                />

                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {order.items
                      .map((i) => i.name)
                      .join(", ")}{" "}
                    <span className="text-gray-500 text-xs sm:text-sm">
                      ({order.paymentMethod})
                    </span>
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    ₹{order.totalAmount}
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <button
                onClick={() =>
                  setOpenTrack(
                    openTrack === order._id
                      ? null
                      : order._id
                  )
                }
                className="text-green-600 font-medium text-sm"
              >
                {openTrack === order._id
                  ? "Hide Tracking"
                  : "Track Order"}
              </button>
            </div>

            {/* ===== TRACKING TIMELINE ===== */}
            {openTrack === order._id && (
              <div className="mt-6 pl-6 relative">
                {/* FULL LINE */}
                <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gray-300"></div>

                {/* ACTIVE LINE */}
                <div
                  className="absolute left-2 top-0 w-[2px] bg-green-500 transition-all duration-700"
                  style={{
                    height: `${
                      ((currentStep + 1) /
                        STATUS_STEPS.length) *
                      100
                    }%`,
                  }}
                ></div>

                {STATUS_STEPS.map((step, index) => {
                  const isCompleted =
                    index <= currentStep;

                  return (
                    <div
                      key={step}
                      className="flex items-start gap-4 mb-8 relative"
                    >
                      {/* DOT */}
                      <div
                        className={`w-4 h-4 rounded-full z-10 ${
                          isCompleted
                            ? "bg-green-500"
                            : "bg-gray-300"
                        }`}
                      ></div>

                      {/* TEXT */}
                      <div>
                        <p
                          className={`font-medium text-sm sm:text-base ${
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
