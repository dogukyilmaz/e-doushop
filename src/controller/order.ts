import asyncHandler from "express-async-handler";
import { NextFunction, Request, Response } from "express";

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

// @description   Get order by id
// @route         GET /api/v1/orders/:id
// @access        Private
export const getSingleOrder = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const order = await Order.findById(req.params.id).populate("user", "name email");

  if (!order) {
    res.status(404);
    throw new Error("Order not found!");
  }

  if (order.user !== req.user?._id) {
    res.status(401);
    throw new Error("Not authorized!");
  }

  res.json({ success: true, data: order });
});

// @description   Get all orders
// @route         GET /api/v1/orders
// @access        Private
export const getAllOrders = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const orders = await Order.find({ user: req.user?._id }).populate("user", "name email");

  if (!orders.length) {
    res.status(404);
    throw new Error("There is no order, yet.");
  }

  res.json({ success: true, data: orders });
});
