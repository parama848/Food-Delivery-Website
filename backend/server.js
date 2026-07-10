import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";

import userRoute from "./routes/userRoute.js";
import productRoutes from "./routes/productRoute.js";
import orderRoutes from "./routes/orderRoute.js";
import adminAuthRoute from "./routes/adminAuthRoute.js";
import { connectCloudinary } from "./config/cloudinary.js";

const app = express();

/* ======================
   PORT
====================== */
const PORT = process.env.PORT || 4000;

/* ======================
   CONNECT DATABASE
====================== */
connectDB();
connectCloudinary();

/* ======================
   TRUST PROXY (Vercel)
====================== */
app.set("trust proxy", 1);

/* ======================
   CORS CONFIG
====================== */
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://food-delivery-website-client.vercel.app/",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
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
   HEALTH CHECK
====================== */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Working!",
  });
});

/* ======================
   START SERVER
====================== */
app.listen(PORT, () => {
  console.log(` Server running on PORT: ${PORT}`);
});
