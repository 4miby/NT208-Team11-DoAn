import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//   res.send("Hello user, You are logged!");
// })
// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//   res.send("Hello user, You are logged in you can delete your account");
// })
// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//   res.send("Hello admin, You are logged in you can delete all account");
// })
// UPDATE
router.put(":/id",verifyUser,updateUser);
// DELETE
router.delete("/:id",verifyUser, deleteUser);
// GET
router.get("/:id",verifyUser, getUser);
// GETALL
router.get("/",verifyAdmin, getAllUser);

export default router;