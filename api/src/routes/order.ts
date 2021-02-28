import express, { Router } from "express";
import * as service from "controller/order";
import { authenticate } from "middlewares/auth";

const router: Router = express.Router();

router.post("/", authenticate, service.addOrder);
router.get("/:id", authenticate, service.getSingleOrder);
router.get("/", authenticate, service.getAllOrders);

export default router;
