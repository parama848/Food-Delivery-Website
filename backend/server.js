import express from 'express';
import cors from "cors";
import 'dotenv/config';
import cookieParser from 'cookie-parser';

import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRoute from './routes/userRoute.js';
import productRoutes from "./routes/productRoute.js";
import orderRoutes from "./routes/orderRoute.js";



const app = express();
const port = process.env.PORT || 4000;

// connect DB & services
connectDB();
connectCloudinary();

// ✅ middleware FIRST
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

// ✅ routes AFTER middleware
app.use('/api/user', userRoute);
app.use("/api/products", productRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/orders", orderRoutes);

app.get('/', (req, res) => res.send("API Working"));

app.listen(port, () =>
  console.log(`Server started on PORT:${port}`)
);
