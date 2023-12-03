import express from "express";
import { countbyCity, createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
// CREATE
router.post("/",verifyAdmin,createHotel);
// UPDATE
router.put("/:id",verifyAdmin,updateHotel);
// DELETE
router.delete("/:id",verifyAdmin, deleteHotel);
// GET
router.get("/find/:id", getHotel);
// GETALL
router.get("/", getAllHotel);
router.get("/countbycity",countbyCity);

export default router;