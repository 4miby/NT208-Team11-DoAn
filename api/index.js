import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import reservationsRoute from "./routes/reservations.js"
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

// Hàm kết nối tới MongoDB
const connect = async()=>{
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB")
  } catch (error) {
    throw(error);
  }
};

// middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);
app.use("/api/reservations",reservationsRoute);
// middleware với next để xử lý lỗi
app.use((err,req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!!"
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack
  });
})

//
mongoose.connection.on("disconnect",()=>{
  console.log("mongoDB disconnected!")
})

//
mongoose.connection.on("connected",()=>{
  console.log("mongoDB connected!")
})


// Kết nối tới backend bằng port 8800
app.listen(8800,()=>{
  connect();
  console.log("Connected to backend")
})