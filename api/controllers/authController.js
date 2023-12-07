import User from "../models/User.js";
import bcrypt from "bcryptjs";
import {createError} from "../utils/error.js"
import jwt from "jsonwebtoken";
export const register =  async(req,res,next)=>{
  try{
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hash
      })
      await newUser.save();
      res.status(200).json("Đã tạo thành công người dùng mới!");
  }
  catch(err){
    next(err);
  }
}
export const login =  async(req,res,next)=>{
  try{
      const user = await User.findOne({
        username:req.body.username,
      })
      if(!user) return next((createError(404,"Người dùng không tồn tại !")))
      
      const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
      if(!isPasswordCorrect) return next((createError(400,"Sai mật khẩu hoặc tên đăng nhập !")));

      const token = jwt.sign({id:user._id,isAdmin: user.isAdmin},process.env.JWT);
      
      const {password, isAdmin, ...otherDetails} = user._doc;
      res.cookie("access_token",token,{
        httpOnly:true
      })
      .status(200)
      .json({...otherDetails});
  }
  catch(err){
    next(err);
  }
}
export const logout = (req,res)=>{
  try{
    res.clearCookie('access_token').json("Đã đăng xuất");
  }
  catch{
    next(err);
  }
}