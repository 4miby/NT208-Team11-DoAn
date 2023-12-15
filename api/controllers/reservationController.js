import Reservation from "../models/Reservation.js";
import User from "../models/User.js";
//CREATE
export const createReservation = async(req,res,next)=>{
   const userId = req.params.userId;
   const newReserv = new Reservation(req.body);
   try{
      const savedReserv =  await newReserv.save();
      try{
        await User.findByIdAndUpdate(userId,{$push:{reservations: savedReserv._id }});
      }
      catch(err){
        next(err);
      }
      res.status(200).json("Đặt chỗ đã được lưu");
   }catch(err){
    next(err);
   }
}