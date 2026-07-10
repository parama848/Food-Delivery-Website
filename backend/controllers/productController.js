// import Product from "../models/productModel.js";
// import cloudinary from "../config/cloudinary.js";
// import fs from "fs";

// /* ======================
//    CREATE PRODUCT
// ====================== */
// export const createProduct = async (req, res) => {
//   let tempFile;

//   try {
//     const { name, price, description, category } = req.body;

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

//     tempFile = req.file.path;

//     const result = await cloudinary.uploader.upload(tempFile, {
//       folder: "food-products",
//     });

//     const product = await Product.create({
//       name,
//       price: Number(price),
//       description,
//       category,
//       image: result.secure_url,
//     });

//     res.status(201).json({ success: true, product });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: "Create product failed" });
//   } finally {
//     if (tempFile && fs.existsSync(tempFile)) {
//       fs.unlinkSync(tempFile);
//     }
//   }
// };

// /* ======================
//    GET ALL PRODUCTS
// ====================== */
// export const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find().sort({ createdAt: -1 });
//     res.status(200).json({ success: true, products });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// /* ======================
//    GET SINGLE PRODUCT
// ====================== */
// export const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ success: false, message: "Product not found" });
//     }
//     res.status(200).json({ success: true, product });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// /* ======================
//    DELETE PRODUCT  ✅ ADD THIS
// ====================== */
// export const deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({ success: false, message: "Product not found" });
//     }

//     // delete image from Cloudinary
//     if (product.image?.startsWith("http")) {
//       const publicId = product.image
//         .split("/")
//         .slice(-2)
//         .join("/")
//         .split(".")[0];

//       await cloudinary.uploader.destroy(publicId);
//     }

//     await product.deleteOne();

//     res.status(200).json({
//       success: true,
//       message: "Product deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

import Product from "../models/productModel.js";
import {cloudinary} from "../config/cloudinary.js";
import fs from "fs";

/* ======================
   CREATE PRODUCT
====================== */
export const createProduct = async (req, res) => {
  let tempFile = null;

  try {
    const { name, price, description, category } = req.body;

    // Validation
    if (!name || !price || !description || !category) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check image
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Product image is required",
      });
    }

    tempFile = req.file.path;

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(tempFile, {
      folder: "food-products",
    });

    // Create product
    const product = await Product.create({
      name,
      price: Number(price),
      description,
      category,
      image: result.secure_url,
      imagePublicId: result.public_id,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Create Product Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  } finally {
    // Delete temp file
    if (tempFile && fs.existsSync(tempFile)) {
      fs.unlinkSync(tempFile);
    }
  }
};

/* ======================
   GET ALL PRODUCTS
====================== */
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Get Products Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ======================
   GET SINGLE PRODUCT
====================== */
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Get Product Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



/* ======================
   UPDATE PRODUCT
====================== */

/* ======================
   UPDATE PRODUCT
====================== */
export const updateProduct = async (req, res) => {
  let tempFile = null;

  try {
    const { id } = req.params;
    const { name, price, description, category } = req.body;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const updatedData = {
      name: name || product.name,
      price: price ? Number(price) : product.price,
      description: description || product.description,
      category: category || product.category,
    };

    // Update image if a new image is uploaded
    if (req.file) {
      tempFile = req.file.path;

      if (product.imagePublicId) {
        await cloudinary.uploader.destroy(product.imagePublicId);
      }

      const result = await cloudinary.uploader.upload(tempFile, {
        folder: "food-products",
      });

      updatedData.image = result.secure_url;
      updatedData.imagePublicId = result.public_id;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Update Product Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  } finally {
    if (tempFile && fs.existsSync(tempFile)) {
      fs.unlinkSync(tempFile);
    }
  }
};


/* ======================
   DELETE PRODUCT
====================== */
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Delete image from Cloudinary
    if (product.imagePublicId) {
      await cloudinary.uploader.destroy(product.imagePublicId);
    }

    // Delete product from MongoDB
    await product.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Delete Product Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};