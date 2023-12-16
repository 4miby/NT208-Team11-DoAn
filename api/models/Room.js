import mongoose, { Schema } from 'mongoose';
const RoomSchema = new mongoose.Schema({
  hotelId:{
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Hotel",
  },
  title:{
    type:String,
    required: true,
  },
  price:{
    type:Number,
    required: true,
  },
  maxPeople:{
    type:Number,
    required:true,
  },
  desc:{
    type:String,
    required: true
  },
  roomNumbers:[{number:Number, unavailableDates: {type:[Date]} }],
}, {timestamps:true});

export default mongoose.model("Room", RoomSchema);