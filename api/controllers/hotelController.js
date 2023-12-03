import Hotel from "../models/Hotel.js"
//CREATE
export const createHotel = async(req, res, next)=>{
  const newHotel = new Hotel(req.body);
  try{
      const savedHotel = await newHotel.save();
      res.status(200).json(savedHotel);
  }
  catch(err){
    next(err);
  }
}
//UPDATE
export const updateHotel = async(req,res,next)=>{
  try{
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.status(200).json(updatedHotel);
  }
  catch(err){
    next(err);
  }
}
//DELETE
export const deleteHotel = async(req,res,next)=>{
  try{
    await Hotel.findByIdAndDelete(req.params.id)
    res.status(200).json("Hotel has been deleted.");
  }
  catch(err){
    next(err);
  }
}
//GET ONE HOTEL
export const getHotel = async(req,res,next)=>{
  try{
    const hotel = await Hotel.findById(req.params.id)
    res.status(200).json(hotel);
  }
  catch(err){
    next(err);
  }
}
//GET ALL HOTEL
export const getAllHotel = async(req,res,next)=>{
  const { min, max,limit, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 10000000 },
    }).limit(limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
}
// Count by City
export const countbyCity = async(req,res,next)=>{
  const cities = req.query.cities.split(",")

  try{
    const list = await Promise.all(cities.map(city=>{
      return Hotel.countDocuments({city:city});
    }))
    res.status(200).json(list);
  }
  catch(err){
    next(err);
  }
}

