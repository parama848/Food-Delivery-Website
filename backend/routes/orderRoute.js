// // // // import express from "express";
// // // // import {
// // // //   placeCODOrder,
// // // //   placeStripeOrder,
// // // //   placeRazorpayOrder,
// // // //   getAllOrders,
// // // //   verifyRazorpayPayment
// // // // } from "../controllers/orderController.js";

// // // // const router = express.Router();

// // // // // PLACE ORDERS
// // // // router.post("/cod", placeCODOrder);
// // // // router.post("/stripe", placeStripeOrder);
// // // // router.post("/razorpay", placeRazorpayOrder);
// // // // router.post("/razorpay/verify", verifyRazorpayPayment);

// // // // // ADMIN
// // // // router.get("/", getAllOrders);

// // // // export default router;

// // // import express from "express";
// // // import {
// // //   placeCodOrder,
// // //   getUserOrders,
// // //   getAllOrders,
// // //   updateOrderStatus,
// // // } from "../controllers/orderController.js";

// // // const router = express.Router();

// // // // USER
// // // router.post("/cod", placeCodOrder);
// // // router.get("/my-orders", getUserOrders);



// // // // ADMIN
// // // router.get("/admin", getAllOrders);
// // // router.put("/:id/status", updateOrderStatus);

// // // export default router;

// // import express from "express";
// // import {
// //   placeCodOrder,
// //   getUserOrders,
// //   getAllOrders,
// //   updateOrderStatus,
// // } from "../controllers/orderController.js";

// // const router = express.Router();

// // // USER
// // router.post("/cod", placeCodOrder);
// // router.get("/my-orders", getUserOrders);

// // // ADMIN
// // router.get("/admin", getAllOrders);
// // router.put("/:id/status", updateOrderStatus);

// // export default router;
// import express from "express";
// import {
//   placeCodOrder,
//   placeStripeOrder,
//   getUserOrders,
//   getAllOrders,
//   updateOrderStatus,
// } from "../controllers/orderController.js";

// const router = express.Router();

// // USER
// router.post("/cod", placeCodOrder);
// router.post("/stripe", placeStripeOrder); // ✅ STRIPE
// router.get("/my-orders", getUserOrders);

// // ADMIN
// router.get("/admin", getAllOrders);
// router.put("/:id/status", updateOrderStatus);

// export default router;
import express from "express";
import {
  placeCodOrder,
  placeStripeOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/cod", placeCodOrder);
router.post("/stripe", placeStripeOrder);
router.get("/my-orders", getUserOrders);

// admin
router.get("/admin", getAllOrders);
router.put("/:id/status", updateOrderStatus);

export default router;
