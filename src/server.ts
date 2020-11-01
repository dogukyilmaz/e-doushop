import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
dotenv.config();

import { Product } from "types";
import { connectDB } from "config/db";

import productRoute from "routes/product";

connectDB();
const app: Application = express();

process.env.NODE_ENV === "development" && app.use(morgan("dev"));

app.use(cors());

app.get("/", (req, res) => res.send("Express + TypeScript Server"));

app.use("/api/v1/products", productRoute);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`[server]: Server is running in ${process.env.NODE_ENV} at https://localhost:${PORT}`);
});

process.on("unhandledRejection", (err: any, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

// process.on("beforeExit", () => {
//   server.close();
//   process.exit(1);
// });
