
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

      success_url: `${process.env.CLIENT_URL || "http://localhost:5173"}/order-success`,
      cancel_url: `${process.env.CLIENT_URL || "http://localhost:5173"}/cart`,
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
