import asyncHandler from "express-async-handler";
import { NextFunction, Request, Response } from "express";

import User from "models/User";

// @description   Auth & Return token
// @route         POST /api/v1/users/login
// @access        Public
export const authUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      success: true,
      data: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        isAdmin: user.isAdmin,
        isSeller: user.isSeller,
        token: null,
      },
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password.");
  }
});
