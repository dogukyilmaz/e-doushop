import asyncHandler from "express-async-handler";
import { NextFunction, Request, Response } from "express";

import generateToken from "utils/generateToken";

import User, { IUser } from "models/User";

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
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password.");
  }
});

// @description   Get user profile
// @route         GET /api/v1/users/profile
// @access        Private
export const getUserProfile = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findById(req.user?._id);

  if (user) {
    res.json({
      success: true,
      data: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        isSeller: user.isSeller,
      },
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password.");
  }
});

// @description   Register user
// @route         POST /api/v1/users
// @access        Public
export const register = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, isAdmin, isSeller, email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    res.status(400);
    throw new Error("Email/User already exists.");
  }

  const newUser = await User.create({
    firstName,
    lastName,
    isAdmin,
    isSeller,
    email,
    password,
  });

  if (newUser) {
    res.json({
      success: true,
      data: {
        _id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        isSeller: newUser.isSeller,
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials.");
  }
});
