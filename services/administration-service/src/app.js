import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import adminRoutes from "./routes/adminRoutes.js";
import { fileURLToPath } from "url";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "http://localhost:5174"],
  })
);
app.use(express.json());
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
console.log(path.join(__dirname, "/uploads"));

app.use("/admin", adminRoutes);

export default app;
