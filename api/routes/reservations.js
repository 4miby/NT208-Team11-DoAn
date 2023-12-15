import express from "express";
import { createReservation } from "../controllers/reservationController.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
router.post("/:userId", verifyUser,createReservation);
export default router;