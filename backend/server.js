// // import express from "express";
// // import cors from "cors";
// // import "dotenv/config";
// // import cookieParser from "cookie-parser";

// // import connectDB from "./config/mongodb.js";
// // import connectCloudinary from "./config/cloudinary.js";

// // import userRoute from "./routes/userRoute.js";
// // import productRoutes from "./routes/productRoute.js";
// // import orderRoutes from "./routes/orderRoute.js";

// // const app = express();

// // /* ======================
// //    PORT (DO NOT CHANGE)
// // ====================== */
// // const PORT = process.env.PORT || 4000;

// // /* ======================
// //    CONNECT SERVICES
// // ====================== */
// // connectDB();
// // connectCloudinary();

// // /* ======================
// //    TRUST PROXY (IMPORTANT for Render)
// // ====================== */
// // app.set("trust proxy", 1);

// // /* ======================
// //    MIDDLEWARE
// // ====================== */
// // app.use(express.json());
// // app.use(cookieParser());

// // app.use(
// //   cors({
// //     origin: [
// //       "http://localhost:5173", // local frontend
// //       "https://food-delivery.vercel.app", // 👈 replace with your real Vercel URL
// //     ],
// //     credentials: true,
// //     methods: ["GET", "POST", "PUT", "DELETE"],
// //   })
// // );

// // /* ======================
// //    ROUTES
// // ====================== */
// // app.use("/api/user", userRoute);
// // app.use("/api/products", productRoutes);
// // app.use("/api/orders", orderRoutes);

// // /* ======================
// //    STATIC FILES (OPTIONAL)
// // ====================== */
// // app.use("/uploads", express.static("uploads"));

// // /* ======================
// //    HEALTH CHECK
// // ====================== */
// // app.get("/", (req, res) => {
// //   res.send("API Working 🚀");
// // });

// // /* ======================
// //    START SERVER
// // ====================== */
// // app.listen(PORT, () => {
// //   console.log(`✅ Server running on PORT: ${PORT}`);
// // });
// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import cookieParser from "cookie-parser";

// import connectDB from "./config/mongodb.js";
// import connectCloudinary from "./config/cloudinary.js";

// import userRoute from "./routes/userRoute.js";
// import productRoutes from "./routes/productRoute.js";
// import orderRoutes from "./routes/orderRoute.js";

// const app = express();

// /* ======================
//    PORT
// ====================== */
// const PORT = process.env.PORT || 4000;

// /* ======================
//    CONNECT SERVICES
// ====================== */
// connectDB();
// connectCloudinary();

// /* ======================
//    TRUST PROXY
// ====================== */
// app.set("trust proxy", 1);

// /* ======================
//    MIDDLEWARE
// ====================== */
// app.use(express.json());
// app.use(cookieParser());

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://food-delivery-website-pink-three.vercel.app", // ✅ YOUR REAL VERCEL URL
//     ],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );

// /* ======================
//    ROUTES
// ====================== */
// app.use("/api/user", userRoute);
// app.use("/api/products", productRoutes);
// app.use("/api/orders", orderRoutes);

// /* ======================
//    STATIC FILES
// ====================== */
// app.use("/uploads", express.static("uploads"));

// /* ======================
//    HEALTH CHECK
// ====================== */
// app.get("/", (req, res) => {
//   res.send("API Working 🚀");
// });

// /* ======================
//    START SERVER
// ====================== */
// app.listen(PORT, () => {
//   console.log(`Server running on PORT: ${PORT}`);
// });
import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRoute from "./routes/userRoute.js";
import productRoutes from "./routes/productRoute.js";
import orderRoutes from "./routes/orderRoute.js";

const app = express();

/* ======================
   PORT
====================== */
const PORT = process.env.PORT || 4000;

/* ======================
   CONNECT SERVICES
====================== */
connectDB();
connectCloudinary();

/* ======================
   TRUST PROXY (REQUIRED FOR RENDER)
====================== */
app.set("trust proxy", 1);

/* ======================
   MIDDLEWARE
====================== */
app.use(express.json());
app.use(cookieParser());

/* ======================
   CORS CONFIG (🔥 FIXED)
====================== */
const allowedOrigins = [
  "http://localhost:5173",
  "https://food-delivery-website-pink-three.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (Postman, mobile apps)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(
          new Error("Not allowed by CORS")
        );
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* ✅ HANDLE PREFLIGHT REQUESTS */
app.options("*", cors());

/* ======================
   ROUTES
====================== */
app.use("/api/user", userRoute);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

/* ======================
   STATIC FILES
====================== */
app.use("/uploads", express.static("uploads"));

/* ======================
   HEALTH CHECK
====================== */
app.get("/", (req, res) => {
  res.send("API Working 🚀");
});

/* ======================
   START SERVER
====================== */
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
