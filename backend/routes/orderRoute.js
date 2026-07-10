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
