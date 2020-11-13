import express, { Router, Request, Response, NextFunction } from "express";
import * as service from "controller/order";
import { authenticate } from "middlewares/auth";

const router: Router = express.Router();

router.post("/", authenticate, service.addOrder);

export default router;
