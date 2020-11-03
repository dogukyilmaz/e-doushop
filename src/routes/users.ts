import express, { Router, Request, Response, NextFunction } from "express";
import * as service from "controller/users";
import { authenticate } from "middlewares/auth";

const router: Router = express.Router();

router.post("/", service.register);
router.post("/login", service.authUser);
router.get("/profile", authenticate, service.getUserProfile);

export default router;
