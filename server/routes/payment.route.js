import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { createOder, verifyPayment } from "../controllers/payment.controller.js";

const paymentRouter = express.Router();

paymentRouter.post("/order", isAuth, createOder)
paymentRouter.post("/verify", isAuth, verifyPayment)

export default paymentRouter;