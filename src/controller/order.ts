import asyncHandler from "express-async-handler";
import { NextFunction, Request, Response } from "express";

import Product from "models/Product";
import Order from "models/Order";

// @description   Create order
// @route         POST /api/v1/orders
// @access        Private
export const addOrder = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { orderItems, shippingAddress, paymentMethod, cartFee, taxPrice, shippingPrice, totalPrice } = req.body;

  if (!orderItems) {
    res.status(400);
    throw new Error("No order items.");
  } else {
    const order = new Order({
      user: req.user?._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      taxPrice,
      shippingPrice,
      totalPrice,
      cartFee,
    });

    const createdOrder = await order.save();
    res.status(201).json({ success: true, data: createdOrder });
  }
});
