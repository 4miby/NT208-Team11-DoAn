import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js"
// POST: Tạo mới một phòng và liên kết với một khách sạn
// BEGIN 
export const createRoom = async(req,res,next)=>{
  const hotelId = req.params.hotelId; // Lấy ID của khách sạn từ tham số đường dẫn
  const newRoom = new Room(req.body)// Tạo một đối tượng phòng mới từ dữ liệu trong request body
  try
  {   
      const savedRoom = await newRoom.save(); // Lưu phòng mới vào cơ sở dữ liệu
      try{
        // Cập nhật khách sạn, thêm ID của phòng mới vào mảng rooms của khách sạn
        await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms: savedRoom._id}});
      }
      catch(err)
      {
        next(err); // Xử lý lỗi nếu có
      }
      res.status(200).json("Room has been created"); // Trả về thông báo đã tạo phòng
  } 
  catch(err){
    next(err); // Xử lý lỗi nếu có
  }
}
// END

// UPDATE:  Cập nhật thông tin của một phòng
// BEGIN
export const updateRoom = async(req,res,next)=>{
  try{
    // Tìm và cập nhật phòng dựa trên ID và dữ liệu mới từ request body
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.status(200).json("Đã thay đổi thông tin của phòng"); // Trả về thông báo thay đổi thông tin phòng
  }
  catch(err){
    next(err); // Xử lý lỗi nếu có
  }
}
// UPDATE ROOM AVAILABILITY : Cập nhật trạng thái phòng khi có đặt phòng mới
export const updateRoomAvailability = async(req,res,next)=>{
  try {
    // Tìm phòng dựa trên ID của roomNumber trong mảng roomNumbers
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        // Sử dụng $push để thêm ngày không khả dụng 
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Room status has been updated."); // Trả về thông báo thành công
  } catch (err) {
    next(err); // Xử lý lỗi nếu có
  }
}
// END

// DELETE ROOM : Xóa một phòng và cập nhật mảng rooms của khách sạn
// BEGIN
export const deleteRoom = async(req,res,next)=>{
  const room =  await Room.findById(req.params.id) // Tìm phòng dựa trên ID
  const hotelId = room.hotelId; // Lấy ID của khách sạn mà phòng thuộc về
    await Room.findByIdAndDelete(req.params.id) // Xóa phòng 
    try{
       // Cập nhật khách sạn, loại bỏ ID của phòng vừa xóa khỏi mảng rooms của khách sạn
      await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}})
    }
    catch(err){
      next(err); // Xử lý lỗi nếu có
    }
    res.status(200).json("Room has been deleted."); // Trả về thông báo xóa phòng
}
// END

// GET ONE ROOM: Lấy thông tin của một phòng theo ID
// BEGIN
export const getRoom = async(req,res,next)=>{
  try{
    const room = await Room.findById(req.params.id) // Tìm phòng dựa trên ID
    res.status(200).json(room); // Trả về thông tin phòng
  }
  catch(err){
    next(err); // Xử lý lỗi nếu có
  }
}
// END

// GET ALL ROOM: Lấy danh sách tất cả các phòng
// BEGIN
export const getAllRooms = async(req,res,next)=>{
  try{
    const room = await Room.find(); // Lấy danh sách tất cả các phòng từ cơ sở dữ liệu
    res.status(200).json(room); // Trả về danh sách phòng
  }
  catch(err){
    next(err); // Xử lý lỗi nếu có
  }
}
// END


