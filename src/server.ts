import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import { products } from "./data/products";
import { Product } from "types";

const app: Application = express();

app.use(cors());

app.get("/", (req, res) => res.send("Express + TypeScript Server"));

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:id", (req, res) => {
  const response = products.filter((prod: Product) => prod._id === req.params.id);
  setTimeout(() => {
    res.json(response);
  }, 2000);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[server]: Server is running in ${process.env.NODE_ENV} at https://localhost:${PORT}`);
});
