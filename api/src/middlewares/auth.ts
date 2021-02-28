import jwt, { Secret, DecodeOptions, VerifyCallback } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import User from "models/User";
import asyncHandler from "express-async-handler";

export const authenticate = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const token =
    req.headers.authorization && req.headers.authorization.startsWith("Bearer")
      ? req.headers.authorization.split(" ")[1]
      : null;

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token!");
  }

  try {
    const secret: Secret = process.env.JWT_SECRET!;
    const decoded: any | { [key: string]: any } = jwt.verify(token, secret);

    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error("Not authorized, token failed!");
  }
});
