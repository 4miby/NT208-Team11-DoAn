import mongoose from 'mongoose';
import { Schema } from 'mongoose';
const BookingSchema = new mongoose.Schema({
  hotelId:{
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Hotel",
  },
  roomId:{
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Room",
  },
  price:{
    type:String
  },
  startDate:{
    type:Date,
  },
  endDate:{
    type:Date
  },
});

export default mongoose.model("Booking", BookingSchema);