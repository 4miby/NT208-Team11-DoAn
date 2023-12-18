import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js"
//POST
export const createRoom = async(req,res,next)=>{
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body)
  try
  {
      const savedRoom = await newRoom.save();
      try{
        await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms: savedRoom._id}});
      }
      catch(err)
      {
        next(err);
      }
      res.status(200).json("Room has been created");
  } 
  catch(err){
    next(err);
  }
}
//UPDATE
export const updateRoom = async(req,res,next)=>{
  try{
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.status(200).json("Đã thay đổi thông tin của phòng");
  }
  catch(err){
    next(err);
  }
}
// UPDATE ROOM khi đặt phòng
export const updateRoomAvailability = async(req,res,next)=>{
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  } catch (err) {
    next(err);
  }
}
//DELETE ROOM 
export const deleteRoom = async(req,res,next)=>{
  const room =  await Room.findById(req.params.id)
  console.log(room.hotelId);
  const hotelId = room.hotelId;
    await Room.findByIdAndDelete(req.params.id)
    try{
      await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}})
    }
    catch(err){
      next(err);
    }
    res.status(200).json("Room has been deleted.");
}
//GET ONE ROOM
export const getRoom = async(req,res,next)=>{
  try{
    const room = await Room.findById(req.params.id)
    res.status(200).json(room);
  }
  catch(err){
    next(err);
  }
}
//GET ALL ROOM
export const getAllRooms = async(req,res,next)=>{
  try{
    const room = await Room.find();
    res.status(200).json(room);
  }
  catch(err){
    next(err);
  }
}


