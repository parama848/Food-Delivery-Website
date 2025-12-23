// // import express from "express";
// // import {
// //   createProduct,
// //   getAllProducts,
// //   getProductById,
// //    deleteProduct
// // } from "../controllers/productController.js";

// // const router = express.Router();

// // router.post("/", upload.single("image"), createProduct);

// // router.post("/", createProduct);        // Create product
// // router.get("/", getAllProducts);         // Get all products
// // router.get("/:id", getProductById);
// // router.delete("/:id", deleteProduct);      // Get single product

// // export default router;
// import express from "express";
// import upload from "../middleware/upload.js";
// import {
//   createProduct,
//   getAllProducts,
//   getProductById,
//   deleteProduct,
// } from "../controllers/productController.js";

// const router = express.Router();

// // CREATE PRODUCT (with image upload)
// router.post(
//   "/",
//   upload.single("image"),
//   createProduct
// );

// // GET PRODUCTS
// router.get("/", getAllProducts);
// router.get("/:id", getProductById);

// // DELETE PRODUCT
// router.delete("/:id", deleteProduct);

// export default router;
import express from "express";
import upload from "../middleware/upload.js";
import {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

/**
 * CREATE PRODUCT (Image Upload)
 * POST /api/products
 */
router.post("/", upload.single("image"), createProduct);



/**
 * GET ALL PRODUCTS
 * GET /api/products
 */
router.get("/", getAllProducts);

/**
 * GET SINGLE PRODUCT
 * GET /api/products/:id
 */
router.get("/:id", getProductById);

/**
 * DELETE PRODUCT
 * DELETE /api/products/:id
 */
router.delete("/:id", deleteProduct);

export default router;
