import multer from "multer";
 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/uploads/admins");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

const adminUpload = multer({ storage });
export default adminUpload;
