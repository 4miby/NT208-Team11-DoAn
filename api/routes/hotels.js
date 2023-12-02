import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
// CREATE
router.post("/",verifyAdmin,createHotel);
// UPDATE
router.put("/:id",verifyAdmin,updateHotel);
// DELETE
router.delete("/:id",verifyAdmin, deleteHotel);
// GET
router.get("/:id",verifyAdmin, getHotel);
// GETALL
router.get("/",verifyAdmin, getAllHotel);

export default router;