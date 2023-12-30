import express from "express";
import { deleteUser, getAllUser, getUser, getUserReservations, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();


// UPDATE
router.put("/:id",verifyUser,updateUser);
// DELETE
router.delete("/:id",verifyUser, deleteUser);
// GET
router.get("/:username",verifyUser, getUser);
// GETALL
router.get("/",verifyAdmin, getAllUser);
//GET RESERVATION
router.get("/reservations/:usename",verifyUser,getUserReservations);

export default router;