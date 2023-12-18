import User from "../models/User.js";
import Token from "../models/Token.js";
import bcrypt from "bcryptjs";
import {createError} from "../utils/error.js"
import jwt from "jsonwebtoken";
import sendEmail from "../utils/sendMail.js";
import crypto from "crypto"
//Đăng ký 
export const register =  async(req,res,next)=>{
  try{
      // Thực hiện mã hóa mật khẩu với bcrypt
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({
        ...req.body,
        password:hash
      })
      // Lưu vào database
      await newUser.save();
      res.status(200).json("Đã tạo thành công người dùng mới!");
  }
  catch(err){
    next(err);
  }
}
// Đăng nhập
export const login =  async(req,res,next)=>{
  try{
    // Kiểm tra username có tồn tại trong database hay không 
      const user = await User.findOne({
        username:req.body.username,
      })
      if(!user) return next((createError(404,"Người dùng không tồn tại !")))
      // Kiểm tra mật khẩu 
      const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
      if(!isPasswordCorrect) return next((createError(400,"Sai mật khẩu hoặc tên đăng nhập !")));
      // Mã hóa dữ liệu bằng jwt và gửi lên cookie với tên là access_token
      const token = jwt.sign({id:user._id,isAdmin: user.isAdmin},process.env.JWT);
      
      const {password, isAdmin, ...otherDetails} = user._doc;
      res.cookie("access_token",token,{
        httpOnly:true
      })
      .status(200)
      .json({details:{...otherDetails}, isAdmin});
  }
  catch(err){
    next(err);
  }
}
// Đăng xuất
export const logout = (req,res,next)=>{
  try{
    // Xóa access_token ra khỏi cookie
    res.clearCookie('access_token').json("Đã đăng xuất");
  }
  catch{
    next(err);
  }
}
// Yêu cầu reset password
export const requestReset = async (req,res,next)=>{
  try{
    // Kiểm tra email có tồn tại trong database hay không
    const user = await User.findOne({ email : req.body.email });
    if(!user){
      return next((createError(404, "Email không tồn tại !")));
    }
    // Kiểm tra có tồn tại token hay không nếu có thì xóa token cũ
    let token = await Token.findOne({ userId: user._id });
    if (token) await token.deleteOne();
    // Random token mới và gửi link chứa token tới mail
    let resetToken = crypto.randomBytes(32).toString("hex");
    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(resetToken, salt);
    const link = `localhost:3000/resetPassword?token=${resetToken}&id=${user._id}`;
    sendEmail(user.email,link,user.username);
    // Lưu token mới vào database
    await new Token({
      userId: user._id,
      token: hash,
      createdAt: Date.now(),
    }).save();
    res.status(200).json("Gửi mail thành công !");
  }
  catch(err){
    next(err);
  }
}
// Thực hiện reset password
export const resetPassword = async(req, res,next)=>{
  try{
    // Kiểm tra token có tồn tại hay không
    let passwordResetToken = await Token.findOne({ userId:req.body.id });
    if (!passwordResetToken) {
      return next((createError(404,"Token không tồn tại!")));
    }
    // So sánh token với database
    const isValid = await bcrypt.compare(req.body.token, passwordResetToken.token);
    if(!isValid)
    {
      return next((createError(404,"Token không hợp lệ")));
    }
    // Thực hiện mã hóa mật khẩu mới và gửi lên database
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    await User.findByIdAndUpdate(req.body.id,
      {$set:{password:hash}},
      {new:true});
    // Sau khi đổi xong xóa token
    await passwordResetToken.deleteOne();
    res.status(200).json("Đã đổi password thành công");
  }catch(err){
    next(err);
  }
}