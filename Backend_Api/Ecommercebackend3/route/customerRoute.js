import express from "express";
import CustomerController from "../controller/customerController.js";
import checkCustomerAuth from "../middleware/auth-middleware.js";

const router = express.Router()

router.use("/editprofile",checkCustomerAuth)

router.put("/editprofile",CustomerController.editprofile)

export default router