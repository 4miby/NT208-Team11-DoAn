import express from "express";
import Hotel from "../models/Hotel.js"
import { createHotel, delteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelController.js";
const router = express.Router();
// CREATE
router.post("/",createHotel);
// UPDATE
router.put("/:id",updateHotel);
// DELETE
router.delete("/:id", delteHotel);
// GET
router.get("/:id", getHotel);
// GETALL
router.get("/", getAllHotel);

export default router;