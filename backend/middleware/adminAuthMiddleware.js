import jwt from "jsonwebtoken";
import Admin from "../models/AdminModel.js";

const adminAuth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.admin = await Admin.findById(decoded.id).select("-password");
      return next();
    } catch (error) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized" });
    }
  }

  return res
    .status(401)
    .json({ success: false, message: "No token found" });
};

export default adminAuth;
