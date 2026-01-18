import express from "express";
import IndexController from "../controller/indexController.js";

const router = express.Router()

router.get("/productlist",IndexController.productlist)
router.post("/register",IndexController.register)
router.post("/login",IndexController.login)

export default router