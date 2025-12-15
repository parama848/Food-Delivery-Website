// // // import React, { useContext, useState } from "react";
// // // import { CartContext } from "../context/CartContext";
// // // import axios from "axios";
// // // import { toast } from "react-toastify";

// // // const Checkout = () => {
// // //   const { cartItems, clearCart } = useContext(CartContext);

// // //   const [paymentMethod, setPaymentMethod] = useState("COD");
// // //   const [loading, setLoading] = useState(false);

// // //   const [form, setForm] = useState({
// // //     firstName: "",
// // //     lastName: "",
// // //     email: "",
// // //     street: "",
// // //     city: "",
// // //     state: "",
// // //     zipcode: "",
// // //     country: "",
// // //     phone: "",
// // //   });

// // //   /* =====================
// // //      PRICE CALCULATION
// // //   ===================== */
// // //   const subtotal = cartItems.reduce(
// // //     (sum, item) => sum + item.price * item.qty,
// // //     0
// // //   );
// // //   const shippingFee = subtotal > 0 ? 10 : 0;
// // //   const total = subtotal + shippingFee;

// // //   const handleChange = (e) => {
// // //     setForm({ ...form, [e.target.name]: e.target.value });
// // //   };

// // //   /* =====================
// // //         PLACE ORDER
// // //   ===================== */const placeOrder = async () => {
// // //   if (loading) return;
// // //   if (cartItems.length === 0) return;

// // //   if (!form.firstName || !form.phone || !form.street) {
// // //     toast.error("Please fill required fields");
// // //     return;
// // //   }

// // //   try {
// // //     setLoading(true);

// // //     if (paymentMethod === "COD") {
// // //       const res = await axios.post(
// // //         "http://localhost:4000/api/orders/cod",
// // //         {
// // //           items: cartItems.map((i) => ({
// // //             productId: i.id,
// // //             name: i.name,
// // //             price: i.price,
// // //             quantity: i.qty,
// // //             image: i.image,
// // //           })),
// // //           shippingAddress: form,
// // //           totalAmount: total,
// // //         }
// // //       );

// // //       if (res.data?.success) {
// // //         toast.success("Order placed successfully (COD)");
// // //         clearCart();
// // //         return;
// // //       } else {
// // //         toast.error(res.data?.message || "Order failed");
// // //         return;
// // //       }
// // //     }

// // //     if (paymentMethod === "STRIPE") {
// // //       toast.info("Stripe integration coming soon");
// // //       return;
// // //     }
// // //   } catch (err) {
// // //     toast.error(err.response?.data?.message || "Order failed");
// // //   } finally {
// // //     setLoading(false);
// // //   }
// // // };


// // //   return (
// // //     <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      
// // //       {/* LEFT — DELIVERY INFO */}
// // //       <div>
// // //         <h2 className="text-2xl font-bold mb-6">
// // //           DELIVERY <span className="text-pink-500">INFORMATION</span>
// // //         </h2>

// // //         <div className="grid grid-cols-2 gap-4">
// // //           <input
// // //             name="firstName"
// // //             placeholder="First name"
// // //             onChange={handleChange}
// // //             className="input"
// // //           />
// // //           <input
// // //             name="lastName"
// // //             placeholder="Last name"
// // //             onChange={handleChange}
// // //             className="input"
// // //           />
// // //         </div>

// // //         <input
// // //           name="email"
// // //           placeholder="Email"
// // //           onChange={handleChange}
// // //           className="input w-full mt-4"
// // //         />

// // //         <input
// // //           name="street"
// // //           placeholder="Street"
// // //           onChange={handleChange}
// // //           className="input w-full mt-4"
// // //         />

// // //         <div className="grid grid-cols-2 gap-4 mt-4">
// // //           <input
// // //             name="city"
// // //             placeholder="City"
// // //             onChange={handleChange}
// // //             className="input"
// // //           />
// // //           <input
// // //             name="state"
// // //             placeholder="State"
// // //             onChange={handleChange}
// // //             className="input"
// // //           />
// // //         </div>

// // //         <div className="grid grid-cols-2 gap-4 mt-4">
// // //           <input
// // //             name="zipcode"
// // //             placeholder="Zipcode"
// // //             onChange={handleChange}
// // //             className="input"
// // //           />
// // //           <input
// // //             name="country"
// // //             placeholder="Country"
// // //             onChange={handleChange}
// // //             className="input"
// // //           />
// // //         </div>

// // //         <input
// // //           name="phone"
// // //           placeholder="Phone"
// // //           onChange={handleChange}
// // //           className="input w-full mt-4"
// // //         />
// // //       </div>

// // //       {/* RIGHT — CART TOTAL */}
// // //       <div className="border rounded-lg p-6">
// // //         <h2 className="text-2xl font-bold mb-6">
// // //           CART <span className="text-pink-500">TOTAL</span>
// // //         </h2>

// // //         <div className="flex justify-between mb-3">
// // //           <span>Subtotal</span>
// // //           <span>₹{subtotal.toFixed(2)}</span>
// // //         </div>

// // //         <div className="flex justify-between mb-3">
// // //           <span>Shipping Fee</span>
// // //           <span>₹{shippingFee.toFixed(2)}</span>
// // //         </div>

// // //         <hr />

// // //         <div className="flex justify-between font-bold text-lg mt-3">
// // //           <span>Total</span>
// // //           <span>₹{total.toFixed(2)}</span>
// // //         </div>

// // //         {/* PAYMENT METHOD */}
// // //         <h3 className="mt-6 mb-3 font-semibold">
// // //           PAYMENT <span className="text-pink-500">METHOD</span>
// // //         </h3>

// // //         <div className="flex gap-3">
// // //           <label className={`pay-box ${paymentMethod === "STRIPE" ? "active" : ""}`}>
// // //             <input
// // //               type="radio"
// // //               checked={paymentMethod === "STRIPE"}
// // //               onChange={() => setPaymentMethod("STRIPE")}
// // //             />
// // //             Stripe
// // //           </label>

// // //           <label className={`pay-box ${paymentMethod === "COD" ? "active" : ""}`}>
// // //             <input
// // //               type="radio"
// // //               checked={paymentMethod === "COD"}
// // //               onChange={() => setPaymentMethod("COD")}
// // //             />
// // //             Cash on Delivery
// // //           </label>
// // //         </div>

// // //         <button
// // //           type="button" // 🚨 CRITICAL FIX
// // //           onClick={placeOrder}
// // //           disabled={loading}
// // //           className={`w-full mt-6 py-3 rounded text-white ${
// // //             loading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-700"
// // //           }`}
// // //         >
// // //           {loading ? "Placing Order..." : "PLACE ORDER"}
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Checkout;

// // import React, { useContext, useState } from "react";
// // import { CartContext } from "../context/CartContext";
// // import axios from "axios";
// // import { toast } from "react-toastify";

// // const Checkout = () => {
// //   const { cartItems, clearCart } = useContext(CartContext);

// //   const userEmail = localStorage.getItem("userEmail"); // ✅ REQUIRED

// //   const [paymentMethod, setPaymentMethod] = useState("COD");
// //   const [loading, setLoading] = useState(false);

// //   const [form, setForm] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: userEmail || "", // ✅ auto-fill
// //     street: "",
// //     city: "",
// //     state: "",
// //     zipcode: "",
// //     country: "",
// //     phone: "",
// //   });

// //   const subtotal = cartItems.reduce(
// //     (sum, item) => sum + item.price * item.qty,
// //     0
// //   );
// //   const shippingFee = subtotal > 0 ? 10 : 0;
// //   const total = subtotal + shippingFee;

// //   const handleChange = (e) =>
// //     setForm({ ...form, [e.target.name]: e.target.value });

// //   /* =====================
// //         PLACE ORDER
// //   ===================== */
// //   const placeOrder = async () => {
// //     if (loading || cartItems.length === 0) return;

// //     if (!form.firstName || !form.phone || !form.street) {
// //       toast.error("Please fill required fields");
// //       return;
// //     }

// //     try {
// //       setLoading(true);

// //       const res = await axios.post(
// //         "http://localhost:4000/api/orders/cod",
// //         {
// //           items: cartItems.map((i) => ({
// //             productId: i.id,
// //             name: i.name,
// //             price: i.price,
// //             quantity: i.qty,
// //             image: i.image,
// //           })),
// //           shippingAddress: form,
// //           totalAmount: total,
// //           userEmail, // ✅ FIX
// //         }
// //       );

// //       if (res.data.success) {
// //         toast.success("Order placed successfully");
// //         clearCart(); // ✅ cart empties
// //       } else {
// //         toast.error(res.data.message || "Order failed");
// //       }
// //     } catch (err) {
// //       toast.error("Order failed");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
// //       {/* LEFT */}
// //       <div>
// //         <h2 className="text-2xl font-bold mb-6">
// //           DELIVERY <span className="text-pink-500">INFORMATION</span>
// //         </h2>

// //         <div className="grid grid-cols-2 gap-4">
// //           <input name="firstName" placeholder="First name" onChange={handleChange} className="input" />
// //           <input name="lastName" placeholder="Last name" onChange={handleChange} className="input" />
// //         </div>

// //         <input name="email" value={form.email} readOnly className="input w-full mt-4 bg-gray-100" />
// //         <input name="street" placeholder="Street" onChange={handleChange} className="input w-full mt-4" />

// //         <div className="grid grid-cols-2 gap-4 mt-4">
// //           <input name="city" placeholder="City" onChange={handleChange} className="input" />
// //           <input name="state" placeholder="State" onChange={handleChange} className="input" />
// //         </div>

// //         <div className="grid grid-cols-2 gap-4 mt-4">
// //           <input name="zipcode" placeholder="Zipcode" onChange={handleChange} className="input" />
// //           <input name="country" placeholder="Country" onChange={handleChange} className="input" />
// //         </div>

// //         <input name="phone" placeholder="Phone" onChange={handleChange} className="input w-full mt-4" />
// //       </div>

// //       {/* RIGHT */}
// //       <div className="border rounded-lg p-6">
// //         <h2 className="text-2xl font-bold mb-6">
// //           CART <span className="text-pink-500">TOTAL</span>
// //         </h2>

// //         <div className="flex justify-between mb-2">
// //           <span>Subtotal</span>
// //           <span>₹{subtotal}</span>
// //         </div>
// //         <div className="flex justify-between mb-2">
// //           <span>Shipping</span>
// //           <span>₹{shippingFee}</span>
// //         </div>

// //         <hr />

// //         <div className="flex justify-between font-bold mt-2">
// //           <span>Total</span>
// //           <span>₹{total}</span>
// //         </div>

// //         <button
// //           type="button"
// //           onClick={placeOrder}
// //           disabled={loading}
// //           className={`w-full mt-6 py-3 rounded text-white ${
// //             loading ? "bg-gray-400" : "bg-gray-700"
// //           }`}
// //         >
// //           {loading ? "Placing Order..." : "PLACE ORDER"}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Checkout;
// import React, { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Checkout = () => {
//   const { cartItems, clearCart } = useContext(CartContext);

//   const userEmail = localStorage.getItem("userEmail");

//   const [paymentMethod, setPaymentMethod] = useState("COD");
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: userEmail || "",
//     street: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "",
//     phone: "",
//   });

//   /* =====================
//      PRICE CALCULATION
//   ===================== */
//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );
//   const shippingFee = subtotal > 0 ? 10 : 0;
//   const total = subtotal + shippingFee;

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   /* =====================
//         PLACE ORDER
//   ===================== */
//   const placeOrder = async () => {
//     if (loading || cartItems.length === 0) return;

//     if (!form.firstName || !form.phone || !form.street) {
//       toast.error("Please fill required fields");
//       return;
//     }

//     try {
//       setLoading(true);

//       const payload = {
//         items: cartItems.map((i) => ({
//           productId: i.id,
//           name: i.name,
//           price: i.price,
//           quantity: i.qty,
//           image: i.image,
//         })),
//         shippingAddress: form,
//         totalAmount: total,
//         userEmail,
//       };

//       /* ========== COD ========== */
//       if (paymentMethod === "COD") {
//         const res = await axios.post(
//           "http://localhost:4000/api/orders/cod",
//           payload
//         );

//         if (res.data.success) {
//           toast.success("Order placed successfully (COD)");
//           clearCart();
//         } else {
//           toast.error(res.data.message || "Order failed");
//         }
//       }

//       /* ========== STRIPE ========== */
//       if (paymentMethod === "STRIPE") {
//         const res = await axios.post(
//           "http://localhost:4000/api/orders/stripe",
//           payload
//         );

//         if (res.data?.url) {
//           window.location.href = res.data.url; // 🔥 Redirect to Stripe
//         } else {
//           toast.error("Stripe session failed");
//         }
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Order failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
//       {/* LEFT — DELIVERY INFO */}
//       <div>
//         <h2 className="text-2xl font-bold mb-6">
//           DELIVERY <span className="text-pink-500">INFORMATION</span>
//         </h2>

//         <div className="grid grid-cols-2 gap-4">
//           <input name="firstName" placeholder="First name" onChange={handleChange} className="input" />
//           <input name="lastName" placeholder="Last name" onChange={handleChange} className="input" />
//         </div>

//         <input name="email" value={form.email} readOnly className="input w-full mt-4 bg-gray-100" />
//         <input name="street" placeholder="Street" onChange={handleChange} className="input w-full mt-4" />

//         <div className="grid grid-cols-2 gap-4 mt-4">
//           <input name="city" placeholder="City" onChange={handleChange} className="input" />
//           <input name="state" placeholder="State" onChange={handleChange} className="input" />
//         </div>

//         <div className="grid grid-cols-2 gap-4 mt-4">
//           <input name="zipcode" placeholder="Zipcode" onChange={handleChange} className="input" />
//           <input name="country" placeholder="Country" onChange={handleChange} className="input" />
//         </div>

//         <input name="phone" placeholder="Phone" onChange={handleChange} className="input w-full mt-4" />
//       </div>

//       {/* RIGHT — CART TOTAL */}
//       <div className="border rounded-lg p-6">
//         <h2 className="text-2xl font-bold mb-6">
//           CART <span className="text-pink-500">TOTAL</span>
//         </h2>

//         <div className="flex justify-between mb-2">
//           <span>Subtotal</span>
//           <span>₹{subtotal}</span>
//         </div>
//         <div className="flex justify-between mb-2">
//           <span>Shipping</span>
//           <span>₹{shippingFee}</span>
//         </div>

//         <hr />

//         <div className="flex justify-between font-bold mt-2">
//           <span>Total</span>
//           <span>₹{total}</span>
//         </div>

//         {/* PAYMENT METHOD */}
//         <div className="mt-6 flex gap-4">
//           <label className="flex items-center gap-2 cursor-pointer">
//             <input
//               type="radio"
//               checked={paymentMethod === "COD"}
//               onChange={() => setPaymentMethod("COD")}
//             />
//             Cash on Delivery
//           </label>

//           <label className="flex items-center gap-2 cursor-pointer">
//             <input
//               type="radio"
//               checked={paymentMethod === "STRIPE"}
//               onChange={() => setPaymentMethod("STRIPE")}
//             />
//             Stripe
//           </label>
//         </div>

//         <button
//           type="button"
//           onClick={placeOrder}
//           disabled={loading}
//           className={`w-full mt-6 py-3 rounded text-white ${
//             loading ? "bg-gray-400" : "bg-gray-700"
//           }`}
//         >
//           {loading ? "Processing..." : "PLACE ORDER"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  const userEmail = localStorage.getItem("userEmail");

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: userEmail || "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  /* =====================
     PRICE CALCULATION
  ===================== */
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const shippingFee = subtotal > 0 ? 10 : 0;
  const total = subtotal + shippingFee;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  /* =====================
        PLACE ORDER
  ===================== */
  const placeOrder = async () => {
    if (loading || cartItems.length === 0) return;

    if (!form.firstName || !form.phone || !form.street) {
      toast.error("Please fill required fields");
      return;
    }

    const payload = {
      items: cartItems.map((i) => ({
        productId: i.id,
        name: i.name,
        price: i.price,
        quantity: i.qty,
        image: i.image,
      })),
      shippingAddress: form,
      totalAmount: total,
      userEmail,
    };

    try {
      setLoading(true);

      /* ===== COD ===== */
      if (paymentMethod === "COD") {
        const res = await axios.post(
          "http://localhost:4000/api/orders/cod",
          payload
        );

        if (res.data?.success) {
          toast.success("Order placed successfully (COD)");
          clearCart();
        }
      }

      /* ===== STRIPE ===== */
      if (paymentMethod === "STRIPE") {
        const res = await axios.post(
          "http://localhost:4000/api/orders/stripe",
          payload
        );

        if (res.data?.url) {
          clearCart(); // clear BEFORE redirect
          window.location.href = res.data.url;
        } else {
          toast.error("Stripe checkout failed");
        }
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Order failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* LEFT – DELIVERY INFO */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          DELIVERY <span className="text-pink-500">INFORMATION</span>
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="firstName"
            placeholder="First name"
            onChange={handleChange}
            className="input"
          />
          <input
            name="lastName"
            placeholder="Last name"
            onChange={handleChange}
            className="input"
          />
        </div>

        <input
          name="email"
          value={form.email}
          readOnly
          className="input w-full mt-4 bg-gray-100"
        />

        <input
          name="street"
          placeholder="Street"
          onChange={handleChange}
          className="input w-full mt-4"
        />

        <div className="grid grid-cols-2 gap-4 mt-4">
          <input name="city" placeholder="City" onChange={handleChange} className="input" />
          <input name="state" placeholder="State" onChange={handleChange} className="input" />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <input name="zipcode" placeholder="Zipcode" onChange={handleChange} className="input" />
          <input name="country" placeholder="Country" onChange={handleChange} className="input" />
        </div>

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="input w-full mt-4"
        />
      </div>

      {/* RIGHT – CART TOTAL */}
      <div className="border rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">
          CART <span className="text-pink-500">TOTAL</span>
        </h2>

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>₹{shippingFee}</span>
        </div>

        <hr />

        <div className="flex justify-between font-bold mt-2">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        {/* PAYMENT METHOD */}
        <div className="mt-6 flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={paymentMethod === "COD"}
              onChange={() => setPaymentMethod("COD")}
            />
            Cash on Delivery
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={paymentMethod === "STRIPE"}
              onChange={() => setPaymentMethod("STRIPE")}
            />
            Stripe
          </label>
        </div>

        <button
          type="button"
          onClick={placeOrder}
          disabled={loading}
          className={`w-full mt-6 py-3 rounded text-white ${
            loading ? "bg-gray-400" : "bg-gray-700"
          }`}
        >
          {loading ? "Processing..." : "PLACE ORDER"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
