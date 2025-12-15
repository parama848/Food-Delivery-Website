// // import mongoose from "mongoose";

// // const orderSchema = new mongoose.Schema(
// //   {
// //     user: {
// //       type: mongoose.Schema.Types.ObjectId,
// //       ref: "User",
// //       required: false, // optional if guest checkout
// //     },

// //     items: [
// //       {
// //         productId: {
// //           type: mongoose.Schema.Types.ObjectId,
// //           ref: "Product",
// //         },
// //         name: String,
// //         price: Number,
// //         quantity: Number,
// //         image: String,
// //       },
// //     ],

// //     shippingAddress: {
// //       name: String,
// //       phone: String,
// //       address: String,
// //       city: String,
// //       pincode: String,
// //     },

// //     paymentMethod: {
// //       type: String,
// //       enum: ["COD", "STRIPE", "RAZORPAY"],
// //       required: true,
// //     },

// //     paymentStatus: {
// //       type: String,
// //       enum: ["PENDING", "PAID"],
// //       default: "PENDING",
// //     },

// //     totalAmount: {
// //       type: Number,
// //       required: true,
// //     },

// //     orderStatus: {
// //       type: String,
// //       enum: ["PLACED", "CONFIRMED", "DELIVERED", "CANCELLED"],
// //       default: "PLACED",
// //     },
// //   },
// //   { timestamps: true }
// // );

// // const Order = mongoose.model("Order", orderSchema);
// // export default Order;

// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema(
//   {
//     userEmail: {
//       type: String,
//       required: true,
//     },

//     items: [
//       {
//         productId: String,
//         name: String,
//         price: Number,
//         quantity: Number,
//         image: String,
//       },
//     ],

//     shippingAddress: {
//       firstName: String,
//       lastName: String,
//       email: String,
//       street: String,
//       city: String,
//       state: String,
//       zipcode: String,
//       country: String,
//       phone: String,
//     },

//     paymentMethod: {
//       type: String,
//       enum: ["COD", "STRIPE"],
//       required: true,
//     },

//     paymentStatus: {
//       type: String,
//       enum: ["PENDING", "PAID"],
//       default: "PENDING",
//     },

//     orderStatus: {
//       type: String,
//       enum: ["PLACED", "PROCESSING", "SHIPPED", "DELIVERED"],
//       default: "PLACED",
//     },

//     totalAmount: {
//       type: Number,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Order", orderSchema);
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },

    items: [
      {
        productId: String,
        name: String,
        price: Number,
        quantity: Number,
        image: String,
      },
    ],

    shippingAddress: {
      firstName: String,
      lastName: String,
      email: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String,
      phone: String,
    },

    paymentMethod: {
      type: String,
      enum: ["COD", "STRIPE"],
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["PENDING", "PAID"],
      default: "PENDING",
    },

    stripeSessionId: String,

    orderStatus: {
      type: String,
      enum: ["PLACED", "PROCESSING", "SHIPPED", "DELIVERED"],
      default: "PLACED",
    },

    totalAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
