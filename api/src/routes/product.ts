import express, { Router, Request, Response, NextFunction } from "express";
import * as service from "controller/product";

const router: Router = express.Router();

router.get("/", service.getProducts);
router.get("/:id", service.getSingleProduct);

export default router;
