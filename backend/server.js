// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import cookieParser from "cookie-parser";

// import connectDB from "./config/mongodb.js";
// import connectCloudinary from "./config/cloudinary.js";

// import userRoute from "./routes/userRoute.js";
// import productRoutes from "./routes/productRoute.js";
// import orderRoutes from "./routes/orderRoute.js";
// import adminAuthRoute from "./routes/adminAuthRoute.js";

// const app = express();

// /* ======================
//    PORT (DO NOT CHANGE)
// ====================== */
// const PORT = process.env.PORT || 4000;

// /* ======================
//    CONNECT SERVICES
// ====================== */
// connectDB();
// connectCloudinary();

// /* ======================
//    TRUST PROXY (IMPORTANT for Render / cookies)
// ====================== */
// app.set("trust proxy", 1);

// /* ======================
//    GLOBAL MIDDLEWARE
// ====================== */
// app.use(express.json());
// app.use(cookieParser());

// /* ======================
//    CORS CONFIG (FIXED)
// ====================== */
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173", // Vite local
//       "http://localhost:5174",
//          "https://food-delivery-website-frontend-pi.vercel.app" // (in case port changes)
//     ],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// /* ======================
//    ROUTES
// ====================== */
// app.use("/api/user", userRoute);
// app.use("/api/products", productRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/admin", adminAuthRoute);

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
//   console.log(`✅ Server running on PORT: ${PORT}`);
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
import adminAuthRoute from "./routes/adminAuthRoute.js";

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
   TRUST PROXY
====================== */
app.set("trust proxy", 1);

/* ======================
   CORS CONFIG (FIXED)
====================== */
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://food-delivery-website-frontend-pi.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow Postman / server-to-server
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* ======================
   GLOBAL MIDDLEWARE
====================== */
app.use(express.json());
app.use(cookieParser());

/* ======================
   ROUTES
====================== */
app.use("/api/user", userRoute);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminAuthRoute);

/* ======================
   STATIC FILES
====================== */
app.use("/uploads", express.static("uploads"));

/* ======================
   HEALTH CHECK
====================== */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Working 🚀",
  });
});

/* ======================
   START SERVER
====================== */
app.listen(PORT, () => {
  console.log(`✅ Server running on PORT: ${PORT}`);
});
