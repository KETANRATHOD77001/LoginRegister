import express from "express";
import { registerController, loginController } from "../controller/authController.js";

const router = express.Router();

//REGISTER 
router.post("/register", registerController);

//LOGIN 
router.post("/login", loginController);

export default router;