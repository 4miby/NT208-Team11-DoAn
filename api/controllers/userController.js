import Reservation from "../models/Reservation.js";
import User from "../models/User.js"
// UPDATE: Cập nhật thông tin người dùng
// BEGIN
export const updateUser = async(req,res,next)=>{
  try{
    // Tìm và cập nhật người dùng dựa trên ID và dữ liệu mới từ request body
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.status(200).json("Đã thay đổi thành công thông tin người dùng"); // Trả về thông báo thành công
  }
  catch(err){
    next(err);// Xử lý lỗi nếu có
  }
}
// END 

// DELETE: Xóa một người dùng
// BEGIN
export const deleteUser = async(req,res,next)=>{
  try{
    await User.findByIdAndDelete(req.params.id) // Xóa người dùng dựa trên ID
    res.status(200).json("User has been deleted."); // Trả về thông báo thành công
  }
  catch(err){
    next(err); // Xử lý lỗi nếu có
  }
}
// END 

// GET ONE USER: Lấy thông tin của một người dùng theo ID
// BEGIN
export const getUser = async(req,res,next)=>{
  try{
    const user = await User.findOne({username: req.params.username}) // Tìm người dùng dựa trên username
    res.status(200).json(user); // Trả về thông tin người dùng
  }
  catch(err){
    next(err); // Xử lý lỗi nếu có
  } 
}
// END

// GET ALL USERS: Lấy danh sách tất cả người dùng
// BEGIN
export const getAllUser = async(req,res,next)=>{
  try{
    const users = await User.find(); // Lấy danh sách tất cả người dùng từ cơ sở dữ liệu
    res.status(200).json(users);  // Trả về danh sách người dùng
  }
  catch(err){
    next(err); // Xử lý lỗi nếu có
  }
}
// END 

// GET USER RESERVATION: Lấy danh sách đặt chỗ của một người dùng
// BEGIN
export const getUserReservations = async (req, res, next) => {
  try {
    const user = await User.findOne({username: req.params.username}); // Tìm người dùng dựa trên ID
    const list = await Promise.all(
      user.reservations.map((reservation) => {  // Tìm đặt chỗ dựa trên ID từ mảng reservations của người dùng
        return Reservation.findById(reservation);
      })
    );
    res.status(200).json(list) // Trả về danh sách đặt chỗ của người dùng
  } catch (err) {
    next(err); // Xử lý lỗi nếu có
  }
};
// END

