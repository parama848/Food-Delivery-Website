import multer from "multer";
import path from "path";
import os from "os";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // ✅ Vercel-safe temp directory
    cb(null, os.tmpdir());
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

export default upload;
