// // // // import Order from "../models/orderModel.js";
// // // // import Stripe from "stripe";
// // // // import Razorpay from "razorpay";

// // // // /* ======================
// // // //    STRIPE CONFIG
// // // // ====================== */
// // // // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // // // /* ======================
// // // //    RAZORPAY CONFIG
// // // // ====================== */
// // // // const razorpay = new Razorpay({
// // // //   key_id: process.env.RAZORPAY_KEY_ID,
// // // //   key_secret: process.env.RAZORPAY_KEY_SECRET,
// // // // });

// // // // /* ======================
// // // //    COD ORDER
// // // // ====================== */
// // // // export const placeCODOrder = async (req, res) => {
// // // //   try {
// // // //     const { items, shippingAddress, totalAmount } = req.body;

// // // //     const order = await Order.create({
// // // //       items,
// // // //       shippingAddress,
// // // //       totalAmount,
// // // //       paymentMethod: "COD",
// // // //       paymentStatus: "PENDING",
// // // //     });

// // // //     res.status(201).json({
// // // //       success: true,
// // // //       message: "Order placed successfully (COD)",
// // // //       order,
// // // //     });
// // // //   } catch (error) {
// // // //     res.status(500).json({ success: false, message: error.message });
// // // //   }
// // // // };

// // // // /* ======================
// // // //    STRIPE ORDER
// // // // ====================== */
// // // // export const placeStripeOrder = async (req, res) => {
// // // //   try {
// // // //     const { items, shippingAddress, totalAmount } = req.body;

// // // //     const paymentIntent = await stripe.paymentIntents.create({
// // // //       amount: Math.round(totalAmount * 100), // paisa
// // // //       currency: "inr",
// // // //       automatic_payment_methods: { enabled: true },
// // // //     });

// // // //     const order = await Order.create({
// // // //       items,
// // // //       shippingAddress,
// // // //       totalAmount,
// // // //       paymentMethod: "STRIPE",
// // // //       paymentStatus: "PAID",
// // // //     });

// // // //     res.status(200).json({
// // // //       success: true,
// // // //       clientSecret: paymentIntent.client_secret,
// // // //       order,
// // // //     });
// // // //   } catch (error) {
// // // //     res.status(500).json({ success: false, message: error.message });
// // // //   }
// // // // };

// // // // /* ======================
// // // //    RAZORPAY ORDER
// // // // ====================== */
// // // // export const placeRazorpayOrder = async (req, res) => {
// // // //   try {
// // // //     const { totalAmount } = req.body;

// // // //     if (!totalAmount) {
// // // //       return res.status(400).json({
// // // //         success: false,
// // // //         message: "Total amount is required",
// // // //       });
// // // //     }

// // // //     const razorpayOrder = await razorpay.orders.create({
// // // //       amount: Math.round(totalAmount * 100),
// // // //       currency: "INR",
// // // //       receipt: `receipt_${Date.now()}`,
// // // //     });

// // // //     res.status(200).json({
// // // //       success: true,
// // // //       razorpayOrder,
// // // //     });
// // // //   } catch (error) {
// // // //     console.error("Razorpay create error:", error);
// // // //     res.status(500).json({
// // // //       success: false,
// // // //       message: error.message,
// // // //     });
// // // //   }
// // // // };

// // // // import crypto from "crypto";

// // // // export const verifyRazorpayPayment = async (req, res) => {
// // // //   try {
// // // //     const {
// // // //       razorpay_order_id,
// // // //       razorpay_payment_id,
// // // //       razorpay_signature,
// // // //       items,
// // // //       shippingAddress,
// // // //       totalAmount,
// // // //     } = req.body;

// // // //     const body = razorpay_order_id + "|" + razorpay_payment_id;

// // // //     const expectedSignature = crypto
// // // //       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
// // // //       .update(body)
// // // //       .digest("hex");

// // // //     if (expectedSignature !== razorpay_signature) {
// // // //       return res.status(400).json({
// // // //         success: false,
// // // //         message: "Invalid Razorpay signature",
// // // //       });
// // // //     }

// // // //     // ✅ PAYMENT VERIFIED → SAVE ORDER
// // // //     const order = await Order.create({
// // // //       items,
// // // //       shippingAddress,
// // // //       totalAmount,
// // // //       paymentMethod: "RAZORPAY",
// // // //       paymentStatus: "PAID",
// // // //     });

// // // //     res.status(200).json({
// // // //       success: true,
// // // //       message: "Payment verified & order placed",
// // // //       order,
// // // //     });
// // // //   } catch (error) {
// // // //     console.error("Razorpay verify error:", error);
// // // //     res.status(500).json({
// // // //       success: false,
// // // //       message: error.message,
// // // //     });
// // // //   }
// // // // };


// // // // /* ======================
// // // //    GET ALL ORDERS (ADMIN)
// // // // ====================== */
// // // // export const getAllOrders = async (req, res) => {
// // // //   try {
// // // //     const orders = await Order.find().sort({ createdAt: -1 });

// // // //     res.status(200).json({ success: true, orders });
// // // //   } catch (error) {
// // // //     res.status(500).json({ success: false, message: error.message });
// // // //   }
// // // // };

// // // import Order from "../models/orderModel.js";

// // // /* =====================
// // //    USER: PLACE COD ORDER
// // // ===================== */
// // // export const placeCodOrder = async (req, res) => {
// // //   try {
// // //     const { items, shippingAddress, totalAmount, userEmail } = req.body;

// // //     const order = await Order.create({
// // //       items,
// // //       shippingAddress,
// // //       totalAmount,
// // //       userEmail,
// // //       paymentMethod: "COD",
// // //       paymentStatus: "PENDING",
// // //     });

// // //     res.status(201).json({
// // //       success: true,
// // //       message: "Order placed successfully",
// // //       order,
// // //     });
// // //   } catch (err) {
// // //     res.status(500).json({ success: false, message: err.message });
// // //   }
// // // };

// // // /* =====================
// // //    USER: GET MY ORDERS
// // // ===================== */
// // // export const getUserOrders = async (req, res) => {
// // //   try {
// // //     const { email } = req.query;

// // //     const orders = await Order.find({ userEmail: email }).sort({
// // //       createdAt: -1,
// // //     });

// // //     res.json({ success: true, orders });
// // //   } catch (err) {
// // //     res.status(500).json({ success: false, message: err.message });
// // //   }
// // // };

// // // /* =====================
// // //    ADMIN: GET ALL ORDERS
// // // ===================== */
// // // export const getAllOrders = async (req, res) => {
// // //   try {
// // //     const orders = await Order.find().sort({ createdAt: -1 });
// // //     res.json({ success: true, orders });
// // //   } catch (err) {
// // //     res.status(500).json({ success: false, message: err.message });
// // //   }
// // // };

// // // /* =====================
// // //    ADMIN: UPDATE STATUS
// // // ===================== */
// // // export const updateOrderStatus = async (req, res) => {
// // //   try {
// // //     const { status } = req.body;

// // //     const order = await Order.findByIdAndUpdate(
// // //       req.params.id,
// // //       { orderStatus: status },
// // //       { new: true }
// // //     );

// // //     res.json({ success: true, order });
// // //   } catch (err) {
// // //     res.status(500).json({ success: false, message: err.message });
// // //   }
// // // };

// // import Order from "../models/orderModel.js";

// // /* =====================
// //    USER: PLACE COD ORDER
// // ===================== */
// // export const placeCodOrder = async (req, res) => {
// //   try {
// //     const { items, shippingAddress, totalAmount, userEmail } = req.body;

// //     if (!userEmail) {
// //       return res
// //         .status(400)
// //         .json({ success: false, message: "User email required" });
// //     }

// //     const order = await Order.create({
// //       items,
// //       shippingAddress,
// //       totalAmount,
// //       userEmail,
// //       paymentMethod: "COD",
// //       paymentStatus: "PENDING",
// //     });

// //     res.status(201).json({
// //       success: true,
// //       message: "Order placed successfully",
// //       order,
// //     });
// //   } catch (err) {
// //     res.status(500).json({ success: false, message: err.message });
// //   }
// // };

// // /* =====================
// //    USER: GET MY ORDERS
// // ===================== */
// // export const getUserOrders = async (req, res) => {
// //   try {
// //     const { email } = req.query;

// //     const orders = await Order.find({ userEmail: email }).sort({
// //       createdAt: -1,
// //     });

// //     res.json({ success: true, orders });
// //   } catch (err) {
// //     res.status(500).json({ success: false, message: err.message });
// //   }
// // };

// // /* =====================
// //    ADMIN: GET ALL ORDERS
// // ===================== */
// // export const getAllOrders = async (req, res) => {
// //   try {
// //     const orders = await Order.find().sort({ createdAt: -1 });
// //     res.json({ success: true, orders });
// //   } catch (err) {
// //     res.status(500).json({ success: false, message: err.message });
// //   }
// // };

// // /* =====================
// //    ADMIN: UPDATE STATUS
// // ===================== */
// // export const updateOrderStatus = async (req, res) => {
// //   try {
// //     const { status } = req.body;

// //     const order = await Order.findByIdAndUpdate(
// //       req.params.id,
// //       { orderStatus: status },
// //       { new: true }
// //     );

// //     res.json({ success: true, order });
// //   } catch (err) {
// //     res.status(500).json({ success: false, message: err.message });
// //   }
// // };

// import Order from "../models/orderModel.js";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// /* =====================
//    USER: PLACE COD ORDER
// ===================== */
// export const placeCodOrder = async (req, res) => {
//   try {
//     const { items, shippingAddress, totalAmount, userEmail } = req.body;

//     if (!userEmail) {
//       return res
//         .status(400)
//         .json({ success: false, message: "User email required" });
//     }

//     const order = await Order.create({
//       items,
//       shippingAddress,
//       totalAmount,
//       userEmail,
//       paymentMethod: "COD",
//       paymentStatus: "PENDING",
//     });

//     res.status(201).json({
//       success: true,
//       message: "Order placed successfully (COD)",
//       order,
//     });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// /* =====================
//    USER: PLACE STRIPE ORDER
// ===================== */
// export const placeStripeOrder = async (req, res) => {
//   try {
//     const { items, shippingAddress, totalAmount, userEmail } = req.body;

//     if (!userEmail) {
//       return res
//         .status(400)
//         .json({ success: false, message: "User email required" });
//     }

//     // 1️⃣ Create Stripe Checkout Session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: items.map((item) => ({
//         price_data: {
//           currency: "inr",
//           product_data: {
//             name: item.name,
//           },
//           unit_amount: Math.round(item.price * 100),
//         },
//         quantity: item.quantity,
//       })),
//       success_url: `${process.env.CLIENT_URL}/order-success`,
//       cancel_url: `${process.env.CLIENT_URL}/cart`,
//     });

//     // 2️⃣ Save order in DB
//     const order = await Order.create({
//       items,
//       shippingAddress,
//       totalAmount,
//       userEmail,
//       paymentMethod: "STRIPE",
//       paymentStatus: "PAID",
//     });

//     res.json({
//       success: true,
//       url: session.url, // 👈 frontend redirects here
//       order,
//     });
//   } catch (err) {
//     console.error("Stripe error:", err.message);
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// /* =====================
//    USER: GET MY ORDERS
// ===================== */
// export const getUserOrders = async (req, res) => {
//   try {
//     const { email } = req.query;

//     const orders = await Order.find({ userEmail: email }).sort({
//       createdAt: -1,
//     });

//     res.json({ success: true, orders });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// /* =====================
//    ADMIN: GET ALL ORDERS
// ===================== */
// export const getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find().sort({ createdAt: -1 });
//     res.json({ success: true, orders });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// /* =====================
//    ADMIN: UPDATE STATUS
// ===================== */
// export const updateOrderStatus = async (req, res) => {
//   try {
//     const { status } = req.body;

//     const order = await Order.findByIdAndUpdate(
//       req.params.id,
//       { orderStatus: status },
//       { new: true }
//     );

//     res.json({ success: true, order });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };
import Order from "../models/orderModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/* =====================
   COD ORDER
===================== */
export const placeCodOrder = async (req, res) => {
  try {
    const { items, shippingAddress, totalAmount, userEmail } = req.body;

    if (!userEmail) {
      return res
        .status(400)
        .json({ success: false, message: "User email required" });
    }

    const order = await Order.create({
      items,
      shippingAddress,
      totalAmount,
      userEmail,
      paymentMethod: "COD",
      paymentStatus: "PENDING",
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully (COD)",
      order,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* =====================
   STRIPE ORDER
===================== */
export const placeStripeOrder = async (req, res) => {
  try {
    const { items, shippingAddress, totalAmount, userEmail } = req.body;

    if (!userEmail) {
      return res
        .status(400)
        .json({ success: false, message: "User email required" });
    }

    // ✅ STRIPE CHECKOUT SESSION
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      line_items: items.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),

      success_url: "http://localhost:5173/order-success",
      cancel_url: "http://localhost:5173/cart",
    });

    const order = await Order.create({
      items,
      shippingAddress,
      totalAmount,
      userEmail,
      paymentMethod: "STRIPE",
      paymentStatus: "PAID",
      stripeSessionId: session.id,
    });

    res.json({
      success: true,
      url: session.url,
      order,
    });
  } catch (err) {
    console.error("Stripe error:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};

/* =====================
   USER ORDERS
===================== */
export const getUserOrders = async (req, res) => {
  try {
    const { email } = req.query;

    const orders = await Order.find({ userEmail: email }).sort({
      createdAt: -1,
    });

    res.json({ success: true, orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* =====================
   ADMIN
===================== */
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus: status },
      { new: true }
    );

    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
