import express from "express";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuthMiddleware.js";
import {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

// CREATE PRODUCT


router.post(
  "/add",
  upload.single("image"),
  createProduct
);


// GET ALL PRODUCTS
router.get("/", getAllProducts);

// GET SINGLE PRODUCT
router.get("/:id", getProductById);

//update product
router.put(
  "/:id",
  upload.single("image"),
  updateProduct
);

// DELETE PRODUCT
router.delete("/:id", deleteProduct);

export default router;
