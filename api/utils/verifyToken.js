import jwt from "jsonwebtoken"
import {createError} from "./error.js"
// Hàm xác thực token
// BEGIN
export const verifyToken = (req, res, next)=>{
  // Kiểm tra cookie có acccess_token hay không
  const token = req.cookies.access_token; 
  if(!token){
    return next(createError(401,"Bạn chưa được xác thực !")); // Trả về lỗi nếu không có token
  }
  // Kiểm tra token bằng jwt
  jwt.verify(token,process.env.JWT, (err, user)=>{
    if(err) return next(createError(403,"Token không hợp lệ!")); // Trả về lỗi nếu không hợp lệ
    req.user = user;  // Trả về thông tin user sau khi giải mã token
    next()
  });
}
// END

// Hàm xác thực user 
// BEGIN
export const verifyUser = (req,res, next)=>{
  verifyToken(req,res,next,()=>{  // Xác thực token
    // Kiểm tra nếu có trùng user id với req param hay không hoặc có phải là admin hay không
    if(req.user.id === req.params.id || req.user.isAdmin) 
    {
      next();
    }
    else
    {
      return next(createError(403,"Bạn không được ủy quyền!")); // Thông báo không được ủy quyền nếu ko trùng user id
    }
  })
}
// END

// Hàm xác thực quyền admin
// BEGIN
export const verifyAdmin = (req,res, next)=>{
  
  verifyToken(req,res,next,()=>{ // Xác thực token
    if(req.user.isAdmin) // Kiểm tra có quyền admin hay không
    {
      next();
    }
    else
    {
      return next(createError(403,"Bạn không được ủy quyền!")); // Trả về thông báo lỗi nếu không phải là admin
    }
  })
}
// END