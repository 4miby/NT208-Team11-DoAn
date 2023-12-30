import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js"
// CREATE: Tạo mới một khách sạn
// BEGIN
export const createHotel = async(req, res, next)=>{
  // Tạo một đối tượng khách sạn mới từ dữ liệu trong request body
  const newHotel = new Hotel(req.body);  
  try{
      
      // Lưu khách sạn mới vào cơ sở dữ liệu
      const savedHotel = await newHotel.save(); 
      res.status(200).json("Hotel has been created");  
  }
  catch(err){
    // Xử lý lỗi nếu có
    next(err); 
  }
}
//END

//UPDATE: Cập nhật thông tin của một khách sạn
//BEGIN
export const updateHotel = async(req,res,next)=>{
  try{
    // Tìm và cập nhật thông tin dựa trên ID và dữ liệu mới từ reqest body
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.status(200).json("Đã thay đổi thông tin khách sạn");
  }
  catch(err){
    // Xử lý lỗi nếu có
    next(err);
  }
}
//END

// DELETE: Xóa một khách sạn và các phòng liên quan
export const deleteHotel = async(req,res,next)=>{
  try{
    // Tìm khách sạn dựa trên id
    const hotel = await Hotel.findById(req.params.id);
    const rooms = hotel.rooms;
    // Xóa tất cả các phòng liên quan đến khách sạn
    await Promise.all(rooms.map(async (room)=>{
      await Room.findByIdAndDelete(room);
    }))
    // Xóa khách sạn sau khi xóa các phòng
    await Hotel.findByIdAndDelete(req.params.id)
    res.status(200).json("Hotel has been deleted.");
  }
  catch(err){
    // Xử lý lỗi nếu có
    next(err);
  }
}
//END

// GET ONE HOTEL : Lấy thông tin của một khách sạn theo ID
// BEGIN
export const getHotel = async(req,res,next)=>{
  try{
    // Tìm khách sạn dựa trên Slug
    const hotel = await Hotel.findOne({slug: req.params.slug})
    res.status(200).json(hotel);
  }
  catch(err){
    // Xử lý lỗi nếu có
    next(err);
  }
}
// END

// GET ALL HOTEL: Lấy danh sách các khách sạn dựa trên các tham số truy vấn
// BEGIN
export const getAllHotel = async(req,res,next)=>{
  const { min, max,limit, ...others } = req.query;
  try {
    // Tìm tất cả các khách sạn dựa trên các tham số truy vấn
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 10000000 },
    }).limit(limit);
    // Trả về danh sách các khánh sạn
    res.status(200).json(hotels);
  } catch (err) {
    // Xử lý lỗi nếu có
    next(err);
  }
}
// END

// Count by City: Đếm số lượng khách sạn theo từng thành phố
// BEGIN
export const countbyCity = async(req,res,next)=>{
  // Tách các thành phố dựa vào query
  const cities = req.query.cities.split(",")
  // Đếm số lượng khách sạn theo từng thành phố và trả về một danh sách
  try{
    const list = await Promise.all(cities.map(city=>{
      return Hotel.countDocuments({city:city});
    }))
    res.status(200).json(list);
  }
  catch(err){
    // Xử lý lỗi nếu có
    next(err);
  }
}
// END

// GET HOTEL ROOMS: Lấy danh sách tất cả các phòng từ ID của một khách sạn
// BEGIN
export const getHotelRooms = async (req, res, next) => {
  try {
    // Tìm kiếm hotel bằng hotelId
    const hotel = await Hotel.findById(req.params.id);
    // Trả về 1 list các room theo roomId có trong hotel tìm được
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    // Xử lý lỗi nếu có
    next(err);
  }
};
// END


