import Admin from "../models/AdminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// 🔐 Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// ================= REGISTER ADMIN =================
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      return res.status(400).json({ success: false, message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
      token: generateToken(admin._id),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ================= LOGIN ADMIN =================
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    res.json({
      success: true,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
      token: generateToken(admin._id),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
