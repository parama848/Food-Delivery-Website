// // // // import React, { useState } from "react";
// // // // import { useContext } from "react";
// // // // import { FoodContext } from "../context/CartContext";

// // // // const Cart = () => {
// // // //   const { cartItems } = useContext(FoodContext);

 

  

// // // //   const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
// // // // const tax = totalPrice * 0.02;
// // // // const finalAmount = totalPrice + tax;

// // // //   return (
// // // //     <div>
// // // //       <div className="flex gap-3">
// // // //         <h1 className="text-2xl mt-3 mb-10 ">Shopping Cart</h1>
// // // //         <span className="text-green-300 mt-3 mb-3">{}items</span>
// // // //       </div>
// // // // <div className="flex gap-10  justify-center border shadow-lg py-8">


// // // //       <div className=" px-5 py-5 ">
      
// // // //         <ul className="flex gap-40  px-3 py-2 rounded-lg">
// // // //           <li>Product Details</li>
// // // //           <li>Subtotal</li>
// // // //           <li>Action</li>
// // // //         </ul>
// // // //         <div>
// // // //           {cartItems.map((item) => (
// // // //             <div key={item.id} className=" border w-[830px] rounded-lg mt-3 px-2 py-2 ">
// // // //               <img className="w-20" src={item.image} />
// // // //               <div className="flex gap-48 cursor-pointer">
// // // //               <div>
// // // //                 <h3>{item.name}</h3>
// // // //                 <input type="number" placeholder="Qty:1" className="w-14 outline-none" />
// // // //               </div>
// // // //               <div>
// // // //                 <p>₹{item.price}</p>
// // // //               </div>
// // // //               <div>
// // // //                 <p>X</p>
// // // //               </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //       <hr className="mt-2 mb-3" />
// // // //       <div>
// // // //         {/* order summary */}
// // // //         <div className="border w-[350px] rounded-lg px-5 py-5  ">
// // // //           <div>
// // // //             <h1 className="mt-2 mb-3">ORDER SUMMARY</h1>
// // // //             <hr />

// // // //             <h4 className="mt-3">Delivery Address</h4>

// // // //             <div className="flex justify-between mt-3 text-gray-500">
// // // //               <p>No Address found</p>
// // // //               <p>Add</p>
// // // //             </div>
// // // //           </div>

// // // //           <div className="mt-3">
// // // //             <h3>Payment Method</h3>
// // // //             <select
// // // //               name=""
// // // //               id=""
// // // //               className="border border-gray-500 mb-2 rounded-lg px-2 py-2 mt-2 outline-none"
// // // //             >
// // // //               <option value="Cash On Delivery">Cash On Delivery</option>
// // // //               <option value="Razorpay">Razorpay</option>
// // // //               <option value="Stripe">Stripe</option>
// // // //             </select>
// // // //             <hr />
// // // //           </div>

// // // //           <div>
// // // //             <div className="flex justify-between text-gray-500 mt-2 mb-2">
// // // //               <p>Price</p>
// // // //               <p>₹{totalPrice}</p>
// // // //             </div>
// // // //             <div className="flex justify-between mb-2 text-gray-500">
// // // //               <p>Shipping Fee</p>
// // // //               <p>Free</p>
// // // //             </div>
// // // //             <div className="flex justify-between mb-2 text-gray-500">
// // // //               <p>Tax(2%)</p>
// // // //               <p>₹{tax.toFixed(2)}</p>
// // // //             </div>
// // // //             <div className="flex justify-between mb-2">
// // // //               <h2>Total Amount:</h2>
// // // //               <p>₹{finalAmount.toFixed(2)}</p>
// // // //             </div>
// // // //             <div className=" text-center">
// // // //             <button className=" border rounded-lg border-green-300 px-5 py-2 text-center">
// // // //               Place Order
// // // //             </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Cart;
// // // import React from "react";
// // // import { useContext } from "react";
// // // import { FoodContext } from "../context/CartContext";

// // // const Cart = () => {
// // //   const { cartItems, increaseQty, decreaseQty, removeItem } = useContext(FoodContext);

// // //   const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
// // //   const tax = totalPrice * 0.02;
// // //   const finalAmount = totalPrice + tax;

// // //   return (
// // //     <div className="p-6">
// // //       {/* Header */}
// // //       <div className="flex items-center gap-3 mb-6">
// // //         <h1 className="text-3xl font-semibold">Shopping Cart</h1>
// // //         <span className="text-green-600 text-lg">
// // //           {cartItems.length} items
// // //         </span>
// // //       </div>

// // //       <div className="flex justify-center gap-10">
// // //         {/* LEFT SIDE – CART ITEMS */}
// // //         <div className="w-[850px] bg-white shadow-lg rounded-lg p-5">
// // //           {/* Table Header */}
// // //           <ul className="flex justify-between text-gray-600 font-semibold border-b pb-2 mb-4">
// // //             <li className="w-1/2">Product Details</li>
// // //             <li className="w-1/4 text-center">Subtotal</li>
// // //             <li className="w-1/4 text-center">Action</li>
// // //           </ul>

// // //           {/* Cart Items */}
// // //           {cartItems.length === 0 ? (
// // //             <div className="text-center text-gray-500 py-10">Your cart is empty</div>
// // //           ) : (
// // //             cartItems.map((item) => (
// // //               <div
// // //                 key={item._id || item.id}
// // //                 className="flex items-center gap-5 border rounded-lg p-3 mb-4"
// // //               >
// // //                 {/* Product Image */}
// // //                 <img src={item.image} className="w-20 rounded-lg" alt="" />

// // //                 {/* Product Details */}
// // //                 <div className="flex justify-between items-center w-full">
// // //                   <div className="w-1/2">
// // //                     <h3 className="font-semibold">{item.name}</h3>

// // //                     {/* Quantity Row */}
// // //                     <div className="flex items-center gap-3 mt-2">
// // //                       <button
// // //                         onClick={() => decreaseQty(item.id)}
// // //                         className="px-2 bg-gray-200 rounded-lg"
// // //                       >
// // //                         -
// // //                       </button>

// // //                       <p className="w-6 text-center">{item.qty}</p>

// // //                       <button
// // //                         onClick={() => increaseQty(item.id)}
// // //                         className="px-2 bg-gray-200 rounded-lg"
// // //                       >
// // //                         +
// // //                       </button>
// // //                     </div>
// // //                   </div>

// // //                   {/* Subtotal */}
// // //                   <div className="w-1/4 text-center font-semibold text-gray-700">
// // //                     ₹{item.price * item.qty}
// // //                   </div>

// // //                   {/* Remove */}
// // //                   <div className="w-1/4 text-center">
// // //                     <button
// // //                       onClick={() => removeItem(item.id)}
// // //                       className="text-red-500 font-semibold hover:underline"
// // //                     >
// // //                       Remove
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))
// // //           )}
// // //         </div>

// // //         {/* RIGHT SIDE – ORDER SUMMARY */}
// // //         <div className="w-[350px] bg-white shadow-lg rounded-lg p-5 h-fit">
// // //           <h2 className="text-xl font-semibold mb-3">ORDER SUMMARY</h2>
// // //           <hr />

// // //           {/* Delivery Address */}
// // //           <h4 className="mt-4 font-semibold">Delivery Address</h4>
// // //           <div className="flex justify-between text-gray-500 mt-2 mb-4">
// // //             <p>No address added</p>
// // //             <p className="text-blue-500 cursor-pointer">Add</p>
// // //           </div>

// // //           {/* Payment */}
// // //           <h3 className="font-semibold">Payment Method</h3>
// // //           <select
// // //             className="border w-full rounded-lg px-3 py-2 mt-2 mb-3 outline-none"
// // //           >
// // //             <option value="cod">Cash On Delivery</option>
// // //             <option value="razorpay">Razorpay</option>
// // //             <option value="stripe">Stripe</option>
// // //           </select>
// // //           <hr />

// // //           {/* Price Summary */}
// // //           <div className="mt-4">
// // //             <div className="flex justify-between text-gray-600">
// // //               <p>Price</p>
// // //               <p>₹{totalPrice}</p>
// // //             </div>

// // //             <div className="flex justify-between text-gray-600 mt-2">
// // //               <p>Shipping Fee</p>
// // //               <p className="text-green-600">Free</p>
// // //             </div>

// // //             <div className="flex justify-between text-gray-600 mt-2">
// // //               <p>Tax (2%)</p>
// // //               <p>₹{tax.toFixed(2)}</p>
// // //             </div>

// // //             <div className="flex justify-between mt-4 font-semibold text-lg">
// // //               <p>Total Amount</p>
// // //               <p>₹{finalAmount.toFixed(2)}</p>
// // //             </div>

// // //             <button className="mt-5 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
// // //               Place Order
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Cart;
// // import React, { useContext } from "react";
// // import { FoodContext } from "../context/CartContext";

// // const Cart = () => {
// //   const { cartItems, increaseQty, decreaseQty, removeItem } = useContext(FoodContext);

// //   // CALCULATE TOTALS
// //   const totalPrice = cartItems.reduce(
// //     (sum, item) => sum + item.price * item.qty,
// //     0
// //   );
// //   const tax = totalPrice * 0.02;
// //   const finalAmount = totalPrice + tax;

// //   return (
// //     <div className="p-6">

// //       {/* Header */}
// //       <div className="flex gap-3 mb-6">
// //         <h1 className="text-3xl font-semibold">Shopping Cart</h1>
// //         <span className="text-green-600 text-lg">
// //           {cartItems.length} items
// //         </span>
// //       </div>

// //       <div className="flex justify-center gap-10">

// //         {/* LEFT SIDE */}
// //         <div className="w-[850px] bg-white shadow rounded-lg p-5">

// //           <ul className="flex justify-between text-gray-600 font-semibold border-b pb-2 mb-4">
// //             <li className="w-1/2">Product Details</li>
// //             <li className="w-1/4 text-center">Subtotal</li>
// //             <li className="w-1/4 text-center">Action</li>
// //           </ul>

// //           {cartItems.map((item) => (
// //             <div key={item.id} className="flex items-center gap-5 border rounded-lg p-3 mb-4">

// //               <img src={item.image} className="w-20 rounded-lg" alt="" />

// //               <div className="flex justify-between items-center w-full">

// //                 {/* DETAILS */}
// //                 <div className="w-1/2">
// //                   <h3 className="font-semibold">{item.name}</h3>

// //                   {/* QTY BUTTONS */}
// //                   <div className="flex items-center gap-3 mt-2">

// //                     <button
// //                       onClick={() => decreaseQty(item.id)}
// //                       className="px-2 bg-gray-200 rounded"
// //                     >
// //                       -
// //                     </button>

// //                     <p>{item.qty}</p>

// //                     <button
// //                       onClick={() => increaseQty(item.id)}
// //                       className="px-2 bg-gray-200 rounded"
// //                     >
// //                       +
// //                     </button>
// //                   </div>
// //                 </div>

// //                 {/* SUBTOTAL */}
// //                 <div className="w-1/4 text-center font-semibold">
// //                   ₹{item.price * item.qty}
// //                 </div>

// //                 {/* REMOVE */}
// //                 <div className="w-1/4 text-center">
// //                   <button
// //                     onClick={() => removeItem(item.id)}
// //                     className="text-red-500"
// //                   >
// //                     Remove
// //                   </button>
// //                 </div>
// //               </div>

// //             </div>
// //           ))}

// //         </div>

// //         {/* RIGHT SIDE */}
// //         <div className="w-[350px] bg-white shadow-lg rounded-lg p-5">
// //           <h2 className="text-xl font-semibold mb-2">ORDER SUMMARY</h2>
// //           <hr />

// //           <div className="mt-4">
// //             <div className="flex justify-between text-gray-600">
// //               <p>Price</p>
// //               <p>₹{totalPrice}</p>
// //             </div>

// //             <div className="flex justify-between text-gray-600 mt-2">
// //               <p>Shipping Fee</p>
// //               <p className="text-green-600">Free</p>
// //             </div>

// //             <div className="flex justify-between text-gray-600 mt-2">
// //               <p>Tax (2%)</p>
// //               <p>₹{tax.toFixed(2)}</p>
// //             </div>

// //             <div className="flex justify-between mt-4 font-semibold text-lg">
// //               <p>Total Amount</p>
// //               <p>₹{finalAmount.toFixed(2)}</p>
// //             </div>

// //             <button className="mt-5 w-full bg-green-500 text-white py-2 rounded-lg">
// //               Place Order
// //             </button>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;
// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { cartItems, increaseQty, decreaseQty, removeItem } =
//     useContext(CartContext);

//   // TOTAL CALCULATION
//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );
//   const tax = totalPrice * 0.02;
//   const finalAmount = totalPrice + tax;

//   return (
//     <div className="p-6">
//       {/* Header */}
//       <div className="flex items-center gap-3 mb-6">
//         <h1 className="text-3xl font-semibold">Shopping Cart</h1>
//         <span className="text-green-600 text-lg">{cartItems.length} items</span>
//       </div>

//       <div className="flex justify-center gap-10">
//         {/* LEFT SIDE */}
//         <div className="w-[850px] bg-white shadow-lg rounded-lg p-5">
//           <ul className="flex justify-between text-gray-600 font-semibold border-b pb-2 mb-4">
//             <li className="w-1/2">Product Details</li>
//             <li className="w-1/4 text-center">Subtotal</li>
//             <li className="w-1/4 text-center">Action</li>
//           </ul>

//           {/* CART ITEMS */}
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center gap-5 border rounded-lg p-3 mb-4"
//             >
//               <img src={`http://localhost:4000${item.image}`} className="w-20 rounded-lg" alt="" />

//               <div className="flex justify-between items-center w-full">
//                 {/* DETAILS */}
//                 <div className="w-1/2">
//                   <h3 className="font-semibold">{item.name}</h3>

//                   <div className="flex items-center gap-3 mt-2">
//                     <button
//                       onClick={() => decreaseQty(item.id)}
//                       className="px-3 bg-gray-200 rounded"
//                     >
//                       -
//                     </button>

//                     <p>{item.qty}</p>

//                     <button
//                       onClick={() => increaseQty(item.id)}
//                       className="px-3 bg-gray-200 rounded"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 {/* SUBTOTAL */}
//                 <div className="w-1/4 text-center font-semibold">
//                   ₹{item.price * item.qty}
//                 </div>

//                 {/* REMOVE */}
//                 <div className="w-1/4 text-center">
//                   <button
//                     onClick={() => removeItem(item.id)}
//                     className="text-red-500 font-semibold"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="w-[350px] bg-white shadow-lg rounded-lg p-5 h-fit">
//           <h2 className="text-xl font-semibold mb-3">ORDER SUMMARY</h2>
//           <hr />

//           <div className="mt-4">
//             <div className="flex justify-between text-gray-600 mb-2">
//               <p>Price</p>
//               <p>₹{totalPrice}</p>
//             </div>

//             <div className="flex justify-between text-gray-600 mb-2">
//               <p>Shipping Fee</p>
//               <p className="text-green-600">Free</p>
//             </div>

//             <div className="flex justify-between text-gray-600 mb-2">
//               <p>Tax (2%)</p>
//               <p>₹{tax.toFixed(2)}</p>
//             </div>

//             <div className="flex justify-between text-lg font-semibold">
//               <p>Total Amount</p>
//               <p>₹{finalAmount.toFixed(2)}</p>
//             </div>
//           <Link to="/place-order"> 
//             <button className="mt-5 w-full bg-green-500 text-white py-2 rounded-lg">
//               Place Order
//             </button>
//           </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  // TOTAL CALCULATION
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const tax = totalPrice * 0.02;
  const finalAmount = totalPrice + tax;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-3xl font-semibold">Shopping Cart</h1>
        <span className="text-green-600 text-lg">
          {cartItems.length} items
        </span>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 mt-20 text-lg">
          Your cart is empty
        </p>
      ) : (
        <div className="flex justify-center gap-10">
          {/* LEFT SIDE */}
          <div className="w-[850px] bg-white shadow-lg rounded-lg p-5">
            <ul className="flex justify-between text-gray-600 font-semibold border-b pb-2 mb-4">
              <li className="w-1/2">Product Details</li>
              <li className="w-1/4 text-center">Subtotal</li>
              <li className="w-1/4 text-center">Action</li>
            </ul>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 border rounded-lg p-3 mb-4"
              >
                <img src={`http://localhost:4000${item.image}`} className="w-20 rounded-lg" alt="" />

                <div className="flex justify-between items-center w-full">
                  <div className="w-1/2">
                    <h3 className="font-semibold">{item.name}</h3>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 bg-gray-200 rounded"
                      >
                        -
                      </button>

                      <p>{item.qty}</p>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="w-1/4 text-center font-semibold">
                    ₹{item.price * item.qty}
                  </div>

                  <div className="w-1/4 text-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="w-[350px] bg-white shadow-lg rounded-lg p-5 h-fit">
            <h2 className="text-xl font-semibold mb-3">
              ORDER SUMMARY
            </h2>
            <hr />

            <div className="mt-4">
              <div className="flex justify-between text-gray-600 mb-2">
                <p>Price</p>
                <p>₹{totalPrice.toFixed(2)}</p>
              </div>

              <div className="flex justify-between text-gray-600 mb-2">
                <p>Shipping Fee</p>
                <p className="text-green-600">Free</p>
              </div>

              <div className="flex justify-between text-gray-600 mb-2">
                <p>Tax (2%)</p>
                <p>₹{tax.toFixed(2)}</p>
              </div>

              <div className="flex justify-between text-lg font-semibold">
                <p>Total Amount</p>
                <p>₹{finalAmount.toFixed(2)}</p>
              </div>

              <Link to="/place-order">
                <button className="mt-5 w-full bg-green-500 text-white py-2 rounded-lg">
                  Place Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
