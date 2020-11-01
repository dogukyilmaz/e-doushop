import asyncHandler from "express-async-handler";
import { NextFunction, Request, Response } from "express";

import Product from "models/Product";

// @description   Fetch all products
// @route         GET /api/v1/products
// @access        Public
export const getProducts = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const products = await Product.find({});
  res.json({ success: true, data: products });
});

// @description   Fetch single product
// @route         GET /api/v1/product/:id
// @access        Public
export const getSingleProduct = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json({ success: true, data: product });
  } else {
    res.status(404);
    throw new Error("Product not found.");
  }
});
