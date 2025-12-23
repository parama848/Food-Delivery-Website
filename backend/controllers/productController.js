
// import Product from "../models/productModel.js";

// /**
//  * CREATE PRODUCT
//  * POST /api/products
//  */
// export const createProduct = async (req, res) => {
//   try {
//     const { name, price, description, category } = req.body;

//     // validation
//     if (!name || !price || !description || !category) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "Product image is required",
//       });
//     }

//     const product = await Product.create({
//       name,
//       image: `/uploads/${req.file.filename}`, // multer file
//       price,
//       description,
//       category,
//     });

//     res.status(201).json({
//       success: true,
//       product,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * GET ALL PRODUCTS
//  * GET /api/products
//  */
// export const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();

//     res.status(200).json({
//       success: true,
//       products,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * GET SINGLE PRODUCT
//  * GET /api/products/:id
//  */
// export const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       product,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// /**
//  * DELETE PRODUCT
//  * DELETE /api/products/:id
//  */
// export const deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     await product.deleteOne();

//     res.status(200).json({
//       success: true,
//       message: "Product deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

import Product from "../models/productModel.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

/**
 * CREATE PRODUCT
 * POST /api/products
 */
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    // ======================
    // VALIDATION
    // ======================
    if (!name || !price || !description || !category) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Product image is required",
      });
    }

    // ======================
    // UPLOAD TO CLOUDINARY
    // ======================
    const result = await cloudinary.uploader.upload(
      req.file.path,
      {
        folder: "food-products", // Cloudinary folder name
      }
    );

    // delete local temp file (important)
    fs.unlinkSync(req.file.path);

    // ======================
    // SAVE TO DB
    // ======================
    const product = await Product.create({
      name,
      image: result.secure_url, // ✅ CLOUDINARY URL
      price,
      description,
      category,
    });

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Create product error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add product",
    });
  }
};

/**
 * GET ALL PRODUCTS
 * GET /api/products
 */
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * GET SINGLE PRODUCT
 * GET /api/products/:id
 */
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * DELETE PRODUCT
 * DELETE /api/products/:id
 */
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // optional: delete image from Cloudinary
    if (product.image) {
      const publicId = product.image
        .split("/")
        .slice(-2)
        .join("/")
        .split(".")[0];

      await cloudinary.uploader.destroy(publicId);
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
