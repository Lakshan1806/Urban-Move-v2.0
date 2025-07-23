import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "http://localhost:5174"],
  })
);
app.use(express.json());
app.use(cookieParser());

export default app;
