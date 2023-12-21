import Reservation from "../models/Reservation.js";
import User from "../models/User.js";
// CREATE: Tạo mới một đặt chỗ (reservation) và liên kết với người dùng
export const createReservation = async(req,res,next)=>{
   // Lấy ID của người dùng từ tham số đường dẫn
   const userId = req.params.userId;
   // Tạo một đối tượng đặt chỗ mới từ dữ liệu trong request body
   const newReserv = new Reservation(req.body);
   try{
      // Lưu đặt chỗ mới vào cơ sở dữ liệu
      const savedReserv =  await newReserv.save();
      try{
        // Cập nhật người dùng, thêm ID của đặt chỗ mới vào mảng reservations của người dùng
        await User.findByIdAndUpdate(userId,{$push:{reservations: savedReserv._id }});
      }
      catch(err){
        next(err);  // Xử lý lỗi nếu có
      }
      res.status(200).json("Đặt chỗ đã được lưu"); // Trả về thông báo đã lưu lại đặt chỗ
   }catch(err){
    next(err); // Xử lý lỗi nếu có
   }
}