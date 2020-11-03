import express, { Router, Request, Response, NextFunction } from "express";
import * as service from "controller/users";

const router: Router = express.Router();

router.post("/login", service.authUser);
// router.get("/:id", service.getSingleProduct);

export default router;
