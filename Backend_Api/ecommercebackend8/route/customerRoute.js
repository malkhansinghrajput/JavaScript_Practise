import express from "express";
import CustomerController from "../controller/customerController.js";
import checkCustomerAuth from "../middleware/auth-middleware.js";
import imgUpload from '../modal/singleUpload.js'

const router = express.Router()

//middleware route
router.use("/editprofile",checkCustomerAuth)

//customer route
router.put("/editprofile",CustomerController.editprofile)
router.post('/uploaddocument',imgUpload.single("upload_doc"),CustomerController.uploaddocument)
router.post('/cart',CustomerController.addtocart)
router.get('/cartdetails',CustomerController.cartdetails)
export default router