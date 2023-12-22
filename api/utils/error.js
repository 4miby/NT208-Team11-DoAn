// Hàm tạo lỗi với 2 giá trị đầu vào là status và message
export const createError = (status, message)=>{
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
}