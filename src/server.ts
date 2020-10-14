import express, { Application } from "express";

import { products } from "./data/products";

const app: Application = express();

const PORT = 4500;

app.get("/", (req, res) => res.send("Express + TypeScript Server"));

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
