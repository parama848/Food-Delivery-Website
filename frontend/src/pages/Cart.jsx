import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const tax = totalPrice * 0.02;
  const finalAmount = totalPrice + tax;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Shopping Cart
        </h1>
        <span className="text-green-600 text-base sm:text-lg">
          {cartItems.length} items
        </span>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 mt-20 text-lg">
          Your cart is empty
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: CART ITEMS */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border rounded-lg p-4 flex flex-col sm:flex-row gap-4"
              >
                {/* IMAGE */}
                <img
                  src={`http://localhost:4000${item.image}`}
                  alt={item.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  {/* QTY */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-8 h-8 rounded bg-gray-200 text-lg"
                    >
                      −
                    </button>

                    <span className="font-medium">
                      {item.qty}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-8 h-8 rounded bg-gray-200 text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* PRICE + REMOVE */}
                <div className="flex sm:flex-col justify-between sm:items-end">
                  <p className="font-semibold text-lg">
                    ₹{item.price * item.qty}
                  </p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm mt-2 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: ORDER SUMMARY */}
          <div className="bg-white border rounded-lg p-5 h-fit">
            <h2 className="text-lg font-semibold mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between">
                <span>Price</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between">
                <span>Tax (2%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>

              <hr />

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{finalAmount.toFixed(2)}</span>
              </div>
            </div>

            <Link to="/place-order">
              <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition">
                Place Order
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const {
//     cartItems,
//     increaseQty,
//     decreaseQty,
//     removeItem,
//     backendUrl, // ✅ use configured backend URL
//   } = useContext(CartContext);

//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );
//   const tax = totalPrice * 0.02;
//   const finalAmount = totalPrice + tax;

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
//       {/* HEADER */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
//         <h1 className="text-2xl sm:text-3xl font-semibold">
//           Shopping Cart
//         </h1>
//         <span className="text-green-600 text-base sm:text-lg">
//           {cartItems.length} items
//         </span>
//       </div>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-gray-500 mt-20 text-lg">
//           Your cart is empty
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* LEFT: CART ITEMS */}
//           <div className="lg:col-span-2 space-y-4">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="bg-white border rounded-lg p-4 flex flex-col sm:flex-row gap-4"
//               >
//                 {/* IMAGE (✅ FIXED: no localhost) */}
//                 <img
//                   src={`${backendUrl}${item.image}`}
//                   alt={item.name}
//                   className="w-24 h-24 rounded-lg object-cover"
//                 />

//                 {/* DETAILS */}
//                 <div className="flex-1">
//                   <h3 className="font-semibold text-lg">
//                     {item.name}
//                   </h3>

//                   {/* QTY */}
//                   <div className="flex items-center gap-3 mt-3">
//                     <button
//                       onClick={() => decreaseQty(item.id)}
//                       className="w-8 h-8 rounded bg-gray-200 text-lg"
//                     >
//                       −
//                     </button>

//                     <span className="font-medium">
//                       {item.qty}
//                     </span>

//                     <button
//                       onClick={() => increaseQty(item.id)}
//                       className="w-8 h-8 rounded bg-gray-200 text-lg"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 {/* PRICE + REMOVE */}
//                 <div className="flex sm:flex-col justify-between sm:items-end">
//                   <p className="font-semibold text-lg">
//                     ₹{item.price * item.qty}
//                   </p>

//                   <button
//                     onClick={() => removeItem(item.id)}
//                     className="text-red-500 text-sm mt-2 hover:underline"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* RIGHT: ORDER SUMMARY */}
//           <div className="bg-white border rounded-lg p-5 h-fit">
//             <h2 className="text-lg font-semibold mb-4">
//               Order Summary
//             </h2>

//             <div className="space-y-3 text-gray-600">
//               <div className="flex justify-between">
//                 <span>Price</span>
//                 <span>₹{totalPrice.toFixed(2)}</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Shipping</span>
//                 <span className="text-green-600">Free</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Tax (2%)</span>
//                 <span>₹{tax.toFixed(2)}</span>
//               </div>

//               <hr />

//               <div className="flex justify-between font-semibold text-lg">
//                 <span>Total</span>
//                 <span>₹{finalAmount.toFixed(2)}</span>
//               </div>
//             </div>

//             <Link to="/place-order">
//               <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition">
//                 Place Order
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
