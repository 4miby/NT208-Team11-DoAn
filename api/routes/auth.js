import express from "express";
import { login, logout, register, requestReset, resetPassword } from "../controllers/authController.js";

const router = express.Router();
router.post("/register",register);
router.post("/login",login);
router.get("/logout",logout);
router.post("/reset",requestReset);
router.post("/resetPassword",resetPassword);
export default router;