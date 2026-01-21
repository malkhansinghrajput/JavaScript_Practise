import express from "express";
import AdminController from "../controller/adminController.js";
import multipleUpload from '../modal/multipleUpload.js'

const router = express.Router()
//Returns middleware that processes multiple files sharing the same field name.
router.post("/addproduct",multipleUpload.array("product_imageurl",6),AdminController.addproduct)

export default router 