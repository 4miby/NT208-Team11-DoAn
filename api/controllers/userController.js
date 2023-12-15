import Reservation from "../models/Reservation.js";
import User from "../models/User.js"
//UPDATE
export const updateUser = async(req,res,next)=>{
  try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.status(200).json(updatedUser);
  }
  catch(err){
    next(err);
  }
}
//DELETE
export const deleteUser = async(req,res,next)=>{
  try{
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User has been deleted.");
  }
  catch(err){
    next(err);
  }
}
//GET ONE USER
export const getUser = async(req,res,next)=>{
  try{
    const user = await User.findById(req.params.id)
    res.status(200).json(user);
  }
  catch(err){
    next(err);
  }
}
//GET ALL USERS
export const getAllUser = async(req,res,next)=>{
  try{
    const users = await User.find();
    res.status(200).json(users);
  }
  catch(err){
    next(err);
  }
}

// GET USER RESERVATION
export const getUserReservations = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const list = await Promise.all(
      user.reservations.map((reservation) => {
        return Reservation.findById(reservation);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};


